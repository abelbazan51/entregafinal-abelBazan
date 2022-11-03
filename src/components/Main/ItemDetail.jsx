import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
    const [unidades, setUnidades] = useState(0);

    const { addToCart , GetProductQuantity} = useContext(CartContext);

    const prueba = (numero) => {
        //console.log(`añadiste ${numero}`);
        setUnidades(numero);
        //item, numero
        addToCart(item, numero);
    };
    const Quantity = GetProductQuantity(item.id);

    return (
        <div className="container-detail">
            <img src={item.img} alt="" />
            <div>
                <h2>{item.title}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    rem, consequatur accusamus dicta incidunt sapiente cum ipsa,
                    ducimus
                </p>
                {
                <h2 style={{color: unidades===0 ?'red': 'blue'}}>{unidades ===0 ? `hay ${unidades} unidades`:`ya agregaste `}</h2>
                }
                {unidades === 0 ? (
                    <ItemCount prueba={prueba} stock={item.stock} initial={Quantity} />
                ) : (
                    <Link to=  "/cart"> Ir al carrito</Link>
                )}
            </div>
        </div>
    );
};

export default ItemDetail;

// //A
// const foo = (a) => {

// }

// //B
// foo(200)
