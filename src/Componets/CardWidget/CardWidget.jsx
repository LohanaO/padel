import {useContext} from 'react'
import { ContextCart } from '../../Context/CartContext'
import { Link } from 'react-router-dom'


import './CardWidget.css'

const CardWidget = () => {
const {totalQuantity} = useContext(ContextCart);
  
   
  return (
    <div >
      <Link to={'/Cart'} className='CarroContainer'>
        <i class="bi bi-cart4 carro"></i>
        <div className={totalQuantity ? "numero" : " "}>
        {
          totalQuantity > 0 && <strong>{totalQuantity}</strong>
        }
         
        </div>
      </Link>
    </div>
  )
}

export default CardWidget
