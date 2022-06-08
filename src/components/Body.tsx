import { useEthers } from "@usedapp/core";
import { PriceFeed } from "./PriceFeed";

export const Body = () => {
    const { account, activateBrowserWallet, deactivate } = useEthers()

    const isConnected = account !== undefined
    return (
        <div className='grid grid-cols-3 m-4 gap-4'>
            <PriceFeed />

            {account ?
                <button className='w-[10rem] h-[5rem] mx-auto bg-blue-400 rounded-md p-2 shadow-lg border-2 border-black transition duration-100 ease-in-out hover:scale-[1.01]' onClick={deactivate}>
                    Disconnect
                </button> :
                <button className='w-[10rem] h-[5rem] mx-auto bg-blue-400 rounded-md p-2 shadow-lg border-2 border-black transition duration-100 ease-in-out hover:scale-[1.01]' onClick={() => activateBrowserWallet()}>
                    Connect to MetaMask
                </button>}
        </div>
    )
}