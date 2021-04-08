import React from 'react'


const Login = (props) => {
    const { email, setEmail, password, setPassord, login, handleSignup, hasAccount, setHasAccount, emailerr, passworderr } = props;
    return (

        <section className='login'>
             <div className='logo'></div>
            <div className='loginContainer'>
                
                <label>Email:</label>
                <input type='text' outFocus required value={email}
                    onChange={(e) => setEmail(e.target.value)}></input>
                <p className='errorMsg'>{emailerr}</p>
                <label>Password:</label>
                <input type='password' outFocus required value={password}
                    onChange={(e) => setPassord(e.target.value)}></input>
                <p className='errorMsg'>{passworderr}</p>
                <div className='btnContainer'>
                    {hasAccount ? (
                        <>
                            <button onClick={login}>Sign In</button>
                            <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>

                        </>
                    ) : (
                        <>
                            <button onClick={handleSignup}>Sign up</button>
                            <p>Have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                         
                        </>
                    )}

                </div>
            </div>
        </section >
    )
}



export default Login;
