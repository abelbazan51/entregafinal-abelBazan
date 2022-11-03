import { createContext, useState } from 'react';

export const CartContext = createContext();

const Provider = ({ children }) => {
    //console.log(props.children);
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        const producto = { ...item, cantidad };
        if (isInCart(producto.id)) {
            sumarCantidad(producto)
          //  alert('Ya está en el carrito flaco, sumale la cantidad');
        } else {
            setCart([...cart, producto]);
        }

        //...item -> id: 1, nombre: "Remera", price: 200
        // const usuario = {...item, nombre: "Eric", apellido: "Wajnrajch" }
        //cart.push() ⛔️
    };
    const sumarCantidad = (prodAgregado)=>{
        const carritoActualizado = cart.map((prodDelCart) => {
            if(prodDelCart.id ===prodAgregado.id){
                const prodActualizado={
                    ...prodDelCart,cantidad:prodDelCart.cantidad+prodAgregado.cantidad,

                }
                return prodActualizado
            }else{
                return prodDelCart
            }
        })
        setCart(carritoActualizado)
    }

    const isInCart = (id) => cart.some((prod) => prod.id === id);

    const deleteAll = () => setCart([]);
    

    //borrar un solo producto

    const deleteOne =(id) => {
        const prodFiltrados=cart.filter ((prod) => prod.id !== id)
        setCart(prodFiltrados)
    }
    //sumar cantidad total de unidades

    //sumar precio total


const totalUnidades =()=> {
    let acc =0
    const copia=[...cart]
    copia.forEach((prod)=> {

        acc += acc + prod.cantidad
    })
    return acc
}


const total =() =>  {
    return 1000
}

   // console.log(cart)
const GetProductQuantity =(id) => {
const Product = cart.find((prod) => prod.id===id)
return Product?.cantidad



}
    return (
        <CartContext.Provider value={{ cart, total, totalUnidades,  addToCart, deleteAll ,deleteOne ,GetProductQuantity}}>
            {children}
        </CartContext.Provider>
    );
};

export default Provider;
