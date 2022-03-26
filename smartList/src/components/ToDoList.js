
import React, {useState}  from 'react';
import {type} from "@testing-library/user-event/dist/type";
import {checkNode} from "@testing-library/jest-dom/dist/utils";
import './toDoListCSS.css';


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

        //Description of the list
<div>

    <form id="mainBodyToDoList"  action="#">

        <div id="titleElements">
            <p>DOCUMENTS</p>
        </div>


            {/*<label>*/}
            {/*    <input type="checkbox" className="filled-in" onChange={toggle}/>*/}
            {/*    <span>Passport*/}
            {/*    <p> {checked2 ? "no checked": "checked"}</p>*/}
            {/*    </span>*/}

            {/*</label>*/}

        <p>
            <label>
                <input id="crossLine" type="checkbox" className="filled-in" />
                <span>Passport</span>
            </label>
        </p>

              <p>
            <label>
                <input  type="checkbox" className="filled-in"/>
                <span>ID</span>
            </label>
        </p>
        <p>
            <label>
                <input type="checkbox" className="filled-in" />
                <span>Driver Licence</span>
            </label>
        </p>
        <p>
            <label>
                <input type="checkbox" className="filled-in" />
                <span>Certificate of vaccination</span>
            </label>
        </p>
        <p>
            <label>
                <input type="checkbox" className="filled-in" />
                <span>Travel Insurance</span>
            </label>
        </p>
        <p>
            <label>
                <input type="checkbox" className="filled-in" />
                <span>Insurance Card</span>
            </label>
        </p>
        <p>
            <label>
                <input type="checkbox" className="filled-in" />
                <span>Boarding pass</span>
            </label>
        </p>




        <div id="titleElements">
            <p>ESSENTIALS</p>
        </div>

       <div id="checkboxColor">
        <label>
            <input  type="checkbox" className="filled-in" onChange={toggle} />
            <span>{checked2 ? <p id="checkboxColor">
                    "Face Mask packed"
                    </p>
                    : "Face Mask"}
                </span>
        </label>

        {/*<p>*/}
        {/*    <label>*/}
        {/*        <input type="checkbox" className="filled-in" onChange={toggle}/>*/}
        {/*        <span>{checked2 ? <p id="checkboxColor">*/}
        {/*                "Underwear packed"*/}
        {/*            </p>*/}
        {/*            : "Underwear"}*/}
        {/*        </span>*/}
        {/*    </label>*/}
        {/*</p>*/}
        <p>
            <label>
                <input type="checkbox" className="filled-in" />
                <span>Underwear</span>
            </label>
        </p>
            <label>
                <input type="checkbox" className="filled-in" />
                <span>Tooth Brush</span>
            </label>

        <p>
            <label>
                <input type="checkbox" className="filled-in" />
                <span>Socks</span>
            </label>
        </p>
        <p>
            <label>
                <input type="checkbox" className="filled-in" />
                <span>Medications</span>
            </label>
        </p>
        <p>
            <label>
                <input type="checkbox" className="filled-in" />
                <span>Cell Phone</span>
            </label>
        </p>

           <p>
               <label>
            <input type="checkbox" className="filled-in" />
            <span>Cell Phone Charger</span>
        </label>
           </p>

        <p>
            <label>
                <input type="checkbox" className="filled-in" />
                <span>Wallet</span>
            </label>
        </p>
        <p>
            <label>
                <input type="checkbox" className="filled-in" />
                <span>Cash</span>
            </label>
        </p>
       </div>



        <div id="titleElements">
            <p >BEACH</p>
        </div>
        <p>
        <label>
            <input type="checkbox" className="filled-in" onChange={toggle} />

            <span> Swimsuit.
                <p> {checked2 ? "checked": "not checked"}</p>
            </span>

        </label>
        </p>



        <p>
            <label>
                <input type="checkbox" className="filled-in" />
                <span>Towel</span>
            </label>
        </p>
        <p>
            <label>
                <input type="checkbox" className="filled-in" />
                <span>Sandals</span>
            </label>
        </p>
        <p>
            <label>
                <input type="checkbox" className="filled-in" />
                <span>Sunscreen</span>
            </label>
        </p>
        <p>
            <label>
                <input type="checkbox" className="filled-in" />
                <span>House Key</span>
            </label>
        </p>


        <div id="titleElements">
            <p>HIKING</p>
        </div>

        <label>
            <input type="checkbox" className="filled-in" onChange={toggle} />

            <span> Shirt (Non-Cotton)
                <p> {checked2 ? "checked": "not checked"}</p>
            </span>

        </label>

        <p>
            <label>
                <input type="checkbox" className="filled-in" />
                <span>Small Travel Towel</span>
            </label>
        </p>
        <p>
            <label>
                <input type="checkbox" className="filled-in" />
                <span>Pants (Non-Cotton) </span>
            </label>
        </p>
        <p>
            <label>
                <input type="checkbox" className="filled-in" />
                <span>Sunscreen</span>
            </label>
        </p>
        <p>
            <label>
                <input type="checkbox" className="filled-in" />
                <span>Sunglasses</span>
            </label>
        </p>
        <p>
            <label>
                <input type="checkbox" className="filled-in" />
                <span>Bug Spray</span>
            </label>
        </p>
        <p>
        <label>
            <input type="checkbox" className="filled-in" />
            <span>First Aid Kit</span>
        </label>
    </p>
        <p>
            <label>
                <input type="checkbox" className="filled-in" />
                <span>Hiking Shoes</span>
            </label>
        </p>

        <p>
            <label>
                <input type="checkbox" className="filled-in" />
                <span>Water Bottle</span>
            </label>
        </p>
        <p>
            <label>
                <input type="checkbox" className="filled-in" />
                <span>Hat</span>
            </label>
        </p>




    </form>
</div>
    )//end return

}

export default ToDoList;