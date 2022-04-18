import React, {useState}  from 'react';
    /* useState is used to set a value  */
//this  function add customer detail during a registration
//css to make a style on this class
import './RegisterCustomer.css';
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";

    const AddDetail = ({setStudentInfo: setInfo}) => {
        const navigateRegister = useNavigate();
        const [name, setName] = useState('MaroReg');
        const [surname, setSurname] = useState('AugustynReg');
        const [email, setEmail] = useState('EmailReg@o2.pl');
        const [phoneNumber, setPhoneNumber] = useState('0899999943');
        const [dob, setDob] = useState('1988-08-08');
        const [sex, setSex] = useState('Man');
        const [address, setAddress] = useState('Dublin');
        const [customerPassword, setCustomerPassword] = useState('1234');
        const [customerPasswordAgain, setCustomerPasswordAgain] = useState('');

        const [emailIsVerified, setEmailIsVerified] = useState(false);
        const [isError, setIsError] = useState('');
        const [isErrorFetchMethod, setIsErrorFetchMethod] = useState(null);
        const [passwordError, setPasswordError] = useState(true);
        const [passwordErrorEmpty, setPasswordErrorEmpty] = useState("");

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

       const verifyAllFields = (event)=>{
           if(!passwordError){
               navigateRegister("/Login");
              //return addCustomer()

           }
           if(passwordError){
               setPasswordErrorEmpty("CAN NOT BE EMPTY");
               event.preventDefault();
           }

       }




        // function resposible for pass data to database
        const addCustomer = async () => {
                const result = await fetch("api/v1/customer", {
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
                }).catch((err)=>{
                    setIsErrorFetchMethod(err.message)
                    console.log(err.response);
                })

                const body = await result.json().catch(err=>console.log(err.response));
                setInfo(body).catch(err=>console.log(err.response));



            }


            const validatePassword=(event)=>{
            const pass =event.target.value;
            setCustomerPasswordAgain(pass);
                if(customerPassword!=pass) {
                    if(customerPassword===" "){
                        setPasswordErrorEmpty("CAN NOT BE EMPTY");
                    }
                    else{setIsError("password mus be the same!!!!");}
                }

                else{
                    setIsError("Password OK");
                    setPasswordError(false);
                }
            }






        return (

            <div id="itemsInRegisterCustomer" className="row">
                {/*<form className="col s12" onSubmit={() => addCustomer()}>*/}
                    <form className="col s12" onSubmit={(event) => verifyAllFields(event)}>
                    <div className="row">
                        <div className="input-field col s8">

                            {isErrorFetchMethod && <div>{isErrorFetchMethod}</div>}
                            <div>{isErrorFetchMethod}</div>
                            <input placeholder="Mandatory" value={name} type="text"
                                   onChange={(event => setName(event.target.value))} className="validate"/>
                            <label htmlFor="name">First Name</label>
                        </div>
                    </div>

                    <div className="row">

                        <div className="input-field col s8">
                            <input placeholder="Mandatory" value={surname} type="text"
                                   onChange={(event => setSurname(event.target.value))} className="validate"/>
                            <label htmlFor="surname">Surname</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s8">
                            <input placeholder="Mandatory" value={email} type="email" onChange={(event => setEmail(event.target.value))}
                                   className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s8">
                            <input placeholder="Optional" value={phoneNumber} type="text"
                                   onChange={(event => setPhoneNumber(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="phoneNumber">Phone Number</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s8">
                            <input value={dob} type="date" onChange={(event => setDob(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="dob">Day of Birth</label>
                        </div>
                    </div>

                        <div className="row">

                        <div className="input-field col s8">
                            <input placeholder="Optional" value={sex} type="text" onChange={(event => setSex(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="sex">Sex</label>
                        </div>
                        </div>

                    <div className="row">
                        <div className="input-field col s8">
                            <input placeholder="Optional" value={address} type="text"
                                   onChange={(event => setAddress(event.target.value))} className="validate"/>
                            <label htmlFor="surname">Address</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s8">
                            <input placeholder="password" value={customerPassword} type="text" onChange={(event => setCustomerPassword(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="customerPassword">Type Password</label>
                        </div>
                    </div>

                    {/*<div className="row">*/}
                    {/*    <div className="input-field col s8">*/}
                    {/*        <input placeholder="Must be the same minimum 8 characters nad numbers" value={customerPasswordAgain} type="text" onChange={(event => setCustomerPasswordAgain(event.target.value))}*/}
                    {/*               className="validate"/>*/}
                    {/*        <label htmlFor="customerPasswordAgain">Repeat the Password</label>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className="row">
                        <div className="input-field col s8">
                            <input placeholder="Must be the same minimum 8 characters nad numbers" value={customerPasswordAgain} type="text" onChange={(event => validatePassword(event))}
                                   className="validate"/>
                            <label htmlFor="customerPasswordAgain">Repeat the Password</label>
                            <div>{isError}</div>
                            <div>{passwordErrorEmpty}</div>
                            <div>{passwordError}</div>
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


