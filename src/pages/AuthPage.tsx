import React from 'react';

const AuthPage = () => {
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
    }
    return (
        <form
            className={'container mx-auto max-w-[500px] pt-8'}
            onSubmit={submitHandler}
        >
            <div className={''}>
                <label className={'block'} htmlFor={'userName'}>UserName</label>
                <input className={'border py-1'} type={'text'} value={11} id={'username'}/>
            </div>
        </form>
    );
};

export default AuthPage;