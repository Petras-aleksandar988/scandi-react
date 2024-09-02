
function SelectType({ formData, handleTypeChange, errors }) {
  return (
 <>
        <select
          id="productType"
          name="type"
          value={formData.type}
          onChange={handleTypeChange}
        >
          <option value="" disabled>
            Type Switcher
          </option>
          <option value="dvd">DVD</option>
          <option value="book">Book</option>
          <option value="furniture">Furniture</option>
        </select>
        {errors.type && <div className="notification">{errors.type}</div>}
 </>
  
  );
}

export default SelectType;
