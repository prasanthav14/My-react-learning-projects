import React from "react"

// function inc() {

// }
function Hooks() {
    const [count, setCount] = React.useState()
    // function inc() {
    //     setCount(count + 1)
    // }
    // function dec() {
    //     setCount(count - 1)
    // }
    setInterval(() => setCount(new Date().toLocaleTimeString()), 1000);

    return (
        <div>
            <h1>{count}</h1>
            {/* <button onClick={inc}>+</button>
            <button onClick={dec}>-</button> */}
          
        </div>
    );
}

export default Hooks