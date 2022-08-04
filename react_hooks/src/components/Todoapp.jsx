import React from "react"
import Card from './card.jsx'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function Todoapp() {
    const [read, setRead] = React.useState({ title: "", content: "" });
    const [click, setClick] = React.useState([]);
    const [visib, setVisib] = React.useState(false);

    function visible() {
        setVisib(true);
    }

    function buttonFn() {
        if (read.title !== "") {
            setClick(prev => [...prev, read]);
            console.log(click);
            setRead({ title: "", content: "" })
        }
    }

    function inputFn(event) {
        const { name, value } = event.target;
        setRead({ ...read, [name]: value })
        //  console.log("title: " + read.title +" "+ "content: "+ read.content)
    }

    return (
        <div>
            <div className="card text-white mb-3 mx-auto" style={{ maxWidth: "25rem" }}>
                <input onChange={inputFn} onClick={visible} value={read.title} name="title" className="form-control" placeholder="Title here..." />
                {visib && (
                    <div>
                        <textarea onChange={inputFn} value={read.content} name="content" className="form-control" placeholder="Content here..." />
                        <Zoom in="true">
                            <Fab size="small" onClick={buttonFn} className=" btn-sm btn-warning m-1 mx-auto"> <AddCircleIcon /> </Fab>
                        </Zoom>
                    </div>
                )}
            </div>
            {
                click.map((ele, index) => {
                    return (<Card key={index} set={setClick} click={click} id={index} title={ele.title} content={ele.content} />)
                })
            }
        </div>
    )
}

export default Todoapp