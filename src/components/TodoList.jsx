
import styled from "styled-components";
import Dday from "./dday"

const Ul = styled.ul`
`
const Li = styled.li` 
    justify-content: center;
    font-weight: bold; 
    display:flex;
    align-items: center;
    list-style-type: decimal;
    color : black;  
    padding: 10px;
`
const Button = styled.button`
    height:40px;
    margin-left: 25px;
    margin-right: 25px;
    padding: 10px;
    text-align:center;
`
// Todo 목록을 표시하고 삭제 기능을 가진 컴포넌트
const TodoList = ({ todos, deleteTodo }) => {
    return (
      <Ul>
        {todos.map(todo => (
          <Li key={todo.id}>
            {todo.text}
            <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
            <Dday></Dday>
          </Li>
        ))}
      </Ul>
    );
  };

export default TodoList