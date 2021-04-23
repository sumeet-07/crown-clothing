import React from 'react';
import './App.scss';
import {Route,Switch} from 'react-router-dom'
import HomePage from './HomePage'
import ShopPage from './ShopPage'
import Header from './Header'
import SignInSignUp from './SignInSignUp'
import {auth} from './firebase/FireBaseUtiils'

class App extends React.Component{

  constructor(props:{}){
    super(props);
    this.state = {currentUser:null}
  }

  umsubscribeFromAuth:any = null;

  componentDidMount(){
    this.umsubscribeFromAuth = auth.onAuthStateChanged((user)=>{
      this.setState({currentUser:user})
      alert(user?.displayName)
    })
  }

  componentWillUnmount(){
    this.umsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' component={SignInSignUp}/>
        </Switch>
      </div>
    );
  }
}


export default App;
