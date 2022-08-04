import React from "react"

function Todo3(props) {
    function findChange(event) {
 props.set(event.target.value)
    }

 return (  <input type="text" value={props.value} onChange={findChange} />   )
}

export default Todo3