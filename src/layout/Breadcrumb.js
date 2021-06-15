import Link from 'next/link'
import React from 'react'

function Breadcrumb ({pages = []}) {
  if (!pages || !pages.length) return null;
  return (
    <div className="container pt-2">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-9 col-xl-8">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link href="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Github organisations</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumb
