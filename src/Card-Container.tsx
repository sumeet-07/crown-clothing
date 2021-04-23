import React from 'react'
import Card from './Card'

const CardContainer = (props:{items:Array<{id:number,title:string,imageUrl:string}>})=>{
    return(
        <div className="directory-menu">
            {props.items.map(item=>(
                <Card key={item.id} {...item}/>
            ))}
        </div>
    )
}

export default CardContainer