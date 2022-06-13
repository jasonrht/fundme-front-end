import { useEthers, useNotifications } from "@usedapp/core"
import helperConfig from '../helper-config.json'
import networkMapping from '../chain-info/deployments/map.json'
import { constants, utils } from "ethers"
import { useState } from "react"
import { useDonate } from "../hooks/useDonate"
import { useEffect } from "react"
import loadinGif from '../assets/loading.gif'

export const FundMe = () => {
    const [amount, setAmount] = useState<number | string | Array<number | string>>(0)
    const { account, chainId } = useEthers()
    const networkName = chainId ? helperConfig[chainId] : "dev"
    const fundMeAddress = chainId ? networkMapping[String(chainId)]['FundMe'][0] : constants.AddressZero
    const { sendDonation, sendState } = useDonate(String(account))
    const { notifications } = useNotifications()

    const handleSubmit = () => {
        return sendDonation(amount.toString())
    }

    useEffect(() => {
        if (notifications.filter(
            notification =>
                notification.type === 'transactionSucceed' &&
                notification.transactionName === 'Approve ERC20 transfer'
        ).length > 0) {
            console.log('approved')
        }
        if (notifications.filter(
            notification =>
                notification.type === 'transactionSucceed' &&
                notification.transactionName === 'Send donation'
        ).length > 0) {
            console.log('donation sent')
        }

    }, [notifications])

    return (
        <>
            <div className='w-[80%] sm:col-span-2'>
                <p>Check out the source code for the FundMe
                    <a
                        href={`https://rinkeby.etherscan.io/address/${fundMeAddress}`}
                        className='hover:opacity-[50%]'
                    > here.</a>
                </p>
                <div className='grid my-6'>
                    <p>Enter donation amount in ETH: </p>
                    <input onChange={(e) => setAmount(e.target.value)}
                        className='border-2 border-black rounded-md p-2 h-8 w-[30%] mr-2 mb-2'></input>
                    <button className='bg-blue-500 rounded-md border-2 border-black w-[30%] transition duration-100 ease-in-out hover:scale-[1.01] hover:shadow-2xl'
                        onClick={() => handleSubmit()}
                        disabled={sendState.status === 'Mining'}>
                        {sendState.status === 'Mining' ? <img src={loadinGif} alt='loading ...' className='w-10 h-10 mx-auto' /> : 'Donate !'}
                    </button>
                </div>
            </div>
        </>
    )
}

