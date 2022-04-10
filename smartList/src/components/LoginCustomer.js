import React, {useState}  from 'react';
import {Link} from "react-router-dom";
    /* useState is used to set a value  */
//this  function add customer detail during a registration
import './LoginCustomer.css';

    const AddCustomerDetail = ({setCustomerInfo: setInfo}) => {
        const [name, setName] = useState('Maro2');
        const [surname, setSurname] = useState('Augustyn');
        const [email, setEmail] = useState('maugusty@o2.pl');
        const [phoneNumber, setPhoneNumber] = useState('0894582043');
        const [dob, setDob] = useState('1978-09-25');
        const [sex, setSex] = useState('Man');
        const [customerPassword, setCustomerPassword] = useState('1234');
        const [customerPasswordAgain, setCustomerPasswordAgain] = useState('1234');
        const [adminPrivileges, setAdminPrivileges] = useState('Yes');

        //fetch customer data from database
        const validateCustomer = async () => {
            const result = await fetch('api/v1/customer', {
                method: "POST",
                body: JSON.stringify({name, surname,email, phoneNumber, dob,sex, customerPassword, customerPasswordAgain, adminPrivileges}),
                headers: {
                    "Content-Type": "application/json",
                }
            })
            const body = await result.json();
            setInfo(body);
        }




        return (
            <div id="ItemsInLoginCustomer" className="row">
                {/*<form className="col s12" onSubmit={() => validateCustomer()}>*/}
                <form className="col s12" onSubmit="" >
                    <div className="row">
                        <div className="input-field col s8">
                            <input placeholder="Login" value={name} type="email" onChange={(event => setName(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="name">Name (Name)</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s8">
                            <input placeholder="Password" value={customerPassword} type="text" onChange={(event =>
                                setCustomerPassword(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="customerPassword">Password</label>
                        </div>
                    </div>

                    <div className="row">
                         <Link to="../CreateCustomerList">
                            <button className="waves-effect waves-light btn #795548 brown " type="submit" name="action">
                                Login(Verification password not ready yet)
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
export default AddCustomerDetail;


