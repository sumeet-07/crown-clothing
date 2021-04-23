import React, { MouseEventHandler } from 'react'

const CustomButton = (props:{
            onClick?:MouseEventHandler<HTMLButtonElement>,
            children:string,
            type:string
        })=>{
    return  <button className="custom-button" onClick={props.onClick}>{props.children}</button>
}

export default CustomButton;
