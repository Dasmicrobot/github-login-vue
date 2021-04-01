import 'bootstrap/scss/bootstrap.scss'
import { AuthContextProvider } from '../src/auth/AuthContextProvider'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (<AuthContextProvider>
    <Component {...pageProps} />
  </AuthContextProvider>);

}
