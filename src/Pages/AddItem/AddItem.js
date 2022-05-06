import { Button, Form } from 'react-bootstrap';
import React from 'react';
import toast from 'react-hot-toast';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddItem = () => {

    const [user] = useAuthState(auth);
    const handleItems = event => {
    event.preventDefault();

    const name = event.target.name.value;
    const price = event.target.price.value;
    const img = event.target.img.value;
    const description = event.target.description.value;
    const quantity = event.target.quantity.value;
    const supplierName = event.target.supplierName.value;
    const email = user?.email;

    const item = {
        name: name,
        price: price,
        img: img,
        description,
        quantity,
        supplierName: supplierName,
        email
    }

    const url = 'http://localhost:5000/inventory';
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },

        body: JSON.stringify(item)
    })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                toast.success('The item has benn added successfully!')
            }
        })
    event.target.reset();
}
    return (
      <div className='mb-5'>
         <h1 className='my-5 text-uppercase text-dark'>Add New Item</h1>
            <div className='w-25 mx-auto mt-5'>
                <Form onSubmit={handleItems}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="name" name='name' placeholder="Item Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="number" name='price' placeholder="Item Price" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="text" name='img' placeholder="Image URl" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control as="textarea" name='description' row='4' placeholder="A short description of Item" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="number" name='quantity' placeholder="Quantity" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="text" name='supplierName' placeholder="Supplier Name" />
                    </Form.Group>
                    <Button variant="light" type="submit">
                        Add This Item
                    </Button>
                </Form>
            </div>
        </div>



    );
};

export default AddItem;