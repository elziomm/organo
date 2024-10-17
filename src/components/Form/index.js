import { useState } from "react";
import Button from "../Button";
import Dropdown from "../Dropdown";
import TextInput from "../TextInput";
import "./Form.css";

const Form = ({ aoColaboradorCadastrado, times }) => {

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');

  const toSave = (event) => {
    event.preventDefault();
    aoColaboradorCadastrado({ nome, cargo, imagem, time });
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
  }

  return (
    <section className="formulario">
      <form onSubmit={toSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>

        <TextInput
          obrigatorio={ true }
          label="Nome"
          placeholder="Digite o seu nome"
          valor={ nome }
          aoAlterado={valor => setNome(valor)}
        />

        <TextInput
          obrigatorio={ true }
          label="Cargo"
          placeholder="Digite o seu cargo"
          valor={ cargo }
          aoAlterado={valor => setCargo(valor)}
        />
        <TextInput
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={ imagem }
          aoAlterado={valor => setImagem(valor)}
        />

        <Dropdown
          obrigatorio={ true }
          label="Time"
          itens={ times }
          valor={ time }
          aoAlterado={ valor => setTime(valor) }
        />

        <Button>
          Criar Card
        </Button>
      </form>
    </section>
  );
};

export default Form;