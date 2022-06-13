import { useEthers } from "@usedapp/core";

export const Connect = () => {
    const { account, activateBrowserWallet, deactivate } = useEthers()

    return (
        <div className='absolute right-8 bottom-4'>
            {account ?
                <button className='w-[10rem] h-[5rem] mx-auto bg-blue-400 rounded-md p-2 shadow-lg border-2 border-black transition duration-100 ease-in-out hover:scale-[1.01] hover:shadow-2xl' onClick={deactivate}>
                    Disconnect
                </button> :
                <button className='w-[10rem] h-[5rem] mx-auto bg-blue-400 rounded-md p-2 shadow-lg border-2 border-black transition duration-100 ease-in-out hover:scale-[1.01] hover:shadow-2xl' onClick={() => activateBrowserWallet()}>
                    Connect to MetaMask
                </button>}
        </div>
    )
}