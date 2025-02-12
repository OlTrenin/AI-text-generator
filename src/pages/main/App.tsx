import {Navbar} from "../../widgets/Navbar.tsx";
import {Route, Routes} from "react-router-dom";
import {Home} from "../home/Home.tsx";
import {Dictonary} from "../dictonary/Dictonary.tsx";
import {Login} from "../login/Login.tsx";
import {Register} from "../register/Register.tsx";

export function App() {

  return (
    <>
        <Navbar />
        <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/dictonary" element={ <Dictonary /> }/>
            <Route path="/login" element={ <Login /> }/>
            <Route path="/register" element={ <Register /> }/>
        </Routes>
    </>
  )
}

