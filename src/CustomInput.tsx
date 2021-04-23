import React, { ChangeEvent } from 'react'
import './CustomInput.scss'

const CustomInput = (props:{onChange:(event: ChangeEvent<HTMLInputElement>)=> void,label:string,
    value:string,type:string, name:string})=>{
    return <div className='group'>
        <input className='form-input' {...props}/>
        {props.label? 
            (<label className={`${props.value.length? 'shrink' :''} form-input-label`}>{props.label}</label>):
            null}
    </div>
}

export default CustomInput