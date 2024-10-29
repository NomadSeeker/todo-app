import {type ItemType} from '../model/item';
import Item from './Item';

type ItemListProps = {
    items: ItemType[];
    onDelete: (id:number) => void;
}

const ItemList = ({items, onDelete}: ItemListProps) => {

    return (
        <ul style={{listStyleType: 'none'}}>
            {items.map((item, index) => (
                <li key={index} >
                    <Item description={item.description} completed={item.completed} onDelete={onDelete} itemId={item.id}/> 
                </li>
            ))}
        </ul>
    );
};

export default ItemList;