import { useState } from "react"
import { FaTrashAlt } from "react-icons/fa"

const Content = () =>{
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

   

    return(
      <main>
        {items.length ? (
        <ul>
          {items.map((item)=>(
            <li className="item" key={item.id}>
                <input type="checkbox" onChange={()=> handlecHECK(item.id)} checked={item.checked} />
                <label
                  onDoubleClick={()=> handlecHECK(item.id)}
                  style={(item.checked) ? {textDecoration: 'line-through'}: null}
                >{item.item}</label>
                <FaTrashAlt onClick={()=>handleDelete(item.id)} role="button" tabIndex="0" />

            </li>
          ))}
        </ul>
      ):(
          <p style={{marginTop: '2rem'}}>your list is</p>
        )}
      </main>
        
    )
}
export default Content;