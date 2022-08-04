import React from 'react';
import ReactDOM from 'react-dom';
// import '../public/index.css';
import Foot from './components/foot.jsx'
import Head from './components/head.jsx'
import App from './components/app.jsx'
import Contents from './components/contentarray.jsx'

function findcontent(Contents){
  return(
<App 
key={Contents.id}
id={Contents.id}
activity = {Contents.activity}
sport = {Contents.sport}
desc = {Contents.desc}
  />
  )
}

ReactDOM.render(
  <div>
    <Head />
    {Contents.map(findcontent)}
    {/* <App activity= {Contents[0].activity} sport={Contents[0].sport} desc={Contents[0].desc} />
    <App activity= {Contents[1].activity} sport={Contents[1].sport} desc={Contents[1].desc} />
    <App activity= {Contents[2].activity} sport={Contents[2].sport} desc={Contents[2].desc} />
    <App activity= {Contents[3].activity} sport={Contents[3].sport} desc={Contents[3].desc} />
    <App activity= {Contents[4].activity} sport={Contents[4].sport} desc={Contents[4].desc} />
    <App activity= {Contents[5].activity} sport={Contents[5].sport} desc={Contents[5].desc} /> */}
    <Foot />
  </div>,
  document.getElementById('root'), () => { }
);