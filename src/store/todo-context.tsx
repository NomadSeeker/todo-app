import { createContext, useContext, useReducer, type ReactNode } from "react";
import { TodoType } from "../model/todo";

const todos =
  [
    {
      id: 1,
      title: 'Learn React',
      description: 'Learn how to use React to build single page applications',
      items: [
        {id: '1', description: 'Learn about components', completed: true},
        {id: '2', description: 'Learn about props', completed: false},
      ]
    },
    {
      id: 2,
      title: 'Learn TypeScript',
      description: 'Learn how to use TypeScript with React',
      items: [
        {id:'1', description: 'Learn about types', completed: true},
        {id:'2', description: 'Learn about interfaces', completed: false},
      ]
    },
    {
      id: 3,
      title: 'Learn Redux',
      description: 'Learn how to use Redux to manage the state of your application',
      items: [
        {id: '1', description: 'Learn about actions', completed: true},
        {id: '2', description: 'Learn about reducers', completed: false},
      ]
    }];


type todosState = {
    todo: TodoType;
}

type TodosContextValue = todosState &{
    addTodo: (todoData: TodoType) => void;
    deleteTodo: () => void;
    updateTodo: () => void;
    getTodo: () => void;

}

const initialState: todosState = {
    todo:  JSON.parse(localStorage.getItem('todos')!) || '',
}

type TodosContextProviderProps = {
    children: ReactNode;
}

type AddTodoAction = {
    type: 'ADD_TODO';
    payload: TodoType;
}

type DeleteTodoAction = {
    type: 'DELETE_TODO';
}

type UpdateTodoAction = {
    type: 'UPDATE_TODO';
    payload: TodoType;
}

type GetTodoAction = {
    type: 'GET_TODO';
}

type Action = AddTodoAction | DeleteTodoAction | UpdateTodoAction | GetTodoAction;

const TodosContext = createContext<TodosContextValue | null>(null);

export const useTodoContext = () => {
    const todosCtx = useContext(TodosContext);
    if(TodosContext === null)
        throw new Error('TodosContext is null');

    return todosCtx;
}

const todosReducer = (state: todosState, action: Action): todosState => {
    if(action.type === 'ADD_TODO'){
        
         return {
                 ...state,
                 todo: {
                     id: action.payload.id,
                     title: action.payload.title,
                     description: action.payload.description,
                     items: action.payload.items
                 }
         }
    }

    if(action.type ==='GET_TODO'){
        return  JSON.parse(localStorage.getItem('todo')!);
        
    }

    return state;
}

const TodosContextProvider = ({children}: TodosContextProviderProps) => {
    const [todosState, dispatch] = useReducer(todosReducer, initialState);

    const ctx: TodosContextValue = {
        todo:  todosState.todo,

        addTodo(todoData) {
            dispatch({type: 'ADD_TODO', payload: todoData});
        },
        deleteTodo() {},
        updateTodo() {},
        getTodo() {
            dispatch({type: 'GET_TODO'});
        }
    };

    return (
        <TodosContext.Provider value={ctx}>
            {children}
        </TodosContext.Provider>
    );
};

export default TodosContextProvider;