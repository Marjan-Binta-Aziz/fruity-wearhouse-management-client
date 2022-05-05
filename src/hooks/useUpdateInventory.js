import { useEffect, useState } from "react";

const useUpdateInventory = (inventoryId) => {
    const [item, setItem] = useState({});
    useEffect( () => {
        fetch(`http://localhost:5000/inventory/${inventoryId}`)
        .then(res => res.json())
        .then(data => setItem(data))
    },[inventoryId])
    return [item];
};

export default useUpdateInventory;