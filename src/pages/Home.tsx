import { Link } from "react-router-dom";
import TodoList from "../components/TodoList";
import { useTodoContext } from "../store/todo-context";
import Todo from "./Todo";


// const todos =
//   [
//     {
//       id: 1,
//       title: 'Learn React',
//       description: 'Learn how to use React to build single page applications',
//       items: [
//         {id: '1', description: 'Learn about components', completed: true},
//         {id: '2', description: 'Learn about props', completed: false},
//       ]
//     },
//     {
//       id: 2,
//       title: 'Learn TypeScript',
//       description: 'Learn how to use TypeScript with React',
//       items: [
//         {id:'1', description: 'Learn about types', completed: true},
//         {id:'2', description: 'Learn about interfaces', completed: false},
//       ]
//     },
//     {
//       id: 3,
//       title: 'Learn Redux',
//       description: 'Learn how to use Redux to manage the state of your application',
//       items: [
//         {id: '1', description: 'Learn about actions', completed: true},
//         {id: '2', description: 'Learn about reducers', completed: false},
//       ]
//     }];

    const Home = () => {
      const todosCtx = useTodoContext();
        console.log(window.localStorage.getItem('todos'));
        return (
            <div className="container">
                <Todo />
            </div>
        );
    };

    export default Home;