import Counter from "./Counter"
import News from "./News";
import Header from "./Header";
import Content from "./Content"
import Footer from "./Footer"
import './index.css';
import { useState , useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link} from "react-router-dom";
import ItemList from "./ItemList";


function App() {
  
    const[items, setItem]=useState([
      {
        id: 1,
        checked: true,
        item: "one half"
      },
      {
        id: 2,
        checked: false,
        item: "item2"
      },
      {
        id: 3,
        checked: false,
        item: "item3"
      },
    ])
    const handlecHECK =(id) =>{
      // console.log(`key: ${id}`)
      const listItems=items.map((item)=> item.id === id ? { ...item, checked: !item.checked } :item);
      setItem(listItems)
      localStorage.setItem('shoppinglist' , JSON.stringify(listItems));
    }

    const handleDelete= (id) =>{
      // console.log(id)
      const listItems=items.filter((item) => item.id !== id);
      setItem(listItems)
      localStorage.setItem('shoppinglist' , JSON.stringify(listItems));
    }


  
  

  return (
    <div className="App">
    <Header title="Groceries List"/>
    <Content
      items={items}
      handlecHECK={handlecHECK}
      handleDelete={handleDelete}
     />
    <Footer length={items.length} />
    </div>
  );

}
export default App;
