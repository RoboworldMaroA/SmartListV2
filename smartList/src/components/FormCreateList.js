import React, {useState} from 'react';
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
import {selectOptions} from "@testing-library/user-event/dist/select-options";



    // const AddCreateListDetail = ({setCreateListInfo: setCreateListInfo},props) => {
        const AddCreateListDetail = ({props:props},{setCreateListInfo: setCreateListInfo}) => {

        //const [activity, setActivity] = useState('No');
        const [adminPrivileges, setAdminPrivileges] = useState(false);
        const [autumn, setAutumn] = useState(false);
        const [beachListStatus, setBeachListStatus] = useState(false);
        const [bus, setBus] = useState(false);
        const [camcorder, setCamcorder] = useState(false);
        const [camera, setCamera] = useState(false);
        const [car, setCar] = useState(false);
        const [departureDay, setDepartureDay] = useState("");
        const [description, setDescription] = useState('');
        const [ireland, setIreland] = useState(" ");
        const [listId, setListId] = useState('');
        const [largeLuggage, setLargeLuggage] = useState(false);
        const [mediumLuggage, setMediumLuggage] = useState(false);
        const [smallLuggage, setSmallLuggage] = useState(false);
        const [smartphone, setSmartphone] = useState(false);
        const [payStatus, setPayStatus] = useState(false);
        const [returnDay, setReturnDay] = useState('');
        const [tripName, setTripName] = useState('');
        const [tripPassword, setTripPassword] = useState('');
        const [weatherId, setWeatherId] = useState('');
        //const [transport, setTransport] = useState();

        const [ski, setSki] = useState(false);
        const [trekking , setTrekking] = useState(false);
            const [documentListStatus , setDocumentListStatus] = useState(true);
            const [essentialListStatus , setEssentialListStatus] = useState(true);
            const [plane , setPlane] = useState(false);
            const [poland , setPoland] = useState(false);
            const [spain , setSpain] = useState(false);
            const [summer , setSummer] = useState(false);
            const [winter , setWinter] = useState(false);
            const [spring , setSpring] = useState(false);
            const [train , setTrain] = useState(false);
            const [id , setId] = useState('');
            const [destination, setDestination] = useState('');
        // const [displayListState , setDisplayListState] = useState(true);
        // const [displayListState , setDisplayListState] = useState(true);

            const [sex, setSex] = useState('');



        //fetch for trip




        const validateCreateList = async (event) => {
            alert("Thank you for creating list")

            const result = await fetch("api/v1/trip", {
                method: "POST",
                body: JSON.stringify({adminPrivileges,autumn, beachListStatus, bus, camcorder,camera,
                    car, departureDay, description, destination,documentListStatus, essentialListStatus, ireland, largeLuggage,
                    listId, mediumLuggage, payStatus , plane, poland, returnDay, sex, ski,smallLuggage,smartphone,spain,spring,
                    summer,train,trekking,tripName, tripPassword, weatherId,winter,id}),
                headers: {
                    "Content-Type": "application/json",
                }
            })

            const body = await result.json();

            event.preventDefault();
            setCreateListInfo(body);
            //updateDestinationStatus();
            // const changeHandler = (event) => {
            //     this.setState({ camcorder: event ? event.value : '' });
            // };
            ///displayList();



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


      // //IT IS NOT WORKIN, DISPLAY CUSTOM LIST !!!!!!!!!!!!!
      //   function displayList (props)
      //   {
      //       return(
      //       //here will be logic what lit to display, depen what customer choose in the form FormCrteteList
      //       console.log(this.state.displayBeach)
      //
      //       )
      //
      //   }


        // const [checked2, setChecked2] = useState(false);
        // function toggle() {
        //     setChecked2(checked2=> !checked2)
        //
        // }




            //It is working checked element change state
            const [irelandState, setIrelandState] = useState(false);

            const toggleIreland = ()=> {

                setIrelandState(irelandState => !irelandState);
                if (!irelandState) {
                    setIreland("1");
                    console.log(ireland);//test only
                }
                if(irelandState){
                    setIreland("0");
                    console.log(ireland);//test only
                }


            }



            //It is working checked element change state
            const [spainState, setSpainState] = useState(false);

            const toggleSpain = ()=> {
                setSpainState(spainState => !spainState);
                if (!spainState) {
                    setSpain(true);
                    console.log(spain);//test only
                }
                if(spainState){
                    setSpain(false);
                    console.log(spain);//test only
                }
            }



            //It is working checked element change state
            const [polandState, setPolandState] = useState(false);

            const togglePoland = ()=> {
                setPolandState(polandState => !polandState);
                if (!polandState) {
                    setPoland(true);
                    console.log(poland);//test only
                }
                if(polandState){
                    setPoland(false);
                    console.log(poland);//test only
                }
            }


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


            //It is working checked element change state
            const [camcorderState, setCamcorderState] = useState(false);

            const toggleCamcorder = ()=> {
                setCamcorderState(camcorderState => !camcorderState);
                if (!camcorderState) {
                    setCamcorder(true);
                    console.log(camcorder);//test only
                }
                if(camcorderState){
                    setCamcorder(false);
                    console.log(camcorder);//test only
                }
            }


            //It is working checked element change state
            const [smartphoneState, setSmartphoneState] = useState(false);

            const toggleSmartphone = ()=> {
                setSmartphoneState(smartphoneState => !smartphoneState);
                if (!smartphoneState) {
                    setSmartphone(true);
                    console.log(smartphone);//test only
                }
                if(smartphoneState){
                    setSmartphone(false);
                    console.log(smartphone);//test only
                }
            }

            //It is working checked element change state
            const [largeLuggageState, setLargeLuggageState] = useState(false);

            const toggleLargeLuggage = ()=> {
                setLargeLuggageState(largeLuggageState => !largeLuggageState);
                if (!largeLuggageState) {
                    setLargeLuggage(true);
                    console.log(largeLuggage);//test only
                }
                if(largeLuggageState){
                    setLargeLuggage(false);
                    console.log(largeLuggage);//test only
                }
            }



            //It is working checked element change state
            const [mediumLuggageState, setMediumLuggageState] = useState(false);

            const toggleMediumLuggage = ()=> {
                setMediumLuggageState(mediumLuggageState => !mediumLuggageState);
                if (!mediumLuggageState) {
                    setMediumLuggage(true);
                    console.log(mediumLuggage);//test only
                }
                if(mediumLuggageState){
                    setMediumLuggage(false);
                    console.log(mediumLuggage);//test only
                }
            }


            //It is working checked element change state
            const [smallLuggageState, setSmallLuggageState] = useState(false);

            const toggleSmallLuggage = ()=> {
                setSmallLuggageState(smallLuggageState => !smallLuggageState);
                if (!smallLuggageState) {
                    setSmallLuggage(true);
                    console.log(smallLuggage);//test only
                }
                if(smallLuggageState){
                    setSmallLuggage(false);
                    console.log(smallLuggage);//test only
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
            const [planeState, setPlaneState] = useState(false);

            const togglePlane = ()=> {
                setPlaneState(planeState => !planeState);
                if (!planeState) {
                    setPlane(true);
                    console.log(plane);//test only
                }
                if(planeState){
                    setPlane(false);
                    console.log(plane);//test only
                }
            }

            //beachListStatus function to change state when clicked
            const [busState, setBusState] = useState(false);

            const toggleBus = ()=> {
                setBusState(busState => !busState);
                if (!busState) {
                    setBus(true);
                    console.log(bus);//test only
                }
                if(busState){
                    setBus(false);
                    console.log(bus);//test only
                }
            }


            const [trainState, setTrainState] = useState(false);
            const toggleTrain = ()=> {
                setTrainState(trainState => !trainState);
                if (!trainState) {
                    setTrain(true);
                    console.log(train);//test only
                }
                if(trainState){
                    setTrain(false);
                    console.log(train);//test only
                }
            }

            const [carState, setCarState] = useState(false);
            const toggleCar = ()=> {
                setCarState(carState => !carState);
                if (!carState) {
                    setCar(true);
                    console.log(car);//test only
                }
                if(carState){
                    setCar(false);
                    console.log(car);//test only
                }
            }


            // const option = [
            //     {value: 'Yes', label: 'Camcorder'},
            //     {value: 'No', label: 'Camcorder'}
            // ]
            //
            // const changeHandler = (event) => {
            //     this.setState({ camcorder: event ? event.map(x => x.value) : [] });
            // };






            //send string probably is working
            // const [destination, setDestination] = useState("");
            // // const [irelandStatus, setIrelandStatus] = useState(false);
            // // const [spainStatus, setSpainStatus] = useState(false);
            // // event => setDestination(event.target.value)
            // const updateDestinationStatus = (event)=> {
            //     //setIrelandStatus(irelandStatus => !irelandStatus);
            //     //setSpainStatus(spainStatus => !spainStatus);
            //
            //     //const ireland = "1";
            //     //const spain="2";
            //     if (destination === "1" ){
            //         setIreland("1");
            //         setSpain("0")
            //         setPoland("0");
            //         console.log("Ireland Value is",ireland);//test only
            //         console.log("Spain Value is",spain);//test only
            //         console.log("Poland Value is",poland);//test only
            //     }
            //     if(destination === "2" ){
            //         setIreland("0");
            //         setSpain("1")
            //         setPoland("0");
            //         console.log("Ireland Value is",ireland);//test only
            //         console.log("Spain Value is",spain);//test only
            //         console.log("Poland Value is",poland);//test only
            //     }
            //
            //     if(destination === "3" ){
            //         setIreland("0");
            //         setSpain("0")
            //         setPoland("1");
            //         console.log("Ireland Value is",ireland);//test only
            //         console.log("Spain Value is",spain);//test only
            //         console.log("Poland Value is",poland);//test only
            //     }
            //
            //
            // }



           //send boolean and string for ireland
             //const [destination, setDestination] = useState('');
           //  // const [irelandStatus, setIrelandStatus] = useState(false);
           //  // const [spainStatus, setSpainStatus] = useState(false);
           //  // event => setDestination(event.target.value)
           //  const updateDestinationStatus = (event)=> {
           //      //setIreland(ireland => !ireland);
           //     // setSpain(spainStatus => !spainStatus);
           //
           //      const ireland1 = "1";
           //      const spain1=true;
           //      const poland1=true;
           //
           //      // setDestination(null);
           //      // setIreland("");
           //      // setSpain(false);
           //      // setPoland(false);
           //
           //      const dest = event.target.value;
           //      setDestination(dest);
           //      console.log("Destination Value is before if",destination);//test only
           //      const dest2=destination;
           //      console.log("Dest2 Value before if",dest2);//test only
           //
           //      if (dest2 === "1" ){
           //          setIreland(ireland1);
           //          setSpain(!spain1);
           //          setPoland(!poland1);
           //          console.log("Destination Value first if",destination);//test only
           //          console.log("Ireland Value is",ireland);//test only
           //          console.log("Spain Value is",spain);//test only
           //          console.log("Poland Value is",poland);//test only
           //          setDestination(event.target.value);
           //          console.log("Destination after target value",destination);//test only
           //      }
           //      if(dest2 === "2" ){
           //          setIreland("0");
           //          setSpain(spain1)
           //          setPoland(!poland1);
           //          console.log("Destination Value 2nd if",destination);//test only
           //          console.log("Ireland Value is",ireland);//test only
           //          console.log("Spain Value is",spain);//test only
           //          console.log("Poland Value is",poland);//test only
           //          setDestination(event.target.value);
           //          console.log("Destination after target value",destination);//test only
           //      }
           //
           //      if(dest2 === "3" ){
           //          setIreland("0");
           //          setSpain(!spain1)
           //          setPoland(poland1);
           //          console.log("Destination Value 3rd if",destination);//test only
           //          console.log("Ireland Value is",ireland);//test only
           //          console.log("Spain Value is",spain);//test only
           //          console.log("Poland Value is",poland);//test only
           //          setDestination(event.target.value);
           //          console.log("Destination after target value",destination);//test only
           //      }
           //
           //      setIreland("0");
           //      setSpain(false)
           //      setPoland(false);
           //
           //
           //  }


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

            function handleChange(event) {    this.setState({value: event.target.value});  }



            const [isErrorSex, setIsErrorSex] = useState('');
            const [sexError, setSexError] = useState(true);
            const [sexErrorEmpty, setSexErrorEmpty] = useState("");


            const validateSex=(event)=>{
                const sx =event.target.value;
                console.log(sx)
                setSex(sx);
                const male = "male";
                const female = "female"
                if(sx !== male && sx !== female) {
                    if(sx ===" "){
                        setSexErrorEmpty("");
                    }
                    else{setIsErrorSex("Must be \"male\" or \"female\".");}
                }

                else{
                    setIsErrorSex("Sex ok");
                    setSexError(false);
                    setSex(sx);
                }
            }












            return (





            <div id ="elementInFormCreateList" className="row">


                {/*<div className="row">*/}
                {/*    <p>Test greet Parent pass data from FormCreateList to the DisplayList</p>*/}
                {/*    <button onClick={()=>props.greetHandler2('child')}>Greet Parent</button>*/}

                {/*</div>*/}


                <form className="col s12" onSubmit={(event) => validateCreateList(event)}>
                    <div className="row">
                        <div  className="input-field col s10">
                            <i className="material-icons prefix">title</i>
                            <input placeholder="Your unique name of the travelingList." value={tripName} type="text" onChange={(event => setTripName(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="List Name">Trip Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div  className="input-field col s10">
                            <i className="material-icons prefix">notes</i>
                            <input placeholder="Write unique description." value={listId} type="text" onChange={(event => setListId(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="List Name">Trip Description</label>
                        </div>
                    </div>









                    {/*I dont know how to pass data to this form*/}
                    {/*<div className="row">*/}
                    {/*    <div  className="input-field col s10">*/}
                    {/*        <i className="material-icons prefix">account_circle</i>*/}
                    {/*        <select className="browser-default"  value={destination} onChange={event => setIreland(event.target.value)}>*/}
                    {/*                (<option disabled selected> Destination    </option>),*/}
                    {/*                (<option value="Ireland">Ireland</option>),*/}
                    {/*                (<option value="Spain">Spain</option>),*/}
                    {/*                (<option value="Poland">Poland</option>)*/}
                    {/*            )}*/}
                    {/*        </select>*/}
                    {/*        /!*<p>This is display destination for test only : {destination}</p>*!/*/}
                    {/*    </div>*/}
                    {/*</div>*/}




                    {/*<div className="row">*/}
                    {/*    <div  className="input-field col s10">*/}

                    {/*        <i className="material-icons prefix">account_circle</i>*/}
                    {/*        /!*<select value={destination} onChange={(event)=>updateDestinationStatus(event)}>*!/*/}
                    {/*            <select value={destination|"2"|destination|"3"} onChange={(event)=>setDestination(event.target.value)}>*/}


                    {/*                (<option disabled selected> Destination    </option>),*/}
                    {/*                (<option value="1" ireland="1" >Ireland</option>),*/}
                    {/*                (<option value="2">Spain</option>),*/}
                    {/*                (<option value="3" >Poland</option>)*/}
                    {/*            )}*/}
                    {/*        </select>*/}
                    {/*        /!*<p>This is display destination for test only : {destination}</p>*!/*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className="row">
                        <div  className="input-field col s10">
                            <i className="material-icons prefix">target</i>
                            <label><p id="destinationInFormCreateList">DESTINATION:</p></label>
                        </div></div>

                            <div className="row">
                                <div  className="input-field col s10">
                            <p>
                                <label>
                                    <input type="checkbox" className="filled-in" value={ireland.toString()} onClick={toggleIreland}/>
                                    <span>Ireland</span> <div>{ireland}</div>
                                </label>
                                <label>
                                    <input type="checkbox" className="filled-in" value={spain.toString()} onClick={toggleSpain}/>
                                    <span>Spain</span> <div>{spain.toString()}</div>
                                </label>
                                <label>
                                    <input type="checkbox" className="filled-in" value={poland.toString()} onClick={togglePoland}/>
                                    <span>Poland</span> <div>{poland.toString()}</div>
                                </label>
                            </p>
                        </div>
                    </div>



                    <div className="row">
                        <div  className="input-field col s10">
                            <i className="material-icons prefix">calendar_month</i>
                            <input value={departureDay} type="date" onChange={(event =>
                                setDepartureDay(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="departureDay">Departure day</label>
                        </div>
                    </div>

                    <div className="row">
                        <div  className="input-field col s10">
                            <i className="material-icons prefix">date_range</i>
                            <input value={returnDay} type="date" onChange={(event =>
                                setReturnDay(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="returnDay">Return day</label>
                        </div>
                    </div>


                        <div className="row">
                        <div  className="input-field col s10">
                            <p>
                                <i className="material-icons prefix">photo_camera</i>
                                <label>
                                    <input type="checkbox" className="filled-in" value={camera.toString()} onClick={toggleCamera}/>
                                   <span>Camera</span> <div>{camera.toString()}</div>
                                </label>
                            </p>
                        </div>
                            <div  className="input-field col s10">
                            <p>
                                <i className="material-icons prefix"> videocam </i>
                                <label>
                                    <input type="checkbox" className="filled-in" value={camcorder.toString()} onClick={toggleCamcorder}/>
                                    <span>Camcorder</span> <div>{camcorder.toString()}</div>
                                </label>
                            </p>
                            </div>

                            <div  className="input-field col s10">
                            <p>
                                <i className="material-icons prefix">phone_iphone</i>
                                <label>
                                    <input type="checkbox" className="filled-in" value={smartphone.toString()} onClick={toggleSmartphone}/>
                                    <span>Smartphone</span> <div>{smartphone.toString()}</div>
                                </label>
                            </p>
                            </div>
                            {/*this is wrong , !!!!!!*/}
                            {/*<div className="row">*/}
                            {/*    <p>CAMCORDER:</p>*/}
                            {/*    <div  className="input-field col s10">*/}
                            {/*        <i className="material-icons prefix">account_circle</i>*/}
                            {/*        <select className="browser-default"  value={camcorder} onChange={(event)=>event.target.value}>*/}
                            {/*            (<option disabled selected> Camcorder    </option>),*/}
                            {/*            (<option  value="Yes">Yes</option>),*/}
                            {/*            (<option value="No">No</option>)*/}
                            {/*            )}*/}
                            {/*        </select>*/}
                            {/*        /!*<p>This is display destination for test only : {camcorder}</p>*!/*/}
                            {/*    </div>*/}
                            {/*</div>*/}


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

                        <div className="input-field col s8">
                            <i className="material-icons prefix">{sex}</i>

                            <input placeholder="Optional" value={sex} type="text" onChange={(event => validateSex(event))}
                                   className="validate"/>
                            <label htmlFor="sex">Sex</label>
                            <div>{isErrorSex}</div>
                            <div>{sexErrorEmpty}</div>
                            <div>{sexError}</div>
                        </div>
                    </div>









                    <div className="row" id="luggage"> LUGGAGE OPTIONS</div>
                    <div className="row">
                        <div  className="input-field col s10">
                            <p>
                                <i className="material-icons prefix">luggage </i>
                                <label>
                                    <input type="checkbox" className="filled-in" value={largeLuggage.toString()} onClick={toggleLargeLuggage}/>
                                    <span>Large Luggage</span> <div>{largeLuggage.toString()}</div>
                                </label>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div  className="input-field col s10">
                            <p>
                                <i className="material-icons prefix">luggage</i>
                                <label>
                                    <input type="checkbox" className="filled-in" value={mediumLuggage.toString()} onClick={toggleMediumLuggage}/>
                                    <span>Medium Luggage</span> <div>{mediumLuggage.toString()}</div>
                                </label>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div  className="input-field col s10">
                            <p>
                                <i className="material-icons prefix">cases</i>
                                <label>
                                    <input type="checkbox" className="filled-in" value={smallLuggage.toString()} onClick={toggleSmallLuggage}/>
                                    <span>Small Luggage</span> <div>{smallLuggage.toString()}</div>
                                </label>
                            </p>
                        </div>
                    </div>



                    <div className="row" id="activities"> ACTIVITIES</div>


                    <div className="row">
                        <div  className="input-field col s10">
                            <p>
                                <i className="material-icons prefix">beach_access</i>
                                <label>
                                    <input type="checkbox" className="filled-in" value={beachListStatus.toString()} onClick={toggleSunbathing}/>
                                    <span>Sunbathing</span> <div>{beachListStatus.toString()}</div>
                                </label>
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div  className="input-field col s10">
                            <p>
                                <i className="material-icons prefix">downhill_skiing</i>
                                <label>
                                    <input type="checkbox" className="filled-in" value={ski.toString()} onClick={toggleSki}/>
                                    <span>Ski</span> <div>{ski.toString()}</div>
                                </label>
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div  className="input-field col s10">
                            <p>
                                <i className="material-icons prefix">hiking</i>
                                <label>
                                    <input type="checkbox" className="filled-in" value={trekking.toString()} onClick={toggleTrekking}/>
                                    <span>Trekking</span> <div>{trekking.toString()}</div>
                                </label>
                            </p>

                        </div>
                    </div>



                    <div className="row" id="transport"> Transport</div>


                    <div className="row">
                        <div  className="input-field col s10">
                            <p>
                                <i className="material-icons prefix">flight</i>
                                <label>
                                    <input type="checkbox" className="filled-in" value={plane.toString()} onClick={togglePlane}/>
                                    <span>Plane</span> <div>{plane.toString()}</div>
                                </label>
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div  className="input-field col s10">
                            <p>
                                <i className="material-icons prefix">directions_car</i>
                                <label>
                                    <input type="checkbox" className="filled-in" value={car.toString()} onClick={toggleCar}/>
                                    <span>Car</span> <div>{car.toString()}</div>
                                </label>
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div  className="input-field col s10">
                            <p>
                                <i className="material-icons prefix">train</i>
                                <label>
                                    <input type="checkbox" className="filled-in" value={train.toString()} onClick={toggleTrain}/>

                                    <span>Train</span> <div>{train.toString()}</div> <div id="squareWithNumber"> 1 </div>
                                </label>
                            </p>

                        </div>
                    </div>

                    <div className="row">
                        <div  className="input-field col s10">
                            <p>
                                <i className="material-icons prefix">directions_bus</i>
                                <label>
                                    <input type="checkbox" className="filled-in" value={bus.toString()} onClick={toggleBus}/>
                                    <span>Bus</span> <div>{bus.toString()}</div>
                                </label>
                            </p>

                        </div>
                    </div>




                    {/*/!*BUTTONS*!/*/}
                    {/*<div  className="row">*/}
                    {/*    <div id="ButtonAddItemInFormCreateList" className="input-field col s10">*/}
                    {/*        <Link to="../CreateCustomerList">*/}
                    {/*            <button  className="waves-effect waves-light btn #795548 brown " type="submit" name="action">*/}
                    {/*                Add Item(not ready yet)*/}
                    {/*            </button>*/}
                    {/*        </Link>*/}
                    {/*    </div>*/}
                    {/*</div>*/}



                    <div  className="row">
                        <div id="ButtonCreateListInFormCreateList" className="input-field col s10">
                        {/*<Link to="../DisplayList">*/}
                            <button  className="waves-effect waves-light btn #795548 brown " type="submit" name="action">
                            Generate List
                        </button>
                        {/*</Link>*/}
                        </div>
                    </div>


                    {/*!!!!!!!zrobic w tym miejcu tak ze zbiera dana liste id albo name i wyswietla tylko ta liste po wcicnieniu display list*/}
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


