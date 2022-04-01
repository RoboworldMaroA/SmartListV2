import React, {useState}  from 'react';
import {Link} from "react-router-dom";
import 'materialize-css';
import ReactDOM from "react-dom";
    /* useState is used to set a value  */
//this  function add customer detail during a registration
import './FormCreateList.css';
import M from 'materialize-css';
import {Component} from "react";
import { Button, Card, Row, Col } from 'react-materialize';





    const AddCreateListDetail = ({setCreateListInfo: setCreateListInfo}) => {

        const [activity, setActivity] = useState('');
        const [adminPrivileges, setAdminPrivileges] = useState('');
        const [customerId, setCustomerId] = useState('');
        const [departureDay, setDepartureDay] = useState('');
        const [description, setDescription] = useState('');
        const [destinationId, setDestinationId] = useState('');
        const [destination, setDestination] = useState('');
        const [listId, setListId] = useState('');
        const [payStatus, setPayStatus] = useState('');
        const [returnDay, setReturnDay] = useState('');
        const [tripName, setTripName] = useState('');
        const [tripPassword, setTripPassword] = useState('');
        const [weatherId, setWeatherId] = useState('');
        const [id, setId] = useState('');

        //change fetch to customer database not a student

        const validateCustomer = async () => {
            const result = await fetch("http://localhost:8080/api/v1/trip", {
                method: "POST",
                body: JSON.stringify({activity,adminPrivileges,customerId,departureDay,
                    description, destinationId, listId, payStatus ,returnDay,
                    tripName, tripPassword, weatherId, id}),
                headers: {
                    "Content-Type": "application/json",
                }


            })

            const body = await result.json();
            setCreateListInfo(body);
        }
        
        return (

            <div id ="elementInFormCreateList" className="row">
                <form className="col s12" onSubmit={() => validateCustomer()}>
                {/*<form className="col s12" onSubmit="" >*/}


                    <div className="row">
                        <div  className="input-field col s10">
                            <i className="material-icons prefix">account_circle</i>
                            <input placeholder="Your unique name of the travelingList." value={tripName} type="text" onChange={(event => setTripName(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="List Name">List Name</label>
                        </div>
                    </div>


                    <div className="row">
                        <div className="input-field col s10">
                            <i className="material-icons prefix">account_circle</i>
                            <input placeholder="Destination" value={destination} type="text" onChange={(event =>
                                setDestination(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="customerPassword">Destination</label>
                        </div>
                    </div>


                    <div className="row">
                        <div  className="input-field col s10">

                            <select>
                                <option value="" disabled selected> Destination</option>
                                <option value="1">Ireland</option>
                                <option value="2">Spain</option>
                                <option value="3">Poland</option>
                            </select>
                            {/*<input placeholder="Password" value={departureDay} type="text" onChange={(event =>*/}
                            {/*    setDepartureDay(event.target.value))}*/}
                            {/*       className="datepicker"/>*/}
                            {/*<label htmlFor="departureDay">Departure day</label>*/}
                        </div>
                    </div>



                    <div className="row">
                        <div  className="input-field col s10">
                            <i className="material-icons prefix">account_circle</i>
                            <input placeholder="Departure Day" value={departureDay} type="text" onChange={(event =>
                                setDepartureDay(event.target.value))}
                                   className="datepicker"/>
                            <label htmlFor="departureDay">Departure day</label>
                        </div>
                    </div>

                    <div className="row">
                        <div  className="input-field col s10">
                            <i className="material-icons prefix">account_circle</i>
                            <input placeholder="Return Day" value={returnDay} type="text" onChange={(event =>
                                setReturnDay(event.target.value))}
                                   className="datepicker"/>
                            <label htmlFor="returnDay">Return day</label>
                        </div>
                    </div>


                    {/*<div className="row">*/}
                    {/*    <div id ="IconAndLabelBeforePhotoEquipmentInCreateList" className="input-field col s10">*/}

                    {/*    <i id ="IconBeforePhotoEquipmentInCreateList" className="material-icons prefix">account_circle</i>*/}
                    {/*    <p  id ="TextAfterIconPhotoEquipmentInCreateList"     >Doy you take a video/photo equipment?</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                        <div className="row">
                        <div  className="input-field col s10">

                            <select multiple>
                                <option value="" disabled selected>Photo/Video Equipment</option>
                                <option value="1">Camera</option>
                                <option value="2">Video Recorder</option>
                                <option value="3">Smartphone</option>
                            </select>
                            {/*<input placeholder="Password" value={departureDay} type="text" onChange={(event =>*/}
                            {/*    setDepartureDay(event.target.value))}*/}
                            {/*       className="datepicker"/>*/}
                            {/*<label htmlFor="departureDay">Departure day</label>*/}
                        </div>
                    </div>

                    <div className="row">
                        <div  className="input-field col s10">

                            <select multiple>
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
                        <div  className="input-field col s10">

                            <select multiple>
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



                    <div className="row">
                        <div  className="input-field col s10">

                            <select multiple>
                                <option value="" disabled selected>Activities</option>
                                <option value="1">Sunbathing</option>
                                <option value="2">Ski</option>
                                <option value="3">Trekking</option>
                            </select>
                            {/*<input placeholder="Password" value={departureDay} type="text" onChange={(event =>*/}
                            {/*    setDepartureDay(event.target.value))}*/}
                            {/*       className="datepicker"/>*/}
                            {/*<label htmlFor="departureDay">Departure day</label>*/}
                        </div>
                    </div>


                    <div  className="row">
                        <div id="ButtonAddItemInFormCreateList" className="input-field col s10">
                            <Link to="../CreateCustomerList">
                                <button  className="waves-effect waves-light btn #795548 brown " type="submit" name="action">
                                    Add Item(not ready yet)
                                </button>
                            </Link>
                        </div>
                    </div>



                    <div  className="row">
                        <div id="ButtonCreateListInFormCreateList" className="input-field col s10">
                        {/*<Link to="../DisplayList">*/}
                            <button  className="waves-effect waves-light btn #795548 brown " type="submit" name="action">
                            Generate List
                        </button>
                        {/*</Link>*/}
                        </div>
                    </div>






                </form>
            </div>


        );

    }

export default AddCreateListDetail;


