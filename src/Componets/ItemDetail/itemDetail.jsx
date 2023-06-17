import React from "react"
import ItemCount from "../ItemListContainer/ItemCount";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ContextCart } from "../../Context/CartContext";
import './ItemDetail.css'
import { Button, Col, Container, Image, Row,  } from "react-bootstrap";

const ItemDetail = ({ id, nombre, precio, img, description, stock }) => {
  // Estado Addcantidad
  const [addCantidad, setaddCantidad] = useState(0);
  const navigate= useNavigate();

  //useContext
  const {  addProducts } = useContext(ContextCart);
  //Funcion para para manejar la cantidad de productos
  const onAdd = (cantidad) => {
    setaddCantidad(cantidad);
    //creation item and quantity
    const item = { id, nombre, precio, img };
    addProducts(item, cantidad)
  };

  const handleShopping=() => {
      navigate('/');
  }
  return (

<Container>
      <Row>
        <Col xs={12} md={6}>
          <Image src={img} alt={nombre} fluid />
        </Col>
        <Col xs={12} md={6}>
          <h2 className="text-center">{nombre}</h2>
          <p className="descripcion">{description}</p>
          <p className="fs-2 fw-bold" >${precio}</p>
          {addCantidad ? (
          <Container className="justify-content-between">
           <Link className=" btn  btn-link"  to="/cart"> Terminar Compra </Link>
           <Button className=" btn btn-link"  onClick={handleShopping}> Seguir Comprando </Button>
           </Container>
           ) : 
             (
             <ItemCount  initial={1} stock={stock} onAdd={onAdd}  />
             
             )
           }
           <p className="stock">Stock disponible {stock} {stock===1 ? 'unidad': 'unidades'}</p>
         
        </Col>
      </Row>
    </Container>
   
   
  );
};

export default ItemDetail;

/*
<div className="container-fluid d-flex justify-content-center align-items-center p-4">
   <div className="row">

     <div className="col-xs-12 col-lg-6">
       <img style={{ maxWidth: '70%' }} src={img} alt={nombre} className="img-fluid img"/>
     </div>
    
     <div className="col-lg-6 p-4">
     
        <h2>{nombre}</h2>
       
        <div className="col-md-10 ">
        <p>{description}</p>
        </div>
        <div >
        <p className="precio">${precio}</p>
        </div>
    
     {addCantidad ? (
           <div className="col-lg-6  ">
           <Link className=" btn d-flex btn-link"  to="/cart"> Terminar Compra </Link>
           <button className=" btn d-flex btn-link"  onClick={handleShopping}> Seguir Comprando </button>
           </div>
           ) : 
             (
             <ItemCount initial={1} stock={stock} onAdd={onAdd}  />
             
             )
           }
           <p style={{marginLeft:'2rem'}}>Stock disponible {stock} {stock===1 ? 'unidad': 'unidades'}</p>
   </div>
   </div>
   </div>
*/  