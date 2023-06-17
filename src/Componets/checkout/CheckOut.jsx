import { useState, useContext } from "react";
import { ContextCart } from "../../Context/CartContext";
import { db } from "../../services/Config";
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import { Container, TextField } from "@mui/material";
import './Checkout.css'
import Swal from 'sweetalert2';
import { Button } from "react-bootstrap";


const initialValues = {
  nombre: "",
  lastName: "",
  phone: "",
  emal: "",
  emailConfirmation: "",
};
const CheckOut = () => {
  const { cart, emptyCart, total } = useContext(ContextCart);
  const [values, setValues] = useState(initialValues);
  const { nombre, lastName, phone, email, emailConfirmation } = values;
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");
  const [fecha, setFecha] = useState(new Date());
  

  const handleInputChange = (event) => {
    const changeValues = {
      ...values,
      [event.target.name]: event.target.value,
    };
    setValues(changeValues);
  };

  const handleForm = (event) => {
    event.preventDefault();
    if(!nombre || !lastName || !phone || !email || !emailConfirmation) {
        setError("Por favor complete todos los campos"); 
        return;
    }

    //Validamos que los campos del email coincidan 
    if(email !== emailConfirmation) {
        setError("Los campos del email no coinciden");
        return;
    }
    const order = {
      item: cart.map((prod) => ({
        id: prod.item.id,
        nombre: prod.item.nombre,
        cantidad: prod.cantidad,
      })),

      total: total,
      nombre,
      lastName,
      phone,
      email,
      fecha:new Date()
    }
    Promise.all(
        order.item.map(async (prodOrder)=>{
            
        const prodRef= doc(db,"productos", prodOrder.id);
        const prodDoc= await getDoc(prodRef);
        
        const stockActual= prodDoc.data().stock
       
        await updateDoc(prodRef,{ stock: stockActual - prodOrder.cantidad,
        })
        
    })
    )
    
    .then(()=>{
        addDoc(collection(db,"ordenes"),order)
        .then((docRef)=>{
            setOrderId(docRef.id);
            
           
            emptyCart();
            setValues(initialValues);
        })
        .catch((err)=>{
            console.error("Error al crear la orden",err);
            setError("se produjo un error al crear la orden");
        });
    })
    .catch((err)=>{
        console.error("Error al actualizar stock",err);
        setError("se produjo un error al actualizar stock");
});




  }

  setTimeout(() => {
    setError(null);
  }, 2500);
const mostrarTicket=()=>{
  Swal.fire({
    title: 'Gracias por su compra',
    
    html: `<p>${fecha.toDateString()}<p/>,<p><b>Su número de orden es:<b/> ${orderId} <p/>`,
    icon:'success',
   
})
}
  return (
    <Container className="container-fluid mt-4 ">
      <h2 className="text-center">Checkout</h2>
      <form className="form " onSubmit={handleForm}>
        {cart.map((prod) => (
          <div key={prod.item.id} className="fs-4 fw-bold">
            <p>
              {prod.item.nombre} x {prod.cantidad}
            </p>
            <p>Precio: $: {prod.item.precio}</p>
            <hr />
          </div>
        ))}
          {
            (total === 0) ? "" 
            : <p className="fs-2 fw-bold">Total: ${total}</p>
          }
        <hr />
        <div className="container-fluid inputs">
        <TextField id="standard-basic" label="Nombre" variant="standard" 
         
       
            type="text"
            name="nombre"
            value={nombre}
            onChange={handleInputChange}
          />
       
        <TextField id="standard-basic" label="Apellido" variant="standard"  
         
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleInputChange}
        
        />
         <TextField id="standard-basic" label="Telefono" variant="standard"
          
            type="text"
            name="phone"
            value={phone}
            onChange={handleInputChange}
          />
       
       <TextField id="standard-basic" label="Correo Electronico" variant="standard"
        
            type="email"
            value={email}
            name="email"
            onChange={handleInputChange}
          />
       
       <TextField id="standard-basic" label="Confirmacion Correo " variant="standard"

            type="email"
            value={emailConfirmation}
            name="emailConfirmation"
            onChange={handleInputChange}
          />
        
   
        {error && <p className="alert alert-danger"> {error} </p>}
        <Button style={{Maxwidth:'60%', margin:'0 auto'}} className="btn btn-link"  data-bs-toggle="modal" data-bs-target="#exampleModal" type="submit"> Finalizar Compra </Button>
        </div>
      </form>
      {orderId && values (
      
         mostrarTicket()
      )}
    </Container>
  );
};

export default CheckOut;
