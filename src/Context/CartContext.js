
import { createContext, useState } from "react";


export const ContextCart = createContext({ 
    cart:[],
    total:0,
    totalQuantity:0
 })
//creation new component provider.
export const CartProvider= ({children}) =>{
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    

//Functions for manipulating the product cart
    const addProducts=(item, cantidad)=>{
        const existProduct= cart.find( prod => prod.item.id === item.id);
        if(!existProduct){
            setCart( ant =>[...ant,{item, cantidad}]);
            setTotal(ant => ant + (item.precio * cantidad) );
            setTotalQuantity(ant => ant + cantidad);
        }else{
           const updateCart= cart.map(prod =>{
            if(prod.item.id === item.id){
                return {...prod, cantidad: prod.cantidad + cantidad}
            }else{
                return prod;
            }
           })
           setCart( updateCart);
           setTotal(ant => ant + (item.precio * item.cantidad) );
           setTotalQuantity(ant => ant + cantidad);
        }


        //Functions for deleting products from cart
    }
    const deleteProducts = (idProd) => {
        const prodDelete = cart.find(prod =>prod.item.id === idProd);
        const updateCart = cart.filter(prod =>prod.item.id !== idProd);
        console.log(updateCart);
        setCart(updateCart);
        setTotalQuantity(ant => ant - prodDelete.cantidad);
        setTotal(ant => ant - (prodDelete.item.precio * prodDelete.cantidad));
    }

    // Function empty cart
    const emptyCart = () =>{
        setCart([]);
        setTotalQuantity(0);
        setTotal(0);
    }
return(
        <ContextCart.Provider value={{cart, addProducts, deleteProducts, emptyCart, total, totalQuantity}}>
            {children}
        </ContextCart.Provider>
)

}