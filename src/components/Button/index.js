import './Button.css';

const Button = ({ children }) => {
  return (
    <button className="buttonComp">
      {children}
    </button>
  );
};

export default Button;