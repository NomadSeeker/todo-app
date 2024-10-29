import { useContext, useReducer, useRef, useState } from "react";
import { ItemType } from "../model/item";
import ItemList from "../components/ItemList";
import { useTodoContext } from "../store/todo-context";



const CreateTodo = () => {
    const todosCtx = useTodoContext();
    const [showItemInput, setShowItemInput] = useState(false);
    const [items, setItems] = useState<ItemType[]>([]);
    const titleRef = useRef<HTMLInputElement>(null);
    const descRef = useRef<HTMLInputElement>(null);
    const itemRef = useRef<HTMLInputElement>(null);

    const handleShowInput = () => {
        setShowItemInput(true);
    }

    const handleAddItem = () => {
  
        setItems(prevState => [...prevState, {id: (Math.random()*20), description: itemRef.current!.value, completed: false}]);
        setShowItemInput(false);
        
    }

    const handleDeleteItem = () => {
        console.log('delte item');
    }

    const handleSubmit = () => {
        const id = Math.random()*20;
        const title = titleRef.current!.value;
        const description = descRef.current!.value;
        
        todosCtx!.addTodo({id, title, description, items});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" id="title" ref={titleRef} required/>
                <label htmlFor="description">Description: </label>
                <input type="textarea" name="description" id="description" ref={descRef} required/>
                {items.length > 0 && (
                    <ItemList items={items} onDelete={handleDeleteItem} />
                )}
                {!showItemInput && (
                    <button onClick={handleShowInput}>Add item</button>)}
                {showItemInput && (
                    <div>
                        <label htmlFor="item">Item: </label>
                        <input type="text" name="item" id="item" ref={itemRef} required/>
                        <button onClick={handleAddItem}>Add</button>
                    </div>
                )}
                {items.length > 0 && (<button type="submit">Create Todo</button>)}
            </form>
        </div>
    )
};

export default CreateTodo;