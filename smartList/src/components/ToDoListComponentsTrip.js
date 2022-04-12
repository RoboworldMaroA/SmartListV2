import React, {useEffect, useState} from 'react';
import DocumentsList from "./DocumentsList";
import BeachList from "./BeachList";
import CameraList from "./CameraList";
import EssentialList from "./EssentialList";
import ToDoListComponents from "./ToDoListComponents";
//i moved data from a component Display state component, and
// I can add here what I want to do when I click a checkboxes
const ToDoListComponentsTrip = (props) => {
    // const [toDoList, setToDoList] = useState(props.data2);
    const [toDoListTrip, setToDoListTrip] = useState(props.dataTrip2);


    //not updating
    // function updateIsDone() {
    //     setToDoList({ ... toDoList, documentsList: !toDoList.documentsList});
    // }

    //not updating
    function updateIsDoneTrip() {
        setToDoListTrip({ ... toDoListTrip, camera: !toDoListTrip.camera});
    }



    useEffect(()=> {
        console.log("item was updated state is:", toDoListTrip.camera );},[toDoListTrip]);



    return (
        <div>
            <p> List ID {toDoListTrip.id} Name: {toDoListTrip.name} LISTS OF ITEMS</p>
            <div>
                <input type="checkbox" checked={toDoListTrip.documentsListStatus}
                       onClick={updateIsDoneTrip}/>
                <span> Display documents for user  user {toDoListTrip.id} {toDoListTrip.name} </span>
            </div>

            <div>
                <input type="checkbox" checked={toDoListTrip.essentialListStatus}
                       onClick={updateIsDoneTrip}/>
                <span> Display Essential List for user  user {toDoListTrip.id} {toDoListTrip.name} </span>
            </div>


            <div>
                <input type="checkbox" checked={toDoListTrip.beachListStatus}
                       onClick={updateIsDoneTrip}/>
                <span> Display Beach List for user  user {toDoListTrip.id} {toDoListTrip.name} </span>
            </div>

            <div>
                <input type="checkbox" checked={toDoListTrip.camera}
                       onClick={updateIsDoneTrip}/>
                <span> Display Camera List for user  user {toDoListTrip.id} {toDoListTrip.name} </span>
            </div>


            {/*<p> Display LIST for USER: ID {toDoList.id} NAME: {toDoList.name}</p>*/}
            <div className="row">
                {toDoListTrip.documentsListStatus ?
                    <DocumentsList/>
                    : null
                }
            </div>

            <div className="row">
                {toDoListTrip.essentialListStatus ?
                    <EssentialList/>
                    : null
                }
            </div>

            <div className="row">
                {toDoListTrip.beachListStatus ?
                    <BeachList/>
                    : null
                }
            </div>

            <div className="row">
                {toDoListTrip.camera ?
                    <CameraList/>
                    : null
                }
            </div>


















        </div>
    );
};

export default ToDoListComponentsTrip;



