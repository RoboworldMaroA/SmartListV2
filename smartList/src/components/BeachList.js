//
// import React, {useState}  from 'react';
// import {type} from "@testing-library/user-event/dist/type";
// import {checkNode} from "@testing-library/jest-dom/dist/utils";
// import './toDoListCSS.css';
// import {Link} from "react-router-dom";
//
//
// const BeachList=({})=>{
//
//
//
//
//     const [checked2, setChecked2] = useState(false);
//
//     function toggle(){
//         setChecked2(checked2=> !checked2)
//     }
//
//
//
//
//     return(
//
//         //Description of the list
// <div>
//
//     <form id="mainBodyToDoList"  action="#">
//
//         <div id="titleElements">
//             <p >BEACH</p>
//         </div>
//         <p>
//         <label>
//             <input type="checkbox" className="filled-in" onChange={toggle} />
//
//             <span> Swimsuit.
//                 <p> {checked2 ? "checked": "not checked"}</p>
//             </span>
//
//         </label>
//         </p>
//
//
//
//         <p>
//             <label>
//                 <input type="checkbox" className="filled-in" />
//                 <span>Towel</span>
//             </label>
//         </p>
//         <p>
//             <label>
//                 <input type="checkbox" className="filled-in" />
//                 <span>Sandals</span>
//             </label>
//         </p>
//         <p>
//             <label>
//                 <input type="checkbox" className="filled-in" />
//                 <span>Sunscreen</span>
//             </label>
//         </p>
//         <p>
//             <label>
//                 <input type="checkbox" className="filled-in" />
//                 <span>House Key</span>
//             </label>
//         </p>
//
//
//         {/*save list button subnit shoul execute function used to saving list on the computer*/}
//         {/*<div className="row">*/}
//         {/*    <Link to="../SaveList">*/}
//         {/*        <button className="waves-effect waves-light btn #795548 brown " type="submit" name="action">*/}
//         {/*            Save List(Saving not ready yet)*/}
//         {/*        </button>*/}
//         {/*    </Link>*/}
//         {/*</div>*/}
//
//
//
//     </form>
// </div>
//     )//end return
//
// }
//
// export default BeachList;




import React, {useEffect, useState} from 'react';
import {type} from "@testing-library/user-event/dist/type";
import {checkNode} from "@testing-library/jest-dom/dist/utils";
import './toDoListCSS.css';
import {Link} from "react-router-dom";


