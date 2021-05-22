import React from 'react'
import './App.scss'
import {Route, Switch} from "react-router-dom";
import Container from "./components/Container/Container";
import LoginContainer from "./components/Login/LoginContainer";
import Navbar from './components/Navbar/Navbar'
import RegisterContainer from './components/Register/RegisterContainer'

const App = () => {
    return (
        <div className='outer'>
            <Navbar />
            <div className='container'>
                <Switch>
                    <Route exact path='/login' render={ () => <LoginContainer />} />
                    <Route exact path='/register' render={ () => <RegisterContainer />} />
                    <Container />
                </Switch>
            </div>
        </div>
    );
}

export default App;
