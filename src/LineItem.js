import { FaTrashAlt } from "react-icons/fa";


const LineItems=(item , handlecHECK, handleDelete) => {
    return(
        
        <li className="item">
              <input type="checkbox" onChange={()=> handlecHECK(item.id)} checked={item.checked} />
              <label style={(item.checked) ? {textDecoration: 'line-through'}: null} onDoubleClick={()=> handlecHECK(item.id)} >{item.item}</label>
              <FaTrashAlt onClick={()=>handleDelete(item.id)} role="button" tabIndex="0" aria-label={` Delete ${item.item}`}/>
  
            </li>

    )
}

export default LineItems;