import '../styles/globals.css'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'


const MyApp = ({ Component, pageProps }) => {
    return (
        <ThirdwebProvider
            desiredChainId={ChainId.Rinkeby}
            chainRpc={{
                [ChainId.Rinkeby]: 'https://rinkeby.infura.io/v3/30111799881d4280b0f14481aa99de47',
            }}
        >
            <Component {...pageProps} />
        </ThirdwebProvider>
    )
}

export default MyApp
