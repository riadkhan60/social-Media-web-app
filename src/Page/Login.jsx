import LoginFrom from "../Features/LoginFrom";
import SingupFrom from "../Features/SingupFrom";
import Animation from "../Ui-Components/Animation";
import useAuthValue from "../contexts/AuthoValues";

function Login({ type }) {
  const { islogin } = useAuthValue();
  return (
    <div className=" flex h-dvh items-center justify-center gap-8">
      {!islogin && <Animation />}
      {type === "login" ? <LoginFrom /> : <SingupFrom />}
    </div>
  );
}

export default Login;
