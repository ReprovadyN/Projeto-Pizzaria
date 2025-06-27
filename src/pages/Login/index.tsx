import Button from "../../components/Button";
import Input from "../../components/Input";

import './index.css'

const Login = () => {
  return (
    <div className="login-form">
      <Input 
        placeholder="Email" 
        label=""
      />
      <Input 
        placeholder="*********"
        label=""
      />

      <div className="actions">
        <a href="/forgot-password">
          Esqueci minha senha
        </a>

        <Button>
          <p>Acessar</p>
        </Button>
      </div>

      <Button
        variant={"secondary"}
      >
        <p>Não possui conta? Registre-se.</p>
      </Button>
      <p>Ou</p>

      <Button variant={"secondary"}>
        <img src='/images/devicon_google.png'></img><p> </p>
        <p>Entrar com o Google</p>
      </Button>
    </div>
  );
};

export default Login;
