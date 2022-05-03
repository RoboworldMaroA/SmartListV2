import React, {Component, useContext, useState} from "react";
import ToDoList from "./ToDoList"
/* Class Contact uses for display and read a data from database, data is imported from other classes */
//props are data inside the divs
import './FormCreateList.css';
import 'materialize-css';
import M from 'materialize-css';
import DocumentsList from "./DocumentsList";
import EssentialList from "./EssentialList";
import essentialList from "./EssentialList";
import BeachList from "./BeachList";
import DisplayCustomerTrip from "./DisplayCustomerTrip";
import displayCustomerTrip from "./DisplayCustomerTrip";
import FormCreateList from "./FormCreateList";
import ParentComponent from "./ParentComponent";
import LoginCustomerForm from "./LoginCustomerForm";
import {useEffect} from "react";
import DisplayStateOfCustomerList from "../DisplayStateOfCustomerList";
import {Link} from "react-router-dom";
import ToDoListComponentsTrip from "./ToDoListComponentsTrip";
import Trip from "./Trip";
// import {UserContext} from "../UserContext";
import './DisplayListComponent.css';

export const ManageDestinationFunctionalComponent = () =>{

    const [tripData, setTripData] = useState(null);
    const [displayTripDetail, setDisplayTripDetail] = useState(false);
    const [loggedCustomerId, setLoggedCustomerId] = useState(1);

    // const {value,setValue} = useContext(UserContext);
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         contacts: [],
    //         tripData: [],
    //         displayDocuments: true,
    //         displayEssential: true,
    //         displayBeach: true,
    //         camera:' ',
    //         parentName2:'Parent',
    //         displayTripDetail:false,
    //         items:[
    //             {id:1, name:"Marek"},
    //             {id:2, name:"Leszek"},
    //             {id:3, name:"Augustyn"}
    //         ],
    //         loggedCustomerId:1,
    //         loggedCustomerEmail:"maugusty@o2.pl",
    //
    //     }
    //
    //     // this.greetParent2=this.greetParent2.bind(this);
    //     //this.documentList=this.documentList.bind(this);
    //
    // }

    // I am testing to get value from FormCreateList
    // greetParent2(childName2){
    //     // alert('Hello'+this.state.parentName );
    //     alert(`Hello ${this.state.parentName2} from ${childName2}`);
    // }

    // const fetchCustomerDataFromDatabase= async ()=> {
    //     fetch('api/v1/customer/').then
    //     (response => response.json()).then(data => this.setState({contacts: data}));
    //
    //
    //     document.addEventListener('DOMContentLoaded', function () {
    //         var elems = document.querySelectorAll('select');
    //         var instances = M.FormSelect.init(elems, {});
    //     });
    //
    //     document.addEventListener('DOMContentLoaded', function () {
    //         var elems = document.querySelectorAll('.datepicker');
    //         var instances = M.Datepicker.init(elems, {});
    //     });
    //
    //
    // }


    //import data from the trip and get a data trip, compare with
    //documentList

    // const fetchCustomerDataFromDatabase= async ()=>
    //     fetch('api/v1/trip/').then
    //     (response => response.json()).then(TripData => this.setState({tripData: TripData}));
    //
    // }

    useEffect(() => {
        //do something when loading
        console.log("signal to do something using useEffect")
        fetch("api/v1/trip/").then((response) => response.json()).then((TripData) => {
            console.log("List of items in the trip", TripData);
            setTripData(TripData);
        });
    }, ["hI trip"]);



    //this method display or not the Trip Detail
    function changeStatus() {
        //here will be logic what lit to display, depend on what customer choose in the form FormCrteteList
        console.log("State trip List", displayTripDetail);
        setDisplayTripDetail(!displayTripDetail);

    }


        return (
            // First DIV
            <div >

                {/*<div className="row">*/}


                {/*    {this.state.tripData.map((TripData)=> {*/}
                {/*        return(<div >*/}
                {/*                <h1>key={TripData.id} camera {TripData.camera.toString()}</h1>*/}
                {/*        </div>*/}

                {/*        )*/}

                {/*    })}*/}
                {/*</div>*/}


                {/*Filter function to diplay only trip data from one cutomer*/}
                {/*<div className="row">*/}
                {/*    {tripData.filter((TripData)=>TripData.id===1)*/}
                {/*        .map((TripData)=> TripData.ireland)}*/}

                {/*</div>*/}

                {/*<div className="row">*/}
                {/*    {trip && trip.filter((TripData) => TripData.id===2).*/}
                {/*    map((TripData) => {return (*/}
                {/*        <div key={TripData.id} >*/}

                {/*            <h1> From Trip   {TripData.departureDay} {TripData.ireland.toString()}  </h1>*/}
                {/*        </div>*/}
                {/*    )})*/}

                {/*    }*/}

                {/*</div>*/}





                {/*<div className="row">*/}
                {/*    {this.state.contacts.filter((data)=>data.id===1)*/}
                {/*        .map((data)=> data.name)}*/}

                {/*</div>*/}



            {/*<h1>Manage Destination</h1>*/}
                {/*<div className="row">*/}
                {/*        <DisplayStateOfCustomerList/>*/}
                {/*</div>*/}

                {/*<div className="row"> <h2>Element from useContext {value}</h2></div>*/}

                <button className="waves-effect waves-light btn #795548 brown "  onClick={()=> changeStatus()} >  Display Trip Detail </button>
                 <div>
                     {displayTripDetail
                         ? tripData.map((TripData) => {
                                 return (<DisplayCustomerTrip key={TripData.id} item={TripData}/>);
                         }):"... press to see more detail about a trips"}
                     {/*end*/}
                 </div>
                {/*<div className="row">*/}
                {/*<button className="waves-effect waves-light btn #795548 brown "  onClick={()=> changeStatus()} >  Display Trip Detail </button>*/}
                {/*</div>*/}


                {/*FILTER*/}
                {/*<div className="row">*/}
                {/*    {displayTripDetail*/}
                {/*        ? tripData.filter((TripData) => TripData.id===loggedCustomerId).map((TripData) => {*/}
                {/*            return (<DisplayCustomerTrip key={TripData.id} item={TripData}/>);*/}
                {/*        }):"... press to see more detail about a trips"}*/}
                {/*    /!*end*!/*/}
                {/*</div>*/}



            </div>);
}/* end class Contact*/
export default ManageDestinationFunctionalComponent;
