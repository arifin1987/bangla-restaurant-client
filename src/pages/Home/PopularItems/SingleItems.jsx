/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import { AuthContext } from "../../../providers/AuthProvider";


// eslint-disable-next-line react/prop-types
const SingleItems = ({item}) => {
    const {user}= useContext(AuthContext);
    const [,refetch]= useCart();
    const navigate = useNavigate();
    const location = useLocation();
    
    const{_id,image,name,price} = item;
    const handleAddToCart = product =>{
        console.log(product);
        if(user && user.email){
            const cartItem ={cartId:_id,image,price,name,email:user.email}
            console.log(cartItem);
        
        fetch('https://bangla-restaurant-server.vercel.app/carts',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(cartItem)
        })
        .then(res=> res.json())
        .then(data =>{
            if(data.insertedId){
                refetch();
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
    else{
        Swal.fire({
            title: 'Please login to order the item',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login now!'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login', {state: {from: location}})
            }
          })
    }

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