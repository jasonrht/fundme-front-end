import { FundMe } from "../FundMe";
import { PriceFeed } from "../PriceFeed";
import { useEthers } from '@usedapp/core'

export const Home = () => {
    const { account } = useEthers()

    return (
        <div className='grid sm:grid-cols-3 m-4 gap-4'>
            <PriceFeed />
            <FundMe />
            <div>
                <p>Current supported chains: </p>
                <ul>
                    <li>Rinkeby Testnet</li>
                </ul>
            </div>
        </div>
    )
}
