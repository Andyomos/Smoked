import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ShowCase from "./components/ShowCase";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
import About from "./components/views/About";
import { BrowserRouter, Route } from "react-router-dom";
import Contact from "./components/views/Contact";
import Product from "./components/Product";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={ShowCase} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />

        <Counter />
        <Product />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
