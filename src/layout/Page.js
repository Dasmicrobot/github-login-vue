import Footer from './Footer'
import Header from './Header'

function Page ({children}) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header/>
      <main className="flex-grow-1 d-flex">
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Page
