import React from 'react'
import CollectionItem from './CollectionItem'


const CollectionPreview = (props:{id: number,
    title: string,
    routeName: string,
    items: Array<{id: number,
        name: string,
        imageUrl: string,
        price: number}>
})=>{
    return <div className='collection-preview'>
        <h1 className='title'>{props.title}</h1>
        <div className='preview'>
            {props.items
            .filter((item,index)=>  index<4)
            .map(item=><CollectionItem key={item.id} {...item}/>)}
        </div>
    </div>
}

export default CollectionPreview;
