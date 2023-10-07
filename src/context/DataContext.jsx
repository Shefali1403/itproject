import { createContext, useState, useEffect } from "react";
import { getAllProducts, getCategories } from "../api/Apidata";
export const DataContext = createContext();

export default function DataProvider(prop){
  const [data, setData] = useState(null);
  const [category, setCategory] = useState(null);
  const [cart, setCart] = useState([]);

  function addtocart(image, price, quantity, title) {
    setCart((prev) => {
      const updated_value = [...prev, { image, price, quantity, title }];
      console.log(updated_value);
      return updated_value;
    });
  }

  function removefromcart(id) {
    setCart((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  }



  useEffect(() => {
    getAllProducts().then((data) => setData(data));
    getCategories().then((data) => setCategory(data));
  }, []);

  useEffect(() =>  {
    console.log(cart)
  }, [cart])

  return <DataContext.Provider value = {{
    data,
    setData,
    category,
    setCategory,
    cart,
    addtocart,
    removefromcart,
  }}> 
    {prop.children}
  </DataContext.Provider>
}