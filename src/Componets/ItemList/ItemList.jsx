import React from 'react'
import Item from '../Item/Item'

const itemList = ({productos}) => {

  return (
  <div style={{display:'flex',
   justifyContent:'center',
   flexWrap:'wrap',
   alignContent:'center', 
   gap:'20px',
   marginTop:'20px',
   marginBotton:'2rem'
   }}>
    {productos.map(producto =><Item key={producto.id} {...producto}/>)}
  </div>
  )
}

export default itemList