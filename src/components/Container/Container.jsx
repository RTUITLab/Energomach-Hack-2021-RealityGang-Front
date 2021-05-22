import React from "react";
import {Route, Switch} from 'react-router-dom'
import Main from './Main/Main'
import FormContainer from './Form/FormContainer'
import SubsidyListContainer from './SubsidyList/SubsidyListContainer'

const Container = (props) => {
    return (
        <>
            <Switch>
                <Route exact path='/' render={ () => <Main />} />
                <Route exact path='/form' render={ () => <FormContainer />} />
                <Route exact path='/subsidy_list' render={ () => <SubsidyListContainer />} />
            </Switch>
        </>
    )
}

export default Container
