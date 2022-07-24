import { ThirdwebSDK } from '@thirdweb-dev/sdk'

const sdk = new ThirdwebSDK("rinkeby")
const nftDrop = sdk.getNFTDrop('0x7eEBb01df3D7F62fC3B3F8B724dFd54DeFFD28c2')

export { nftDrop }
