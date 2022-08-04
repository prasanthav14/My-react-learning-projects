import ListAltIcon from '@mui/icons-material/ListAlt';
import React from "react"
let d = new Date();

function Head() {
    const [tim, seTim] = React.useState(d.toLocaleTimeString())

    setInterval(() => {
        d = new Date();
        seTim(d.toLocaleTimeString())
    }, 1000);
    return (
        <div>
            <nav className="navbar bg-warning mb-1">
                 <h3 className="navbar-brand mx-auto" href="/"> <ListAltIcon/> To-Do List </h3>
                <h3 className="mx-auto">{tim}</h3>
            </nav>
        </div>
    );
}

export default Head;


