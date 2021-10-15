import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

export const LoginContext = createContext({});
export function LoginProvider(props) {
   const userUrl = "/auth/getuser";
   const [refresh, setRefresh] = useState(false);
   const [userObj, setUserObj] = useState(false);
   useEffect(() => {
      try {
         axios.get(userUrl, { withCredentials: true }).then((res) => {
            if (res.data) {
               setUserObj(res.data);
            }
         });
      } catch (error) {
         console.log(error.message);
      }
   }, [refresh]);
   return (
      <LoginContext.Provider value={{ value1: [userObj, setUserObj], value2: [refresh, setRefresh] }}>{props.children}</LoginContext.Provider>
   )
}
