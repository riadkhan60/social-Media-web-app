import { Outlet, useNavigate } from "react-router-dom";
import NavigationMenu from "../NavigationMenus";
import useAuthValue from "../contexts/AuthoValues";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function AppLayout() {
  const { islogin, currentAccount } = useAuthValue();
  const [showWelcome, setShowWelcome] = useState(true);
  const navigateto = useNavigate();

  useEffect(() => {
    console.log(islogin);
    if (!islogin) {
      navigateto("/login");
    }
    const timeOut = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    return () => clearTimeout(timeOut);
  }, [islogin, navigateto]);

  if (!islogin) return null;
  return (
    <React.Fragment>
      <AnimatePresence>
        {showWelcome && (
          <div className="absolute bottom-[32px] left-[50%] mx-auto flex w-[90%] translate-x-[-50%] justify-end">
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -150 }}
              transition={{ duration: 1, type: "spring" }}
              className="rounded-xl bg-main px-6 py-4 text-xl font-normal text-blueShade"
            >
              Hello, {currentAccount.name} 👋
            </motion.h2>
          </div>
        )}
      </AnimatePresence>
      <NavigationMenu />
      <Outlet />
    </React.Fragment>
  );
}

export default AppLayout;
