import { Button, Card, Form, Stack } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import useUpdateInventory from '../../hooks/useUpdateInventory';
const axios = require('axios').default;
const SingleInventory = () => {
    const inventoryId = useParams();

    const [item, setItem] = useUpdateInventory(inventoryId);
    const deliverQuantity = async () => {
        const updatedQuantity = parseInt(item.quantity) - 1;
        const url = `http://localhost:5000/inventory-deliverd/${inventoryId}`;

        const items = {
            name: item.name,
            img: item.img,
            price: item.price,
            quantity: updatedQuantity,
            supplierName: item.supplierName,
            description: item.description
        }
        try {
            await axios.put(url, items)
                .then(response => {
                    if (response.data.modifiedCount === 1) {
                        toast("Deliverd one item")
                    }
                    console.log(response);
                })

        }

        catch (error) {
            console.error(error);
        }

        try {
            const response = await axios.get(`http://localhost:5000/inventory/${inventoryId}`);
            setItem(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const insertStock = async (event) => {
        event.preventDefault();
        const stockQuantity = parseInt(event.target.restock.value);
        if (stockQuantity > 0) {
            const paramsId = inventoryId.id;
            const url = `http://localhost:5000/inventory-restock/${inventoryId}`;
            const restockInventories = {
                name: item.name,
                img: item.img,
                price: item.price,
                quantity: parseInt(item.quantity) + parseInt(stockQuantity),
                supplierName: item.supplierName,
                inventory: item.description
            };

            try {
                await axios.put(url, restockInventories)
                    .then(res => {
                        if (res.data.modifiedCount === 1) {
                            toast('This item restocked!')
                        }
                    })
            }
            catch (error) {
                console.log(error);
            }

            try {
                const response = await axios.get(`http://localhost:5000/inventory/${paramsId}`);
                inventoryId(response.data);
            } catch (error) {
                console.error(error);
            }

        } else {
            console.log('Please enter a valid number');
        }
        event.target.reset()
    }
    return (
        <div>
        <div className='container-fluid py-5 bg-dark'>
            <h1 className='mt-5 text-uppercase text-white'>{item.name}</h1>
            <Button onClick={() => deliverQuantity(item._id)} variant="outline-info" className='mb-5 mt-2'>Delivered</Button>
        </div>
        <div className='container py-5'>
            <div className='row'>
                <div className='col-lg-5'>
                    <img className='img-fluid' src={item.img} alt="" />
                </div>
                <div className='col-lg-7 text-start mt-4'>
                    <Stack direction='horizontal' gap={3}>
                        <Card.Subtitle as='h5'>Price: $ {item.price}</Card.Subtitle>
                        {'|'}
                        <Card.Subtitle as='h5'>Stock: {item.quantity} Pcs</Card.Subtitle>
                        {'|'}
                        <Card.Subtitle as='h5'>Supplier: {item.supplierName}</Card.Subtitle>
                    </Stack>
                    <p className='mt-5 lh-lg'>{item.description}</p>
                    <Form onSubmit={insertStock}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="number" name='restock' placeholder="Restock Quantity" />
                        </Form.Group>
                        <Button variant="outline-info" type='submit' className='mb-5 mt-2'>Restock This Item</Button>
                    </Form>

                </div>
            </div>
        </div>
    </div>
    );
};

export default SingleInventory;