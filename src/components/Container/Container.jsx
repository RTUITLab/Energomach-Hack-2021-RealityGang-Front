import React from "react";
import {Route, Switch} from 'react-router-dom'
import Main from './Main/Main'

const Container = (props) => {
    return (
        <>
            <Switch>
                <Route exact path='/' render={ () => <Main />} />
            </Switch>
        </>
    )
}

export default Container