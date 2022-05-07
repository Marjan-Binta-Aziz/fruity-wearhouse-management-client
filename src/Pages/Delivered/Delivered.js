import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';
import useUpdateInventory from '../../hooks/useUpdateInventory';

const Delivered = () => {
    const {inventoryId} = useParams();

    const [item,setItem] = useUpdateInventory(inventoryId);

    const handleDelivered = async () => {
        const updatedQuantity = parseInt(item.quantity-1);
        const url = `http://localhost:5000/inventory/${inventoryId}`

        const items = {
            name: item.name,
            img: item.img,
            price: item.price,
            quantity: updatedQuantity,
            supplierName: item.supplierName,
            description: item.description
        }
        try{
            await axios.put(url, items)
            .then(response => {
                if(response.data.modifiedCount === 1)
                {
                    toast.success('One Item Delivered Successfully')
                }
                setItem(response);
            });
        }
        catch (error){
            console.log(error);
        }
        

/*         try {
            const response = await axios.get(`http://localhost:5000/inventory/${inventoryId}`);
            
            setItem(response.data);
        } catch (error) {
            console.error(error);
        } */
    
    }
    return (
        <div>
            <h2>Update Inventories:</h2>
            <div className='w-25 container'>
            <img className='w-100 mb-4 p-4 rounded-3 ' src={item.img} alt="" />
                <h2>{item.name}</h2>
                <h4>Price: $ {item.price}</h4>
            <div className='text-start ms-2 ps-3 '>
            <h5>Supplier Name: {item.supplierName}</h5>
            <p>Quantity: {item.quantity}</p>
            <p><small>{item.description}</small></p>

            </div>
            <Button className='btn btn-light' onClick={()=> handleDelivered(item._id)}>Delivered</Button>
            <br />
            <Link className="text-danger text-decoration-none" to="/restockitems">Restock Items?</Link>

                    
            </div>
        </div>
    );
};

export default Delivered;