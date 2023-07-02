import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import LineItems from "./LineItems";




const ItemList= ( {items,  handlecHECK, handleDelete} )=>{
    return(
        <ul>
        {items.map((item)=>(
            <LineItems 
                key={item.id}
                item={item}
                handleDelete={handleDelete}
                handlecHECK={handlecHECK} />
        ))}
      </ul>
    )
}

export default ItemList;