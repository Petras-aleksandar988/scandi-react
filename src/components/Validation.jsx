
export function validateFormData(formData) {
    const errors = {};
  
    // validation
    if (!formData.sku) errors.sku = 'SKU is required';
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.price || isNaN(formData.price)) errors.price = 'Valid price is required';
    if (!formData.type) errors.type = 'Type is required';
  
    // Validate dynamic fields based on type
    if (formData.type === 'dvd') {
      if (!formData.size) errors.size = 'Size is required';
      else if (isNaN(formData.size)) errors.size = 'Size must be a number';
    } else if (formData.type === 'book') {
      if (!formData.weight) errors.weight = 'Weight is required';
      else if (isNaN(formData.weight)) errors.weight = 'Weight must be a number';
    } else if (formData.type === 'furniture') {
      if (!formData.height) errors.height = 'Height is required';
      else if (isNaN(formData.height)) errors.height = 'Height must be a number';
  
      if (!formData.width) errors.width = 'Width is required';
      else if (isNaN(formData.width)) errors.width = 'Width must be a number';
  
      if (!formData.length) errors.length = 'Length is required';
      else if (isNaN(formData.length)) errors.length = 'Length must be a number';
    }
  
    return errors;
  }
  