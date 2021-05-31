import React, { useLayoutEffect, useState } from 'react'
import { useAuthContext } from '../auth/AuthContextProvider'
import { getRepoCommitsSinceDays } from './api'

const CommitListItem = ({item: {sha, html_url, commit}, ...rest}) => <li key={sha} className="list-group-item" {...rest}>
  <div>{commit.message} <a href={html_url}>url</a></div>
  { commit.author.name === commit.committer.name && <div>
    By {commit.committer.name} ({commit.committer.email}) at {commit.committer.date}
  </div> }
  { commit.author.name !== commit.committer.name && <div>
    <div>Committed by {commit.committer.name} ({commit.committer.email}) at {new Date(commit.committer.date).toLocaleDateString()}</div>
    <div>Authored by {commit.author.name} ({commit.author.email}) at {new Date(commit.author.date).toLocaleDateString()}</div>
  </div> }
</li>

export const Commits = ({org, repo, ageDays }) => {
  const { isAuthenticated, token } = useAuthContext();
  const [ commits, setCommits ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  useLayoutEffect(() => {
    if (token && org && repo) {
      setLoading(true);
      getRepoCommitsSinceDays({token, org, repo, ageDays})
        .then(commits => {
          setCommits(commits);
          setLoading(false);
        })
        .catch(_ => {
          setCommits([]);
          setLoading(false);
        });
    }
  }, [token, org, repo, ageDays]);

  if (!isAuthenticated) return null;
  if (loading) return (<div className="spinner-border" role="status">
    <span className="sr-only">Loading...</span>
  </div>)

  if (!Array.isArray(commits) || !commits.length) return `No commits found in ${org}/${repo} in the last ${ageDays} days`;

  return (<>
    <div className="card">
      <ul className="list-group list-group-flush">
        {commits.map(item => <CommitListItem key={item.sha} item={item} />)}
      </ul>
    </div>
  </>)
};
