import { MoralisProvider } from 'react-moralis'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId = {process.env.NEXT_API_KEY}
    >
      <Component {...pageProps} />
    </MoralisProvider>
  )
  
}

export default MyApp
