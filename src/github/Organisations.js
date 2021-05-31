import React, {useLayoutEffect, useState} from 'react';
import { useAuthContext } from '../auth/AuthContextProvider'
import Link from 'next/link';
import { listAllUserOrgs } from './api'

export const Organisations = () => {
  const { isAuthenticated, token } = useAuthContext();
  const [ orgs, setOrgs ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  useLayoutEffect(() => {
    if (token) {
      setLoading(true);
      listAllUserOrgs({token})
        .then(orgs => {
          setOrgs(orgs);
          setLoading(false);
        })
        .catch(_ => {
          setOrgs([]);
          setLoading(false);
        });
    }
  }, [token]);

  if (!isAuthenticated) return null;
  if (loading) return (<div className="spinner-border" role="status">
    <span className="sr-only">Loading...</span>
  </div>)

  // https://docs.github.com/en/rest/reference/orgs
  return (<>
    <div className="card">
      <ul className="list-group list-group-flush">
        {orgs.map(org => <li key={org.id} className="list-group-item">
          <Link href={`/github/organisations/${org.login}`}>
            <a>{org.login} {org.description} {org.url}</a>
          </Link>
        </li>)}
      </ul>
    </div>
    <p className="text-muted small mt-3 text-right"><Link href="/content/github-org-missing">My organisation is not listed here</Link></p>
  </>)

};
