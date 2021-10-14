import React, { useEffect, useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import SideBar from "./components/layouts/SideBar";
import { InvoiceState } from "./context/InvoiceContext";
import Home from "./pages/Home";
import ViewInvoice from "./pages/ViewInvoice";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState(
    localStorage.theme ? localStorage.theme : "light"
  );

  useEffect(() => {
    if (!localStorage.theme) {
      localStorage.theme = "light";
    }
    document.body.classList.add("bg-bg1");
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.replace("bg-bg1-dark", "bg-bg1");
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.body.classList.replace("bg-bg1", "bg-bg1-dark");
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <InvoiceState>
      <SideBar theme={theme} toggleTheme={toggleTheme} />
      <main className="tab:pl-bar font-spartan transition duration-500">
        <div className="tab:max-w-container1 mobile2:max-w-tab max-w-mobile m-auto">
          <AnimatePresence>
            <Switch location={location} key={location.key}>
              <Route exact path="/" component={Home} />
              <Route exact path="/invoice/:id" component={ViewInvoice} />
            </Switch>
          </AnimatePresence>
        </div>
      </main>
    </InvoiceState>
  );
}

export default App;
