import React from 'react';
import Structure from './structure.jsx'

function Destructure(){
    const [
        {icon:[icon1,icon2],title:title1,meaning:{one,two}},
        {icon:[icon3,icon4],title:title2,meaning:{one:three,two:four}},
        {icon:[icon5,icon6],title:title3,meaning:{one:five,two:six}}
    ] = Structure;
return(
 <table style={{borderStyle: "solid"}}>
<tr> 
<th>Icon</th> 
<th>Title</th> 
<th>Meaning</th> 
</tr>
<tr> 
<td>{icon1} {icon2}</td> 
<td>{title1}</td> 
<td>{one} {two}</td> 
</tr>
<tr> 
<td>{icon3} {icon4}</td> 
<td>{title2}</td> 
<td>{three} {four}</td> 
</tr>
<tr> 
<td>{icon5} {icon6}</td> 
<td>{title3}</td> 
<td>{five} {six}</td> 
</tr>
</table> 
)
}

export default Destructure;