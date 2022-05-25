import React from "react";

import { Route, Routes } from 'react-router-dom'

import Login from "./components/Login/Login.js";
import Home from "./components/Home/Home.js";
import Question from "./components/Questions.js";
import Body from "./components/Body/Body.js";

function Routers () {
    return (
        
            <Routes>
                <Route exact path="/" element={<Login/>} />
                <Route exact path="/home" element={<Home/>} />
                <Route exact path="/questoes" element={<Body />}/>

            </Routes>
    )

}
export default Routers