import { useState } from "react"
import { FaTrashAlt } from "react-icons/fa"
import ItemList from "./ItemList"

    const Content = ({items,  handlecHECK, handleDelete}) =>{
    
    
   

    return(
      <main>
        {items.length ? (
            <ItemList 
              items={items}
              handleDelete={handleDelete}
              handlecHECK={handlecHECK} />
      ):(
          <p style={{marginTop: '2rem'}}>your list is</p>
        )}
      </main>
        
    )}

export default Content;