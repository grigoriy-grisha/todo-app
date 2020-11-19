import React from "react";
import {TodoItem} from "./TodoItem/TodoItem";
import {Loader} from "./Loader";
import styled from "styled-components";

const TodoWrapperStyles = styled.div`
  position: relative;
  width: 100%;
  padding: 40px;
  min-height: 500px;
  background: #fff;
  border-radius: 10px;
  margin-top: 100px;
  box-shadow: -3px -2px 55px -6px rgba(0,0,0,0.65);
`

const CenterElement = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`

const ColorRed = styled.span`
    color: red;
`


interface IProps {
    todos: Array<ITodo> | []
    setTodos: any
    loader: boolean
    error: boolean
}

export const TodoWrapper: React.FC<IProps> = React.memo(({todos, setTodos, loader, error}) => {

    if (error) {
        return (
            <TodoWrapperStyles>
                <CenterElement>
                    <ColorRed><h1>Error</h1></ColorRed>
                </CenterElement>
            </TodoWrapperStyles>
        )
    }

    return (
        <TodoWrapperStyles>
            {loader ? <CenterElement><Loader/> </CenterElement> : todos.length
                ? (todos as Array<ITodo>).map((item: ITodo) => (
                    <TodoItem key={item._id} {...item} setTodos={setTodos}/>))

                : <CenterElement><h1>No todos</h1></CenterElement>
            }
        </TodoWrapperStyles>
    )
})
