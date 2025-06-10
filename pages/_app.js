import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar />
    {/* <div>I am div</div> */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
