import React from 'react'
import Question from '../Questions'
import { Route, useLocation } from 'react-router-dom'
import { render } from '@testing-library/react';

import Glossary from '../Glossary'


function Body() {
    <div>
   <Route path="/questoes">
       <Question />
   </Route>
   <Route path="/glossario">
       <Glossary />
   </Route>
    </div>
}
export default Body