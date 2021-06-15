import React, {useLayoutEffect, useState} from 'react';
import { useAuthContext } from '../auth/AuthContextProvider'
import Link from 'next/link'
import { getAllRepos } from './api'

const RepoListItem = ({ repo, className, pushedWithinDays }) => {
  return (<li className={className}>
    <div className="d-flex">
      <Link href={`/github/organisations/${repo.owner.login}/${repo.name}?age_days=${pushedWithinDays}`}>
        {repo.full_name}
      </Link>
    </div>
    <span className="badge badge-light">Last push: {new Date(repo.pushed_at).toLocaleDateString()}</span>
    <span className="badge badge-light">Created: {new Date(repo.created_at).toLocaleDateString()}</span>
    <span className={`badge ${ repo.private ? 'badge-light' : 'badge-success'}`}>{ repo.private ? 'Private' : 'Public' }</span>
    {repo.archived && <span className="badge badge-warning">Archived</span>}
    <a href={repo.homepage || repo.html_url} className="small ml-3">🔗 Github</a>
  </li>);
};

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
        {repos.map(repo => <RepoListItem key={repo.id} repo={repo} pushedWithinDays={pushedWithinDays} className="list-group-item" />)}
      </ul>
    </div>
    <p className="text-muted small mt-3 text-right"><Link href="/content/github-repo-missing">Repository is not listed here</Link></p>
  </>)
};
