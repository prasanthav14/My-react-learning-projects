import React from "react"

function Input(prop) {
    return (
        <div >
            <div className="mb-4">
                <label for="exampleInputPassword1" className="form-label">{prop.label}</label>
                <input type={prop.type} className="form-control" placeholder= {prop.label} />
            </div>
        </div>
    )
}

export default Input