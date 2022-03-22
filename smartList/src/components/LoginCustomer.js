import React, {useState}  from 'react';
import {Link} from "react-router-dom";
    /* useState is used to set a value  */
//this  function add customer detail during a registration


    const AddDetail = ({setStudentInfo: setInfo}) => {

        const [name, setName] = useState('');
        const [surname, setSurname] = useState('');
        const [email, setEmail] = useState('');
        const [phoneNumber, setPhoneNumber] = useState('');
        const [dob, setDob] = useState('');
        const [sex, setSex] = useState('');
        const [customerPassword, setCustomerPassword] = useState('');
        const [customerPasswordAgain, setCustomerPasswordAgain] = useState('');

        //change fetch to customer database not a student
        const validateCustomer = async () => {
            const result = await fetch("http://localhost:8080/api/v1/customer", {
                method: "POST",
                body: JSON.stringify({name, surname,email, phoneNumber, dob,sex, customerPassword, customerPasswordAgain}),
                headers: {
                    "Content-Type": "application/json",
                }


            })

            const body = await result.json();
            setInfo(body);

        }






        return (

            <div className="row">
                {/*<form className="col s12" onSubmit={() => validateCustomer()}>*/}
                <form className="col s12" onSubmit="" >
                    <div className="row">


                        <div className="input-field col s6">
                            <input placeholder="CreateCustomerList is you email address." value={email} type="email" onChange={(event => setEmail(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="email">CreateCustomerList</label>
                        </div>


                        <div className="input-field col s6">
                            <input placeholder="Password" value={customerPassword} type="text" onChange={(event =>
                                setCustomerPassword(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="customerPassword">Password</label>
                        </div>



                    </div>


                    <div className="row">
                        <Link to="../CreateCustomerList">  <button className="waves-effect waves-light btn " type="submit" name="action">Login(Verification password not ready yet)</button></Link>

                    </div>
                </form>
            </div>


        );

    }

export default AddDetail;


