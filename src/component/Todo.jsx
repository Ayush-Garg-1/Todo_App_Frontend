import React from "react";

const Todo= (props)=>{
    return (
    <>
    <div className="item">
    <h4>{props.text}</h4>
    <div className="item-btns">
    <button onClick={()=>{ props.onSelect(); }}> <i class="fa-solid fa-pen-to-square"></i> </button>
    <button onClick={()=>{ props.onClick(); }}> <i class="fa-solid fa-trash"></i> </button>
    </div>
    </div>
    </>
    );
}

export default Todo;