const BeachList=({})=>{

    const [checked2, setChecked2] = useState(false);
    const [maskWeight, setMaskWeight] = useState(0.02);
    const [underwearQty, setUnderwearQty] = useState(5);
    const [passportQty, setPassportQty] = useState(1);
    const [errorNewItem, setErrorNewItem] = useState("At least one character ");

    // const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const [items, setItems] = useState([
        {itemName: 'Bikini/Swimming suit', quantity: 1, isSelected: false, weight: 0.03},
        {itemName: 'Beach Towel', quantity: 0, isSelected: false, weight: 0.03},
        {itemName: 'Sandals', quantity: 1, isSelected: false, weight: 0.03},
        {itemName: 'Bluetooth Speaker ', quantity: 0, isSelected: false, weight: 0.1},
        // {itemName: 'Charger', quantity: 1, isSelected: false, weight: 0.02},
        // {itemName: 'Camera Bag', quantity: 1, isSelected: false, weight: 0.02},
        // {itemName: 'House Key', quantity: 1, isSelected: false, weight: 0.02},
        // {itemName: 'Cash', quantity: 1, isSelected: false, weight: 0.02},
        // {itemName: 'Travel Insurance', quantity: 1, isSelected: false, weight: 0.02},
        // {itemName: 'Hotel booking confirmation', quantity: 1, isSelected: false, weight: 0.02},
        // {itemName: 'Vaccination Certificate COVID-19 ', quantity: 1, isSelected: false, weight: 0.02},

    ]);


    //grab data from local storage
    useEffect(() => {

            const beachData = window.localStorage.getItem('BEACH_DATA');
            // if ( data !== null ) setPassportQty(JSON.parse(data));
            setItems(JSON.parse(beachData));

            // const data2 = window.localStorage.getItem('ITEM_CHECKED_ESSENTIAL');
            // if ( data !== null ) setItems(JSON.parse(data));
            // setSelected(JSON.parse(data2));
            //     console.log('data2',data2);
        }, []
    )


    //save data to local storage
    useEffect(() => {
            console.log(items);
            window.localStorage.setItem('BEACH_DATA', JSON.stringify(items));

        }, [items]
        // },[passportQty]

    )












    // // function to add a new item
    // const handleAddItemButton = () => {
    //
    //     const newItem = {
    //         itemName: inputValue,
    //         quantity: 1,
    //         isSelected: false,
    //         weight: 0.3,
    //
    //     };
    //
    //     const newItems = [...items, newItem];
    //     setItems(newItems);
    //     setInputValue('');
    //     calculateTotal();
    //     calculateTotalWeight();
    //
    //
    // };


    const handleIncreaseQuantity = (index) => {
        // alert("button increase was clicked ")
        const newItems = [...items];
        newItems[index].quantity++;
        setItems(newItems);
        calculateTotal();
        calculateTotalWeight();

        // event.preventDefault();

    }

    const handleDecreaseQuantity = (index) => {
        // alert("button decrease was clicked ")
        const newItems = [...items];
        if (newItems[index].quantity <= 0) {
            newItems[index].quantity++;
            setItems(newItems);
            calculateTotal();
            calculateTotalWeight();
        }

        newItems[index].quantity--;
        setItems(newItems);
        calculateTotal();
        calculateTotalWeight();


    }


    const [totalItemCount, setTotalItemCount] = useState(6);

    const calculateTotal = () => {
        const totalItemCount = items.reduce((total, item) => {
            return total + item.quantity;
        }, 0);

        setTotalItemCount(totalItemCount);
    };


    const handleRemoveItem = (index) => {
        // alert("button decrease was clicked ")
        const newItems = [...items];
        // newItems[index].quantity--;
        // setItems(newItems);
        if (index > -1) {
            newItems.splice(index, 1);
            setItems(newItems);

        }

        calculateTotal();
        calculateTotalWeight();

    }


    const [totalItemWeight, setTotalItemWeight] = useState(1);

    const calculateTotalWeight = () => {
        const totalItemWeight = items.reduce((total, item) => {
            return total + item.weight * item.quantity;
        }, 0);

        setTotalItemWeight(totalItemWeight);
    };


    const validateInputNewItem = (event) => {
        const newItem = event.target.value;
        if (newItem) {
            setErrorNewItem("");
        }
        setInputValue(newItem);
        setErrorNewItem(" ");
    }


    const validateChecked = (index) => {
        const newItems = [...items];
        newItems[index].isSelected = !newItems[index].isSelected;
        setItems(newItems);
    };




    return(

        <>
            <form id="camera" action="#">
                <div className='main-container'>
                    <div className='item-list'>
                        {items.map((item, index) => (
                            <div className={"checkBox"}>
                                {item.isSelected ? (
                                    <>
                                        <p>
                                            <label>
                                                <input id="colorChecked" checked="true" type="checkbox"
                                                       className={"filled-in"}
                                                       onClick={() => validateChecked(index)}/>
                                                <span>{item.itemName}</span>
                                                <div id="toRight">
                                                    <button className="decreaseQuantity"
                                                            onClick={(event) => handleDecreaseQuantity(index, event.preventDefault())}>-
                                                    </button>
                                                    <button className="Quantity"
                                                            onClick={(event) => event.preventDefault()}> {item.quantity} </button>
                                                    <button className="increaseQuantity"
                                                            onClick={(event) => handleIncreaseQuantity(index, event.preventDefault())}>+
                                                    </button>
                                                    <button
                                                        onClick={(event) => handleRemoveItem(index, event.preventDefault())}>Remove
                                                    </button>
                                                </div>
                                            </label>
                                        </p>
                                    </>
                                ) : (

                                    <p>
                                        <label>
                                            <input id="colorChecked" type="checkbox" className="filled-in"
                                                   onClick={() => validateChecked(index)}/>
                                            <span>{item.itemName}</span>
                                            <div id="toRight">
                                                <button className="decreaseQuantity"
                                                        onClick={(event) => handleDecreaseQuantity(index, event.preventDefault())}>-
                                                </button>
                                                <button className="Quantity"
                                                        onClick={(event) => event.preventDefault()}> {item.quantity} </button>
                                                <button className="increaseQuantity"
                                                        onClick={(event) => handleIncreaseQuantity(index, event.preventDefault())}>+
                                                </button>

                                                <button
                                                    onClick={(event) => handleRemoveItem(index, event.preventDefault())}>Remove
                                                </button>
                                            </div>
                                        </label>
                                    </p>
                                )
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </form>


        </>
    )//end return

}

export default BeachList;