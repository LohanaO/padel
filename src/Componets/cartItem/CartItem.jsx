import {useContext} from 'react'
import { ContextCart } from '../../Context/CartContext'
import { Link } from 'react-router-dom'

const CartItem = ({item, cantidad}) => {
    const {deleteProducts}= useContext(ContextCart);

  return (
    <div className='container-fluid mb-4'>
      
        <div className='row'>
        <div className='col-lg-8 flex-colum align-items-center'>
        <img style={{ maxWidth: '35%' }} className='img-fluid d-block' src={item.img} alt={item.nombre}/>
        </div>
        
        <div className='col sm-8'>
        <h2> {item.nombre}</h2>
        <h4>Cantidad: {cantidad} </h4>
        <h3>Precio: ${item.precio}</h3>
        <button className='btn btn-outline-danger' onClick={() => deleteProducts(item.id)}><i class="bi bi-trash3"></i></button>
        </div>
        </div>

    </div>
  )
}

export default CartItem