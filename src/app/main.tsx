import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from '../pages/main/App.tsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "../pages/home/Home.tsx";
import {Dictonary} from "../pages/dictonary/Dictonary.tsx";
import {Login} from "../pages/login/Login.tsx";
import {Register} from "../pages/register/Register.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <App />
          <Routes>
            <Route path="/" element={ <Home /> }/>
              <Route path="/dictonary" element={ <Dictonary /> }/>
              <Route path="/login" element={ <Login /> }/>
              <Route path="/register" element={ <Register /> }/>
          </Routes>

      </BrowserRouter>
  </StrictMode>,
)
