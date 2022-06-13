import { useCall, useContractFunction, useEthers } from "@usedapp/core"
import FundMeAbi from '../chain-info/contracts/FundMe.json'
import ERC20 from '../chain-info/contracts/ERC20.json'
import networkMapping from '../chain-info/deployments/map.json'
import { Contract, utils, constants } from "ethers"
import { useEffect, useState } from "react"

export const useDonate = (donationAddress: string) => {
    // We need three things to interact with a smart contract:
    // 1. Contract address
    // 2. ABI
    // 3. chainId

    const donationAmount = 2
    const [amountToSend, setAmountToSend] = useState("0")

    const { account, chainId } = useEthers()
    const { abi } = FundMeAbi

    const fundMeAddress = chainId ? networkMapping[String(chainId)]['FundMe'][0] : constants.AddressZero
    const fundMeInterface = new utils.Interface(abi)
    const fundMeContract = new Contract(fundMeAddress, fundMeInterface)

    // Send transaction
    const { send: donationSend, state: sendState } = useContractFunction(
        fundMeContract,
        'fund',
        { transactionName: 'Send donation' }
    )

    const sendDonation = (amount: string) => {
        donationSend({ value: utils.parseEther(amount) })
    }

    return { sendDonation, sendState }
}