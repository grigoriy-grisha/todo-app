import React, {useEffect, useState} from "react";
import {Input} from "./Input";
import {TodoWrapper} from "./TodoWrapper";
import {http} from "../utils/Http";
import {url} from "../constants";

interface IProps {

}

export const TodoContainer: React.FC<IProps> = () => {

    const [value, setValue] = useState<string>('')
    const [todos, setTodos] = useState<Array<ITodo> | []>([])
    const [loader, setLoader] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    useEffect(() => {
        setLoader(true)
        http.get(url).then(res => {
            setTodos(res)
            setLoader(false)
            setError(false)
        }).catch(error => {
            setError(true)
            setLoader(false)
        })


    }, [])

    return (
        <div className="container">
            <Input
                setValue={setValue}
                setTodos={setTodos}
                setLoader={setLoader}
                value={value}

            />
            <TodoWrapper
                loader={loader}
                todos={todos}
                error={error}
                setTodos={setTodos}
            />
        </div>
    )
}
