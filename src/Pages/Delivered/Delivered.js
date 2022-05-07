import { Button, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import useUpdateInventory from '../../hooks/useUpdateInventory';
const axios = require('axios').default;

// import axios from "axios";
const Delivered = () => {
  const { inventoryId } = useParams();
    const [item, setItem] = useUpdateInventory(inventoryId);

  const handleDelivered = async () => {
    
    const updateQuantity = parseInt(item.quantity)- 1;
    console.log(updateQuantity);
    
    const url = `http://localhost:5000/delivered/${inventoryId}`;
    const items = {
      name: item.name,
      img: item.img,
      price: item.price,
      quantity: updateQuantity,
      supplierName: item.supplierName,
      description: item.description
    }
    
    try {
      await axios.put(url, items)
      .then(response => {
        if (response.data.modifiedCount === 1) {
          toast.success("One Item Delivered Successfully");
        }
        console.log(response.data);
      });
    } catch (error) {
      console.log(error);
    }
            try {
            const response = await axios.get(`http://localhost:5000/inventory/${inventoryId}`);
            
            setItem(response.data);
        } catch (error) {
            console.log(error);
        } 
  };

  const insertStock = async (event) => {
    event.preventDefault();
    const stockQuantity = parseInt(event.target.restock.value);
    if (stockQuantity > 0) {
      const url = `http://localhost:5000/restock/${inventoryId}`;
      const restockItems = {
      name: item.name,
      img: item.img,
      price: item.price,
      quantity: parseInt(item.quantity) + parseInt(stockQuantity),
      supplierName: item.supplierName,
      description: item.description
      };
      try {
        await axios.put(url, restockItems)
        .then(res => {
          if(res.data.modifiedCount === 1){
            toast('Item Restock Successfully', {
              icon: '👏',
            });
          }
        })
      } catch (error) {
        console.log(error);
      }
      try {
        const res = await axios.get(`http://localhost:5000/inventory/${inventoryId}`)
        setItem(res.data)
      } catch (error) {
        console.log(error);
      }
    }else{
      toast.error('Invalid Number')
    }
  }
  return (
    <div>
      <h2>Update & Restock Items</h2>
      <div className="w-50 container">
        <img className="w-50 mb-0 p-0 rounded-3 " src={item.img} alt="" />
        <h2>Stock: {item.quantity}</h2>
        <div className="text-start ms-2 ps-3 ">
          <h6>{item.name}</h6>
        <small>Price: $ {item.price}</small>
          <h5>Supplier Name: {item.supplierName}</h5>
          <p>
            <small>{item.description}</small>
          </p>
        </div>
        <Button className="btn btn-light" onClick={() => handleDelivered(item._id)}>Delivered</Button>
        <br />
        <h2>Restock This Items?</h2>
        <div className=' mt-4'>
                        <Form onSubmit={insertStock}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="number" name='restock' placeholder="Restock Quantity" />
                            </Form.Group>
                            <Button type='submit' className='btn btn-light mb-5 mt-2'>Restock</Button>
                        </Form>

                    </div>
      </div>
    </div>
  );
};

export default Delivered;
