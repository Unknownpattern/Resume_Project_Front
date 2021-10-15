import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { Fragment, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import GoogleButton from "react-google-button";
import { Box } from "@mui/system";
import { LoginContext } from "../../LoginContext";

const Login = (props) => {
   const loginAddress = "/auth/login";
   const [refresh, setRefresh] = useContext(LoginContext).value2;
   const [inputs, setInputs] = useState({
      email: "",
      password: ""
   })
   const { email, password } = inputs;

   const onChange = (e) => {
      setInputs({
         ...inputs,
         [e.target.id]: e.target.value
      });
   }

   const onSubmitForm = (e) => {
      e.preventDefault();
      const body = {
         email, password
      };
      axios.post(loginAddress, body, { withCredentials: true }).then((res) => {
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
   const googleLogin = () => {
      window.location.assign(`${process.env.REACT_APP_BASE_ADDR}/auth/login/google`);
   }
   return (
      <Fragment>
         <Box
            sx={{
               '& .MuiTextField-root': { marginTop: 2, marginBottom: 2 },
               padding: 4,
               m: 'auto',
               display: "block",
               width: '50%'
            }}
            noValidate
            autoComplete="off"
            component="form"
            onSubmit={onSubmitForm}>
            <h1>Login Page</h1>
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
            <Button type="submit" variant="contained" color="success">Login</Button>
            <Link to="/register" style={{ marginLeft: 15 }}>Register</Link>
            <GoogleButton onClick={googleLogin} style={{ marginTop: 10 }} />
         </Box>
      </Fragment>
   );
};

export default Login;
