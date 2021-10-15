import React from "react";
import ReactDom from "react-dom";
import { LoginProvider } from "./LoginContext";

import App from "./App"

ReactDom.render(
   <LoginProvider>
      <App />
   </LoginProvider>, document.getElementById("root"));
