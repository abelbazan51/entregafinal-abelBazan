import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import BarLoader from "react-spinners/BarLoader";
import { collection, doc, getDoc,} from 'firebase/firestore';
import { DataBase } from '../../services/firebaseconfig';
const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
const [LoAding, SeTloading] =useState(true)
    const { id } = useParams();
    //estado

    useEffect(() => {
      const CollectionProd =collection(DataBase,'productos')
      const ref= doc(CollectionProd , id)

      getDoc(ref)
      .then((res) =>{
        setItem({  id:res.id,
            ...res.data(),
      });
    })
    .catch((error)=>  {
        console.log(error);
    })
        }, [id]);

if (LoAding) {
    return <h1 className='ClipLoader'>cargando..... <BarLoader className='Barloader'/></h1>
}
    return (
        <main>
       <div className="item-list-container">
<ItemDetail item={item} />
</div>
    
    </main>
    );
};

export default ItemDetailContainer;

//método de array que devuelve un {}

// filter -> []
// find -> {}

//products.find((prod)=> prod.id === 1)


//const traerProducto = () => {
  //  return new Promise((res, rej) => {
    //    const producto = products.find(
      //      (prod) => prod.id === Number(id)
        //);

       // setTimeout(() => {
         //   res(producto);
        //},1300);
    //});
//};
//traerProducto()
 //   .then((res) => {
   //     setItem(res);
    //})
    //.catch((error) => {
     //   console.log(error);
    //})
    //.finally (()=> {
     //   SeTloading(false)
    //})
    //return ()=> SeTloading (true
     //   )