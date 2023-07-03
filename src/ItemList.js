import LineItem from './LineItem'

const ItemList= ( {items,  handlecHECK, handleDelete} )=>{
    return(
        <ul>
            {items.map((item)=>{
            
            
                        <LineItem 
                            key={item.id}
                            item={item}
                            handleDelete={handleDelete}
                            handlecHECK={handlecHECK} />


        })}
        </ul>
    )
}

export default ItemList;