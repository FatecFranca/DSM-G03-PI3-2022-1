import React from "react";

import { Route, Routes } from 'react-router-dom'

import Login from "./components/Login/Login.js";
import Home from "./components/Home/Home.js";
import Answer from "./components/Answer.js";
import Assessment from "./components/Assessment.js";
import Glossary from "./components/Glossary.js";
import QuestionGroup from "./components/QuestionGroups.js";
import SignUp from "./components/SignUp/SignUp.js";
import Questions from "./components/Questions.js";


function Routers () {
    return (
        
            <Routes>
                <Route exact path="/" element={<Login/>} />
                <Route exact path="/home" element={<Home/>} />
                <Route exact path="/glossario" element={<Glossary />}/>
                <Route exact path="/questoes" element={<QuestionGroup />}/>
                <Route exact path="/questoes/porgrupo/:id" element={<Questions />}/>
                <Route exact path="/respostas/:id" element={<Answer />}/>
                <Route exact path="/avaliacoes" element={<Assessment />}/>
                <Route exact path="/avaliacoes/:id" element={<Assessment />}/>
                <Route exact path="/cadastro" element={<SignUp/>}/>

            </Routes>
    )

}
export default Routers