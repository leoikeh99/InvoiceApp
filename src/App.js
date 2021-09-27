import React, { useEffect } from "react";
import SideBar from "./components/layouts/SideBar";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    document.body.classList.add("bg-bg1");
  }, []);
  return (
    <>
      <SideBar />
      <main className="pl-bar font-spartan">
        <div className="max-w-container1 m-auto">
          <Home />
        </div>
      </main>
    </>
  );
}

export default App;
