import { Link, useNavigate } from "react-router-dom";
import Button from "../Ui-Components/Button";
import Input from "../Ui-Components/Input";
import { motion } from "framer-motion";
import { useEffect, useState, useTransition } from "react";
import useAuthValue from "../contexts/AuthoValues";

function LoginFrom() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login, islogin, status } = useAuthValue();
  const navigate = useNavigate();

  // const deferLogin = useDeferredValue(islogin);
  const [isPending, setTransition] = useTransition();
  function handleLogin(e) {
    e.preventDefault();
    if (email && password) {
      login({ email: email, password: password });
      setError("");
    }
    if (!email) {
      setError("please enter your email address!");
    }
    if (!password) {
      setError("please enter your right password!");
    }
    if (!password && !email) {
      setError("please enter your email && password!");
    }
  }

  useEffect(() => {
    if (islogin) {
      navigate("/");
    }
  }, [islogin, navigate]);

  if (islogin) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-full flex-col justify-center px-6 py-12 transition-all duration-300 ease-in-out lg:px-8"
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="mx-auto h-10 w-auto text-center text-6xl">☁️</div>
        <h2 className="font-regular mt-10 text-center text-2xl leading-9 tracking-tight text-white">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-[600px] sm:max-w-sm">
        <form
          onSubmit={handleLogin}
          className="space-y-6"
          action="#"
          method="POST"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-white"
            >
              Email address
            </label>
            <div className="mt-2">
              <Input type={"email"} value={email} setValue={setEmail} />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-white"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold  text-blueShade hover:text-blueShade/90 "
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <Input
                type={"password"}
                value={password}
                setValue={setPassword}
              />
            </div>
          </div>
          <div>
            {!error && status && (
              <p className=" text-sm text-redShade">
                no account have been found !
              </p>
            )}
            {error && <p className=" text-sm text-redShade">{error}</p>}
          </div>
          <div>
            <Button>Sign in</Button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Not have a account?{" "}
          <Link
            to={"/signup"}
            className="font-medium leading-6 text-blueShade hover:text-blueShade/90"
          >
            Sign up
          </Link>
        </p>
      </div>
    </motion.div>
  );
}

export default LoginFrom;
