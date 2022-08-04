import React from "react"

const date= new Date();
const year = date.getFullYear()

function Foot(){
  return(
  <div>
 <footer class="fixed-bottom bg-light text-center text-lg-start">
    <div class="foot text-center p-3"> © {year} Copyright :
     <a class="text-dark" href="/"> prasanthav14</a>
   </div>
  </footer>
 </div>
  )
}

export default Foot;


