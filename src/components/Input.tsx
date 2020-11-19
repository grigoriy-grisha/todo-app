import React, {FormEvent} from "react";
import {http} from "../utils/Http";
import {url} from "../constants";
import styled from "styled-components";

interface IProps {
    setValue: any
    setTodos: any
    setLoader: any
    value: string,

}

const InputFor = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #777777;
  margin-top: 40px;
  padding: 15px 25px;
  border-radius: 5px;

`

export const Input: React.FC<IProps> = ({value, setValue, setTodos, setLoader}) => {

    const onHandleChange = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        let valueTarget = value.trim()

        if (valueTarget) {
            setValue('')
            setLoader(true)
            const res = await http.post(url + 'add', {name: valueTarget})
            if (Array.isArray(res)) {
                setLoader(false)
                setTodos(res)
            }
        }

    }

    return (
        <form onSubmit={onHandleChange}>
            <InputFor
                id="input"
                className="input-add"
                placeholder="Введите название задачи"
                value={value}
                onChange={(e) => setValue(e.target.value)}/>
        </form>
    )
}
