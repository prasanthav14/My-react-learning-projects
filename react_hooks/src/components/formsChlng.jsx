import React from "react"

function Complex() {
    const [text, setext] = React.useState({ fname: "", lname: "", email: "" })
    function name(event) {
        const input = event.target.value;
        const name = event.target.name;
        setext(prev => {
            if (name === "finput")
                return { fname: input, lname: prev.lname,email: prev.email}
            else if (name === "linput")
                return { lname: input, fname: prev.fname, email: prev.email}
            else if (name === "email")
                return { email: input, fname: prev.fname, lname: prev.lname}
        })
    }

    return (
        <div>
            <h1>Hello' {text.fname} {text.lname}</h1>
            <h4>{text.email}</h4>
            <form>
                <input type="text" onChange={name} name="finput"></input>
                <input type="text" onChange={name} name="linput"></input>
                <input type="email" onChange={name} name="email"></input>
            </form>
        </div>
    )
}

export default Complex