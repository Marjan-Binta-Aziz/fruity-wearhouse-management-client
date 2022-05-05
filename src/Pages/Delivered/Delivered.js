import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useUpdateInventory from '../../hooks/useUpdateInventory';

const Delivered = () => {
    const {inventoryId} = useParams();

    const [item] = useUpdateInventory(inventoryId);
    return (
        <div>
            <h2>Update Inventories: {inventoryId}</h2>
            <div className='w-25 container'>
            <img className='w-100 mb-4 p-4 rounded-3 ' src={item.img} alt="" />
                <h2>{item.name}</h2>
                <h4>Price: $ {item.price}</h4>
            <div className='text-start ms-2 ps-3 '>
            <h5>Supplier Name: {item.supplierName}</h5>
            <p>Quantity: {item.quantity}</p>
            <p><small>{item.description}</small></p>

            </div>
            <button className='btn'>Delivered</button>
            <br />
            <Link className="text-danger text-decoration-none" to="/restockitems">Restock Items?</Link>

                    
            </div>
        </div>
    );
};

export default Delivered;