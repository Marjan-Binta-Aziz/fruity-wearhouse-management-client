import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import Inventory from '../Homepage/Inventory/Inventory';
import './Inventories.css'

const Inventories = () => {
    const [items, setItems] = useItems([]);

    return (
        <div id="items" className="container">
      <h1 className="items-title py-4">Our items{items.name}</h1>
      <div className="items-container">
        {
          
        items.slice(0, 6).map((item) => (
          <Inventory 
          key={item._id} 
          item={item}>
          </Inventory>
        ))}
      </div>
      <div className='m-3 p-3 '>
      <Link to='/manage' className="border border-3 rounded-3 p-2 text-black text-decoration-none ">Manage Inventories</Link>
      </div>
    </div>
    );
};

export default Inventories;