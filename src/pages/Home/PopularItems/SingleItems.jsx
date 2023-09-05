/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";


// eslint-disable-next-line react/prop-types
const SingleItems = ({item}) => {
    const{image,name,price}=item
    const handleAddToCart = item =>{
        fetch('http://localhost:5000/carts',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(item)
        })
        .then(res=>res.json())
        .then(data =>{
            if(data.insertedId){
                
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Item added on the cart.',
                    showConfirmButton: false,
                    timer: 1500
                  })

            }

        })
        
    }
    
    return (
        <div>
            <img src={image} />
            <h1 className="text-xl">{name}</h1>
            <p className="font-bold">${price}</p>
            <button onClick={()=>handleAddToCart(item)} className="btn btn-primary"><Link>Add To Cart</Link></button>

        </div>
    );
};

export default SingleItems;