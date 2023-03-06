import * as React from 'react'
import {PAYMENT_CONTRACT_ADDRESS, PAYMENT_CONTRACT_ABI} from '../Constants'
import {useContract,usePrepareContractWrite,useContractRead } from 'wagmi'
import { usePrepareSendTransaction,useSendTransaction,useContractWrite,useWaitForTransaction } from 'wagmi'
import { useEffect } from 'react'
 

export function SendTransaction() {
  const [amount, setAmount] = React.useState('')
  const [tvl,settvl] = React.useState(1);


  const {data,isLoading,error} = useContractRead({
    address: PAYMENT_CONTRACT_ADDRESS,
    abi: PAYMENT_CONTRACT_ABI,
    functionName: 'getcontracttvl',
   
  })

  useEffect(()=>{
    if(data){
      settvl(data)
    }
  })

  const { config } = usePrepareContractWrite({
    address: PAYMENT_CONTRACT_ADDRESS,
    abi: PAYMENT_CONTRACT_ABI,
    functionName: 'PayNow',
  })


  const { write } = useContractWrite(config)
  return (
    <div>

      <h1> Pay Now: </h1>
   
      <form
       onSubmit={(e) => {
        e.preventDefault()
        write?.()
        console.log("dwdef" + data);
        

      }}>
        
        <div>Contract TVL: {data.toString()}</div>
      <input type="text" placeholder="Enter Amount" onChange={(e)=>{setAmount(e.target.value)}} />
      <button>Pay</button>
      </form>
    </div>
  )
}


export function ETHPayment(){

    return(
      
      <SendTransaction/>

    )
}