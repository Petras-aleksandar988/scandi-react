import { useNavigate } from "react-router-dom";
import { validateFormData } from "./Validation";
import axios from "axios";

function SaveBtn({ formData, setErrors }) {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    const errors = validateFormData(formData);

    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }

    try {
      const response = await axios.post(
        "https://aleksa-scandiweb.shop/react/add-product-db.php",
        formData
      );
      const { status, message } = response.data;

      if (status === "success") {
        navigate("/");
      } else if (status === "errorSku") {
        setErrors({ sku: "SKU already exists, use another SKU" });
      } else {
        console.error("Error:", message);
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <button type="submit" id="save-btn" onClick={handleSubmit}>
      Save
    </button>
  );
}

export default SaveBtn;
