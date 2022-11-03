import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
const Cart = () => {
    const { cart, deleteAll, deleteOne } = useContext(CartContext);

    if(cart.length ===0 ){
        return <h1>aun no ay productos</h1>
    }
    return (
        
        <div>
            {cart.map((prod) => (
                <div
                 
                >
                    <img src={prod.img} alt={prod.title} width="80px" />
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h2>{prod.title}</h2>
                        <h3 style={{ margin: '0px 10px' }}>$ {prod.price}.-</h3>
                        <h3>Cantidad: {prod.cantidad}</h3>
                        <h3>Subtotal: ${prod.price * prod.cantidad}.-</h3>
                    </div>
                    <button size={25}
                    color="red" 
                    onClick={( ) => deleteOne(prod.id)}/>
                    <button>Delete</button>
                </div>
            ))}
            <h2>Total: $0</h2>
            <button onClick={deleteAll}>Eliminar todo el carrito</button>
            <Link style ={{border:'2px solid green', padding:'4px 6 px' , borderRadius:'8px', }} to="/checkout"> chekout </Link>
        </div>
    );
};

export default Cart;
