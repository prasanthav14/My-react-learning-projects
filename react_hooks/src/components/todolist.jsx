import React from "react"
import Todo1 from "./todolist1.jsx"
import Todo2 from "./todolist2.jsx"
import Todo3 from "./todolist3.jsx"
let d = new Date();

function Todo() {
    const [read, setRead] = React.useState("");
    const [click, setClick] = React.useState([]);
    const [tim, seTim] = React.useState(d.toLocaleTimeString())
    
    setInterval(()=>{
        d = new Date();
        seTim(d.toLocaleTimeString())
    }, 1000);

    function findClick() {
        setClick(prev => {
            return [...prev, read]
        })
        setRead("")
    }

    return (
        <div>
            <h1>To-do List</h1>
            <h1>{tim}</h1>
            <Todo3 value={read} set={setRead} />
            <button onClick={findClick}>+</button>
            <ol>
                {
                    click.map((ele, index) => {
                        return <Todo2 set={setClick} ele={ele} key={index} id={index} />
                    })
                }
            </ol>
            {/* <Todo1 text={click} /> */}

        </div>
    )
}

export default Todo