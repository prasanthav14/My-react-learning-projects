import React from "react"


function Form() {
    const [text, setext] = React.useState("");
    const [disp, setdisp] = React.useState("");

    function exe(event) {
        setext(event.target.value);
        console.log("input")
    }
function click(even) {
    setdisp(text);
}

return (
    <div>
        <form>
            <input placeholder="input" onChange={exe} type="text" />
            <button onClick={click} type="submit">submit</button>
        </form>
        <h1> Hello {disp} </h1>
    </div>
)
}

export default Form