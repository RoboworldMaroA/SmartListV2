
import React, {useState}  from 'react';
import {type} from "@testing-library/user-event/dist/type";
import {checkNode} from "@testing-library/jest-dom/dist/utils";
import './toDoListCSS.css';
import {Link} from "react-router-dom";
// import backgroundDocuments from "../photo/backgroundDocuments2...jpg";

const DocumentsList=({})=>{


    //
    // const itemList = [
    //     "t-short",
    //     "jacket",
    //     "shorts",
    //     "quantityUnderwear"
    //
    // ]
    //
    // const allItemInList = itemList.map((itemList,i)=>({id:i,title:itemList}));
    //  console.log(allItemInList)


    const [checked2, setChecked2] = useState(false);

    function toggle(){
        setChecked2(checked2=> !checked2)
    }



    return(

        //Description of the list
<div className="row">

    <div className="col m11 s10">

        <div id="titleElements">
            <p>DOCUMENTS</p>
        </div>

    <form id="documents"  action="#">



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
</div>
    )//end return

}

export default DocumentsList;