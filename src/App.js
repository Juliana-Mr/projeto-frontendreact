import React from "react";
import Main from "./components/main/Main";
import Header from "./components/header/Header";


import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
