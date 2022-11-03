import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useContext,  useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { DataBase } from '../../services/firebaseconfig';

const Form = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');

    const {cart,total , deleteAll} = useContext(CartContext);
 const totalPrice =total()
    const handleSubmit = (e) => {
        e.preventDefault();
      
const order ={
    buyer :{name,lastName},
    items:cart,
    total:totalPrice,
    date:serverTimestamp(),
}
const ordercollection = collection (DataBase,'orders')
addDoc(ordercollection,order)
.then((res) =>  {
console.log(res.id);
deleteAll()
})
.catch((error) =>{
    console.log(error);
})
    };


    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    };


  
    return (
        <div
            style={{
                minHeight: '70vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
           
            <form onSubmit={handleSubmit} action="">
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre..."
                    onChange={handleChangeName}
                    value={name}
                />
                <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido..."
                    onChange={handleChangeLastName}
                    value={lastName}
                />
                <button>Enviar</button>
            </form>
        </div>
    );
};

export default Form;
