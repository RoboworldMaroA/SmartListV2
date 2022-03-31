
import React, {useState}  from 'react';
import {type} from "@testing-library/user-event/dist/type";
import {checkNode} from "@testing-library/jest-dom/dist/utils";



const ToDoList=({})=>{

    const itemList = [
        "t-short",
        "jacket",
        "shorts"

    ]

    const allItemInList = itemList.map((itemList,i)=>({id:i,title:itemList}));
     console.log(allItemInList)


    const [checked2, setChecked2] = useState(false);

    function toggle(){
        setChecked2(checked2=> !checked2)
    }


    return(

        //Description of the travelingList


    <form id="main-body-todo-travelingList" action="#">
        <div><p>Item that you want to take with you on the trip</p> </div>

        <p id="firstname">
            <label>
                <input type="checkbox" className="filled-in" onChange={toggle} defaultChecked="checked"/>
                <span>T-short
                <p> {checked2 ? "checked": "not checked"}</p>
                </span>

            </label>
        </p>
        <p>
            <label>
                <input type="checkbox" className="filled-in" defaultChecked="checked"/>
                <span>Pants</span>
            </label>
        </p>
        <p>
            <label>
                <input type="checkbox" className="filled-in" defaultChecked="checked"/>
                <span>Tooth Brush</span>
            </label>
        </p>
        <p>
            <label>
                <input type="checkbox" className="filled-in" defaultChecked="checked"/>
                <span>Shorts</span>
            </label>
        </p>
        <p>
            <label>
                <input type="checkbox" className="filled-in" defaultChecked="checked"/>
                <span>Jacket</span>
            </label>
        </p>
        <p>
            <label>
                <input type="checkbox" className="filled-in" defaultChecked="checked"/>
                <span>Jeans</span>
            </label>
        </p>
    </form>

    )//end return

}

export default ToDoList;