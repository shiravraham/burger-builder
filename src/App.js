import React from "react";
import Layout from "./components/Layout/Layout";
import "./App.css";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

function App() {
  return (
    <div className="App">
      <Layout>
        hi
        <BurgerBuilder></BurgerBuilder>
      </Layout>
    </div>
  );
}

export default App;
