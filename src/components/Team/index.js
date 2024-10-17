import Collaborator from "../Collaborator";
import "./Team.css";

const Team = ({ nome, corPrimaria, corSecundaria, colaboradores }) => {
  return (
    colaboradores.length > 0 &&
    <section
      className="team"
      style={{ backgroundColor: corSecundaria}}
    >
      <h3 style={{ borderColor: corPrimaria }} >
        { nome }
      </h3>

      <div className="colaboradores">
        { colaboradores.map(colaborador =>
          <Collaborator
            key={ colaborador.nome }
            nome={ colaborador.nome }
            cargo={ colaborador.cargo }
            imagem={ colaborador.imagem }
            corDeFundo={ corPrimaria }
          />
        )}
      </div>
      
    </section>
  );
};

export default Team;