function FormField({ id, name, value, onChange, error, label, type = "text" }) {
  return (
    <div className="label-input">
      <label htmlFor={id}>{label}</label>
      <div className="input-notification">
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        />
        <div className="notification" id="error-name">
          <p>{error}</p>
        </div>
      </div>
    </div>
  );
}

export default FormField;
