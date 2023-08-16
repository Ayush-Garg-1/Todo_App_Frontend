import React, { useEffect, useState } from "react";
import Todo from "./component/Todo";
import { getData , addTodo , DeleteTodo , EditTodo } from "./handleApi";

const App = () =>{

// States Required For Read Todos from database
    const [todoData,setData] = useState([{}]);
    useEffect(()=>{
        getData(setData);
    },[]);

// States Required For Stored Todos in database
    const [inputItem,setInputItem] = useState("");
    const InputTodo = (event)=>{
        setInputItem(event.target.value);
    };
    
// States Required For Edit Todos
    const[isUpdate,setIsUpdate] = useState(false);
    const [todoId,setTodoId] = useState();
    const UpdateTodo =(id,text)=>{
        setIsUpdate(true);
        setInputItem(text);
        setTodoId(id);
    }

    return(
    <>
    <div className="todo-box" >
    <div className="heading">
    <h1>ToDo App</h1>
    <div className="line"></div>
    </div>
    <div className="add-item">
    <input type="text" name="text" placeholder="Add A Items....." onChange={InputTodo} value={inputItem}/>
    <button onClick={ isUpdate ? ()=> EditTodo(todoId, inputItem, setIsUpdate, setInputItem, setData) : 
        ()=> addTodo(inputItem,setInputItem,setData) }>
    { isUpdate ? "Update" : "Add" }
    </button>    
    </div>
    {
        todoData.map((ele)=>{
            return(
                <Todo
                 key= {ele._id} 
                id = {ele._id} 
                onClick={ ()=> DeleteTodo(ele._id,setData)} 
                onSelect={ ()=> UpdateTodo(ele._id,ele.text) } 
                text={ele.text} />
            )
        })
    }
    </div>
    </>
    );
};

export default App;
