import { useAccount, useConnect, useDisconnect } from 'wagmi'

import { ETHPayment } from './MakePayment'

export function App() {
 const { isConnected } = useAccount()

 if (isConnected) {
 return (
 <div>
 <ETHPayment />
 </div>
 )
 }
}
