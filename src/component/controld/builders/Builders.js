import React from "react";

const Builders=(props)=>{
    return(<div>
        <div>{props.title}</div>
        <button onClick={props.add}>Add</button>
        <button onClick={props.remove}>Remove</button>
    </div>)
}
export default Builders
