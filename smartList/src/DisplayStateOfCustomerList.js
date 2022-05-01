import React, {useState, useEffect} from 'react';
import ToDoListComponents from "./components/ToDoListComponents";
import ToDoListComponentsTrip from "./components/ToDoListComponentsTrip";
import {Link} from "react-router-dom";
import DisplayCustomerTrip from "./components/DisplayCustomerTrip";
/* useState is used to set a value  */

//It is new display contacts and delete on the bottom with  option to it delete

export const DisplayStateOfCustomerList = () => {

    //data from useEffect Customer data
    const [customer, setCustomer] = useState(null);
    const [trip, setTrip] = useState(null);
    const [displayTrip, setDisplayTrip] = useState(0);
    const [displayTripDetail, setDisplayTripDetail] = useState(true);

    useEffect(() => {
        //do something when loading
        console.log("yoyw yow do something from useeffect")
        if(!customer) {
            fetch("api/v1/customer").then((response) => response.json()).then((dataCustomer) => {
                console.log("List of items in the customer", dataCustomer);
                setCustomer(dataCustomer);
            });
        }
    }, [customer]);


    // useEffect(() => {
    //     //do something when loading
    //     console.log("yoyw yow do something from useeffect")
    //         fetch("api/v1/customer").then((response) => response.json()).then((dataCustomer) => {
    //             console.log("List of items in the customer", dataCustomer);
    //             setCustomer(dataCustomer);
    //         });
    // }, ["hI"]);



    useEffect(() => {
        //do something when loading
        console.log("yoyw yow do something from useeffect")
        fetch("api/v1/trip/").then((response) => response.json()).then((dataTrip) => {
            console.log("List of items in the trip", dataTrip);
            setTrip(dataTrip);
        });
    }, ["hI trip"]);


    function handlePickList(Index) {
        setDisplayTrip(Index)
        console.log(Index)
        setDisplayTrip(Index);
        console.log(displayTrip);

    }

    return (
<div>
            {/*<div>*/}
            {/*    {customer*/}
            {/*        ? customer.map((data) => {*/}
            {/*            return (<ToDoListComponents key={data.id} data2={data}/>*/}
            {/*                    );*/}
            {/*        }):"..... loading page"}*/}
            {/*</div>*/}








          {/*Tutaj powinienem zaimplementowac dane dla pojedynczego id urzytkownika a potem rozbudowac tak zeby byla lista*/}



          {/*This implementation display all list*/}
           {/*<div >*/}
           {/*         {trip*/}
           {/*             ? trip.map((Trip, UserData) => {*/}
           {/*                 return (<ToDoListComponentsTrip key={Trip.id} dataTrip2={Trip} dataCustomer={UserData}/>*/}
           {/*                 );*/}
           {/*             }):"..... loading page"}*/}
           {/*         /!*end*!/*/}
           {/* </div>*/}


           {/*This implementation display list first and then depend from User Id(list ID) display list*/}




            <div >
                {trip
                    ? trip.map((Trip, Index) => {


                        return (<>



                                <button className="increaseQuantity"
                                        onClick={(event) => handlePickList( Index,event.preventDefault())}>{Trip.id}
                                </button>


                      <div>
                            <ToDoListComponentsTrip key={Trip.id} dataTrip2={Trip} />
                      </div>











                            </>
                        );
                    }):"..... loading page"}
                {/*end*/}
            </div>




</div>
    );

}

export default DisplayStateOfCustomerList;


