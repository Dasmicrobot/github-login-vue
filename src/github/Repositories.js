import React, {useEffect, useState} from 'react';
import { useAuthContext } from '../auth/AuthContextProvider'
import Link from 'next/link'

export const Repositories = ({org}) => {
  const { isAuthenticated, token } = useAuthContext();
  const [ repos, setRepos ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  useEffect(() => {
    if (token && org) {
      setLoading(true);
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/github/repositories?organisation=${org}`, {
        headers: {
          'x-github-token': token
        }
      })
        .then(response => response.json())
        .then(json => {
          if (Array.isArray(json)) {
            setRepos(json);
          } else {
            setRepos([]);
          }
          setLoading(false);
        })
        .catch(_ => {
          setRepos([]);
          setLoading(false);
        });
    }
  }, [token, org]);

  if (!isAuthenticated) return null;
  if (loading) return (<div className="spinner-border" role="status">
    <span className="sr-only">Loading...</span>
  </div>)

  if (!Array.isArray(repos) || !repos.length) return 'Nothing found';
  // https://docs.github.com/en/rest/reference/repos
  return (<>
    <div className="card">
      <ul className="list-group list-group-flush">
        {repos.map(repo => <li key={repo.id} className="list-group-item">
          {repo.full_name}
        </li>)}
      </ul>
    </div>
    <p className="text-muted small mt-3 text-right"><Link href="/content/github-repo-missing">Repository is not listed here</Link></p>
  </>)
};
