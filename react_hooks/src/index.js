import React from 'react';
import ReactDOM from 'react-dom';
// import '../public/index.css';
import Foot from './components/foot.jsx'
import Head from './components/head.jsx'
import Contents from './components/contentarray.jsx'
import App from './components/app.jsx'
import Login from './components/login.jsx'
import Hooks from './components/hooks.jsx'
import Destructure from './components/destructure.jsx'
import Mousevent from './components/mousevent.jsx'
import Form from './components/forms.jsx'
import Form2 from './components/forms2.jsx'
import Form3 from './components/forms3.jsx'
import Complex from './components/formsChlng.jsx'
import ComplexSpread from './components/formsChg_Spread.jsx'
import Todo from './components/todolist.jsx'
import Todoapp from './components/Todoapp.jsx'
import Card from './components/card.jsx'

// let flo = ["f","l","o"]
// let wer = [...flo,"w","e","r"]
// console.log(wer);
// let flow = {a:"f",b:"l",c:"o"}
// let wers = {flow,d:"w",e:"e",f:"r"}
// console.log(wers);

// let rendercondition=true;
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
    {/* <h3 style={ rendercondition ? {textDecoration: "line-through"} : null }>Hello World</h3> */}
    {/* <Login condition={rendercondition} /> */}
    {/* <Destructure/> */}
     {/* <Mousevent/>  */}
    {/* <Form/>  */}
    {/* <Todo/> */}
    <Todoapp/>
    <Foot />
  </div>,
  document.getElementById("root"), () => { }
)
