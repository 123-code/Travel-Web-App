import * as React from 'react'
import {PAYMENT_CONTRACT_ADDRESS, PAYMENT_CONTRACT_ABI} from '../Constants'
import { usePrepareContractWrite, useContractWrite,useWaitForTransaction } from 'wagmi'
 
export function ETHPayment(){
    const { config } = usePrepareContractWrite({
       address: PAYMENT_CONTRACT_ADDRESS,
         abi: PAYMENT_CONTRACT_ABI,
         functionName: 'MakePayment',
    })
    const { data,write } = useContractWrite(config)
    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
      })
    return(
        <div>
        <button disabled={!write || isLoading} onClick={() => write()}>
        {isLoading ? 'loading...' : 'Pay Now'}
      </button>
      {isSuccess && (
        <div>
          Successfully made Payment!
          <div>
            <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
          </div>
        </div>
      )}
        </div>
        

    )
}