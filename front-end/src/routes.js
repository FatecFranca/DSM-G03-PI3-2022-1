import React from "react";

import { Route, Routes } from 'react-router-dom'

import Login from "./components/Login/Login.js";
import Home from "./components/Home/Home.js";
import Answer from "./components/Answer.js";
import Assessment from "./components/Assessment.js";
import Glossary from "./components/Glossary.js";
import About from "./components/About.js";
import QuestionGroup from "./components/QuestionGroups.js";


function Routers () {
    return (
        
            <Routes>
                <Route exact path="/" element={<Login/>} />
                <Route exact path="/home" element={<Home/>} />
                <Route exact path="/glossario" element={<Glossary />}/>
                <Route exact path="/questoes" element={<QuestionGroup />}/>
                <Route exact path="/respostas" element={<Answer />}/>
                <Route exact path="/avaliacoes" element={<Assessment />}/>
                <Route exact path="/sobre" element={<About />}/>

            </Routes>
    )

}
export default Routers