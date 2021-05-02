import { useRouter } from 'next/router'
import Page from '../../../../src/layout/Page'
import { Repositories } from '../../../../src/github/Repositories'
import { useAuthContext } from '../../../../src/auth/AuthContextProvider'
import Section from '../../../../src/layout/Section'
import React, { useReducer } from 'react'

const TimeUnit = {
  days: 'days',
  weeks: 'weeks',
  months: 'months'
}

function OrganisationPage () {

  const { isAuthenticated } = useAuthContext()
  const router = useRouter()
  const { org, since, since_unit } = router.query

  const parseSince = (val) => {
    const parsed = parseInt(val + '', 10)
    return !isNaN(parsed) && parsed > 0 ? parsed : 4
  }

  const parseSinceUnit = (val) => (TimeUnit[val] || TimeUnit.weeks)

  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }), {
      since: parseSince(since),
      since_unit: parseSinceUnit(since_unit)
    });

  const onSinceChange = (event) => {
    setState({ since: parseSince(event.target.value) })
  };

  const onUnitChange = (event) => {
    setState({ since_unit: parseSinceUnit(event.target.value) })
  };

  const onSubmit = (event) => {
    event.preventDefault()
    router.push({
      pathname: router.pathname,
      query: { org: org, ...state },
    })
  }

  return (<Page>

    <Section>
      <h1 className="h3">Organisation repositories</h1>
      <p>Repositories belonging to {org} organisation</p>

      <form onSubmit={onSubmit}>
        <div className="form-row align-items-end">
          <div className="col-md-3 mb-3">
            <label htmlFor="since">Pushed since</label>
            <input type="number" value={state.since} onChange={onSinceChange} className="form-control" id="since" required />
            <div className="invalid-feedback">
              Please provide a valid number
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="since_unit">Time unit</label>
            <select className="custom-select" value={state.since_unit} onChange={onUnitChange} id="since_unit" required>
              {Object.keys(TimeUnit).map(k => <option key={k} value={k}>{k}</option>)}
            </select>
            <div className="invalid-feedback">
              Please select a valid time unit
            </div>
          </div>
          <div className="col-auto mb-3">
            <button className="btn btn-outline-primary" type="submit">Filter</button>
          </div>
        </div>
      </form>

      {isAuthenticated && <Repositories org={org} />}
    </Section>
  </Page>)
}

export default OrganisationPage
