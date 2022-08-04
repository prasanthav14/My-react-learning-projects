import React from "react"

function Todo2(props) {
    function delet(id) {
                props.set(prev=>{
            return (
            prev.filter((value,index)=>{
               return (index !== id)
            }) )
        })
        // console.log(id);
        // console.log(props.ele);
    }

    return (  <li onClick={()=>{delet(props.id)}} > {props.ele} </li>    ) 
    }

export default Todo2
