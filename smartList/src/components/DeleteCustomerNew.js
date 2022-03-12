import React, {useState}  from 'react';
/* useState is used to set a value  */

//It is new display contacts and delete on the bottom with  option to it delete

const DeleteCustomerNew = ({item}) => {

    const [id, setId] = useState('');



    const deleteCustomer = async () => {
        const result = await fetch("http://localhost:8080/api/v1/customer/"+id, {
            method: "DELETE",
            //body: JSON.stringify({id}),
            //headers: {
            //     "Content-Type": "application/json",
            // }


        })

        const body = await result.json();
        item(body);

    }


    return (
        //this part display card with detail inside
        <div className="row">
            <form className="col s12" onSubmit={() => deleteCustomer()}>

                <div className="row">
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">
                                    Name: {item.name}
                                    <p> Surname:  {item.surname}  </p>
                                    <p> Email: {item.email} </p>
                                    <p> Phone Number: {item.phoneNumber} </p>
                                    <p> Date of birth: {item.dob} </p>
                                    <p> Sex: {item.sex} </p>
                                        Password: {item.customerPassword}    </span>

                            </div>

                            <div className="card-action">
                                <p>Customer ID: {item.id}</p>
                                {/*<a href="#">This is a link</a>*/}
                                {/*<a href="#">This is a link</a>*/}
                                {/*<button onSubmit={()=>deleteCustomer(item.id)} >Delete Student</button>*/}

                            </div>
                        </div>
                    </div>
                </div>

                <p> Insert index id and then press delete button </p>
                <div className="row">
                    <div className="input-field col s6">
                        <input placeholder="Placeholder" value={id} type="text"
                               onChange={(event => setId(event.target.value))} className="validate"/>
                        <label htmlFor="What Id want you delete">Id</label>
                    </div>
                </div>

                <div className="row">
                    <button className="waves-effect waves-light btn " type="submit" name="action">Delete Customer</button>

                </div>
            </form>
        </div>


    );

}

export default DeleteCustomerNew;


