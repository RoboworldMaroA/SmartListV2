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
    const [passportQty, setPassportQty] = useState(1);

    // const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const [items, setItems] = useState([
        { itemName: 'Passport', quantity: 1, isSelected: false },
        { itemName: 'Boarding Pass', quantity: 3, isSelected: true },
        { itemName: 'Travel Insurance', quantity: 2, isSelected: false },
        { itemName: 'Certificate of Vaccination for COVID 19 ', quantity: 2, isSelected: false},
        { itemName: 'Driving  Licence', quantity: 2, isSelected: false},
        { itemName: 'Passport', quantity: 2, isSelected: false},
        { itemName: 'House Key', quantity: 2, isSelected: false},
    ]);


    function toggle() {
        setChecked2(checked2 => !checked2)
    }


    function changeQuantity() {
        setUnderwearQty(9);
    }

    // function changeQuantityMinus(event) {
    //     setUnderwearQty(underwearQty - 1);
    //     event.preventDefault();
    //
    // }
    //
    // function changeQuantityPlus(event) {
    //     setUnderwearQty(underwearQty + 1);
    //     event.preventDefault();
    // }
    //
    //
    // function changeQuantityMinusPassport(event) {
    //     setPassportQty(passportQty-1);
    //     event.preventDefault();
    //
    // }
    //
    // function changeQuantityPlusPassport(event) {
    //     setPassportQty(passportQty + 1);
    //     event.preventDefault();
    // }








    // function to add a new item
    const handleAddButtonClick = () => {
        const newItem = {
            itemName: inputValue,
            quantity: 2,
            isSelected: false,

        };

        const newItems = [...items, newItem];

        setItems(newItems);
        setInputValue('');
        calculateTotal();


    };











    const handleIncreaseQuantity = (index)=>{
        // alert("button increase was clicked ")
        const newItems=[...items];
        newItems[index].quantity++;
        setItems(newItems);
        calculateTotal();

        // event.preventDefault();

    }

    const handleDecreaseQuantity = (index)=>{
        // alert("button decrease was clicked ")
        const newItems=[...items];
        newItems[index].quantity--;
        setItems(newItems);
        calculateTotal();


    }


    const [totalItemCount, setTotalItemCount] = useState(6);

    const calculateTotal = () => {
        const totalItemCount = items.reduce((total, item) => {
            return total + item.quantity;
        }, 0);

        setTotalItemCount(totalItemCount);
    };



    return (

        <div id="blockEssential" className="row">

            <div className="col m10 s10">

                <div className="card">
                    <div className="card-image">
                        <img src={require("../photo/backgroundDocuments2.jpg")}/>
                        <span className="card-title">ESSENTIALS</span>
                    </div>
                    <div className="card-content">

                        <form id="documents" action="#">
                            {/*<label>*/}
                            {/*    <div id="toRight">*/}
                            {/*        <button onClick={(event) => changeQuantityMinusPassport(event)}>-</button>*/}
                            {/*        <button onClick={(event)=>event.preventDefault()}> {passportQty} </button>*/}
                            {/*        <button onClick={(event) => changeQuantityPlusPassport(event)}>+</button>*/}
                            {/*    </div>*/}
                            {/*</label>*/}
                            {/*<p>*/}
                            {/*    <label>*/}
                            {/*        <input id="crossLine" type="checkbox" className="filled-in"/>*/}
                            {/*        <span>Passport</span>*/}
                            {/*        <div id="toRight">*/}
                            {/*            <button onClick={(event) => changeQuantityMinus(event)}>-</button>*/}
                            {/*            <button onClick={(event)=>event.preventDefault()}> {underwearQty} </button>*/}
                            {/*            <button onClick={(event) => changeQuantityPlus(event)}>+</button>*/}
                            {/*        </div>*/}
                            {/*    </label>*/}
                            {/*</p>*/}

                            {/*<p>*/}
                            {/*    <label>*/}
                            {/*        <input type="checkbox" className="filled-in"/>*/}
                            {/*        <span>Identity card</span>*/}
                            {/*    </label>*/}
                            {/*</p>*/}


                            {/*/!*??*!/*/}

                            {/*<label>*/}
                            {/*    <div id="toRight">*/}
                            {/*        <button onClick={(event) => changeQuantityMinus(event)}>-</button>*/}
                            {/*        <button> {underwearQty} </button>*/}
                            {/*        <button onClick={(event) => changeQuantityPlus(event)}>+</button>*/}
                            {/*    </div>*/}
                            {/*</label>*/}
                            {/*<p>*/}
                            {/*    <label>*/}
                            {/*        <input id="crossLine" type="checkbox" className="filled-in"/>*/}
                            {/*        <span>House keys</span>*/}
                            {/*        <div id="toRight">*/}
                            {/*            <button onClick={(event) => changeQuantityMinus(event)}>-</button>*/}
                            {/*            <button> {underwearQty} </button>*/}
                            {/*            <button onClick={(event) => changeQuantityPlus(event)}>+</button>*/}
                            {/*        </div>*/}
                            {/*    </label>*/}
                            {/*</p>*/}


                            {/*<p>*/}
                            {/*    <label>*/}
                            {/*        <input id="crossLine" type="checkbox" className="filled-in"/>*/}
                            {/*        <span>Cash</span>*/}
                            {/*        <div id="toRight">*/}
                            {/*            <button onClick={(event) => changeQuantityMinus(event)}>-</button>*/}
                            {/*            <button> {underwearQty} </button>*/}
                            {/*            <button onClick={(event) => changeQuantityPlus(event)}>+</button>*/}
                            {/*        </div>*/}
                            {/*    </label>*/}
                            {/*</p>*/}

                            {/*<p>*/}
                            {/*    <label>*/}
                            {/*        <input id="crossLine" type="checkbox" className="filled-in"/>*/}
                            {/*        <span>Hotel booking confirmation</span>*/}
                            {/*        <div id="toRight">*/}
                            {/*            <button onClick={(event) => changeQuantityMinus(event)}>-</button>*/}
                            {/*            <button> {underwearQty} </button>*/}
                            {/*            <button onClick={(event) => changeQuantityPlus(event)}>+</button>*/}
                            {/*        </div>*/}
                            {/*    </label>*/}
                            {/*</p>*/}

                            {/*<p>*/}
                            {/*    <label>*/}
                            {/*        <input type="checkbox" className="filled-in"/>*/}
                            {/*        <span> Plane Ticket </span>*/}
                            {/*    </label>*/}
                            {/*</p>*/}

                            {/*/!*???*!/*/}


                            {/*/!*??*!/*/}

                            {/*<label>*/}
                            {/*    <div id="toRight">*/}
                            {/*        <button onClick={(event) => changeQuantityMinus(event)}>-</button>*/}
                            {/*        <button> {underwearQty} </button>*/}
                            {/*        <button onClick={(event) => changeQuantityPlus(event)}>+</button>*/}
                            {/*    </div>*/}
                            {/*</label>*/}
                            {/*<p>*/}
                            {/*    <label>*/}
                            {/*        <input id="crossLine" type="checkbox" className="filled-in"/>*/}
                            {/*        <span>Driving Licence</span>*/}
                            {/*        <div id="toRight">*/}
                            {/*            <button onClick={(event) => changeQuantityMinus(event)}>-</button>*/}
                            {/*            <button> {underwearQty} </button>*/}
                            {/*            <button onClick={(event) => changeQuantityPlus(event)}>+</button>*/}
                            {/*        </div>*/}
                            {/*    </label>*/}
                            {/*</p>*/}


                            {/*<p>*/}
                            {/*    <label>*/}
                            {/*        <input id="crossLine" type="checkbox" className="filled-in"/>*/}
                            {/*        <span>Certificate of Vaccination for COVID 19</span>*/}
                            {/*        <div id="toRight">*/}
                            {/*            <button onClick={(event) => changeQuantityMinus(event)}>-</button>*/}
                            {/*            <button> {underwearQty} </button>*/}
                            {/*            <button onClick={(event) => changeQuantityPlus(event)}>+</button>*/}
                            {/*        </div>*/}
                            {/*    </label>*/}
                            {/*</p>*/}

                            {/*<p>*/}
                            {/*    <label>*/}
                            {/*        <input id="crossLine" type="checkbox" className="filled-in"/>*/}
                            {/*        <span>Travel Insurance</span>*/}
                            {/*        <div id="toRight">*/}
                            {/*            <button onClick={(event) => changeQuantityMinus(event)}>-</button>*/}
                            {/*            <button> {underwearQty} </button>*/}
                            {/*            <button onClick={(event) => changeQuantityPlus(event)}>+</button>*/}
                            {/*        </div>*/}
                            {/*    </label>*/}
                            {/*</p>*/}

                            {/*<p>*/}
                            {/*    <label>*/}
                            {/*        <input type="checkbox" className="filled-in"/>*/}
                            {/*        <span>Boarding Pass</span>*/}
                            {/*    </label>*/}
                            {/*</p>*/}





                            <div className='main-container'>
                                <div className='add-item-box'>
                                    <div className='add-item-box'>


                                    </div>
                                    <div className='item-list'>
                                        {items.map((item, index) => (
                                                <div>
                                                    {/*<div> {item.itemName}</div>*/}

                                                    {/*<p>*/}
                                                    {/*    <label>*/}
                                                    {/*        <input id="crossLine" type="checkbox" className="filled-in"/>*/}
                                                    {/*        <span>Passport</span>*/}
                                                    {/*        <div id="toRight">*/}
                                                    {/*            <button onClick={() => handleDecreaseQuantity(index)}>-*/}
                                                    {/*            </button>*/}
                                                    {/*            <button> {underwearQty} </button>*/}
                                                    {/*            <button onClick={() => handleIncreaseQuantity(index)}>+*/}
                                                    {/*            </button>*/}
                                                    {/*        </div>*/}
                                                    {/*    </label>*/}
                                                    {/*</p>*/}

                                                    <p>
                                                        <label>
                                                            <input id="crossLine" type="checkbox" className="filled-in"/>
                                                            <span>{item.itemName}</span>
                                                            <div id="toRight">
                                                                <button onClick={(event) => handleDecreaseQuantity(index, event.preventDefault())}>-
                                                                </button>
                                                                <button onClick={(event)=>event.preventDefault()}> {item.quantity} </button>
                                                                <button onClick={(event) => handleIncreaseQuantity(index,event.preventDefault())}>+
                                                                </button>
                                                            </div>
                                                        </label>
                                                    </p>

                                                </div>


                                            )
                                        )
                                        }

                                    </div>

                                    <input value={inputValue} onChange={(event) => setInputValue(event.target.value)}
                                           className='add-item-input' placeholder='add your item'/>
                                    <i className="material-icons prefix" onClick={() => handleAddButtonClick()}>add</i>


                                </div>

                                <div className='total'>Total: {totalItemCount}</div>


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


                        {/*<form id="essential" action="#">*/}

                        {/*    <label>*/}
                        {/*        <div id="toRight">*/}
                        {/*            <button onClick={(event) => changeQuantityMinus(event)}>-</button>*/}
                        {/*            <button> {underwearQty} </button>*/}
                        {/*            <button onClick={(event) => changeQuantityPlus(event)}>+</button>*/}
                        {/*        </div>*/}
                        {/*    </label>*/}
                        {/*    <p>*/}
                        {/*        <label>*/}
                        {/*            <input id="crossLine" type="checkbox" className="filled-in"/>*/}
                        {/*            <span>Passport</span>*/}
                        {/*            <div id="toRight">*/}
                        {/*                <button onClick={(event) => changeQuantityMinus(event)}>-</button>*/}
                        {/*                <button> {underwearQty} </button>*/}
                        {/*                <button onClick={(event) => changeQuantityPlus(event)}>+</button>*/}
                        {/*            </div>*/}
                        {/*        </label>*/}
                        {/*    </p>*/}


                        {/*    <p>*/}
                        {/*        <label>*/}
                        {/*            <input id="crossLine" type="checkbox" className="filled-in"/>*/}
                        {/*            <span>Travel Insurance</span>*/}
                        {/*            <div id="toRight">*/}
                        {/*                <button onClick={(event) => changeQuantityMinus(event)}>-</button>*/}
                        {/*                <button> {underwearQty} </button>*/}
                        {/*                <button onClick={(event) => changeQuantityPlus(event)}>+</button>*/}
                        {/*            </div>*/}
                        {/*        </label>*/}
                        {/*    </p>*/}

                        {/*    <p>*/}
                        {/*        <label>*/}
                        {/*            <input id="crossLine" type="checkbox" className="filled-in"/>*/}
                        {/*            <span>Passport</span>*/}
                        {/*            <div id="toRight">*/}
                        {/*                <button onClick={(event) => changeQuantityMinus(event)}>-</button>*/}
                        {/*                <button> {underwearQty} </button>*/}
                        {/*                <button onClick={(event) => changeQuantityPlus(event)}>+</button>*/}
                        {/*            </div>*/}
                        {/*        </label>*/}
                        {/*    </p>*/}

                        {/*    <p>*/}
                        {/*        <label>*/}
                        {/*            <input type="checkbox" className="filled-in"/>*/}
                        {/*            <span>ID</span>*/}
                        {/*        </label>*/}
                        {/*    </p>*/}

                        {/*</form>*/}

                    </div>
                </div>
            </div>

        </div>
    )//end return

}

export default EssentialList;