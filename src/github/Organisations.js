import React, {useEffect, useState} from 'react';
import { useAuthContext } from '../auth/AuthContextProvider'

export const Organisations = () => {
  const { isAuthenticated, token } = useAuthContext();
  const [ orgs, setOrgs ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  useEffect(() => {
    if (token) {
      setLoading(true);
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/github/organisations`, {
        headers: {
          'x-github-token': token
        }
      })
        .then(response => {
          setOrgs(response.json());
          setLoading(false);
        })
        .catch(_ => {
          setOrgs(null);
          setLoading(false);
        });
    }
  }, [token]);

  if (!isAuthenticated) return null;
  if (loading) return 'Loading ...'
  if (!Array.isArray(orgs) || !orgs.length) return 'Nothing found';
  // https://docs.github.com/en/rest/reference/orgs
  return <ul>{orgs.map(org => <li key={org.id}>{org.description} {org.url}</li>)}</ul>

};
