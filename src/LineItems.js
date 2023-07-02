import { FaTrashAlt } from "react-icons/fa";

const LineItems=(item , handlecHECK, handleDelete) => {
    return(
        
        <li className="item" key={item.id}>
        <input type="checkbox" onChange={()=> handlecHECK(item.id)} checked={item.checked} />
        <label
          onDoubleClick={()=> handlecHECK(item.id)}
          style={(item.checked) ? {textDecoration: 'line-through'}: null}
        >{item.item}</label>
        <FaTrashAlt onClick={()=>handleDelete(item.id)} role="button" tabIndex="0" aria-label={` Delete ${item.item}`}/>

    </li>

    )
}

export default LineItems;