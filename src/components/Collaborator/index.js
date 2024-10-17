import './Collaborator.css';

const Collaborator = ({ nome, cargo, imagem, corDeFundo }) => {
  return (
    <section className='colaborador'>
      <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
        <img src={ imagem } alt="Elzio Maia" />
      </div>

      <div className='rodape'>
        <h4>{ nome }</h4>
        <h5>{ cargo }</h5>
      </div>
    </section>
  );
};

export default Collaborator;