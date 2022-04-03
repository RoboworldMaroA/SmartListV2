
import React, {useState}  from 'react';
import {type} from "@testing-library/user-event/dist/type";
import {checkNode} from "@testing-library/jest-dom/dist/utils";
import './toDoListCSS.css';
import {Link} from "react-router-dom";


const EssentialList=({})=>{


    const [checked2, setChecked2] = useState(false);

    function toggle(){
        setChecked2(checked2=> !checked2)
    }



    return(

        //Description of the list
<div>

    <form id="mainBodyToDoList"  action="#">



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
                <span>Underwear Quantity: </span>
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


        {/*save list button subnit shoul execute function used to saving list on the computer*/}
        {/*<div className="row">*/}
        {/*    <Link to="../SaveList">*/}
        {/*        <button className="waves-effect waves-light btn #795548 brown " type="submit" name="action">*/}
        {/*            Save List(Saving not ready yet)*/}
        {/*        </button>*/}
        {/*    </Link>*/}
        {/*</div>*/}



    </form>
</div>
    )//end return

}

export default EssentialList;