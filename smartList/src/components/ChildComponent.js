import React from "react";

function ChildComponent(props){
    return(
        <div>
            <p>Test greet Parent pass data from FormCreateList to the DisplayList</p>
            <button onClick={()=>props.greetHandler('child')}>Greet Parent</button>


        </div>

    )
}
export default ChildComponent;