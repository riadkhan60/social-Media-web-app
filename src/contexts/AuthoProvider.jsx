import {
  createContext,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from "react";

export const Context = createContext();

const initialState = {
  islogin: false,
  status: "",
  currentAccount: null,
  newAccount: null,
};

const reducer = function (state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        staus: "login",
        currentAccount: action.payload.account,
        islogin: true,
      };
    case "logout":
      return initialState;
    case "not-found": {
      return { ...initialState, status: "not-found" };
    }
    // case "newAccount": {
    //   return { ...state, newAccount: action.payload };
    // }
    case "newAccount": {
      return { ...state, currentAccount: action.payload, islogin: true, status: 'new-Account' };
    }
    default:
      throw new Error("Invalid action");
  }
};

function AuthoProvider({ children }) {
  const [
    { islogin, status, currentAccount },
    dispatch,
  ] = useReducer(reducer, initialState);
  const [acounts, setAccounts] = useState(null);
  
  useEffect(() => {
    async function fetchAccounts() {
      const res = await fetch("http://localhost:3002/accounts");
      const data = await res.json();
      setAccounts(data);
    }
    fetchAccounts();
  }, [currentAccount]);

  const login = useCallback(
    function login({ email, password }) {
      const isTrue = acounts.some(
        (account) => account.email === email && account.password === password,
      );

      console.log(isTrue);

      const account = acounts.find(
        (account) => account.email === email && account.password === password,
      );

      if (isTrue)
        dispatch({
          type: "login",
          payload: {
            staus: "login",
            account: account,
          },
        });

      if (!isTrue) {
        dispatch({ type: "not-found" });
      }
    },
    [acounts],
  );

  const newAccountfunc = useCallback(function newAccountfunc(obj) {
    dispatch({ type: "newAccount", payload: obj });
  },[]);

  function logOut() {
    dispatch({ type: "logout" });
  }

  return (
    <Context.Provider
      value={{
        login,
        logOut,
        islogin,
        status,
        currentAccount,
        newAccountfunc,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default AuthoProvider;
