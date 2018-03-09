import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Victory from './Victory';
import App from './App';
import Recharts from './Recharts';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Root=()=>(
    <Switch>
    <Route path="/" exact component={App} />
    <Route path="/victory" exact component={Victory} />
    <Route path="/recharts" exact component={Recharts} />
    </Switch>
)

export default Root
