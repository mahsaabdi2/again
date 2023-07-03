import { useState } from "react"
import ItemList from "./ItemList"
import LineItem from "./LineItem"


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
        <LineItem />
      </main>
        
    )
  }

export default Content;