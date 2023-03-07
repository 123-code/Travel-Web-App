import * as React from 'react'
import { useDebounce } from 'use-debounce'
import { usePrepareContractWrite,useContractWrite, useWaitForTransaction } from 'wagmi'
import { utils } from 'ethers'
import { PAYMENT_CONTRACT_ADDRESS,PAYMENT_CONTRACT_ABI } from '@/Constants'


//{data.toString()}

export function SendETHForm (){
  const [amount, setAmount] = React.useState('')
  const debouncedAmount = useDebounce(amount, 500)
  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: PAYMENT_CONTRACT_ADDRESS,
    abi: PAYMENT_CONTRACT_ABI,
    functionName: 'PayNow',
    args: [ '100000'],
    //debouncedAmount ? utils.parseEther(debouncedAmount) : null
    // value: utils.parseEther(amount), 
  })
  const { data, error, isError, write } = useContractWrite(config)
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })
  return(
    <form
    onSubmit={(e) => {
      e.preventDefault()
      write?.()
    }}
    >
      <label for="payAmount">Amount</label>
      <input
        id="payAmount"
        onChange={(e) => setAmount(e.target.value)}
        placeholder="0.1"
        value={amount}
      />
      <button>Pay</button>
      {(isPrepareError || isError) && (
        <div>Error: {(prepareError || error)?.message}</div>
      )}
    </form>
  )
 
}


export function ETHPayment(){

    return(
      
      <SendETHForm/>

    )
}