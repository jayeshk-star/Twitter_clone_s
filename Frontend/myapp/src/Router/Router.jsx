import React from 'react'
import Navbar from './Navbar'
import { Switch, Route} from 'react-router'
import Register from '../Compoents/Register'
import Home from '../Landingpage/Home';



const Router = () => {
    return (
        <div>
            <Navbar />
            <Switch>
            <Route exact path="/" > <Home /> </Route>
            <Route path="/register"><Register /> </Route>
            <Route >
                OOps! page does not found
            </Route>
            </Switch>
        </div>
    )
}

export default Router
