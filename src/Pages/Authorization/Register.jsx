import React, { Fragment, useState, useContext } from "react";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Box } from "@mui/system";
import axios from "axios";
import { LoginContext } from "../../LoginContext";

const Register = (props) => {
   const registerAddress = "/auth/register";
   const [inputs, setInputs] = useState({
      email: "",
      password: "",
      name: ""
   })
   const [refresh, setRefresh] = useContext(LoginContext).value2;

   const { email, password, name } = inputs;

   const onChange = (e) => {
      setInputs({
         ...inputs,
         [e.target.id]: e.target.value
      })
   }

   const onSubmitForm = (e) => {
      e.preventDefault();

      const body = { email, password, name };
      axios.post(registerAddress, body, { withCredentials: true }).then((res) => {
         if (res.data === "done") {
            toast.success("Login successfully!");
            setRefresh(!refresh);
         }
         else {
            toast.error(res.data);
         }
      }).catch(err => {
         if (err.response) {
            toast.error(err.response.data);
         } else {
            console.error(err);
         }
      });
   }
   // TODO: replace with material UI
   return (
      <Fragment>
         <Box
            sx={{
               '& .MuiTextField-root': { marginTop: 2, marginBottom: 2 },
               padding: '4em',
               m: 'auto',
               display: "block",
               width: '50%'
            }}
            noValidate
            autoComplete="off"
            component="form"
            onSubmit={onSubmitForm}
         >
            <h1>Register Page</h1>
            <TextField
               required
               id="email"
               label="Email"
               variant="filled"
               fullWidth
               onChange={e => onChange(e)}
            />
            <TextField
               required
               id="password"
               label="Password"
               type="password"
               variant="filled"
               fullWidth
               onChange={e => onChange(e)}
            />
            <TextField
               required
               id="name"
               label="Name"
               variant="filled"
               fullWidth
               onChange={e => onChange(e)}
            />
            <Button type="submit" variant="contained" color="success">Register</Button>
            <Link to="/login" style={{ marginLeft: 15 }}>Login</Link>
         </Box>
      </Fragment>
   )
}

export default Register
