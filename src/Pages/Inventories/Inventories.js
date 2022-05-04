import React, { useEffect, useState } from 'react';
import useItems from '../../hooks/useItems';
import Inventory from '../Homepage/Inventory/Inventory';
import './Inventories.css'

const Inventories = () => {
    const [items, setItems] = useItems([]);
  
    // useEffect(() =>{
    //     fetch('items.json')
    //     .then(res => res.json())
    //     .then(data => setItems(data))
    // },[])
    return (
        <div id="items" className="container">
      <h1 className="items-title py-4">Our items{items.name}</h1>
      <div className="items-container">
        {
        items.map((item) => (
          <Inventory 
          key={item._id} 
          item={item}>
          </Inventory>
        ))}
      </div>
    </div>
    );
};

export default Inventories;