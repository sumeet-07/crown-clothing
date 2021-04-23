import React from 'react'
import SHOP_DATA from './shop.data'
import CollectionPreview from './CollectionPreview' 

const ShopPage = ()=>{
    return <div className='shop-page'>
        {SHOP_DATA.map((item)=> {
            return <CollectionPreview key={item.id} {...item}/>
        })}
    </div>
}

export default ShopPage;
