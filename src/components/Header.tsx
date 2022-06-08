import { useEthers } from "@usedapp/core";

export const Header = () => {
    const { account, activateBrowserWallet, deactivate } = useEthers()

    const isConnected = account !== undefined
    return (
        <div className='m-4'>
            {account ?
                <button className='w-max-content bg-blue-400 rounded-md p-2 shadow-lg border-2 border-black transition duration-100 ease-in-out hover:scale-[1.01]' onClick={deactivate}>
                    Disconnect
                </button> :
                <button className='w-max-content bg-blue-400 rounded-md p-2 shadow-lg border-2 border-black transition duration-100 ease-in-out hover:scale-[1.01]' onClick={() => activateBrowserWallet()}>
                    Connect to MetaMask
                </button>}
        </div>
    )
}