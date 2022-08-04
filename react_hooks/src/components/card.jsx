import React from "react"
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';

function Card(props) {
    function dele(id){
        console.log(id);
        props.set(
        props.click.filter((value,id1)=>{
            return id1 !== id
        })
        )
    }
    
    return (
        <div>
            <div className="card text-dark bg-light ms-5 mb-3" style={{ float: "left", width: "15rem" }}>
                <div className="card-body">
                    <h2 className="card-title">{props.title}</h2>                  
                    <p className="card-text">{props.content}</p>
                    <button onClick={()=>{dele(props.id)}} className=" btn btn-sm btn-outline-warning">  
                    <DeleteOutlineSharpIcon/> 
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card