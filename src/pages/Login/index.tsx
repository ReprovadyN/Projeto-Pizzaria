import { useContext, type FormEventHandler } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { AuthContext } from "../../contexts/AuthContext";

import './index.css'
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate()

  const {
    signIn
  } = useContext(AuthContext)
  
    const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
      event.preventDefault()
      const values = new FormData(event.target as HTMLFormElement)
  
      const body = {
        email: values.get('email') as string,
        password: values.get('password') as string,
      }

      await signIn(body)

      navigate('/Profile')
    }

  return (
    <form onSubmit = {onSubmit}>
    <div className="login-form">
      <Input 
        placeholder="Email" 
        label=""
        name = "email"
        type = "email"
      />
      <Input 
        placeholder="*********"
        label=""
        name = "password"
        type = "password"
      />

      <div className="actions">
        <a href="/forgot-password">
          Esqueci minha senha
        </a>

        <Button type={'submit'}>
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
    </form>
  );
};

export default Login;
