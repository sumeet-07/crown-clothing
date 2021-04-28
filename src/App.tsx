import React from 'react';
import './App.scss';
import {Route,Switch} from 'react-router-dom'
import HomePage from './HomePage'
import ShopPage from './ShopPage'
import Header from './Header'
import SignInSignUp from './SignInSignUp'
import {auth, addUserToDatabase} from './firebase/FireBaseUtiils'

class App extends React.Component<any,any>{

  constructor(props:{}){
    super(props);
    this.state = {currentUser:null}
  }

  umsubscribeFromAuth:any = null;

  componentDidMount(){
    this.umsubscribeFromAuth = auth.onAuthStateChanged(async (user)=>{
      if(user){
        const userRef = await addUserToDatabase(user,{});
        userRef?.onSnapshot(snapshot=>{
          this.setState({currentUser:{
            id:snapshot.id,
            ...snapshot.data()
          }}, () => console.log('this.state :>> ', this.state));
        })
      }else{
        this.setState({currentUser:null})
      }
    })
  }

  componentWillUnmount(){
    this.umsubscribeFromAuth()
  }

  render=()=> {
    return (
      <div>
        <Header user={this.state.currentUser} />
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
