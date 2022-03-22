import React, {useState}  from 'react';
import {Link} from "react-router-dom";
import ReactDOM from "react-dom";
    /* useState is used to set a value  */
//this  function add customer detail during a registration
import './FormCreateList.css';

    const AddCreateListDetail = ({setCreateListInfo: setCreateListInfo}) => {

        const [name, setName] = useState('');
        const [surname, setSurname] = useState('');
        const [email, setEmail] = useState('');
        const [phoneNumber, setPhoneNumber] = useState('');
        const [dob, setDob] = useState('');
        const [sex, setSex] = useState('');
        const [customerPassword, setCustomerPassword] = useState('');
        const [customerPasswordAgain, setCustomerPasswordAgain] = useState('');

        const [ListName, setListName] = useState('');
        const [departureDay, setDepartureDay] = useState('');

        //change fetch to customer database not a student
        const validateCustomer = async () => {
            const result = await fetch("http://localhost:8080/api/v1/customer", {
                method: "POST",
                body: JSON.stringify({name, surname,email, phoneNumber, dob,sex, customerPassword, customerPasswordAgain, ListName,departureDay}),
                headers: {
                    "Content-Type": "application/json",
                }


            })

            const body = await result.json();
            setCreateListInfo(body);

        }






        return (

            <div className="row">
                {/*<form className="col s12" onSubmit={() => validateCustomer()}>*/}
                <form className="col s12" onSubmit="" >


                    <div className="row">
                        <div id ="ListNameInFormCreateList" className="input-field col s6">
                            <i className="material-icons prefix">account_circle</i>
                            <input placeholder="Your unique name of the list." value={ListName} type="email" onChange={(event => setListName(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="List Name">List Name</label>
                        </div>
                    </div>






                    <div className="row">

                        <div id ="PasswordInFormCreateList" className="input-field col s6">
                            <i className="material-icons prefix">account_circle</i>
                            <input placeholder="Password" value={customerPassword} type="text" onChange={(event =>
                                setCustomerPassword(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="customerPassword">Password</label>
                        </div>
                    </div>


                    <div className="row">
                        <div id ="PasswordInFormCreateList" className="input-field col s6">
                            <i className="material-icons prefix">account_circle</i>
                            <input placeholder="Password" value={departureDay} type="text" onChange={(event =>
                                setDepartureDay(event.target.value))}
                                   className="datepicker"/>
                            <label htmlFor="departureDay">Departure day</label>
                        </div>
                    </div>


                    {/*<div className="row">*/}
                    {/*    <div id ="IconAndLabelBeforePhotoEquipmentInCreateList" className="input-field col s6">*/}

                    {/*    <i id ="IconBeforePhotoEquipmentInCreateList" className="material-icons prefix">account_circle</i>*/}
                    {/*    <p  id ="TextAfterIconPhotoEquipmentInCreateList"     >Doy you take a video/photo equipment?</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                        <div className="row">
                        <div id ="PasswordInFormCreateList" className="input-field col s6">

                            <select className="browser-default">
                                <option value="" disabled selected>Photo/Video Equipment</option>
                                <option value="1">Camera</option>
                                <option value="2">Video Recorder</option>
                                <option value="3">I will be using only phone.</option>
                            </select>
                            {/*<input placeholder="Password" value={departureDay} type="text" onChange={(event =>*/}
                            {/*    setDepartureDay(event.target.value))}*/}
                            {/*       className="datepicker"/>*/}
                            {/*<label htmlFor="departureDay">Departure day</label>*/}
                        </div>
                    </div>

                    <div className="row">
                        <div id ="PasswordInFormCreateList" className="input-field col s6">

                            <select className="browser-default">
                                <option value="" disabled selected>Luggage</option>
                                <option value="1">Small</option>
                                <option value="2">Medium</option>
                                <option value="3">Large</option>
                            </select>
                            {/*<input placeholder="Password" value={departureDay} type="text" onChange={(event =>*/}
                            {/*    setDepartureDay(event.target.value))}*/}
                            {/*       className="datepicker"/>*/}
                            {/*<label htmlFor="departureDay">Departure day</label>*/}
                        </div>
                    </div>



                    <div className="row">
                        <div id ="PasswordInFormCreateList" className="input-field col s6">

                            <select className="browser-default">
                                <option value="" disabled selected>Transport</option>
                                <option value="1">Train</option>
                                <option value="2">Bus</option>
                                <option value="3">Plain</option>
                                <option value="4">Car</option>
                                <label>Transport</label>
                            </select>
                            {/*<input placeholder="Password" value={departureDay} type="text" onChange={(event =>*/}
                            {/*    setDepartureDay(event.target.value))}*/}
                            {/*       className="datepicker"/>*/}
                            {/*<label htmlFor="departureDay">Departure day</label>*/}
                        </div>
                    </div>

                    <div  className="row">
                        <div id="ButtonAddItemInFormCreateList" className="input-field col s6">
                            <Link to="../CreateCustomerList">
                                <button  className="waves-effect waves-light btn #795548 brown " type="submit" name="action">
                                    Add Item(not ready yet)
                                </button>
                            </Link>
                        </div>
                    </div>



                    <div  className="row">
                        <div id="ButtonCreateListInFormCreateList" className="input-field col s6">
                        <Link to="../CreateCustomerList">
                            <button  className="waves-effect waves-light btn #795548 brown " type="submit" name="action">
                            Login(Verification password not ready yet)
                        </button>
                        </Link>
                        </div>
                    </div>
                </form>
            </div>


        );

    }

export default AddCreateListDetail;


