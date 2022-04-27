import React, {useState} from 'react';
import {type} from "@testing-library/user-event/dist/type";
import {checkNode} from "@testing-library/jest-dom/dist/utils";
import './toDoListCSS.css';
import {Link} from "react-router-dom";
import './EssentialCSS.css';

const EssentialList = ({}) => {


    const [checked2, setChecked2] = useState(false);
    const [maskWeight, setMaskWeight] = useState(0.02);
    const [underwearQty, setUnderwearQty] = useState(5);

    function toggle() {
        setChecked2(checked2 => !checked2)
    }


    function changeQuantity() {
        setUnderwearQty(9);
    }

    function changeQuantityMinus(event) {
        setUnderwearQty(underwearQty - 1);
        event.preventDefault();

    }

    function changeQuantityPlus(event) {
        setUnderwearQty(underwearQty + 1);
        event.preventDefault();
    }

    return (

        <div id="blockEssential" className="row">

            <div className="col m10 s10">

                <div className="card">
                    <div className="card-image">
                        <img src={require("../photo/backgroundDocuments2.jpg")}/>
                        <span className="card-title">ESSENTIALS</span>
                    </div>
                    <div className="card-content">
                        <form id="essential" action="#">

                            <label>
                                <div id="toRight">
                                    <button onClick={(event) => changeQuantityMinus(event)}>-</button>
                                    <button> {underwearQty} </button>
                                    <button onClick={(event) => changeQuantityPlus(event)}>+</button>
                                </div>
                            </label>
                            <p>
                                <label>
                                    <input id="crossLine" type="checkbox" className="filled-in"/>
                                    <span>Passport</span>
                                    <div id="toRight">
                                        <button onClick={(event) => changeQuantityMinus(event)}>-</button>
                                        <button> {underwearQty} </button>
                                        <button onClick={(event) => changeQuantityPlus(event)}>+</button>
                                    </div>
                                </label>
                            </p>


                            <p>
                                <label>
                                    <input id="crossLine" type="checkbox" className="filled-in"/>
                                    <span>Travel Insurance</span>
                                    <div id="toRight">
                                        <button onClick={(event) => changeQuantityMinus(event)}>-</button>
                                        <button> {underwearQty} </button>
                                        <button onClick={(event) => changeQuantityPlus(event)}>+</button>
                                    </div>
                                </label>
                            </p>

                            <p>
                                <label>
                                    <input id="crossLine" type="checkbox" className="filled-in"/>
                                    <span>Passport</span>
                                    <div id="toRight">
                                        <button onClick={(event) => changeQuantityMinus(event)}>-</button>
                                        <button> {underwearQty} </button>
                                        <button onClick={(event) => changeQuantityPlus(event)}>+</button>
                                    </div>
                                </label>
                            </p>

                            <p>
                                <label>
                                    <input type="checkbox" className="filled-in"/>
                                    <span>ID</span>
                                </label>
                            </p>

                        </form>

                    </div>
                </div>
            </div>

        </div>
    )//end return

}

export default EssentialList;