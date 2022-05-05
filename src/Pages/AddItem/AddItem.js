import React from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
      console.log(data);

    const url = `http://localhost:5000/inventory`
    fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          toast('Your Service is added');
          // data.reset();
        });
};
    return (
        <div className="w-50 text-center m-auto pt-4">
      <h2>Add Items</h2>
      <form className="d-flex text-center flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Name"
          required
        />
        <textarea
          className="mb-2"
          {...register("description")}
          placeholder="Description"
          required
        />
        <input
          className="mb-2"
          type="number"
          {...register("price")}
          placeholder="Price"
          required
        />
        <input
          className="mb-2"
          type="text"
          {...register("supplier")}
          placeholder="Supplier Name"
          required
        />
        <input
          className="mb-2"
          type="text"
          {...register("img")}
          placeholder="Photo"
          required
        />
        <input
          className="mb-2 btn w-25 text-center"
          type="submit"
          value="Add"
        />
      </form>
    </div>
    );
};

export default AddItem;