import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ManageInventories = ({item, deleteItem}) => {
    const {  name, img, price, quantity, supplierName } = item;
    const navigate = useNavigate();

        const navigateToDelevired = id => {
            navigate(`/inventory/${id}`)
            console.log(id);
        }
    return (
        <div className='inventory'>
            <CardGroup bg='light' className='mt-4'>
                <Card className='pt-4'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Text as='h5'>Price: ${price}</Card.Text>
                        <Card.Text>Stock: {quantity} Pcs</Card.Text>
                        <Card.Text>Supplier: {supplierName}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <div className='d-flex '>
                        <button onClick={()=> navigateToDelevired(item._id)} className='btn'>Update</button>
                        <Button onClick={() => deleteItem(item._id)} className='btn-light'>Delete</Button>
                        </div>
                    
                    </Card.Footer>
                </Card>
            </CardGroup>

            
        </div>
    );
};

export default ManageInventories;