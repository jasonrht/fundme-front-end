import { useCoingeckoPrice } from '@usedapp/coingecko'

export const PriceFeed = () => {
    const etherPrice = useCoingeckoPrice('ethereum', 'usd')

    return (
        <div className='w-52 h-52 bg-gray-200 p-2 rounded-md shadow-lg border-2 border-black transition duration-100 ease-in-out hover:scale-[1.01] hover:shadow-2xl'>
            <h1 className='italic font-bold'>Current Prices</h1>
            <p>Ether price: {etherPrice} USD</p>
        </div>
    )
}