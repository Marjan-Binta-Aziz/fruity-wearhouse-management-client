import React from 'react';
import { useParams } from 'react-router-dom';
import useUpdateInventory from '../../hooks/useUpdateInventory';

const UpdateInventory = () => {
    const {inventoryId} = useParams();

    const [item] = useUpdateInventory(inventoryId);
    return (
        <div>
            <h2>Update Inventories:{item.name} {inventoryId}</h2>
            <h3>Name :{item.name}</h3>
        </div>
    );
};

export default UpdateInventory;