import React, {useState} from 'react'
import Register from './Register'
import {useDispatch, useSelector} from 'react-redux'
import {login} from '../../redux/auth-reducer'
import {Redirect} from 'react-router-dom'
import {motion} from "framer-motion";

const RegisterContainer = (props) => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const isAuth = useSelector(state => state.auth.isAuth);

    const handleKeyUp = (e) => {

        if(e.keyCode === 13) {
            checkIsPasswordMatch()
        }
    }

    const checkIsPasswordMatch = () => {
        if(password === passwordConfirm) {
            handleSubmit()
        }
    }

    const handleSubmit = () => {
        dispatch(login(email, password))
    }

    if(isAuth) {
        return <Redirect to={'/'} />
    }

    const animations = {
        hidden: {
            opacity: 0,
            x:0,
            y: 100,
        },
        visible: {
            opacity: 1,
            x:0,
            y:0,
        }
    }

    return (
        <div className={'container'}>
            <motion.div variants={animations} initial="hidden" animate="visible"
                        transition={{ duration: 1 }}
            >
                <Register handleKeyUp={handleKeyUp} checkIsPasswordMatch={checkIsPasswordMatch} passwordConfirm={passwordConfirm}
                          setPasswordConfirm={setPasswordConfirm}
                          handleSubmit={handleSubmit} email={email} password={password} setPassword={setPassword} setEmail={setEmail} />
            </motion.div>
        </div>
    )
}

export default RegisterContainer
