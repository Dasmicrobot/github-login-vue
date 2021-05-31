import { Octokit } from '@octokit/core'

// TODO handle throttled requests, see response headers
// "x-ratelimit-limit": "5000"
// "x-ratelimit-remaining": "4988"
// "x-ratelimit-reset": "1622483887"
// "x-ratelimit-resource": "core"
// "x-ratelimit-used": "12"

/**
 * @see https://docs.github.com/en/rest/reference/repos#commits
 * @param token Github token
 * @param org Github organisation name
 * @param repo Github repository name
 * @param ageDays Commits newer than
 * @returns {Promise<Array>}
 */
export const getRepoCommitsSinceDays = async ({ token, org, repo, ageDays }) => {
  const octokit = new Octokit({
    auth: token,
  })
  const sinceTime = Date.now() - ageDays * 1000 * 3600 * 24
  let commits = []
  let hasNext = true
  let pageNumber = 1
  const itemsPerPage = 100
  const since = new Date(sinceTime).toISOString()
  do {
    const { data, headers, status, url } = await octokit.request(`/repos/${org}/${repo}/commits`, {
      page: pageNumber,
      per_page: itemsPerPage,
      since
    })

    if (!Array.isArray(data) || data.length < 1) {
      hasNext = false
    } else {
      commits = [...commits, ...data]
      pageNumber += 1
    }
  } while (hasNext)

  return commits
}

/**
 * @see https://docs.github.com/en/rest/reference/repos
 * @param token Github token
 * @param org Github organisation name
 * @param [pushedWithinDays] Filter repos that were pushed to within this period
 * @returns {Promise<Array>}
 */
export const getAllRepos = async ({ token, org, pushedWithinDays }) => {
  const octokit = new Octokit({
    auth: token,
  })

  let repos = []
  let hasNext = true
  let pageNumber = 1
  const itemsPerPage = 100

  do {
    const { data, headers, status, url } = await octokit.request(`/orgs/${org}/repos`, {
      sort: 'pushed',
      direction: 'desc',
      page: pageNumber,
      per_page: itemsPerPage
    })

    if (!Array.isArray(data) || data.length < 1) {
      hasNext = false
    } else if (!isNaN(pushedWithinDays) && isFinite(pushedWithinDays) && pushedWithinDays > 0) {
      const now = Date.now()
      const matchingRepos = data.filter(repo => {
        const pushedAt = new Date(repo.pushed_at)
        pushedAt.setHours(0, 0, 0, 0)
        return (now - pushedAt.getTime()) < (pushedWithinDays * 24 * 3600 * 1000)
      })
      repos = [...repos, ...matchingRepos]

      // if repos were filtered then other pages will not contain
      // matching details due to sorting
      if (matchingRepos.length !== data.length) {
        hasNext = false
      } else {
        pageNumber += 1
      }
    } else {
      repos = [...repos, ...data]
      pageNumber += 1
    }
  } while (hasNext)

  return repos
}

/**
 * @see https://docs.github.com/en/rest/reference/orgs
 * @param token Github token
 * @returns {Promise<Array>}
 */
export const listAllUserOrgs = async ({ token }) => {
  const octokit = new Octokit({
    auth: token,
  })

  let organisations = []
  let numberOfApiCalls = 0
  let hasNext = true
  let idSince = null
  const itemsPerPage = 100
  do {
    if (numberOfApiCalls > 20) {
      throw new Error('Highly likely there is an infinite loop here')
    }
    numberOfApiCalls++
    const params = {
      per_page: itemsPerPage,
    }
    if (idSince) {
      params.since = `${idSince}`
    }
    const { data, headers, status, url } = await octokit.request(`/user/orgs`, params)

    if (Array.isArray(data) && data.length > 0) {
      organisations = [...organisations, ...data]
      idSince = data[data.length - 1].id
      if (data.length < itemsPerPage) {
        hasNext = false
        idSince = null
      }
    } else {
      hasNext = false
    }
  } while (hasNext && (!organisations.length || idSince != null))

  return organisations
}
