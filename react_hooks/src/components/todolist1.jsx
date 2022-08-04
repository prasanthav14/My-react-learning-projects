import React from "react"
// import * from "todolist.jsx"

function Todo2(props) {
    const [strike,setStrike] = React.useState(false)
    function listClick(){
        setStrike(prev=>{
            return (!prev)
        })
    console.log(strike)
     }
    return(
        props.text.map((ele,index)=>{
        return <li style={ {textDecoration: strike ? "line-through": ""} } onClick= {listClick}> {ele} </li> })
        // <h1 style={ { textDecoration: "line-through" } } >text </h1>
    )
    }

export default Todo2
// export {findChange}