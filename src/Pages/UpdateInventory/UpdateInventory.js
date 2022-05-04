import React from 'react';
import { useParams } from 'react-router-dom';
import useUpdateInventory from '../../hooks/useUpdateInventory';

const UpdateInventory = () => {
    const {id} = useParams();

    const [item] = useUpdateInventory(id);
    return (
        <div>
            <h2>Update Inventories: {id}</h2>
            <h3>{item.name}</h3>
        </div>
    );
};

export default UpdateInventory;