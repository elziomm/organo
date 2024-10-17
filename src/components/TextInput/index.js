import './TextInput.css';

const TextInput = ({ label, placeholder, obrigatorio, valor, aoAlterado }) => {

  const aoDigitado = (event) => {
    aoAlterado(event.target.value);
  };

  return (
    <div className="input-text">
      <label htmlFor="name">
        {label}
      </label>
        <input value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeholder} />
    </div>
  );
};

export default TextInput;