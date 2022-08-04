import React from "react"

function ComplexSpread() {
    const [text, setext] = React.useState({ fname: "", lname: "", email: "" })
    function fn(event) {
        const [value,name] = event.target
            setext((prev) => {
            console.log(prev)
            console.log(text)
            return ({...prev, [text]: value})
            // if (name === "finput")
            //     return { ...prev, fname: value }
            // else if (name === "linput")
            //     return { ...prev, lname: value }
            // else if (name === "email")
            //     return { ...prev, email: value }
        })
    }

    return (
        <div>
            <h1>Hello' {text.fname} {text.lname}</h1>
            <h4>{text.email}</h4>
            <form>
                <input type="text" onChange={fn} name="finput"></input>
                <input type="text" onChange={fn} name="linput"></input>
                <input type="email" onChange={fn} name="email"></input>
            </form>
        </div>
    )
}

export default ComplexSpread;