import React, {useEffect, useState} from 'react';
import DocumentsList from "./DocumentsList";
import BeachList from "./BeachList";
import CameraList from "./CameraList";
import EssentialList from "./EssentialList";
import ToDoListComponents from "./ToDoListComponents";
import Ireland from "./Ireland";
import Car from "./Car";
import {Link} from "react-router-dom";
import Poland from "./Poland";
import Spain from "./Spain";
import CamcorderList from "./CamcorderList";
import PlaneList from "./PlaneList";
import BusList from "./BusList";
import TrainList from "./TrainList";
import LargeLuggageList from "./LargeLuggageList";
import MediumLuggageList from "./MediumLuggageList";
import SmallLuggageList from "./SmallLuggageList";
import Autumn from "./Autumn";
import Winter from "./Winter";
import Spring from "./Spring";
import Summer from "./Summer";
import TrekkingList from "./TrekkingList";
import SkiList from "./SkiList";
import './ToDoListComponentTrip.css';
import ElectronicEquipment from "./ElectronicEquipment";
import EssentialList2 from "./EssentialList2";

//i moved data from a component Display state component, and
// I can add here what I want to do when I click a checkboxes
export const ToDoListComponentsTrip = (props) => {
    // const [toDoList, setToDoList] = useState(props.data2);
    const [toDoListTrip, setToDoListTrip] = useState(props.dataTrip2);
    const [ireland,setIreland]=useState(props.dataTrip2.ireland)



    const updateIsDoneTrip= () => {
        setToDoListTrip({ ... toDoListTrip, camera: !toDoListTrip.camera});
    }
    useEffect(()=> {
        console.log("item was updated ireland value is:", toDoListTrip.ireland, updateIrelandStatus()  );},[toDoListTrip]);


    //const [irelandState, setIrelandState] = useState("1");
    const [irelandStatus, setIrelandStatus] = useState(false);
    // const [yesIreland, setYesIreland] = useState("Yes");
    const updateIrelandStatus = (event)=> {
        //const irelandStatus = setIrelandStatus(props.dataTrip2.ireland)
        //setIrelandStatus(irelandStatus => !irelandStatus);
        //let yes = "1";
        //let no = "0";
        //let ireland = toDoListTrip.ireland
        //setToDoListTrip.ireland(event.target.value)
        //setToDoListTrip({ ... toDoListTrip, ireland: !toDoListTrip.ireland});
        const trip = ireland;
        const irlStatus = irelandStatus;
        if (trip === "1"){
            setIrelandStatus(true);
            //setIrelandState("0");
            console.log("irlStatus is:(in if trip =1) ",irlStatus);
        }

        if (trip === "0") {
            setIrelandStatus(false);
            //setIrelandState("1");
            console.log("irlStatus is:(in if trip =0) ",irlStatus);//test only
        }
    }


    useEffect(()=> {
        console.log("Camera was updated state is:", toDoListTrip.camera
        );},[toDoListTrip]);


    return (


        <div>

            <div className="row">
                  <div id="titleListToDoListID" className="col s10 m6">

            <p id="listOfItemsInToDoListComponent"> List ID {toDoListTrip.id} Name: {toDoListTrip.description}</p>

                  </div>
                  </div>
            {/*<div>*/}
            {/*    <input type="checkbox" checked={toDoListTrip.documentsListStatus}*/}
            {/*           onChange={updateIsDoneTrip}/>*/}
            {/*    <span> Display documents for user  user {toDoListTrip.id} {toDoListTrip.name} </span>*/}
            {/*</div>*/}

            {/*<div>*/}
            {/*    <input type="checkbox" checked={toDoListTrip.essentialListStatus}*/}
            {/*           onChange={updateIsDoneTrip}/>*/}
            {/*    <span> Display Essential List for user  user {toDoListTrip.id} {toDoListTrip.name} </span>*/}
            {/*</div>*/}


            {/*<div>*/}
            {/*    <input type="checkbox" checked={toDoListTrip.beachListStatus}*/}
            {/*           onChange={updateIsDoneTrip}/>*/}
            {/*    <span> Display Beach List for user  user {toDoListTrip.id} {toDoListTrip.name} </span>*/}
            {/*</div>*/}

            {/*<div>*/}
            {/*    <input type="checkbox" checked={toDoListTrip.camera}*/}
            {/*           onChange={updateIsDoneTrip}/>*/}
            {/*    <span> Display Camera List for user  user {toDoListTrip.id} {toDoListTrip.name} </span>*/}
            {/*</div>*/}


            {/*<div>*/}
            {/*    <input type="checkbox"*/}
            {/*           onChange={updateIrelandStatus}/>*/}
            {/*    <span> Display Ireland List Status: {toDoListTrip.ireland.toString()} Trip ID: {toDoListTrip.id} Description: {toDoListTrip.description} </span>*/}
            {/*</div>*/}


            {/*<div className="row">*/}
            {/*    <div  className="input-field col s10">*/}
            {/*        <p>*/}
            {/*          `````  /!*<i className="material-icons prefix">account_circle</i>`````*!/*/}
            {/*            <label>*/}
            {/*                <input type="checkbox" className="filled-in"  value={irelandStatus.toString()} onChange={(event)=> updateIrelandStatus(event)}/>*/}
            {/*                <span>Ireland</span> <div>Ireland Status{irelandStatus.toString()}</div>*/}
            {/*            </label>*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div>*/}
            {/*    <input type="checkbox" checked={toDoListTrip.car}*/}
            {/*           onChange={updateIsDoneTrip}/>*/}
            {/*    <span> Display Car List for user  user {toDoListTrip.id} {toDoListTrip.name} </span>*/}
            {/*</div>*/}



           {/*<div id="allListsInToDoListComponentsTrip">*/}


           {/*    <div className="row">*/}
           {/*        <div className="col s12 m6">*/}
           {/*            <div className="card blue-grey darken-1">*/}
           {/*                <div className="card-content white-text">*/}
           {/*                     <span className="card-title">*/}






            {/*<p> Display LIST for USER: ID {toDoList.id} NAME: {toDoList.name}</p>*/}
            <div className="row">
                {toDoListTrip.documentsListStatus ?
                    <EssentialList2/>
                    : null
                }
            </div>

            <div className="row">
                {toDoListTrip.essentialListStatus ?

                    <ElectronicEquipment/>
                    : null
                }
            </div>


            <div className="row">
                {toDoListTrip.camera ?
                    <CameraList/>
                    : null
                }
            </div>


            <div className="row">
                {toDoListTrip.camcorder ?
                    <CamcorderList/>
                    : null
                }
            </div>



            <div className="row">
                {irelandStatus?
                    <Ireland/>
                    : null
                }
            </div>

            <div className="row">
                {toDoListTrip.spain?
                    <Spain/>
                    : null
                }
            </div>

            <div className="row">
                {toDoListTrip.poland?
                    <Poland/>
                    : null
                }
            </div>

            <div className="row">
                {toDoListTrip.car?
                    <Car/>
                    : null
                }
            </div>

            <div className="row">
                {toDoListTrip.plane?
                    <PlaneList/>
                    : null
                }
            </div>

            <div className="row">
                {toDoListTrip.bus?
                    <BusList/>
                    : null
                }
            </div>


            <div className="row">
                {toDoListTrip.train?
                    <TrainList/>
                    : null
                }
            </div>

            <div className="row">
                {toDoListTrip.largeLuggage?
                    <LargeLuggageList/>
                    : null
                }
            </div>

            <div className="row">
                {toDoListTrip.mediumLuggage?
                    <MediumLuggageList/>
                    : null
                }
            </div>


            <div className="row">
                {toDoListTrip.smallLuggage?
                    <SmallLuggageList/>
                    : null
                }
            </div>



            {/*/*this list will display depend from the month that customer is traveling*!/*/}
            {/*Autumn is from*/}
            <div className="row">
                {toDoListTrip.autumn?
                    <Autumn/>
                    : null
                }
            </div>


            <div className="row">
                {toDoListTrip.spring?
                    <Spring/>
                    : null
                }
            </div>

            <div className="row">
                {toDoListTrip.summer?
                    <Summer/>
                    : null
                }
            </div>

            <div className="row">
                {toDoListTrip.winter?
                    <Winter/>
                    : null
                }
            </div>

            {/*Activities*/}

            <div className="row">
                {toDoListTrip.trekking?
                    <TrekkingList/>
                    : null
                }
            </div>

            <div className="row">
                {toDoListTrip.ski?
                    <SkiList/>
                    : null
                }
            </div>



            <div className="row">
                {toDoListTrip.beachListStatus ?
                    <BeachList/>
                    : null
                }
            </div>




            {/*BUTTON add your Item*/}
            <div  className="row">
                <div id="buttonAddItemInToDoListComponentTrip" className="input-field col s10">
                    <Link to="../CreateCustomerList">
                        <button  className="waves-effect waves-light btn #795548 brown " type="submit" name="action">
                            Add Item(not ready yet)
                        </button>
                    </Link>
                </div>
            </div>




                                {/*</span></div></div></div></div>*/}
            {/*end all list*/}
           {/*</div>*/}







        </div>
    );
};

export default ToDoListComponentsTrip;



