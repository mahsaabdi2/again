import {FaPlus} from 'react-icons/fa'

const AddItem =({newItem ,setNewItem, handleSubmit})=>{

    return(
        <form className="addForm" onSubmit={handleSubmit}>
            <lable htmlFor="addItem">Add Item</lable>
            <input autoFocus 
            id="addItem"
            type="text"
            placeholder="Add Item"
            required/>

            <button 
                type="submit"
                aria-lable="Add Item">
                <FaPlus />
                value={newItem}
                onChange={(e)=> setNewItem(e.target.value)}

                </button>
                

        </form>
    )
}

export default AddItem;