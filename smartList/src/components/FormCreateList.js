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
import DisplayList from "./DisplayList";



    // const AddCreateListDetail = ({setCreateListInfo: setCreateListInfo},props) => {
        const AddCreateListDetail = ({props:props},{setCreateListInfo: setCreateListInfo}) => {

        const [activity, setActivity] = useState('No');
        const [adminPrivileges, setAdminPrivileges] = useState('No');
        const [customerId, setCustomerId] = useState('');
        const [camera, setCamera] = useState('No');
        const [camcorder, setCamcorder] = useState('No');
        const [smartphone, setSmartphone] = useState('Yes');
        const [departureDay, setDepartureDay] = useState("2022-05-20");
        const [description, setDescription] = useState('Some trip');
        const [destinationId, setDestinationId] = useState('');
        const [destination, setDestination] = useState('Ireland');
        const [listId, setListId] = useState('');
        const [largeLuggage, setLargeLuggage] = useState('No');
        const [mediumLuggage, setMediumLuggage] = useState('No');
        const [smallLuggage, setSmallLuggage] = useState('No');
        const [payStatus, setPayStatus] = useState('No');
        const [returnDay, setReturnDay] = useState('2022-05-30');
        const [tripName, setTripName] = useState('Trip Name');
        const [tripPassword, setTripPassword] = useState('password');
        const [weatherId, setWeatherId] = useState('');
        const [transport, setTransport] = useState('No');
        const [sunbathing, setSunbathing] = useState('No');
        const [ski, setSki] = useState('No');
        const [trekking , setTrekking] = useState('No');

        // const [displayListState , setDisplayListState] = useState(true);
        // const [displayListState , setDisplayListState] = useState(true);


        //change fetch to customer database not a student

        const validateCreateList = async () => {
            const result = await fetch("api/v1/trip", {
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

            displayList();
        }

        // function FormCreateList(props){
        //     return(
        //
        //         <div>
        //             <p>Test greet Parent pass data from FormCreateList to the DisplayList</p>
        //             <button onClick={()=>props.greetHandler('child')}>Greet Parent</button>
        //
        //         </div>
        //
        //         )
        //
        //
        //
        // }


      //IT IS NOT WORKIN, DISPLAY CUSTOM LIST !!!!!!!!!!!!!
        function displayList (props)
        {
            return(
            //here will be logic what lit to display, depen what customer choose in the form FormCrteteList
            console.log(this.state.displayBeach)

            )

        }


        // const [checked2, setChecked2] = useState(false);
        // function toggle() {
        //     setChecked2(checked2=> !checked2)
        //
        // }



        //It is working checked element change state
        const [cameraState, setCameraState] = useState(false);

        const toggleCamera = ()=> {
            setCameraState(cameraState => !cameraState);
            if (!cameraState) {
                setCamera("Yes");
                console.log(camera);//test only
            }
            if(cameraState){
                setCamera("NO");
                console.log(camera);//test only
            }
        }

        //sunbathing function to change state when clicked
        const [sunbathingState, setSunbathingState] = useState(false);

        const toggleSunbathing = ()=> {
            setSunbathingState(sunbathingState => !sunbathingState);
            if (!sunbathingState) {
                setSunbathing("Yes");
                console.log(sunbathing);//test only
            }
            if(sunbathingState){
                setSunbathing("NO");
                console.log(sunbathing);//test only
            }
        }


        //ski function to change state when clicked
        const [skiState, setSkiState] = useState(false);

        const toggleSki = ()=> {
            setSkiState(skiState => !skiState);
            if (!skiState) {
                setSki("Yes");
                console.log(ski);//test only
            }
            if(skiState){
                setSki("NO");
                console.log(ski);//test only
            }
        }



        //sunbathing function to change state when clicked
        const [trekkingState, setTrekkingState] = useState(false);

        const toggleTrekking = ()=> {
            setTrekkingState(trekkingState => !trekkingState);
            if (!trekkingState) {
                setTrekking("Yes");
                console.log(trekking);//test only
            }
            if(trekkingState){
                setTrekking("NO");
                console.log(trekking);//test only
            }
        }


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


                <div className="row">
                    <p>Test greet Parent pass data from FormCreateList to the DisplayList</p>
                    <button onClick={()=>props.greetHandler2('child')}>Greet Parent</button>

                </div>


                <form className="col s12" onSubmit={() => validateCreateList()}>
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
                            {/*<p>This is display destination for test only : {destination}</p>*/}
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


                        <div className="row">
                        <div  className="input-field col s10">
                            <p>
                                <i className="material-icons prefix">account_circle</i>
                                <label>
                                    <input type="checkbox" className="filled-in" value={camera} onClick={toggleCamera}/>
                                   <span>Camera</span> <div>{camera}</div>
                                </label>
                            </p>


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
                                    {/*<p>This is display destination for test only : {camcorder}</p>*/}
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
                                    {/*<p>This is display destination for test only : {smartphone}</p>*/}
                                </div>
                            </div>


                            {/*<p> Display checked or not camera: {cameraState ? "Yes": "No"}</p>*/}
                            {/*<p>This is display destination for test only : {camera},{camcorder}</p>*/}

                        </div>
                    </div>

                    <div className="row">
                        <div  className="input-field col s10">
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
                                    {/*<p>This is display destination for test only : {largeLuggage}</p>*/}
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
                                    {/*<p>This is display destination for test only : {mediumLuggage}</p>*/}
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
                                    {/*<p>This is display destination for test only : {smallLuggage}</p>*/}
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="row">
                        <p>TRANSPORT:</p>
                        <div  className="input-field col s10">
                            <select value={transport} onChange={event => setTransport(event.target.value)}>
                                <option value="" disabled selected>Transport</option>
                                <option value="Plane">Plane</option>
                                <option value="Bus">Bus</option>
                                <option value="Train">Train</option>
                                <option value="Car">Car</option>
                                <label>Transport</label>
                            </select>
                        </div>
                    </div>



                    <div className="row">
                        <div  className="input-field col s10">
                            <p>
                                <i className="material-icons prefix">account_circle</i>
                                <label>
                                    <input type="checkbox" className="filled-in" value={sunbathing} onClick={toggleSunbathing}/>
                                    <span>Sunbathing</span> <div>{sunbathing}</div>
                                </label>
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div  className="input-field col s10">
                            <p>
                                <i className="material-icons prefix">account_circle</i>
                                <label>
                                    <input type="checkbox" className="filled-in" value={ski} onClick={toggleSki}/>
                                    <span>Ski</span> <div>{ski}</div>
                                </label>
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div  className="input-field col s10">
                            <p>
                                <i className="material-icons prefix">account_circle</i>
                                <label>
                                    <input type="checkbox" className="filled-in" value={trekking} onClick={toggleTrekking}/>
                                    <span>Trekking</span> <div>{trekking}</div>
                                </label>
                            </p>

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



                    <div  className="row">
                        <div id="ButtonCreateListInFormCreateList" className="input-field col s10">
                            <Link to="../DisplayList">
                            <button  className="waves-effect waves-light btn #795548 brown " type="submit" name="action">
                                Display List
                            </button>
                            </Link>
                        </div>
                    </div>





                </form>




                {/*//pass a values of the list that will be displayed for cutomer*/}
                {/*<div className="row">*/}
                {/*    {displayList ?*/}
                {/*        <Link to="../DisplayList"></Link>*/}
                {/*        : "Wrong"*/}
                {/*    }*/}
                {/*</div>*/}
            </div>


        )

    }

export default AddCreateListDetail;


