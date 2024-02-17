
import Main from "./Main";
import { Route, Routes } from "react-router-dom";
import Loginform from "./Loginform";
import Dashboard from "./Dashboard";
import Dpage1 from "./Dpage1";
import Profile from './Profile'
import Signup from "./Signup";
import Signupform from "./Signupform";
import Checkout from "./Checkout";

function App() {
  return (
    <>
      {/* <Main/> */}
      <Routes>

        <Route path="/" element={<Main />}></Route>
        <Route path="/Signupform" element={<Signupform />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Check" element={<Checkout />}></Route>
        <Route path="/Login" element={<Loginform />}></Route>
        <Route path="Dashboard" element={<Dpage1/>}></Route>
        <Route path="Request" element={<Dashboard/>}></Route>
        <Route path="Sample" element={<Dashboard/>}></Route>
        <Route path="Profile" element={<Profile/>}></Route>
      </Routes>
    </>
  );
}

export default App;
