import { ItemType } from "./item";

export type TodoType = {
    id: number;
    title: string;
    items: ItemType[];
    description: string;
}