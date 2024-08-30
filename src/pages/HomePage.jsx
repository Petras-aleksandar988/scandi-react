import Navbar from "../components/Navbar"
import axios from "axios";
import DisplayProducts from "../components/DisplayProducts"
import { useState, useEffect } from "react"


function HomePage() {
    

    const [selectedProducts, setSelectedProducts] = useState([]);
    const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.post('https://aleksa-scandiweb.shop/react/');
      if (response.data.status === 'success') {
        setProducts(response.data.products);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
        setError(response.data.message);
    }
  };

    const handleSelectedProductsChange = (selected) => {
        setSelectedProducts(selected);
      };
  return (
    <>
     <Navbar selectedProducts={selectedProducts} fetchProducts={fetchProducts} />
    <DisplayProducts onSelectedProductsChange={handleSelectedProductsChange} products={products} error={error} /> 
    </>

  )
}

export default HomePage