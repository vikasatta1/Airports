import React from 'react';
import {useInput} from "../hook/input";
import {useAppDispatch} from "../hook/redux";
import {login, register} from "../store/actions/authActions";
import {useNavigate} from "react-router-dom";

const AuthPage = () => {
    const username = useInput('')
    const password = useInput('')
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const isFormValid = () => username.value && password.value
    const loginHandler = () => {
        if (isFormValid()) {
            dispatch(login({username: username.value, password: password.value})).then(() => {
                navigate('/')
            })
        } else {
            alert('INVALID FORM PLZ CHANGE FAST')
        }
    }
    const submitHandler = async (event: React.FormEvent) => {
        try {
            event.preventDefault()

            if (isFormValid()) {
              await  dispatch(register({username: username.value, password: password.value})
                )
                navigate('/')
            } else {
                alert('INVALID FORM PLZ CHANGE FAST')
            }
        } catch (e) {

        }
    }


    return (
        <form
            className={'container mx-auto max-w-[500px] pt-8'}
            onSubmit={submitHandler}
        >
            <div className={'mb-2'}>
                <label className={'block'} htmlFor={'username'}>UserName</label>
                <input className={'border py-1 px-2 w-full'} type={'text'} {...username} id={'username'}/>
            </div>
            <div className={''}>
                <label className={'block'} htmlFor={'password'}>Password</label>
                <input className={'border py-1 px-2 w-full'} type={'password'} {...password} id={'password'}/>
            </div>

            <button type={'submit'} className={'py-2 px-4 bg-blue-700 border text-white mt-2'}>Register</button>
            <button type={'button'} className={'py-2 px-4 bg-green-700 border text-white mt-2'}
                    onClick={loginHandler}>Login
            </button>
        </form>
    );
};

export default AuthPage;