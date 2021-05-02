import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../src/footer/footer.css'
import { AuthContextProvider } from '../src/auth/AuthContextProvider'


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
  <AuthContextProvider>
    <Component {...pageProps} />
  </AuthContextProvider>

  );
}
