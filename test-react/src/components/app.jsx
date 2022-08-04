import React from "react"
import Para from "./para.jsx"
function App(prop) {
    console.log(prop)
    return (
        <div className="container app card h-100 ms-5 mt-5">
            <img src="https://picsum.photos/500" className="card-img-top" alt="picsum loaded img" />
            <div className="card-body">
                <small>{prop.id}</small>
                <h5 className="card-title">{prop.activity}</h5>
                <Para content={prop.sport} />
            </div>
            <div className="card-footer">
                <small><Para content={prop.desc} /></small>
            </div>

        </div>
    )
}

export default App;