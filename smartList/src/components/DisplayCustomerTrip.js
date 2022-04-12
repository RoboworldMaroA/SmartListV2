import React, {useState, useEffect}  from 'react';
/* useState is used to set a value  */

//It is new display contacts and delete on the bottom with  option to it delete

export const DisplayCustomerTrip = ({item}) => {

    const [id, setId] = useState('');
    // const [customerId, setCustomerId] = useState('');

    //data from useEffect Customer data
    // const [customer, setCustomer] = useState(null);

    const deleteCustomerTrip = async () => {
        const resultTrip = await fetch("api/v1/trip/"+id, {
            method: "DELETE",
            //body: JSON.stringify({id}),
            //headers: {
            //     "Content-Type": "application/json",
            // }


        })

        const body = await resultTrip.json();
        item(body);

    }


        //
        // useEffect(() => {
        //     //do something when loading
        //     console.log("yoyw yow do something from useeffect")
        //     if(!customer) {
        //         fetch("http://localhost:8080/api/v1/customer").then((response) => response.json()).then((dataCustomer) => {
        //             console.log("List of items in the customer", dataCustomer);
        //             setCustomer(dataCustomer);
        //         });
        //     }
        // }, [customer]);



    return (

<div>
        {/*// this part display card with detail inside*/}
        <div className="row">
            <form className="col s12" onSubmit={() => deleteCustomerTrip()}>

                <div className="row">
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">
                                    <p>It is a Trip details with ID: {item.id}</p>
                                    <p>Trip name : {item.tripName}</p>
                                    <p>Customer Id:  {item.customerId}  </p>
                                    <p>Departure Day: {item.departureDay} </p>
                                    <p>Return Day: {item.returnDay} </p>
                                    <p>Description: {item.description}</p>
                                    {/*<p>Destination: {item.destinationId}</p>*/}
                                    <p>List: {item.listId}</p>
                                    <p>Activity : {item.activity} </p>
                                    <p>Admin Privileges: {item.adminPrivileges.toString()} </p>
                                    <p>Pay Status: {item.payStatus.toString()}</p>
                                    <p>Bag option:</p>
                                    <p>Large luggage: {item.largeLuggage.toString()} </p>
                                    <p> Medium luggage: {item.mediumLuggage.toString()} </p>
                                    <p> Small luggage: {item.smallLuggage.toString()} </p>
                                    <p>Photo equipment:</p>
                                    <p>Camera: {item.camera.toString()}</p>
                                    <p>Camcorder: {item.camcorder.toString()}</p>
                                    <p>Smartphone: {item.smartphone.toString()}</p>
                                     <p>Transport:</p>
                                     <p>Train: {item.train.toString()}</p>
                                     <p>Plane: {item.plane.toString()}</p>
                                     <p>Car: {item.car}</p>

                                </span>

                            </div>

                            <div className="card-action">
                                <p> If you want delete user Trip input Trip id and then press delete button </p>
                                {/*<a href="#">This is a link</a>*/}
                                {/*<a href="#">This is a link</a>*/}
                                {/*<button onSubmit={()=>deleteCustomer(item.id)} >Delete Student</button>*/}

                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="input-field col s6">
                        <input placeholder="Input user ID that you want to delete"  type="text"
                               onChange={(event => setId(event.target.value))} className="validate"/>
                        {/*<label htmlFor="What Id want you delete">Id</label>*/}
                    </div>
                </div>

                <div className="row">
                    <button className="waves-effect waves-light btn " type="submit" name="action">Delete Trip</button>

                </div>
            </form>
        </div>
            {/*<div>*/}
            {/*    /!*<p>It is a Customer detail  ID:</p>*!/*/}
         {/*It is checking if customer is bulll then*/}
            {/*    /!*                    display string loading page if there is data then map*!/*!/*/}
            {/*        {customer*/}
            {/*            ? customer.map((data) => {*/}
            {/*                return <input type="checkbox" checked={data.documentList} />;*/}
            {/*            })*/}
            {/*            : "..... loading page"}*/}
            {/*    );*/}
            {/*</div>*/}


</div>
    );

}

export default DisplayCustomerTrip;


