 import './Product.css'
 
 const Product = (props) => {
    // console.log(props);
    const {id,img,name,seller,quantity,price,ratings} = props.allData;
    const ProductAdd = props.ProductAdd;
    // console.log(ProductAdd);
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='details'>
                <h5>{name}</h5>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} star </p>
            </div>
                <button onClick={()=>ProductAdd(props.allData)}>Add to Cart <i className="fa-solid fa-cart-plus"></i> </button>
        </div>
    );
 };
 
 export default Product;