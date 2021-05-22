import React, {useEffect} from 'react'
import './App.scss'
import 'antd/dist/antd.css'
import 'react-toastify/dist/ReactToastify.css';
import {Route, Switch} from "react-router-dom";
import Container from "./components/Container/Container";
import LoginContainer from "./components/Login/LoginContainer";
import Navbar from './components/Navbar/Navbar'
import RegisterContainer from './components/Register/RegisterContainer'
import {useDispatch, useSelector} from 'react-redux'
import {initializing} from './redux/auth-reducer'
import Preloader from './common/Preloader/Preloader'
import {ToastContainer} from 'react-toastify'

const App = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initializing())
    }, [dispatch]); // Перезапускать эффект только если count поменялся

    const isInitialize = useSelector(state => state.auth.isInitialize);

    if(!isInitialize) {
        return <Preloader />
    }

    return (
        <>
            <div className='outer'>
                <Navbar />
                <Switch>
                    <Route exact path='/login' render={ () => <LoginContainer />} />
                    <Route exact path='/register' render={ () => <RegisterContainer />} />
                    <Container />
                </Switch>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}

export default App;
