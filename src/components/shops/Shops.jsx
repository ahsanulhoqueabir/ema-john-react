import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shops.css'

import React, { useEffect, useState } from 'react';


const Shops = () => {
    const [product,setProduct]=useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>
    {
        fetch('https://raw.githubusercontent.com/ahsanulhoqueabir/ema-john-react/main/public/products.json').then(response => response.json()).then(data => setProduct(data))
        // fetch('products.json').then(response => response.json()).then(data => setProduct(data))

    },[]);

    // useEffect(()=>
    // {
    //     const storedCart = getShoppingCart();
    //     // step-1: get id 
    //     for(const id in storedCart)
    //     {
    //         // step-2: get the product by using id 
    //         const setPro = product.find(p => p.id  === id)
    //         // step 3: quantity ofproducts 
    //         const x = storedCart[id]
    //         // setPro.quantity = x;
    //         // console.log(x);
    //         console.log(setPro);
    //         console.log(setPro.quantity)
    //     }
    // },[product]);
    useEffect(()=>{
        const storedCart = getShoppingCart();
        let savedcart = [];
        for(let id in storedCart)
        {
            const addedProduct = product.find(p => p.id === id)
            // console.log(addedProduct);
            if(addedProduct)
            {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;
                savedcart.push(addedProduct)
            }
        }
        setCart(savedcart)
    },[product])

    const ProductAdd = (product)=> {
        
        let newCart= [...cart,product]
        setCart(newCart)
        addToDb(product.id)
    }


    return (
        <div className='shopContainer'>
            <div className='cardContainer'>
                {
                    product.map(p => <Product 
                    key={p.id}
                    allData={p}
                    ProductAdd={ProductAdd}
                    ></Product>)
                }
            </div>
            <div className='cartContainer '>
               <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shops;