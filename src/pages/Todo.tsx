import { ItemType } from "../model/item";
import ItemList from "../components/ItemList";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

type TodoProps = {
    name: string;
    items: ItemType[];
}




const Todo = () => {
    const [showInput, setShowInput] = useState(false);
    const [items, setItems] = useState<ItemType[]>([
        {id: 8, description: 'Learn about components', completed: true},
        {id: 9, description: 'Learn about props', completed: false},
    ]);
    const itemRef = useRef<HTMLInputElement>(null);


    
    const showAdd = () => {
        setShowInput(true);

    }

    const handleAdd= () => {
        if(itemRef.current){
            setItems(prevItems => [...prevItems, {id:(Math.random()*20), description: itemRef.current!.value, completed: false}]);
        }else {
            throw new Error('Item input is not available');
        }
        setShowInput(false);
    }

    const handleDelete = (id:number): void => {
        setItems(prevItems => prevItems.filter((item) => item.id !== id));
    }

   

    return (
        <div>
            <h1>Todo List</h1>
            <div className="itemList">
                <ItemList items={items} onDelete={handleDelete}/>
                
            </div>
            <div className="add-input">
            {showInput && (<div ><input type="text" name="item" id="item" ref={itemRef}/> <button  className='button-7' onClick={handleAdd}>Add</button></div>)}
            {!showInput && <button className="add-btn" onClick={showAdd}>Add Item</button>}
            </div>
           
            
            
        </div>
    );
};

export default Todo;