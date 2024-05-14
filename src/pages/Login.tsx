import LoginForm from "../components/LoginForm";
import RegLoginImg from "../components/RegLoginImg";
import "../Styles/Reg/reg.scss";

const Login = () => {
  return (
    <div className="reg-page">
      <div className="reg">
        <RegLoginImg pic="loginimg" />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
