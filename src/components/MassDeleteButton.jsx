import axios from "axios";
import { useNavigate } from "react-router-dom";

function MassDeleteButton({ selectedProducts, fetchProducts }) {
    const navigate = useNavigate();

 

  const handleMassDelete = async () => {
    try {
      const response = await axios.post(
        "https://aleksa-scandiweb.shop/react/delete-products.php",
        {
          products: selectedProducts,
        }
      );
      if (response.data.status === "success") {
 
            fetchProducts();
  
        navigate("/");
      }
    } catch (error) {
      alert("Request failed: " + error.message);
    }
  };

  return (
    <button type="button" id="delete-product-btn" onClick={handleMassDelete}>
      MASS DELETE
    </button>
  );
}

export default MassDeleteButton;
