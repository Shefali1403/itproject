import { createContext, useState, useEffect } from "react";
import { getAllProducts, getCategories } from "../api/Apidata";
export const DataContext = createContext();

export default function DataProvider({ children }) {
  const [data, setData] = useState(null);
  const [category, setCategory] = useState(null);
  const [cart, setCart] = useState([]);

  function addtocart(id, image, price, title) {
    setCart((prev) => {
      const updated_value = [...prev];
      let flag = 0;
      for (let item of updated_value) {
        if (id === item.id) {
          item.quantity++;
          flag = 1;
        }
      }

      if (!flag) {
        updated_value.push({
          id,
          image,
          price,
          title,
          quantity: 1,
        });
      }
      console.log(updated_value);
      return updated_value;
    });
  }

  function update_quantity(id, action) {
    setCart((prev) => {
      const updated_value = [...prev];
      updated_value.forEach((item) => {
        if (item.id === id) {
          if (action === "inc") item.quantity++;
          if (action === "dec") item.quantity--;
          if (item.quantity <= 0) {
            removefromcart(item.id);
          }
        }
      });
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

  return (
    <DataContext.Provider
      value={{
        data,
        cart,
        setData,
        category,
        setCategory,
        addtocart,
        removefromcart,
        update_quantity,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
