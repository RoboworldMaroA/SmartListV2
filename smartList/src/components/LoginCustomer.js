import React, {useState}  from 'react';
import {Link} from "react-router-dom";
    /* useState is used to set a value  */
//this  function add customer detail during a registration
import './LoginCustomer.css';

    const AddCustomerDetail = ({item}) => {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [customerPassword, setCustomerPassword] = useState('');


        //fetch customer data from database
        const validateCustomer = async () => {
            console.warn(email,customerPassword);
            //item= {email,customerPassword};

            const result = await fetch('api/v1/customer', {
                method: "POST",
                body: JSON.stringify({name,email, customerPassword}),
                headers: {
                    "Content-Type": "application/json",
                    "Accept":'application/json'
                }
            })
            const body = await result.json();
            item(body);
            if(this.email===email){
                console.warn("That is email is same");

            }
            console.warn("That is email NOT same");

        }




        return (
            <div id="ItemsInLoginCustomer" className="row">
                <form className="col s12" onSubmit={() => validateCustomer()}>
                {/*<form className="col s12" onSubmit="" >*/}
                    <div className="row">
                        <div className="input-field col s8">
                            <input placeholder="Login" value={email} type="email" onChange={(event => setEmail(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="name">Name (Email){email}</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s8">
                            <input placeholder="Password" value={customerPassword} type="text" onChange={(event =>
                                setCustomerPassword(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="customerPassword">Password {customerPassword}</label>
                        </div>
                    </div>

                    <div className="row">
                         {/*<Link to="../CreateCustomerList">*/}
                            <button className="waves-effect waves-light btn #795548 brown " type="submit" name="action">
                                Login(Verification password not ready yet)
                            </button>
                        {/*</Link>*/}
                    </div>
                </form>
            </div>
        );
    }
export default AddCustomerDetail;


