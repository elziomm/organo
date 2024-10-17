import './Dropdown.css';

const Dropdown = ({ label, itens, obrigatorio, valor, aoAlterado }) => {
  return (
    <div className='dropdown'>
      <label>{label}</label>
      <select
        onChange={ event => aoAlterado(event.target.value) }
        required={ obrigatorio }
        value={ valor }
      >
        <option value='' />
        {
          itens.map(item =>
            <option key={item}>{item}</option>
          )
        }
      </select>
    </div>
  )
};

export default Dropdown;