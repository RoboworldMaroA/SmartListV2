import React, {useState}  from 'react';
import {Link} from "react-router-dom";
import 'materialize-css';
import ReactDOM from "react-dom";
    /* useState is used to set a value  */
//this  function add customer detail during a registration
import './FormCreateList.css';
import M from 'materialize-css';
import {Component} from "react";
import {Button, Card, Row, Col, Select} from 'react-materialize';
import {getValue} from "@testing-library/user-event/dist/utils";
import * as events from "events";





    const AddCreateListDetail = ({setCreateListInfo: setCreateListInfo}) => {

        const [activity, setActivity] = useState('');
        const [adminPrivileges, setAdminPrivileges] = useState('');
        const [customerId, setCustomerId] = useState('');
        const [camera, setCamera] = useState('');
        const [camcorder, setCamcorder] = useState('');
        const [smartphone, setSmartphone] = useState('');
        const [departureDay, setDepartureDay] = useState('');
        const [description, setDescription] = useState('');
        const [destinationId, setDestinationId] = useState('');
        const [destination, setDestination] = useState('');
        const [listId, setListId] = useState('');
        const [largeLuggage, setLargeLuggage] = useState('');
        const [mediumLuggage, setMediumLuggage] = useState('');
        const [smallLuggage, setSmallLuggage] = useState('');
        const [payStatus, setPayStatus] = useState('');
        const [returnDay, setReturnDay] = useState('');
        const [tripName, setTripName] = useState('');
        const [tripPassword, setTripPassword] = useState('');
        const [weatherId, setWeatherId] = useState('');
        const [transport, setTransport] = useState('');


        //change fetch to customer database not a student

        const validateCreateList = async () => {
            const result = await fetch("http://localhost:8080/api/v1/trip", {
                method: "POST",
                body: JSON.stringify({activity,adminPrivileges,customerId,camera,camcorder,smartphone,
                    departureDay, description, destinationId, listId,largeLuggage, mediumLuggage,smallLuggage, payStatus ,returnDay,
                    tripName, tripPassword, weatherId,transport}),
                headers: {
                    "Content-Type": "application/json",
                }


            })

            const body = await result.json();
            setCreateListInfo(body);
        }



        const [checked2, setChecked2] = useState(false);
        function toggle() {
            setChecked2(checked2=> !checked2)

        }


        // const [cameraState, setCameraState] = useState(false);
        //
        // const toggleCamera = ()=> {
        //     setCameraState(cameraState=> !cameraState);
        //     if(!cameraState){
        //         // camera=setCamera("Yes");
        //          setCamera("Yes");
        //     }
        //     // const camera = setCamera(camera => "No");
        //         setCamera("No");
        // }


        // const options = [
        //     { value: 'chocolate', label: 'Chocolate' },
        //     { value: 'strawberry', label: 'Strawberry' },
        //     { value: 'vanilla', label: 'Vanilla' }
        // ]
        // const MyComponent = () => (
        //     <Select options={options} />
        // )



        return (

            <div id ="elementInFormCreateList" className="row">
                <form className="col s12" onSubmit={() => validateCreateList()}>
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
                        <div  className="input-field col s10">
                            <i className="material-icons prefix">account_circle</i>
                            <input placeholder="Your unique name of the travelingList." value={listId} type="text" onChange={(event => setListId(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="List Name">List ID must be unique.</label>
                        </div>
                    </div>

                    {/*<div className="row">*/}
                    {/*    <div className="input-field col s10">*/}
                    {/*        <i className="material-icons prefix">account_circle</i>*/}
                    {/*        <input placeholder="Destination" value={destination} type="text" onChange={(event =>*/}
                    {/*            setDestination(event.target.value))}*/}
                    {/*               className="validate"/>*/}
                    {/*        <label htmlFor="customerPassword">Destination</label>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                    <div className="row">
                        <div  className="input-field col s10">

                            <i className="material-icons prefix">account_circle</i>
                            <select value={destination} onChange={event => setDestination(event.target.value)}>
                                    (<option disabled selected> Destination    </option>),
                                    (<option  value="Ireland">Ireland</option>),
                                    (<option value="Spain">Spain</option>),
                                    (<option value="Poland">Poland</option>)
                                )}

                            </select>
                            <p>This is display destination for test only : {destination}</p>
                            {/*<input placeholder="Password" value={departureDay} type="text" onChange={(event =>*/}
                            {/*    setDepartureDay(event.target.value))}*/}
                            {/*       className="datepicker"/>*/}
                            {/*<label htmlFor="departureDay">Departure day</label>*/}
                        </div>
                    </div>



                    <div className="row">
                        <div  className="input-field col s10">
                            <i className="material-icons prefix">account_circle</i>
                            <input value={departureDay} type="date" onChange={(event =>
                                setDepartureDay(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="departureDay">Departure day</label>
                        </div>
                    </div>

                    <div className="row">
                        <div  className="input-field col s10">
                            <i className="material-icons prefix">account_circle</i>
                            <input value={returnDay} type="date" onChange={(event =>
                                setReturnDay(event.target.value))}
                                   className="validate"/>
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
                            {/*<select multiple onChange={toggle}>*/}
                            {/*    <option  disabled selected>Photo/Video Equipment</option>*/}
                            {/*    <option value="camera" onChange={toggle}>Camera</option>*/}
                            {/*    <option value="camcorder">Camcorder</option>*/}
                            {/*    <option value="smartphone">Smartphone</option>*/}
                            {/*</select>*/}

                            {/*<p>*/}
                            {/*    <label>*/}
                            {/*        <input type="checkbox" className="filled-in" value={camera} onChange={toggleCamera}/>*/}
                            {/*        /!*<input type="checkbox" className="filled-in" value={camera} onChange={event => setCamera(cameraState)}/>*!/*/}
                            {/*        <span>Camera</span>*/}
                            {/*    </label>*/}
                            {/*</p>*/}


                            <div className="row">
                                <p>CAMERA:</p>
                                <div  className="input-field col s10">

                                    <i className="material-icons prefix">account_circle</i>
                                    <select value={camera} onChange={event => setCamera(event.target.value)}>
                                        (<option disabled selected> Camera    </option>),
                                        (<option  value="Yes">Yes</option>),
                                        (<option value="No">No</option>)

                                        )}
                                    </select>
                                    <p>This is display destination for test only : {camera}</p>
                                </div>
                            </div>


                            <div className="row">
                                <p>CAMCORDER:</p>
                                <div  className="input-field col s10">
                                    <i className="material-icons prefix">account_circle</i>
                                    <select value={camcorder} onChange={event => setCamcorder(event.target.value)}>
                                        (<option disabled selected> Camcorder    </option>),
                                        (<option  value="Yes">Yes</option>),
                                        (<option value="No">No</option>)
                                        )}
                                    </select>
                                    <p>This is display destination for test only : {camcorder}</p>
                                </div>
                            </div>


                            <div className="row">
                                <p>SMARTPHONE:</p>
                                <div  className="input-field col s10">
                                    <i className="material-icons prefix">account_circle</i>
                                    <select value={smartphone} onChange={event => setSmartphone(event.target.value)}>
                                        (<option disabled selected="Smartphone"> Smartphone</option>),
                                        (<option  value="Yes">Yes</option>),
                                        (<option value="No">No</option>)

                                        )}
                                    </select>
                                    <p>This is display destination for test only : {smartphone}</p>
                                </div>
                            </div>


                            {/*<p>*/}
                            {/*    <label>*/}
                            {/*        <input type="checkbox" className="filled-in" />*/}
                            {/*        <span>Camcorder</span>*/}
                            {/*    </label>*/}
                            {/*</p>*/}
                            {/*<p>*/}
                            {/*    <label>*/}
                            {/*        <input type="checkbox" className="filled-in" />*/}
                            {/*        <span>Smartphone</span>*/}
                            {/*    </label>*/}
                            {/*</p>*/}


                            {/*<p> Display checked or not camera: {cameraState ? "Yes": "No"}</p>*/}
                            <p>This is display destination for test only : {camera},{camcorder}</p>
                            {/*<input placeholder="Password" value={departureDay} type="text" onChange={(event =>*/}
                            {/*    setDepartureDay(event.target.value))}*/}
                            {/*       className="datepicker"/>*/}
                            {/*<label htmlFor="departureDay">Departure day</label>*/}
                        </div>
                    </div>

                    <div className="row">
                        <div  className="input-field col s10">

                            {/*<select multiple>*/}
                            {/*    <option value="" disabled selected>Luggage</option>*/}
                            {/*    <option value="1">Small</option>*/}
                            {/*    <option value="2">Medium</option>*/}
                            {/*    <option value="3">Large</option>*/}
                            {/*</select>*/}
                            <p> BAG SIZE</p>
                            <div className="row">
                                <p>LARGE LUGGAGE:</p>
                                <div  className="input-field col s10">

                                    <i className="material-icons prefix">account_circle</i>
                                    <select value={largeLuggage} onChange={event => setLargeLuggage(event.target.value)}>
                                        (<option disabled selected> Large Luggage    </option>),
                                        (<option  value="Yes">Yes</option>),
                                        (<option value="No">No</option>)

                                        )}
                                    </select>
                                    <p>This is display destination for test only : {largeLuggage}</p>
                                </div>
                            </div>


                            <div className="row">
                                <p>MEDIUM LUGGAGE:</p>
                                <div  className="input-field col s10">
                                    <i className="material-icons prefix">account_circle</i>
                                    <select value={mediumLuggage} onChange={event => setMediumLuggage(event.target.value)}>
                                        (<option disabled selected> Medium Luggage    </option>),
                                        (<option  value="Yes">Yes</option>),
                                        (<option value="No">No</option>)
                                        )}
                                    </select>
                                    <p>This is display destination for test only : {mediumLuggage}</p>
                                </div>
                            </div>


                            <div className="row">
                                <p>SMALL LUGGAGE:</p>
                                <div  className="input-field col s10">
                                    <i className="material-icons prefix">account_circle</i>
                                    <select value={smallLuggage} onChange={event => setSmallLuggage(event.target.value)}>
                                        (<option disabled selected="Smartphone"> Small Luggage</option>),
                                        (<option  value="Yes">Yes</option>),
                                        (<option value="No">No</option>)

                                        )}
                                    </select>
                                    <p>This is display destination for test only : {smallLuggage}</p>
                                </div>
                            </div>




                            {/*<input placeholder="Password" value={departureDay} type="text" onChange={(event =>*/}
                            {/*    setDepartureDay(event.target.value))}*/}
                            {/*       className="datepicker"/>*/}
                            {/*<label htmlFor="departureDay">Departure day</label>*/}
                        </div>
                    </div>



                    <div className="row">
                        <div  className="input-field col s10">

                            <select value={transport} onChange={event => setTransport(event.target.value)}>
                                <option value="" disabled selected>Transport</option>
                                <option value="Plane">Plane</option>
                                <option value="Bus">Bus</option>
                                <option value="Train">Train</option>
                                <option value="Car">Car</option>
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

                            {/*<select multiple>*/}
                            {/*    <option value="" disabled selected>Activities</option>*/}
                            {/*    <option value="1">Sunbathing</option>*/}
                            {/*    <option value="2">Ski</option>*/}
                            {/*    <option value="3">Trekking</option>*/}
                            {/*</select>*/}


                            <p>
                                <label>
                                    <input type="checkbox" className="filled-in" />
                                    <span>Sunbathing</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input type="checkbox" className="filled-in" />
                                    <span>Ski</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input type="checkbox" className="filled-in" />
                                    <span>Trekking</span>
                                </label>
                            </p>


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


