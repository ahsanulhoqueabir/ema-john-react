import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shops.css'

import React, { useEffect, useState } from 'react';


const Shops = () => {
    const [product,setProduct]=useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>
    {
        fetch('https://raw.githubusercontent.com/ahsanulhoqueabir/ema-john-react/main/src/fakeData/products.json').then(response => response.json()).then(data => setProduct(data))

    },[]);

    const ProductAdd = (product)=> {
        
        let newCart= [...cart,product]
        setCart(newCart)
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