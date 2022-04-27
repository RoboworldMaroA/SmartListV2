
import React, {useState}  from 'react';
import {type} from "@testing-library/user-event/dist/type";
import {checkNode} from "@testing-library/jest-dom/dist/utils";
// import './toDoListCSS.css';
import {Link} from "react-router-dom";
import '../allPages.css'


const HomeButtons=({})=>{



    return(

        //Description of the list
        <div id="allButtons" className="container-fluid" >

                                <div clasName="row" id="loginOrRegister">
                                   <Link to="Register">
                                    <button  id="buttonSizeRegister" className="btn waves-effect waves-light #5d4037 brown darken-1">
                                        <div id="registerIconAndName"> <i id="iconRegister" className="medium material-icons">account_box</i>  Register</div>
                                    </button>
                                </Link>
                                </div>

                               {/*LOGIN BUTTON ON HOME PAGE*/}
                               <div id="loginOrRegister">
                                   <Link to="Login">
                                   <button id="buttonSizeLogin" className="btn waves-effect waves-light #5d4037 brown darken-1">
                                      <div id="loginIconAndName"> <i id="iconLogin" className="medium material-icons">login</i> Login</div>
                                   </button>
                                   </Link>
                               </div>

                                <div id="createCustomerList">
                                    <Link to="CreateCustomerList">
                                    <button id="buttonSizeCreateList" className="btn waves-effect waves-light #5d4037 brown darken-1">
                                        <i id="iconCreateList" className="medium material-icons">luggage</i>
                                         Pack your luggage
                                    </button>
                                    </Link>
                                </div>

                                <div id="pay">
                                    <Link to="pay">
                                        <button  id="buttonSizePay" className="btn waves-effect waves-light #5d4037 brown darken-1">
                                            <div id="payIconAndName"> <i id="iconPay" className="medium material-icons">credit_card</i>
                                                Pay</div>
                                        </button>
                                    </Link>

                                </div>
                                <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>





            {/*    <div id="titleElements">*/}
            {/*        <p >BEACH</p>*/}
            {/*    </div>*/}
            {/*    <p>*/}
            {/*        <label>*/}
            {/*            <input type="checkbox" className="filled-in" onChange={toggle} />*/}

            {/*            <span> Swimsuit.*/}
            {/*    <p> {checked2 ? "checked": "not checked"}</p>*/}
            {/*</span>*/}

            {/*        </label>*/}
            {/*    </p>*/}



            {/*    <p>*/}
            {/*        <label>*/}
            {/*            <input type="checkbox" className="filled-in" />*/}
            {/*            <span>Towel</span>*/}
            {/*        </label>*/}
            {/*    </p>*/}
            {/*    <p>*/}
            {/*        <label>*/}
            {/*            <input type="checkbox" className="filled-in" />*/}
            {/*            <span>Sandals</span>*/}
            {/*        </label>*/}
            {/*    </p>*/}
            {/*    <p>*/}
            {/*        <label>*/}
            {/*            <input type="checkbox" className="filled-in" />*/}
            {/*            <span>Sunscreen</span>*/}
            {/*        </label>*/}
            {/*    </p>*/}
            {/*    <p>*/}
            {/*        <label>*/}
            {/*            <input type="checkbox" className="filled-in" />*/}
            {/*            <span>House Key</span>*/}
            {/*        </label>*/}
            {/*    </p>*/}


                {/*save list button subnit shoul execute function used to saving list on the computer*/}
                {/*<div className="row">*/}
                {/*    <Link to="../SaveList">*/}
                {/*        <button className="waves-effect waves-light btn #795548 brown " type="submit" name="action">*/}
                {/*            Save List(Saving not ready yet)*/}
                {/*        </button>*/}
                {/*    </Link>*/}
                {/*</div>*/}

        </div>
    )//end return

}

export default HomeButtons;