import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationMenus from "./NavigationMenus";
import Error from "./Page/Error";
import Home from "./Page/Home";
import Login from "./Page/Login";
import AppLayout from "./Page/AppLayout";
import { AnimatePresence } from "framer-motion";
import AuthoProvider from "./contexts/AuthoProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthoProvider>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="user" element={<h1 className="text-blue-400">sdsdsd</h1>} />
            </Route>
            <Route path="login" element={<Login type={"login"} />} />
            <Route path="signup" element={<Login type={"singup"} />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </AnimatePresence>
      </AuthoProvider>
    </BrowserRouter>
  );
}

export default App;
