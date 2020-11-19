import styled from "styled-components";
import check from '../../static/check.svg'
interface IProps {
    active: boolean
}
export const CheckElement = styled.div`
  width: 25px;
  height: 25px;
  border:2px solid #333;
  border-radius: 3px;
  background:${(props: IProps) => {
    return props.active ? `url(${check})` : ''
}}`


export const Name = styled.div`
  font-size: 22px;
  text-decoration: ${(props: IProps) =>
    props.active ? 'line-through' : 'none'
}
`

export const Delete = styled.div`
  width: 25px;
  height: 25px;
  font-size: 27px;
  color: #aa2121;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 4px;
  border-radius: 5px;

  &:hover {
    background: #aa2121;
    color: #ffffff;
  }
`

export const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  cursor: pointer;
  transition: 0.2s;
  border-radius: 5px;
  border-bottom: 1px solid #777;
  
  &:hover {
    background: rgb(250,250,250);
  }
`
