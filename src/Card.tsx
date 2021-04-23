import React from 'react'

const Card = (props:{title:string,imageUrl:string,id:number})=>{
    return(
    <div  className={[4,5].includes(props.id)?`large menu-item`:`menu-item`}>
        <div className="background-image" style={{backgroundImage:`url(${props.imageUrl})`}}></div>
        <div className="content">
            <div>{props.title.toUpperCase()}</div>
            <div>Shop Now</div>
        </div>
    </div>
    )
}

export default Card