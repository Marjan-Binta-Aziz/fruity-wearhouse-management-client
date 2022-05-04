import { useEffect, useState } from "react";

const useUpdateInventory = (id) => {
    const [item, setItem] = useState();
    useEffect( () => {
        fetch(`http://localhost:5000/inventory/${id}`)
        .then(res => res.json())
        .then(data => setItem(data))
    },[id])
    return [item];
};

export default useUpdateInventory;