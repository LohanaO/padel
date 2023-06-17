import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/itemDetail";
import { useParams } from "react-router-dom";

import {getDoc, doc} from 'firebase/firestore';
import {db} from '../../services/Config';


const ItemDetailContainer = () => {

  const [producto, setProducto] = useState(null);

  const {itemId} = useParams();

  useEffect(() => {

    const newDoc= doc(db, "productos", itemId)
    
    getDoc(newDoc)
        .then((res) =>{
          const data= res.data();
          const newProd= {id: res.id, ...data}
          setProducto(newProd)
       
        })
        .catch((err) =>console.log(err));
  }, [itemId]);

  return(
          <div>
              <h2 style={{textAlign:'center', marginTop:'30px', textTransform:'uppercase'}}>Detalle de produtos</h2>
              <ItemDetail {...producto}/>
          </div>
  )
}

export default ItemDetailContainer;
