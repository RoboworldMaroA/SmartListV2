import React, {useState}  from 'react';
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
        const addCustomer = async () => {
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
                <form className="col s12" onSubmit={() => addCustomer()}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="Mandatory" value={name} type="text"
                                   onChange={(event => setName(event.target.value))} className="validate"/>
                            <label htmlFor="name">First Name</label>
                        </div>

                        <div className="input-field col s6">
                            <input placeholder="Placeholder" value={surname} type="text"
                                   onChange={(event => setSurname(event.target.value))} className="validate"/>
                            <label htmlFor="surname">Surname</label>
                        </div>


                        <div className="input-field col s6">
                            <input placeholder="Placeholder" value={email} type="email" onChange={(event => setEmail(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s6">
                            <input placeholder="Placeholder" value={phoneNumber} type="text" onChange={(event => setPhoneNumber(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="phoneNumber">Phone Number</label>
                        </div>

                        <div className="input-field col s6">
                            <input value={dob} type="date" onChange={(event => setDob(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="dob">Day of Birth</label>
                        </div>

                        <div className="input-field col s6">
                            <input placeholder="Optional" value={sex} type="text" onChange={(event => setSex(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="sex">Sex</label>
                        </div>

                        <div className="input-field col s6">
                            <input placeholder="password" value={customerPassword} type="text" onChange={(event => setCustomerPassword(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="customerPassword">Type Password</label>
                        </div>

                        <div className="input-field col s6">
                            <input placeholder="Must be the same minimum 8 characters nad numbers" value={customerPasswordAgain} type="text" onChange={(event => setCustomerPasswordAgain(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="customerPasswordAgain">Repeat the Password</label>
                        </div>

                    </div>


                    <div className="row">
                        <button className="waves-effect waves-light btn " type="submit" name="action">Register</button>

                    </div>
                </form>
            </div>


        );

    }

export default AddDetail;


