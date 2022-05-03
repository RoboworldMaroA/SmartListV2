import React, {useContext, useState} from 'react';
    /* useState is used to set a value  */
//this  function add customer detail during a registration
//css to make a style on this class
import './RegisterCustomer.css';
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
// import background from "../photo/BackgroundRegsiterPage.jpg";

import {UserContext} from "../UserContext";


    const AddDetail = ({setStudentInfo: setInfo}) => {
        const navigateRegister = useNavigate();
        const [name, setName] = useState('');
        const [surname, setSurname] = useState('');
        const [email, setEmail] = useState('');
        const [phoneNumber, setPhoneNumber] = useState('');
        const [dob, setDob] = useState('');
        // const [sex, setSex] = useState('Male');
        const [address, setAddress] = useState('');

        const [customerPassword, setCustomerPassword] = useState('');
        const [customerPasswordAgain, setCustomerPasswordAgain] = useState('');

        const [emailIsVerified, setEmailIsVerified] = useState(false);
        const [isError, setIsError] = useState('');
        const [isErrorFetchMethod, setIsErrorFetchMethod] = useState(null);
        const [passwordError, setPasswordError] = useState(null);
        const [passwordErrorEmpty, setPasswordErrorEmpty] = useState("");


        const [isErrorSex, setIsErrorSex] = useState('');
        const [sexError, setSexError] = useState(null);
        const [sexErrorEmpty, setSexErrorEmpty] = useState("");


        const {value,setValue} = useContext(UserContext);


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
               window.alert("Thank You for registration. !")
               navigateRegister("/Login");
               return addCustomer()

           }
           if(passwordError){
               setPasswordErrorEmpty("CAN NOT BE EMPTY");
               event.preventDefault();
           }

       }




        // function responsible for pass data to database
        const addCustomer = async () => {
                const result = await fetch("api/v1/customer", {
                    method: "POST",
                    body: JSON.stringify({
                        name,
                        surname,
                        email,
                        phoneNumber,
                        dob,
                        // sex,
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
                if(customerPassword!==pass) {
                    if(customerPassword===" "){
                        setPasswordErrorEmpty("Can NOT be empty!");
                    }
                    else{setIsError("Passwords do NOT match!");}
                }

                else{
                    setIsError("Password OK");
                    setPasswordError(false);
                    setPasswordErrorEmpty(" ")
                }
            }



        // const validateSex=(event)=>{
        //     const sx =event.target.value;
        //     console.log(sx)
        //     setSex(sx);
        //     const male = "male";
        //     const female = "female"
        //     if(sx !== male && sx !== female) {
        //         if(sx ===" "){
        //             setSexErrorEmpty("");
        //         }
        //         else{setIsErrorSex("Must be \"male\" or \"female\".");}
        //     }
        //
        //     else{
        //         setIsErrorSex("Sex ok");
        //         setSexError(false);
        //     }
        // }



        const validateEmail=(event)=>{
            const em =event.target.value;
            setEmail(em);
            setValue(em);
       }









        return (

            <div id="itemsInRegisterCustomer" className="row" >
                {/*<form className="col s12" onSubmit={() => addCustomer()}>*/}
                    <form className="col s12" onSubmit={(event) => verifyAllFields(event)}>
                    <div className="row">
                        <div className="input-field col s8">

                            {isErrorFetchMethod && <div>{isErrorFetchMethod}</div>}
                            <div>{isErrorFetchMethod}</div>
                            <i className="material-icons prefix">account_circle</i>

                            <input placeholder="Mandatory" value={name} type="text"
                                   onChange={(event => setName(event.target.value))} className="validate"/>
                            <label htmlFor="name">First Name</label>
                        </div>
                    </div>

                    <div className="row">

                        <div className="input-field col s8">
                            <i className="material-icons prefix">account_circle</i>

                            <input placeholder="Mandatory" value={surname} type="text"
                                   onChange={(event => setSurname(event.target.value))} className="validate"/>
                            <label htmlFor="surname">Surname</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s8">
                            <i className="material-icons prefix">email</i>

                            {/*<input placeholder="Mandatory" value={email} type="email" onChange={(event => setEmail(event.target.value))}*/}
                            <input placeholder="Mandatory" value={email} type="email" onChange={(event => validateEmail(event))}
                                   className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s8">
                            <i className="material-icons prefix">phone</i>

                            <input placeholder="Optional" value={phoneNumber} type="tel"
                                   onChange={(event => setPhoneNumber(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="phoneNumber">Phone Number</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s8">
                            <i className="material-icons prefix">cake</i>

                            <input value={dob} type="date" onChange={(event => setDob(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="dob">Day of Birth</label>
                        </div>
                    </div>

                        {/*<div className="row">*/}

                        {/*<div className="input-field col s8">*/}
                        {/*    <i className="material-icons prefix">{sex}</i>*/}

                        {/*    <input placeholder="Optional" value={sex} type="text" onChange={(event => validateSex(event))}*/}
                        {/*           className="validate"/>*/}
                        {/*    <label htmlFor="sex">Sex</label>*/}
                        {/*    <div>{isErrorSex}</div>*/}
                        {/*    <div>{sexErrorEmpty}</div>*/}
                        {/*    <div>{sexError}</div>*/}
                        {/*</div>*/}
                        {/*</div>*/}

                    <div className="row">
                        <div className="input-field col s8">
                            <i className="material-icons prefix">home</i>

                            <input placeholder="Optional" value={address} type="text"
                                   onChange={(event => setAddress(event.target.value))} className="validate"/>
                            <label htmlFor="surname">Address</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s8">
                            <i className="material-icons prefix">password</i>

                            <input placeholder="password" value={customerPassword} type="password" onChange={(event => setCustomerPassword(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="customerPassword">Password</label>
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
                            <i className="material-icons prefix">password</i>

                            <input placeholder="Must be the same" value={customerPasswordAgain} type="password" onChange={(event => validatePassword(event))}
                                   className="validate"/>
                            <label htmlFor="customerPasswordAgain">Repeat the Password</label>
                            <div>{isError}</div>
                            <div>{passwordErrorEmpty}</div>
                            <div>{passwordError}</div>
                        </div>
                    </div>



                    <div className="row">
                        {/*<Link to="../Login">*/}
                        <button disabled={email.length===0||customerPasswordAgain.length===0||customerPassword.length===0} id="buttonRegister" className="waves-effect waves-light btn #795548 brown" type="submit" name="action">
                            Register</button>
                        {/*</Link>*/}
                    </div>
                </form>
            </div>


        );

    }

export default AddDetail;


