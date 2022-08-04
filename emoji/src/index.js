import React from 'react';
import ReactDOM from 'react-dom';
// import '../public/index.css';
import Foot from './components/foot.jsx'
import Head from './components/head.jsx'
import Contents from './components/contentarray.jsx'
import App from './components/app.jsx'
import Login from './components/login.jsx'

let rendercondition=true;

ReactDOM.render(
  <div>
    <Head />
    {/* {Contents.map(contObj =>
      <App
        key={contObj.id}
        id={contObj.id}
        icon={contObj.icon}
        title={contObj.title}
        meaning={contObj.meaning.substring(1, 100)}
      />
    )} */}
    <h3 style={ rendercondition ? {textDecoration: "line-through"} : null }>Hello World</h3>
    <Login condition={rendercondition} />
    <Foot />
  </div>,
  document.getElementById("root"), () => { }
)
