import React from "react";
import {Route, Switch} from 'react-router-dom'
import Main from './Main/Main'
import FormContainer from './Form/FormContainer'

const Container = (props) => {
    return (
        <>
            <Switch>
                <Route exact path='/' render={ () => <Main />} />
                <Route exact path='/form' render={ () => <FormContainer />} />
            </Switch>
        </>
    )
}

export default Container
