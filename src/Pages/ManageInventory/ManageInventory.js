import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import ManageInventories from './ManageInventories/ManageInventories';

const ManageInventory = () => {
    const [items, setItems] = useItems();
    const navigate = useNavigate();

    const addNewItem = () => {
      navigate('/additems')
  }
    const deleteItem = (id) => {
        const confirmDelete = window.confirm("Are you sure want to delete this item?");
        if (confirmDelete) {
          const url = `http://localhost:5000/inventory/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);

              const remainingItem = items.filter((item) => item._id !== id);
              setItems(remainingItem);
            });
          }
        };
        return (
          <div>
                <h1 className='mt-3 text-uppercase text-dark'>Manage Inventoies</h1>
          <Button onClick={addNewItem} className='btn-light ms-auto'>Add New Item</Button>
          <div className='container items-container'>
          {
              items.map(item => <ManageInventories
              key={item._id}
              item = {item}
              deleteItem = {deleteItem}
              ></ManageInventories>)

          }
          </div>
          
{/*            <Table striped bordered hover className='container'>

                <thead>
                    <tr>
                    <th>No</th>
                    <th>Items Name</th>
                    <th>Price</th>
                    <th>Supplier Name</th>
                    <th>Quantity</th>
                    <th>Action</th>
                    </tr>
                    </thead>
                    <tbody >
                {
                  items.map((item, index) =>
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.price} </td>
                    <td>{item.supplierName}</td>
                    <td>{item.quantity}</td>
                    <td>
                    <button onClick={()=> navigateToDelevired(item._id)} className='btn'>Update</button>
                    <button className='btn-outline-danger' onClick={() => deleteItem(item._id)}>Delete</button>
                    </td>
                    </tr>
                    )
            } 
            </tbody>
        </Table> */}
        </div>
    );
};

export default ManageInventory;