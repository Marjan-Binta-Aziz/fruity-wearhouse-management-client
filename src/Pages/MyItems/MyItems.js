import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const axios = require('axios');
const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const email = user.email;
    console.log(email);
    useEffect(()=>{        
        const url = `http://localhost:5000/myitems?email=${email}`

        const getMyItems = async () => {
            await axios.get(url)
                .then(response => {
                    setItems(response.data);
                })
            }
            getMyItems();
    },[user])
    const deleteFromMyItems = async (id) => {

        const deleteMyItem = window.confirm('Are you sure to delete this item?');
        if (deleteMyItem) {
            const url = `http://localhost:5000/myitems/${id}`;

            await axios.delete(url)
                .then(response => {
                    if (response.data.deletedCount === 1) {
                        const restItems = items.filter(item => item._id !== id);
                        setItems(restItems);
                    }
                })

        } 
        
    }
    return (
        <div className='mb-5'>
            <h1 className='text-uppercase text-dark'>My Items</h1>
        <div className='col col-md-10 offset-md-1 my-5'>
            <Table striped bordered hover>

                <thead>
                    <tr>
                        <th>No:</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item, index) =>

                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td className='text-start'>{item.name}</td>
                                <td>$ {item.price}</td>
                                <td>{item.quantity} pieces </td>
                                <td><Button className='btn-light' onClick={() => deleteFromMyItems(item._id)}>Delete</Button></td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>
        </div>

    </div >
    );
};

export default MyItems;