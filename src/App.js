
import Main from "./Main";
import { Route, Routes } from "react-router-dom";
import Loginform from "./Loginform";
import Dashboard from "./Dashboard";
import Dpage1 from "./Dpage1";
import Profile from './Profile'


function App() {
  return (
    <>
      {/* <Main/> */}
      <Routes>

        <Route path="/" element={<Main />}></Route>
        <Route path="Login" element={<Loginform />}></Route>
        <Route path="Dashboard" element={<Dpage1/>}></Route>
        <Route path="Request" element={<Dashboard/>}></Route>
        <Route path="Profile" element={<Profile/>}></Route>
      </Routes>
    </>
  );
}

export default App;
