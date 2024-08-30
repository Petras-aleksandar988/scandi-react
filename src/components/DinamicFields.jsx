import FormField from "../components/FormField";

function DynamicFields({ type, formData, handleChange, errors }) {
  return (
    <>
      {type === "dvd" && (
        <>
          <FormField
            id="size"
            name="size"
            value={formData.size}
            onChange={handleChange}
            error={errors.size}
            label="Size (MB):"
          />
          <p className="description">
            {"* Please provide size in MB (numeric only)"}
          </p>
        </>
      )}
      {type === "book" && (
        <>
          <FormField
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            error={errors.weight}
            label="Weight (KG):"
          />
          <p className="description">
            {"Please provide weight in KG (numeric only)"}
          </p>
        </>
      )}
      {type === "furniture" && (
        <>
          <FormField
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
            error={errors.height}
            label="Height:"
          />
          <FormField
            id="width"
            name="width"
            value={formData.width}
            onChange={handleChange}
            error={errors.width}
            label="Width:"
          />
          <FormField
            id="length"
            name="length"
            value={formData.length}
            onChange={handleChange}
            error={errors.length}
            label="Length:"
          />
          <p className="description">
            {"Please provide dimensions in format H x W x L (numeric only)"}
          </p>
        </>
      )}
    </>
  );
}

export default DynamicFields;
