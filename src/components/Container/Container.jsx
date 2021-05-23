import React from "react";
import {Route, Switch} from 'react-router-dom'
import Main from './Main/Main'
import FormContainer from './Form/FormContainer'
import SubsidyListContainer from './SubsidyList/SubsidyListContainer'
import SubsidyContainer from './Subsidy/SubsidyContainer'

const Container = (props) => {
    return (
        <>
            <Switch>
                <Route exact path='/' render={ () => <Main />} />
                <Route exact path='/form' render={ () => <FormContainer />} />
                <Route exact path='/subsidy_list' render={ () => <SubsidyListContainer />} />
                <Route exact path='/subsidy/:id' render={ () => <SubsidyContainer />} />
            </Switch>
        </>
    )
}

export default Container
