import { Fragment } from "react";

const Profile = () => {
   return (
      <Fragment>
         <h1>Profile Page</h1>
         <button onClick={() => window.location = '/'}>Refresh</button>
      </Fragment>
   );
};

export default Profile;
