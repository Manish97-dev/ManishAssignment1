import React, { useState } from "react";

function ControlledFunction () {
    const[name, setName] = useState("Manish")
    const HandleForm = (e) => {
        e.preventDefault()
        console.log(e.target[0].value);
    }
    return(
        <div>
            <form onSubmit={HandleForm}>
                <label>Enter Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value.toUpperCase().substring(0,8))}></input>
                <br/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ControlledFunction