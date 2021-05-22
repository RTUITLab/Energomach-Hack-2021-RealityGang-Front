import logo from './logo.svg';
import './App.css';
import Switch from "react-router-dom";
import Route from "react-router-dom";

const App = () => {
    return (
        <>
            <Switch>
                <Route exact path='/login' render={ () => <LoginContainer />} />
                <Container />
            </Switch>
        </>
    );
}

export default App;
