import Input from "../Ui-Components/Input";
import Button from "../Ui-Components/Button";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import useAuthValue from "../contexts/AuthoValues";

function SingupFrom() {
  const [named, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [accountExist, setAccountExist] = useState(null);
  const [error, setError] = useState(null);

  const [accountAccepted, setAccountAccepted] = useState(false);
  const { newAccountfunc } = useAuthValue();
  const navigateto = useNavigate();

  const newAccount = useMemo(() => {
    return {
      email: email,
      password: password,
      name: named,
      userName: name.trim() + "6060",
      id: email,
    };
  }, [email, password, named]);

  useEffect(() => {
    if (!accountAccepted) return;
    async function createAccount() {
      const res = await fetch("http://localhost:3002/accounts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newAccount),
      });

      const data = await res.json();
      newAccountfunc(data);
      navigateto("/login");
    }
    createAccount();
  }, [accountAccepted, newAccount, newAccountfunc, navigateto]);

  function singUp(e) {
    e.preventDefault();
    setError("");
    if (!named || !email || !password || !confirmPassword) {
      return setError("please enter all the required fields");
    }

    if (password !== confirmPassword) {
      return setError("password did not match");
    }

    async function varifyAccount() {
      const res = await fetch("http://localhost:3002/accounts");
      const accounts = await res.json();
      const haveAccount = accounts.find((account) => {
        return account.email === email;
      });

      if (haveAccount === undefined) {
        setAccountAccepted(true);
      }

      setAccountExist(haveAccount);
    }
    setError(null);
    varifyAccount();
  }

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
          Sign up new account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-[600px] sm:max-w-sm">
        <form onSubmit={singUp} className="space-y-6" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-white"
            >
              Name
            </label>
            <div className="mt-2">
              <Input value={named} setValue={setName} type={"text"} />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-white"
            >
              Email address
            </label>
            <div className="mt-2">
              <Input value={email} setValue={setEmail} type={"email"} />
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
            </div>
            <div className="mt-2">
              <Input
                key={"password"}
                value={password}
                setValue={setPassword}
                type={"password"}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium leading-6 text-white"
              >
                Confirm password
              </label>
            </div>
            <div className="mt-2">
              <Input
                key={"confirm-password"}
                value={confirmPassword}
                setValue={setConfirmPassword}
                type={"password"}
              />
            </div>
          </div>
          <div>
            {!error && accountExist && (
              <p className=" text-sm text-redShade">
                already an account registered with {accountExist?.email}
              </p>
            )}
            {error && <p className=" text-sm text-redShade">{error}</p>}
          </div>
          <div>
            <Button>Sign up</Button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Already got a account?{" "}
          <Link
            to={"/login"}
            className="font-medium leading-6 text-blueShade hover:text-blueShade/90"
          >
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
}

export default SingupFrom;
