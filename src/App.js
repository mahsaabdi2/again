import './index.css';
import { useState , useEffect } from "react";
import Contentt from "./Contentt";
import Headerr from "./Headerr";
import Footerr from "./Footerr"



function App() {
  

  return (
    <div className="App">
    <Headerr />
    <Contentt />
    <Footerr />
    </div>
  );

}
export default App;
