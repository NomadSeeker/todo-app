import { useRef } from "react";

type ItemProps = {
    itemId: number;
    description: string;
    completed: boolean;
    onDelete: (id: number) => void;
};


const Item = ({description, completed, onDelete, itemId}: ItemProps) => {



    return(
        <>
         <div className="checkbox">
         <input type='checkbox' value={itemId}/><label className="label"> {description}</label><button onClick={() => onDelete(itemId)} >x</button>
         </div>
           
        </>
    );
};

export default Item;

