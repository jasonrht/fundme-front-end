import { PriceFeed } from "../PriceFeed";
import { useEthers } from '@usedapp/core'

export const Home = () => {
    const { account } = useEthers()

    return (
        <div className='grid sm:grid-cols-3 gap-4 px-4'>
            <h1 className='col-span-3 text-3xl text-center'>Welcome to Web3FundMe !</h1>
            <div className='col-span-3 border-b-2 border-black pb-2'>
                <p>
                    Want to donate money to charity, but do you not trust the available third parties to handle your money fairly?
                    Here at Web3FundMe we give full transparancy of the routes your money takes. <br /><br />
                    All donations on this page are handled by smart contracts. Once a month, the money from the smart contracts is withdrawn and
                    a full log of the path it takes will be available on this website. Because all donations are stored in a smart contract,
                    you can only donate with Ether. <br /><br />
                    Find a charity you want to support, connect to your MetaMask wallet, and you will be all set to donate to your favorite charity!
                </p>
            </div>
            <p className='text-4xl italic col-span-3'>DISCLAIMER: THIS PAGE IS CURRENTLY IN TESTING PHASE</p>
            <div className='col-span-2'>
                <p>Current supported chains: </p>
                <ul>
                    <li>Rinkeby Testnet</li>
                </ul>
            </div>
            <PriceFeed />
        </div>
    )
}
