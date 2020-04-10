import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AuthState from './context/authentication/authState';
import Login from './components/login';
import Header from './components/header';
import Footer from './components/footer';
import Salas from './components/salas';
import Ranking from './components/ranking';
import RegisterUser from './components/registerUser';
import tokenAuth from './config/tokenAuth';
// import WrapperInRoom from './components/inRoom';
// import Payments from './components/payments';
import RutaPrivada from './components/rutas/RutaPrivada';
// import Session from './components/HOC-Session'
// import {withRouter} from 'react-router-dom'

const token = localStorage.getItem('token');
if(token) {
  tokenAuth(token);
}
function App() {
  const [user,setUser] = useState('');
  const refetchUser = () => {
    setUser(localStorage.getItem('dataUser'))
  }
  const logout = () => {
    setUser('')
  }

  const Example = () => (
    <div>
      Test
    </div>
  )
  return (
    <div className="">
      <AuthState>
        <Router>
          <Header user={user} logout={logout}  />
          <div style={{minHeight: '90vh'}}>
            <Switch>
  <Route exact path="/" render={() => <Login refetchUser={refetchUser} /> }/>
              <RutaPrivada exact path="/rooms" component={Salas}/>
              {/* <RutaPrivada exact path="/in-room" component={WrapperInRoom}/>
              <RutaPrivada exact path="/payments" component={Payments}/> */}
              <Route exact path="/ranking" render={ () => <Ranking/> } />
              <Route exact path="/register" render={ () => <RegisterUser/> } /> 
            </Switch>
          </div>
          <Footer/>
        </Router>
      </AuthState>
    </div>
  );
}

export default App;
