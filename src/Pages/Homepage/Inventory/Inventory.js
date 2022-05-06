import React from 'react';
import { useNavigate } from 'react-router-dom';

    import './Inventory.css'
    const Inventory = ({item}) => {
        const { name, price, img, description,supplierName, quantity} = item;
        const navigate = useNavigate();

        const navigateToSingleInventory = id => {
            navigate(`/inventory/${id}`)
            console.log(id);
        }
       

        return (
            <div className='inventory'>
            <img className='w-100 mb-4 p-4 rounded-3 ' src={img} alt="" />
                <h2>{name}</h2>
            <h4>Price: $ {price}</h4>
            <div className='text-start ms-2 ps-3 '>
            <h5>Supplier Name: {supplierName}</h5>
            <p><small>{description}</small></p>
            <p>Quantity: {quantity}</p>
            </div>
            <button onClick={()=> navigateToSingleInventory(item._id)} className='btn'>Update</button>

                    
            </div>
        );
    };

    export default Inventory;