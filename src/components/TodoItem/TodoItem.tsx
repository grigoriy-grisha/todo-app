import React, {useState} from "react";
import {http} from "../../utils/Http";
import {url} from "../../constants";
import {CheckElement, Delete, Name, TodoItemBlock } from "./TodoItemStyles";


interface IProps {
    "_id": string,
    "name": string,
    "isActive": boolean
    setTodos: any
}


export const TodoItem: React.FC<IProps> = ({_id, name, isActive, setTodos}) => {
    const [active, setActive] = useState<boolean>(isActive)

    const deleteItem = async (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        try {
            const result = await http.delete(url + `delete?id=${_id}`)
            if (Array.isArray(result)) {
                setTodos(result)
            }
        } catch (e) {
            console.log(e)
        }
    }

    const onActive = async () => {
        try {
            setActive(!active)
            await http.put(url + `toggle?id=${_id}`)
        } catch (e) {
            setActive(!active)
            console.error(e)
        }
    }

    return (
        <TodoItemBlock onClick={onActive}>
            <CheckElement active={active}/>
            <Name active={active}>
                {name}
            </Name>
            <Delete onClick={deleteItem}>
                <div>x</div>
            </Delete>
        </TodoItemBlock>
    )
}
