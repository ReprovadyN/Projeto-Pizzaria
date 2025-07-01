import Button from "../../components/Button";
import Input from "../../components/Input";

import './index.css'

const Register = () => {
  return (
    <>
      <span>
        Cadastre-se!
      </span>
      <div className="register-form">
        <Input 
          placeholder="" 
          label="Nome"
        />
        <Input 
          placeholder=""
          label="Usuário"
        />
        <Input
          placeholder=""
          label="Email"
        />
        <Input
          placeholder="*********"
          label="Senha"
        />

        <Button
        >
          <p>Cadastrar</p>
        </Button>
        <p>Ou</p>

        <Button variant={"secondary"}>
          <img src='/images/devicon_google.png'></img>
          <p>Entrar com o Google</p>
        </Button>
      </div>
    </>
  );
};

export default Register;
