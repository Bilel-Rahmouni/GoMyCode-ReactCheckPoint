import React from "react";
import "./App.css";
import Nav from "./components/navbar";
import Form from "./components/form";
import Footer from "./components/footer";
import Giphy from "./components/giphy";
function App() {
  return (
    <div className="App">
      <Nav />
      <Giphy />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
