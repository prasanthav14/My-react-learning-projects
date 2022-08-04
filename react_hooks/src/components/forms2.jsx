import React from "react"


function Form2() {
    // const [text, setext] = React.useState("");
    // const [disp, setdisp] = React.useState("");
    const [first, setfirst] = React.useState("");
    const [last, setlast] = React.useState("");

    // function exe(event) {
    //     setext(event.target.value);
    //     console.log("input")
    // }
    
    function firstf(event) {
        setfirst(event.target.value);
        console.log(first)
    }
    
    function lastf(event) {
        setlast(event.target.value);
        console.log(last)
    }
    // function click(even) {
    //     setdisp(text);
    //     even.preventDefault();
    // }

    return (
        <div>
        <form method="" action="">
            {/* <input placeholder="input" onChange={exe} type="text" /> */}
            <input placeholder="input" onChange={firstf} type="text" />
            <input placeholder="input" onChange={lastf} type="text" />
            {/* <button onClick={click} type="submit">submit</button> */}
            <h1>hello {first} {last}</h1> 
        </form>
        {/* <h1> Hello {disp} </h1> */}
        </div>
    )
}

export default Form2