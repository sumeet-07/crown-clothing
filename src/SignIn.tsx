import React, { ChangeEvent, FormEvent, MouseEvent } from 'react'
import CustomButton from './CustomButton'
import CustomInput from './CustomInput'
import {signInWithGoogle} from './firebase/FireBaseUtiils'

 class SignIn extends React.Component<any,any>{
    constructor(props:{[props:string]:string}){
        super(props)
        this.state = {
            email:'',
            password:''
        }
    }

    handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target as any;

        this.setState({[name]:value})

    }

    handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
    }

    handleOnCLick= (e:MouseEvent)=>{
        signInWithGoogle()
    }
    
    render = ()=>{
        return <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign In with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <CustomInput type="email" name="email" label="email" 
                            value={this.state.email} onChange={this.handleChange}/>
                    <CustomInput type="password" name="password" label="password" 
                            value={this.state.password} onChange={this.handleChange}/>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="submit" onClick={this.handleOnCLick}>Sign In with Google</CustomButton>
                </form>


            </div>
    }
}

export default SignIn;
