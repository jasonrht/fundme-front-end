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

    const erc20abi = ERC20.abi
    const erc20Address = chainId ? networkMapping[String(chainId)]['ERC20'][0] : constants.AddressZero
    const erc20Interface = new utils.Interface(erc20abi)
    const erc20Contract = new Contract(erc20Address, erc20Interface)

    // Approve transaction
    const { send: approveErc20Send, state: approveErc20State } = useContractFunction(
        erc20Contract,
        'approve',
        { transactionName: 'Approve ERC20 transfer' }
    )
    const approveAndSend = (amount: string) => {
        setAmountToSend(amount)
        return approveErc20Send(fundMeAddress, amount)
    }

    // Send transaction
    const { send: donationSend, state: sendState } = useContractFunction(
        fundMeContract,
        'fund',
        { transactionName: 'Send donation' }
    )
    const sendDonation = (amount: string) => {
        return donationSend()
    }

    //useEffect
    useEffect(() => {
        if (approveErc20State.status === "Success") {
            sendDonation(amountToSend)
        }
    }, [approveErc20State, amountToSend])

    return { approveAndSend, approveErc20State, sendState }
}