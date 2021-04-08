import './App.css';
import HomePage from './Components/HomePage';
import Grocery from './Components/Grocery';
import Contact from './Components/Contact';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fire from './Components/fire';
import Login from './Components/Login';
import Hero from './Components/Hero';


function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassord] = useState('');
  const [emailerr, setEmailErr] = useState('');
  const [passworderr, setPasswordErr] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const login = () => {
    clearErr();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
            setEmailErr(err.message);
            break;
          case "auth/wrong.password":
            setPasswordErr(err.message)
            break;

        }
      });
  };

  const handleSignup = () => {
    clearErr();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailErr(err.message);
            break;
          case "auth/weak-password":
            setPasswordErr(err.message)
            break;

        }
      });
  }
  const clearInputs = () => {
    setEmail('');
    setPassord('');
  }

  const clearErr = () => {
    setEmailErr('');
    setPasswordErr('');
  }

  const handleLogout = () => {
    fire.auth().signOut();
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser('');
      }
    });
  }
  useEffect(() => {
    authListener();
  }, []);


  return (
    <div className="App">
      <BrowserRouter>
        <div>
          {user ? (
              <Hero handleLogout={handleLogout} />
            ) : (
              <Login
                email={email}
                setEmail={setEmail}
                password={password}
                setPassord={setPassord}
                login={login}
                handleSignup={handleSignup}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailerr={emailerr}
                passworderr={passworderr}
                handleLogout={handleLogout}
              />
            )}
  
            <Route path='/' exact><h1></h1>
         
           
            {/* <br></br> */}
          </Route>
          <Route path='/Components/HomePage' component={HomePage} />
          <Route path='/Components/Grocery' component={Grocery} />
          <Route path='/Components/Contact' component={Contact} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
