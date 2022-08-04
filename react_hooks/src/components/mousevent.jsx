import React from "react"

function Mousevent() {
    const [count, setcount] = React.useState(0);
    const [ismouseover, setmouseover] = React.useState(false);

    function click(){
        setcount(count+1)
    }
    function enter() {
        setmouseover(true);
            console.log("enter")
            }
    function leave() {
        setmouseover(false);
            console.log("leave")
   }
    return (
        <div>
            <button onMouseEnter={enter} onMouseLeave={leave} onClick={click} style={ismouseover?{backgroundColor: "black", color:"white"}:{ backgroundColor: "white", color:"black"}}>Hover</button>
            {/* <button mouseDown={down}>Mouse down</button> */}
            <h1>{count}</h1>
        </div>
    );
}
export default Mousevent