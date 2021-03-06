import { Button } from '@mui/material'
import axios from 'axios'
import React, { Fragment, useState, useEffect, useContext } from 'react'
import { toast } from 'react-toastify'
import { LoginContext } from "../LoginContext";
const Dashboard = (props) => {
   const [userObj, setUserObj] = useContext(LoginContext).value1;
   const [name, setName] = useState("Loading...")
   useEffect(() => {
      setName(userObj.user_name);
   }, [userObj]);


   const logout = (e) => {
      e.preventDefault();
      axios.get("/auth/logout", { withCredentials: true }).then(res => {
         if (res.data === "done") {
            props.setUserObj(false);
            toast.success("Logged out successfully");

         }
      }).catch(err => {
         console.error(err.message);

      });
   }
   return (
      <Fragment>
         <h1>Dashboard</h1>
         <h2>Hello {name}</h2>
         <Button variant="contained" color="error" onClick={e => logout(e)}>Log out</Button>
      </Fragment>
   )
}

export default Dashboard
