import React, { useContext, Fragment } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header";
import LoginSuccess from "./Pages/Authorization/LoginSuccess";
import Home from "./Pages/Home";
import Login from "./Pages/Authorization/Login";
import NotFound from "./Pages/NotFound";
import Dashboard from "./Pages/Dashboard";
import Register from "./Pages/Authorization/Register";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import "./App.css";
import { LoginContext } from "./LoginContext";
import axios from "axios";

const App = () => {
   axios.defaults.baseURL = process.env.REACT_APP_BASE_ADDR;
   const [userObj, setUserObj] = useContext(LoginContext).value1;
   return (
      <Fragment>
         <BrowserRouter>
            <div className="AppHeader">
               <Header isAuth={userObj} />
            </div>
            <div>
               <Switch>
                  <Route path="/" exact>
                     <Home />
                  </Route>
                  <Route path="/login">
                     {!userObj ? (
                        <Login setUserObj={setUserObj} />) : (
                        <Redirect to="/dashboard" />
                     )
                     }
                  </Route>
                  <Route path="/success">
                     {!userObj ? (
                        <LoginSuccess />) : (
                        <Redirect to="/dashboard" />
                     )
                     }
                  </Route>
                  <Route path="/register" exact>
                     {!userObj ? (
                        <Register setUserObj={setUserObj} />) : (
                        <Redirect to="/dashboard" />
                     )
                     }
                  </Route>
                  <Route path="/dashboard">
                     {userObj ? <Dashboard setUserObj={setUserObj} /> : <Redirect to="/login" />}
                  </Route>
                  <Route component={NotFound} />
               </Switch>
            </div>
         </BrowserRouter>
         <ToastContainer />

      </Fragment>
   );
};

export default App;
