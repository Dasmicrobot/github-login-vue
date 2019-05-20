const urlParse = require('url-parse')

const parsedUrl = urlParse(window.location.href, true)
const stateMessageNode = document.getElementById('state')

stateMessageNode.textContent = 'Extracting token'

const githubAccessToken = parsedUrl.query.access_token

if (githubAccessToken == null || !githubAccessToken.trim().length) {
  stateMessageNode.textContent = 'Failed, redirecting ...'
  window.sessionStorage.removeItem('github_access_token')
} else {
  stateMessageNode.textContent = 'Done, redirecting ...'
  window.sessionStorage.setItem('github_access_token', githubAccessToken)
}

setTimeout(function () {
  window.location.replace('/')
}, 1000)
