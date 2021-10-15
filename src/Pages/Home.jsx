import React, { Fragment, useEffect } from "react";

const Home = () => {
   // scrolls to the top upon loading
   useEffect(() => {
      window.scroll(0, 0);
   }, []);

   return (
      <Fragment>
         <h1>Home Page</h1>
      </Fragment>
   );
};

export default Home;
