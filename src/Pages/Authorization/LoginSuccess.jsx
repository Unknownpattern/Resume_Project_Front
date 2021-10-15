import React, { useContext, useEffect } from 'react'
import { LoginContext } from '../../LoginContext'

export default function LoginSuccess() {
   const [refresh, setRefresh] = useContext(LoginContext).value2;

   useEffect(() => {
      setTimeout(setRefresh, 1000, !refresh);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   return (
      <div>
         <h1>Login Success... Redirecting you to dashboard</h1>
      </div>
   )
}
