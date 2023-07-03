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
import LineItem from "./LineItem";
import AddItem from "./AddItem";



function App() {
  
    const[items, setItem]=useState(JSON.parse(localStorage.getItem('shoppinglist')));
    const[newItem, setNewItem]=useState('');


    const setAndSaveItems= (newItems) =>{
      setItem(listItems)
      localStorage.setItem('shoppinglist' , JSON.stringify(listItems));
    }

    const addItem = (item) =>{
      const id= items.length ? items[items.length - 1].id + 1: 1;
      const myNewItem ={id , checked: false, item };
      const listItems =[...items, myNewItem];
      setAndSaveItems(listItems)
    }


    const handlecHECK =(id) =>{
      // console.log(`key: ${id}`)
      const listItems=items.map((item)=> item.id === id ? { ...item, checked: !item.checked } :item);
      setAndSaveItems(listItems)
    }

    const handleDelete= (id) =>{
      // console.log(id)
      const listItems=items.filter((item) => item.id !== id);
      setAndSaveItems(listItems)
    }

    const handleSubmit= (e) =>{
        e.preventDefault();
        if (!newItem) return;
        addItem(newItem);
        setNewItem('');
    }
  
  

  return (
    <div className="App">
    <Header title="Groceries List"/>
    <AddItem 
    newItem={newItem}
    setNewItem={setNewItem}
    handleSubmit={handleSubmit}
    />
    <Content
      items={items}
      handlecHECK={handlecHECK}
      handleDelete={handleDelete}
     />
     
    <Footer length={items.length} />
    {/* <Counter /> */}
    </div>
  );

}
export default App;
