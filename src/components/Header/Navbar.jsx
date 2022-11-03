import React from 'react';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { DataBase } from '../../services/firebaseconfig';
import { useState } from 'react';

const Navbar = () => {
    const [categories,setcategories]=useState([])
    useEffect (() =>{
const collectionCat= collection (DataBase , 'categorias')
getDocs(collectionCat) 
.then((res) =>{
    //console.log(res.docs);
    const categorias=res.docs.map((cat)=> {
        return{
            id:cat.id,
            ...cat.data(),
        
        }
    })
setcategories(categorias)
} )
.catch((error) =>{
    console.log(error);

})

    },[])
    
    //console.log(categories);



    return (
        <nav className="navbar">
            <Link to="/">
                <h1>el mercadito
                    
                </h1>
            </Link>
            <ul>
              {
                categories.map ((cat) => (
                    <NavLink key={cat.id} to={`/category/${cat.path}`}>{cat.name}</NavLink>
                ))
              }
            
            </ul>
            <Link to="/cart">
                <CartWidget />
            </Link>
        </nav>
    );
};

export default Navbar;
