import React from 'react'
import { shirts } from '../data/shirts'

import CartButton from './buttons/cartButton'
import PreviewButton from './buttons/previewButton'

const Shirtlist = () => {
  return (
    <div style={{display :'flex',justifyContent:'center',gap:'40px'}}>
        {
            shirts.map((shirt) =>{
                return(
                    <div>
                        <img src={shirt.img} alt=''/>
                        <h3>{shirt.brand}</h3>
                        <p>{shirt.size}</p>
                    <div style={{display:'flex',color:'cyan',gap:'5px'}}>
                        <CartButton shirt ={shirt.name}/>
                        <PreviewButton/>
                    </div>
                     
                   </div>
                    
                )
            })
        }
      
    </div>
  )
}

export default Shirtlist
