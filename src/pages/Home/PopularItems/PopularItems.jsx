import { useEffect, useState } from "react";
import SingleItems from "./SingleItems";


const PopularItems = () => {
    const[items,setItems] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/popularItems')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    return (
        <div>
            
            <h1 className="text-4xl font-bold mb-4 text-center">Popular Items</h1>
            <div className="md:grid grid-cols-4 gap-4 mb-4">
            {
                items.map(item=> <SingleItems
                key={item.id}
                item= {item}
                ></SingleItems>)
            }

            </div>
            
        </div>
    );
};

export default PopularItems;