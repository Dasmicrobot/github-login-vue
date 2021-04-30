function Section ({ children }) {
  return (
    <div className="container pt-3 pt-md-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-9 col-xl-8">

          {children}

        </div>
      </div>
    </div>
  )
}

export default Section
