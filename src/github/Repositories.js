import React, {useEffect, useState} from 'react';
import { useAuthContext } from '../auth/AuthContextProvider'

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
          setRepos(json);
          setLoading(false);
        })
        .catch(_ => {
          setRepos(null);
          setLoading(false);
        });
    }
  }, [token, org]);

  if (!isAuthenticated) return null;
  if (loading) return 'Loading ...'
  if (!Array.isArray(repos) || !repos.length) return 'Nothing found';
  // https://docs.github.com/en/rest/reference/repos
  return <ul>{repos.map(repo => <li key={repo.id}>{repo.full_name}</li>)}</ul>

};
