import { Link } from "react-router-dom";
import { TodoType } from "../model/todo"
import ItemList from "./ItemList";

type TodoListProps = {
    todos: TodoType[];
}

const TodoList = ({todos}: TodoListProps) => {

    return (
        <div>
            
                {todos.map(t => (
                    <div>
                        <h1>{t.title}</h1>
                        <p>{t.description}</p>
                        <Link to="/todo/1">Details</Link>
                    </div>
                ))}
        </div>
    )
};

export default TodoList;