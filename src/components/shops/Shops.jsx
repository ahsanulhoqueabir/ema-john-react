import Product from '../product/Product';
import './Shops.css'

import React, { useEffect, useState } from 'react';


const Shops = () => {
    const [product,setProduct]=useState([]);
    useEffect(()=>
    {
        fetch('https://raw.githubusercontent.com/ahsanulhoqueabir/ema-john-react/main/src/fakeData/products.json').then(response => response.json()).then(data => setProduct(data))

    },[])

    return (
        <div className='shopContainer'>
            <div className='cardContainer'>
                {
                    product.map(p => <Product 
                    key={p.id}
                    allData={p}
                    ></Product>)
                }
            </div>
            <div className='cartContainer '>
                <h4>Order Summary</h4>
            </div>

        </div>
    );
};

export default Shops;