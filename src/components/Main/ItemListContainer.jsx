import React, { useEffect, useState } from 'react';
import ItemList from './ItemList'; //-> import por default
import { useParams } from 'react-router-dom';
import BarLoader from "react-spinners/BarLoader";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { DataBase } from '../../services/firebaseconfig';
const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, SetLoading] =useState(true)
   
    const { categoryName } = useParams();
    //categoryName -> camisas, remeras, gorras

    useEffect(() => {
const collectionProd = collection(DataBase,'productos')
 
const referencia = categoryName 
? query (collectionProd,where('category' , '==' , categoryName))
:collectionProd
  
  getDocs (referencia)
.then((res)=> {
    const products = res.docs.map((prod) => {
return {
    id:prod.id,
    ...prod.data(),
}
    })
    setItems(products)
    console.log(products);
    //console.log(res.docs);
})
.catch((error)=>{
    console.log(error);
})
 .finally (()=> {
        SetLoading(false)
    })



     return ()=> SetLoading (true
        )
    }, [categoryName]);

    //console.log(items);
if (loading) {
    return <h1 className='ClipLoader'>  cargando.... <BarLoader className='BArloader'/></h1>
}
    return (
        <main>
          <div className="item-list-container">
    <ItemList items={items} />
</div>
        
        </main>
    );
};

export default ItemListContainer;


//const traerProductos = () => {
  //  return new Promise((res, rej) => {
    //    const prodFiltrados = products.filter(
      //      (prod) => prod.category === categoryName
        //);
        //const prod = categoryName ? prodFiltrados : products;
        //setTimeout(() => {
          //  res(prod);
        //},600);
    //});
//};
//traerProductos()
  //  .then((res) => {
    //    setItems(res);
  
 //   })
   // .catch((error) => {
     //   console.log(error);
    //})
    //.finally (()=> {
     //   SetLoading(false)
    //})
    //return ()=> SetLoading (true
      //  )