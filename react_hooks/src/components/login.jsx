import React from "react"
import Input from './inputype.jsx'

function Register(prop) {
    return (
        <div className="login" >
            <form>
                <Input type="email" label="Email-Address" />
                <Input type="password" label="Password" />
                {prop.condition && <Input type="password" label="Confirm password" />}
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">
                {prop.condition?"Register":"Login"}
                </button>
            </form>
        </div>
    )
}

// function Login() {
//     return (
//         <div className="login" >
//             <form>
//                 <Input type="email" label="Email-Address" />
//                 <Input type="password" label="Password" />
//                 <Input type="password" label="Confirm Password" />
//                 <div className="mb-3 form-check">
//                     <input type="checkbox" className="form-check-input" id="exampleCheck1" />
//                     <label className="form-check-label" for="exampleCheck1">Check me out</label>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Register</button>
//             </form>
//         </div>
//     )
// }

export default Register;
// export {Login}