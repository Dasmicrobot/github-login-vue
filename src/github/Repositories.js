import React, {useLayoutEffect, useState} from 'react';
import { useAuthContext } from '../auth/AuthContextProvider'
import Link from 'next/link'
import { getAllRepos } from './api'

export const Repositories = ({org, pushedWithinDays }) => {
  const { isAuthenticated, token } = useAuthContext();
  const [ repos, setRepos ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  useLayoutEffect(() => {
    if (token && org) {
      setLoading(true);
      getAllRepos({token, org, pushedWithinDays})
        .then(repos => {
          setRepos(repos);
          setLoading(false);
        })
        .catch(_ => {
          setRepos([]);
          setLoading(false);
        });
    }
  }, [token, org, pushedWithinDays]);

  if (!isAuthenticated) return null;
  if (loading) return (<div className="spinner-border" role="status">
    <span className="sr-only">Loading...</span>
  </div>)

  if (!Array.isArray(repos) || !repos.length) return 'Nothing found';

  return (<>
    <div className="card">
      <ul className="list-group list-group-flush">
        {repos.map(repo => <li key={repo.id} className="list-group-item">
          <div>{repo.full_name} <a href={repo.homepage || repo.html_url}>homepage</a></div>
          <span className={`badge ${ repo.private ? 'badge-light' : 'badge-success'}`}>{ repo.private ? 'Private' : 'Public' }</span>
          {repo.archived && <span className="badge badge-warning">Archived</span>}
          <span className="badge badge-light">Created: {new Date(repo.created_at).toLocaleDateString()}</span>
          <span className="badge badge-info">Last push: {new Date(repo.pushed_at).toLocaleDateString()}</span>
          <div><Link href={`/github/organisations/${org}/${repo.name}?age_days=${pushedWithinDays}`}>Show commits</Link></div>
        </li>)}
      </ul>
    </div>
    <p className="text-muted small mt-3 text-right"><Link href="/content/github-repo-missing">Repository is not listed here</Link></p>
  </>)
};
