import { useEffect, useState } from "react";

const useUpdateInventory = (inventoryId) => {
  const [item, setItem] = useState({});
  useEffect(() => {
    fetch(`https://floating-sands-84508.herokuapp.com/inventory/${inventoryId}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [inventoryId]);
  return [item, setItem];
};

export default useUpdateInventory;
