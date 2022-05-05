import React from 'react';
import { Table } from 'react-bootstrap';
import useItems from '../../hooks/useItems';

const ManageInventory = () => {
    const [items, setItems] = useItems();
    const deleteItem = (id) => {
        const proceed = window.confirm("Are you sure want to delete?");
        if (proceed) {
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
           <Table striped bordered hover className='container'>
                <thead>
                    <tr>
                    <th>Items Name</th>
                    <th>Price</th>
                    <th>Supplier Name</th>
                    <th>Quantity</th>
                    <th>Action</th>
                    </tr>
                    </thead>
                {
                items.map(item =>
                    <tbody key={item._id}>
                    <tr>
                    <td>{item.name}</td>
                    <td>{item.price} </td>
                    <td>{item.supplierName}</td>
                    <td>{item.quantity}</td>
                    <td><button  onClick={() => deleteItem(item._id)}>Delete</button></td>
                    </tr>
                    </tbody>)
            } 
        </Table>
        </div>
    );
};

export default ManageInventory;