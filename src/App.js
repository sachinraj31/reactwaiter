import React from "react";
import Id from "./components/Id";
import Price from "./components/Price";
import Dish from "./components/Dish";
import Table from "./components/Table";
import Button from "./components/Button";
import Orders from "./components/Orders";

function App() {
  return (
    <div>
      <Id></Id>
      <Price></Price>
      <Dish></Dish>
      <Table></Table>
      <Button></Button>
      <Orders></Orders>
    </div>
  );
}

export default App;
