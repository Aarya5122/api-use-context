import React from "react"

import ApiProvider from "./context/ApiProvider"

import MyCard from "./MyCard";

const App = () => {
  
  return (
    <>
      <ApiProvider>
        <MyCard/>
      </ApiProvider>
    </>
  );
}

export default App;
