import {useState} from 'react'
import './Count.css'
import { Button, Card, Container } from 'react-bootstrap';

const ItemCount = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState(initial);

    const aumentarContador= ()=>{
        if(contador< stock){
        setContador(contador + 1)
    }
    }

    const DisminuirContador= ()=>{
        if(contador > initial){
            setContador(contador - 1)
        }
    }

   

  return (
    <Container className="justify-content-between">
        
        <Card className='card'>
            <Button className='button' s onClick={DisminuirContador}> - </Button>
            <span >{contador}</span>
            <Button className='button'  onClick={aumentarContador}> + </Button>
        </Card>
      
            <Button className='  btn-link' disabled={stock===0} onClick={() =>onAdd(contador)} >Agregar al carritto</Button>
        
        
    </Container>
  )
}

export default ItemCount