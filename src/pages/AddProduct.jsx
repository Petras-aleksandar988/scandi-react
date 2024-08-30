import React, { useState } from "react";
import { Link } from "react-router-dom";
import SaveBtn from "../components/SaveBtn";
import FormField from "../components/FormField";
import DynamicFields from "../components/DinamicFields";
import SelectType from "../components/SelectType";

function AddProduct() {
  const [formData, setFormData] = useState({
    sku: "",
    name: "",
    price: "",
    type: "",
    size: "",
    weight: "",
    height: "",
    width: "",
    length: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleTypeChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      type: value,
      size: value === "dvd" ? prev.size : "",
      weight: value === "book" ? prev.weight : "",
      height: value === "furniture" ? prev.height : "",
      width: value === "furniture" ? prev.width : "",
      length: value === "furniture" ? prev.length : "",
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      type: value ? "" : prevErrors.type,
    }));
  };

  return (
    <div className="container">
      <form id="product_form">
        <div className="header">
          <Link to="/">
            <h1 className="title">Product Add</h1>
          </Link>
          <div className="btns">
            <SaveBtn formData={formData} setErrors={setErrors} />
            <Link to="/">
              <button type="button" id="cancel-btn">
                Cancel
              </button>
            </Link>
          </div>
        </div>
        <div className="form-container">
          <FormField
            id="sku"
            name="sku"
            value={formData.sku}
            onChange={handleChange}
            error={errors.sku}
            label="SKU:"
          />
          <FormField
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            label="Name:"
          />
          <FormField
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            error={errors.price}
            label="Price:"
          />
          <div className="label-input">
            <label htmlFor="type">Type Switcher:</label>
            <div className="input-notification">
              <SelectType
                formData={formData}
                handleTypeChange={handleTypeChange}
                errors={errors}
              />
            </div>
          </div>
          <DynamicFields
            type={formData.type}
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
