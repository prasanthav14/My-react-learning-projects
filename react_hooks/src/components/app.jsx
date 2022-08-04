import React from "react"

function App(prop) {
    return (
        <div className="card app">
            <div className="card-header">
                {prop.icon}
            </div>
            <div class="card-body">
                <blockquote className="blockquote mb-0">
                    <p>{prop.title}</p>
                    <footer className="blockquote-footer">{prop.meaning}<cite title="Source Title">{prop.id}</cite></footer>
                </blockquote>
            </div>
        </div>

    );
}

export default App;