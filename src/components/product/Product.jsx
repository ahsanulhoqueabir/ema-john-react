 import './Product.css'
 
 const Product = (props) => {
    const {id,img,name,seller,quantity,price,ratings} = props.allData;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='details'>
                <h5>{name}</h5>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} star </p>
            </div>
                <button>Add to Cart <i className="fa-solid fa-cart-plus"></i> </button>
        </div>
    );
 };
 
 export default Product;