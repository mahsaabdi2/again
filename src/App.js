import Counter from "./Counter"
import News from "./News";
import Header from "./Header";
import Content from "./Content"
import Footer from "./Footer"
import './index.css';
import { useState , useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link} from "react-router-dom";




function App() {
  

  return (
    <div className="App">
    <Header />
    <Content />
    <Footer />
    </div>
  );

}
export default App;
