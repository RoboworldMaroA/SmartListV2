import React, {useState}  from 'react';
    /* useState is used to set a value  */
//this  function add customer detail during a registration
//css to make a style on this class
import './RegisterCustomer.css';
import {Link} from "react-router-dom";

    const AddDetail = ({setStudentInfo: setInfo}) => {

        const [name, setName] = useState('');
        const [surname, setSurname] = useState('');
        const [email, setEmail] = useState('');
        const [phoneNumber, setPhoneNumber] = useState('');
        const [dob, setDob] = useState('');
        const [sex, setSex] = useState('');
        const [address, setAddress] = useState('');
        const [customerPassword, setCustomerPassword] = useState('');
        const [customerPasswordAgain, setCustomerPasswordAgain] = useState('');

        const [emailIsVerified, setEmailIsVerified] = useState(false);

        //change fetch to customer database not a student
       // const addCustomer = async () => {
       //      const result = await fetch("http://localhost:8080/api/v1/customer", {
       //          method: "POST",
       //          body: JSON.stringify({name, surname,email, phoneNumber, dob,sex, customerPassword, customerPasswordAgain}),
       //          headers: {
       //              "Content-Type": "application/json",
       //          }
       //
       //
       //      })
       //
       //      const body = await result.json();
       //      setInfo(body);
       //
       //  }

/*
       //not working
        const validateInputs= () => {
            if(email==''){

                addCustomer().then(r => {
                    console.error("aaaassssssssssssss")});
            }
          else{
                console.error("Not nice no email");
            }

        }
*/




        const addCustomer = async () => {

                const result = await fetch("http://localhost:8080/api/v1/customer", {
                    method: "POST",
                    body: JSON.stringify({
                        name,
                        surname,
                        email,
                        phoneNumber,
                        dob,
                        sex,
                        address,
                        customerPassword,
                        customerPasswordAgain
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    }


                })

                const body = await result.json();
                setInfo(body);

            }






        return (

            <div id="itemsInRegisterCustomer" className="row">
                <form className="col s12" onSubmit={() => addCustomer()}>
                    {/*<form className="col s12" onSubmit={() => validateInputs()}>*/}
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="Mandatory" value={name} type="text"
                                   onChange={(event => setName(event.target.value))} className="validate"/>
                            <label htmlFor="name">First Name</label>
                        </div>
                    </div>

                    <div className="row">

                        <div className="input-field col s6">
                            <input placeholder="Mandatory" value={surname} type="text"
                                   onChange={(event => setSurname(event.target.value))} className="validate"/>
                            <label htmlFor="surname">Surname</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="Mandatory" value={email} type="email" onChange={(event => setEmail(event.target.value))}
                                   className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="Optional" value={phoneNumber} type="text" onChange={(event => setPhoneNumber(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="phoneNumber">Phone Number</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input value={dob} type="date" onChange={(event => setDob(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="dob">Day of Birth</label>
                        </div>
                    </div>

                        <div className="row">

                        <div className="input-field col s6">
                            <input placeholder="Optional" value={sex} type="text" onChange={(event => setSex(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="sex">Sex</label>
                        </div>
                        </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="Optional" value={address} type="text"
                                   onChange={(event => setAddress(event.target.value))} className="validate"/>
                            <label htmlFor="surname">Address</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="password" value={customerPassword} type="text" onChange={(event => setCustomerPassword(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="customerPassword">Type Password</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="Must be the same minimum 8 characters nad numbers" value={customerPasswordAgain} type="text" onChange={(event => setCustomerPasswordAgain(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="customerPasswordAgain">Repeat the Password</label>
                        </div>
                    </div>



                    <div className="row">
                        {/*<Link to="../Login">*/}
                        <button className="waves-effect waves-light btn " type="submit" name="action">Register</button>
                        {/*</Link>*/}
                    </div>
                </form>
            </div>


        );

    }

export default AddDetail;


