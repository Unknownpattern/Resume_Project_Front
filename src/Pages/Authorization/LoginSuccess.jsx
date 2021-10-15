import React, { useContext, useEffect } from 'react'
import { LoginContext } from '../../LoginContext'

export default function LoginSuccess() {
   const [refresh, setRefresh] = useContext(LoginContext).value2;

   useEffect(() => {
      setTimeout(setRefresh, 1000, !refresh);
   }, [])
   return (
      <div>
         <h1>Login Success... Redirecting you to dashboard</h1>
      </div>
   )
}
