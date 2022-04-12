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

        //const [activity, setActivity] = useState('No');
        const [adminPrivileges, setAdminPrivileges] = useState(true);
        const [autumn, setAutumn] = useState(true);
        const [beachListStatus, setBeachListStatus] = useState(true);
        const [bus, setBus] = useState(false);
        const [camcorder, setCamcorder] = useState('');
        const [camera, setCamera] = useState(true);
        const [car, setCar] = useState(true);
        const [departureDay, setDepartureDay] = useState("2022-05-20");
        const [description, setDescription] = useState('Some trip');
        const [ireland, setIreland] = useState(true);
        const [listId, setListId] = useState('vvv');
        const [largeLuggage, setLargeLuggage] = useState(true);
        const [mediumLuggage, setMediumLuggage] = useState(false);
        const [smallLuggage, setSmallLuggage] = useState(true);
        const [smartphone, setSmartphone] = useState(true);
        const [payStatus, setPayStatus] = useState(true);
        const [returnDay, setReturnDay] = useState('2022-05-30');
        const [tripName, setTripName] = useState('Trip Name');
        const [tripPassword, setTripPassword] = useState('password');
        const [weatherId, setWeatherId] = useState('');
        //const [transport, setTransport] = useState();

        const [ski, setSki] = useState(false);
        const [trekking , setTrekking] = useState(true);
            const [documentListStatus , setDocumentListStatus] = useState(true);
            const [essentialListStatus , setEssentialListStatus] = useState(true);
            const [plane , setPlane] = useState(true);
            const [poland , setPoland] = useState(true);
            const [spain , setSpain] = useState(true);
            const [summer , setSummer] = useState(true);
            const [winter , setWinter] = useState(true);
            const [spring , setSpring] = useState(true);
            const [train , setTrain] = useState(true);
            const [id , setId] = useState('');
        // const [displayListState , setDisplayListState] = useState(true);
        // const [displayListState , setDisplayListState] = useState(true);


        //change fetch to customer database not a student

        const validateCreateList = async () => {
            const result = await fetch("api/v1/trip", {
                method: "POST",
                body: JSON.stringify({adminPrivileges,autumn, beachListStatus, bus, camcorder,camera,
                    car, departureDay, description, documentListStatus, essentialListStatus, ireland, largeLuggage,
                    listId, mediumLuggage, payStatus , plane, poland, returnDay, ski,smallLuggage,smartphone,spain,spring,
                    summer,train,trekking,tripName, tripPassword, weatherId,winter,id}),
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
                setCamera(true);
                console.log(camera);//test only
            }
            if(cameraState){
                setCamera(false);
                console.log(camera);//test only
            }
        }

        //beachListStatus function to change state when clicked
        const [sunbathingState, setSunbathingState] = useState(false);

        const toggleSunbathing = ()=> {
            setSunbathingState(sunbathingState => !sunbathingState);
            if (!sunbathingState) {
                setBeachListStatus(true);
                console.log(beachListStatus);//test only
            }
            if(sunbathingState){
                setBeachListStatus(false);
                console.log(beachListStatus);//test only
            }
        }


        //ski function to change state when clicked
        const [skiState, setSkiState] = useState(false);

        const toggleSki = ()=> {
            setSkiState(skiState => !skiState);
            if (!skiState) {
                setSki(true);
                console.log(ski);//test only
            }
            if(skiState){
                setSki(false);
                console.log(ski);//test only
            }
        }



        //beachListStatus function to change state when clicked
        const [trekkingState, setTrekkingState] = useState(false);

        const toggleTrekking = ()=> {
            setTrekkingState(trekkingState => !trekkingState);
            if (!trekkingState) {
                setTrekking(true);
                console.log(trekking);//test only
            }
            if(trekkingState){
                setTrekking(false);
                console.log(trekking);//test only
            }
        }



            //beachListStatus function to change state when clicked
            // const [camcorderState, setCamcorderState] = useState(false);
            //
            // const toggleCamcorder = (event)=> {
            //     setCamcorder(camcorderState => !camcorderState);
            //     if (event.equal("Yes")) {
            //         setCamcorder(true);
            //         console.log(camcorder);//test only
            //     }
            //     if(event.equal("No")){
            //         setCamcorder(false);
            //         console.log(camcorder);//test only
            //     }
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


                {/*<div className="row">*/}
                {/*    <p>Test greet Parent pass data from FormCreateList to the DisplayList</p>*/}
                {/*    <button onClick={()=>props.greetHandler2('child')}>Greet Parent</button>*/}

                {/*</div>*/}


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

                    {/*<div className="row">*/}
                    {/*    <div  className="input-field col s10">*/}

                    {/*        <i className="material-icons prefix">account_circle</i>*/}
                    {/*        <select value={ireland} onChange={event => setIreland(event.target.value)}>*/}
                    {/*                (<option disabled selected> Destination    </option>),*/}
                    {/*                (<option value="Ireland">Ireland</option>),*/}
                    {/*                (<option value="Spain">Spain</option>),*/}
                    {/*                (<option value="Poland">Poland</option>)*/}
                    {/*            )}*/}
                    {/*        </select>*/}
                    {/*        /!*<p>This is display destination for test only : {destination}</p>*!/*/}
                    {/*    </div>*/}
                    {/*</div>*/}

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
                                    <input type="checkbox" className="filled-in" value={camera.toString()} onClick={toggleCamera}/>
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


                            {/*<div className="row">*/}
                            {/*    <p>SMARTPHONE:</p>*/}
                            {/*    <div  className="input-field col s10">*/}
                            {/*        <i className="material-icons prefix">account_circle</i>*/}
                            {/*        <select value={smartphone.toString()} onChange={event => setSmartphone(event.target.value)}>*/}
                            {/*            (<option disabled selected="Smartphone"> Smartphone</option>),*/}
                            {/*            (<option  value="Yes">Yes</option>),*/}
                            {/*            (<option value="No">No</option>)*/}

                            {/*            )}*/}
                            {/*        </select>*/}
                            {/*        /!*<p>This is display destination for test only : {smartphone}</p>*!/*/}
                            {/*    </div>*/}
                            {/*</div>*/}


                            {/*<p> Display checked or not camera: {cameraState ? "Yes": "No"}</p>*/}
                            {/*<p>This is display destination for test only : {camera},{camcorder}</p>*/}

                        </div>
                    </div>

                    {/*<div className="row">*/}
                    {/*    <div  className="input-field col s10">*/}
                    {/*        <p> BAG SIZE</p>*/}
                    {/*        <div className="row">*/}
                    {/*            <p>LARGE LUGGAGE:</p>*/}
                    {/*            <div  className="input-field col s10">*/}
                    {/*                <i className="material-icons prefix">account_circle</i>*/}
                    {/*                <select value={largeLuggage.toString()} onChange={event => setLargeLuggage(event.target.value)}>*/}
                    {/*                    (<option disabled selected> Large Luggage    </option>),*/}
                    {/*                    (<option  value="Yes">Yes</option>),*/}
                    {/*                    (<option value="No">No</option>)*/}

                    {/*                    )}*/}
                    {/*                </select>*/}
                    {/*                /!*<p>This is display destination for test only : {largeLuggage}</p>*!/*/}
                    {/*            </div>*/}
                    {/*        </div>*/}


                            {/*<div className="row">*/}
                            {/*    <p>MEDIUM LUGGAGE:</p>*/}
                            {/*    <div  className="input-field col s10">*/}
                            {/*        <i className="material-icons prefix">account_circle</i>*/}
                            {/*        <select value={mediumLuggage.toString()} onChange={event => setMediumLuggage(event.target.value)}>*/}
                            {/*            (<option disabled selected> Medium Luggage    </option>),*/}
                            {/*            (<option  value="Yes">Yes</option>),*/}
                            {/*            (<option value="No">No</option>)*/}
                            {/*            )}*/}
                            {/*        </select>*/}
                            {/*        /!*<p>This is display destination for test only : {mediumLuggage}</p>*!/*/}
                            {/*    </div>*/}
                            {/*</div>*/}


                    {/*        <div className="row">*/}
                    {/*            <p>SMALL LUGGAGE:</p>*/}
                    {/*            <div  className="input-field col s10">*/}
                    {/*                <i className="material-icons prefix">account_circle</i>*/}
                    {/*                <select value={smallLuggage.toString()} onChange={event => setSmallLuggage(event.target.value)}>*/}
                    {/*                    (<option disabled selected="Smartphone"> Small Luggage</option>),*/}
                    {/*                    (<option  value="Yes">Yes</option>),*/}
                    {/*                    (<option value="No">No</option>)*/}
                    {/*                    )}*/}
                    {/*                </select>*/}
                    {/*                /!*<p>This is display destination for test only : {smallLuggage}</p>*!/*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}



                    {/*<div className="row">*/}
                    {/*    <p>TRANSPORT:</p>*/}
                    {/*    <div  className="input-field col s10">*/}
                    {/*        <select value={transport.toString()} onChange={event => setTransport(event.target.value)}>*/}
                    {/*            <option value="" disabled selected>Transport</option>*/}
                    {/*            <option value="Plane">Plane</option>*/}
                    {/*            <option value="Bus">Bus</option>*/}
                    {/*            <option value="Train">Train</option>*/}
                    {/*            <option value="Car">Car</option>*/}
                    {/*            <label>Transport</label>*/}
                    {/*        </select>*/}
                    {/*    </div>*/}
                    {/*</div>*/}



                    <div className="row">
                        <div  className="input-field col s10">
                            <p>
                                <i className="material-icons prefix">account_circle</i>
                                <label>
                                    <input type="checkbox" className="filled-in" value={beachListStatus.toString()} onClick={toggleSunbathing}/>
                                    <span>Sunbathing</span> <div>{beachListStatus}</div>
                                </label>
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div  className="input-field col s10">
                            <p>
                                <i className="material-icons prefix">account_circle</i>
                                <label>
                                    <input type="checkbox" className="filled-in" value={ski.toString()} onClick={toggleSki}/>
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
                                    <input type="checkbox" className="filled-in" value={trekking.toString()} onClick={toggleTrekking}/>
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


