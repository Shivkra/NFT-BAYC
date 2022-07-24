import Airtable from 'airtable'

Airtable.configure({
    apiKey: 'key9CY0OZLZJpC5Rw',
})

const base = Airtable.base('appsvVz2hMkDTEVtS')
const table = base('NFT')

export { table }
