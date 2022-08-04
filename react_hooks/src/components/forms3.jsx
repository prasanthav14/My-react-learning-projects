import React from "react"

function Form3() {
   
    const [name, setname] = React.useState({
        fname:"",
        lname:""
    });
    
    // function fnamef(event) {
    //     if(event.target.name === "fname")
    //     setname({fname: event.target.value});
    //     console.log(name);
    //       }
    // function lnamef(event) {
    //     if(event.target.name === "lname")
    //     setname({lname: event.target.value});
    //     console.log(name);
    // }
    function namef(event) {
         setname((prevalue)=>{
        if(event.target.name === "lname")
        return ({lname:event.target.value , fname:prevalue.fname});
        else if(event.target.name === "fname")
        return ({fname:event.target.value, lname: prevalue.lname});
    })
}

    return (
        <div>
        <form>
            {/* <input placeholder="input" name="fname" onChange={fnamef} type="text" />
             <input placeholder="input"  name="lname" onChange={lnamef} type="text" /> */}
            <input placeholder="input" name="fname" onChange={namef} type="text" />
            <input placeholder="input"  name="lname" onChange={namef} type="text" />
            <h1> Hello {name.fname} {name.lname}  </h1> 
        </form>
        </div>
    )
}

export default Form3