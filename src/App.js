import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/login'
import Header from './components/header'
import Footer from './components/footer'
import Salas from './components/salas'
// import Session from './components/HOC-Session'
// import {withRouter} from 'react-router-dom'
function App() {
  const [user,setUser] = useState('')
  useEffect(() => {
    console.log(window.history)
    // if(window.history.location.pathname === '/rooms'){
    //   setUser(localStorage.getItem('dataUser'))
    // }
  })
  const refetchUser = () => {
    setUser(localStorage.getItem('dataUser'))
  }
  const logout = () => {
    setUser('')
  }
  return (
    <div className="">
      <Router>
        <Header user={user} logout={logout}  />
        <Switch>
          <Route exact path="/" render={() => <Login refetchUser={refetchUser} />}/>
          <Route exact path="/rooms" render={() => <Salas/>}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
