import React, {useContext, useState} from 'react';
import Register from "./Register";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../UserContext";
import './LoginNew2.css';


//function LoginNew2() {
export const LoginNew2 = () => {
    const navigate = useNavigate();
    //database
    const adminUser = {

        name: "Marek",
        email: "maugusty@o2.pl",
        password: "1234"
    }

    // Login
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");


    const [isError, setIsError] = useState('');
    const [passwordErrorEmpty, setPasswordErrorEmpty] = useState("");
    const [passwordError, setPasswordError] = useState(true);


    const [isErrorEmail, setIsErrorEmail] = useState('');
    const [emailErrorEmpty, setEmailErrorEmpty] = useState("");
    const [emailError, setEmailError] = useState(true);


    const {value, setValue} = useContext(UserContext);

    // const validatePassword=(event)=>{
    //     const pass =event.target.value;
    //     setCustomerPasswordAgain(pass);
    //     if(customerPassword!=pass) {
    //         if(customerPassword===" "){
    //             setPasswordErrorEmpty("CAN NOT BE EMPTY");
    //         }
    //         else{setIsError("password mus be the same!!!!");}
    //     }
    //
    //     else{
    //         setIsError("Password OK");
    //         setPasswordError(false);
    //     }
    // }
    //


    const verifyAllFields = (event) => {
        if (!passwordError) {

            if (!emailError) {
                console.log("i want to go to the registration page")
                // navigate("/CreateCustomerList");
                navigate("/createOrDisplayList");


            }


        }

        if (passwordError || emailError) {
            setPasswordErrorEmpty("CAN NOT BE EMPTY");
            event.preventDefault();
        }


    }


    function verifyName(event) {
        const pass = event.target.value;
        setUserPassword(pass);
        if (adminUser.password !== pass) {
            if (userPassword === " ") {
                setPasswordErrorEmpty("CAN NOT BE EMPTY");
            } else {
                setIsError("Passwords do not match!");
            }
        } else {
            setIsError("Login OK");
            setPasswordError(false);
        }
    }


    //email is a login
    function verifyEmail(event) {
        const em = event.target.value;
        setUserEmail(em);
        if (adminUser.email !== em) {
            if (userEmail === " ") {
                setEmailErrorEmpty("CAN NOT BE EMPTY");
            } else {
                setIsErrorEmail("Email does not match.!");
            }
        } else {
            setIsErrorEmail("Email OK");
            setEmailError(false);
        }
    }

    return (


        <div id="ItemsInLoginCustomer">
            {/*<form className="col s12" onSubmit={() => validateCustomer()}>*/}

            <div className="col s8 m3">

                <div id="cardModOpacity" className="card ">

                    <form id="formInLoginCustomer" onSubmit={verifyAllFields}>

                        <div className="row">

                            <div id="loginInput" className="input-field col s8">
                                <input placeholder="login" value={userEmail} type="email"
                                       onChange={(event => verifyEmail(event))}
                                       className="validate"/>
                                <label htmlFor="name"> Email</label>
                                {/*<p>Email (Email from database){adminUser.email}.  User nAme that is writing{userEmail}</p>*/}
                                {/*<p>Is error login :{isErrorEmail}</p>*/}

                                {/*<p>Login error is empty : {emailErrorEmpty}</p>*/}
                                {/*<p>Login Error :{emailError}</p>*/}
                                <p id="smallerText">{adminUser.email}</p>
                                <p id="isErrorEmail">{isErrorEmail}</p>

                                <p id="emailErrorEmpty">{emailErrorEmpty}</p>
                                <p id="emailError">{emailError}</p>


                            </div>
                        </div>


                        <div className="row">
                            <div className="input-field col s8">
                                <input placeholder="password" value={userPassword} type="text"
                                       onChange={(event => verifyName(event))}
                                       className="validate"/>
                                <label htmlFor="name"> Password</label>
                                {/*    <p>Name (Name from database){adminUser.password}.  Username that is writing{userPassword}</p>*/}
                                {/*<p>Is error password :{isError}</p>*/}

                                {/*    <p>Login error is empty : {passwordErrorEmpty}</p>*/}
                                {/*    <p>Login Error :{passwordError}</p>*/}
                                <p id="smallerPassText">{adminUser.password}</p>
                                <p id="isError">{isError}</p>

                                <p id="passwordErrorEmpty">{passwordErrorEmpty}</p>
                                <p id="passwordError">{passwordError}</p>

                            </div>
                        </div>


                        <div className="row">
                            {/*<Link to="../CreateCustomerList">*/}
                            <button id="buttonInLoginNew2" className="waves-effect waves-light btn #795548 brown "
                                    type="submit" name="action">
                                Login
                            </button>
                            {/*</Link>*/}
                        </div>

                        <br/>
                        {/*<br/>*/}

                        {/*This execute fuction in the Parent function LoginCustomerForm*/}
                        {/*<button onClick={props.validateHandler}> Hello validator Button in LoginCustomerForm</button>*/}

                        {/*If you want to pass a values from child to the parent you have to use arrow function*/}
                        {/*<button onClick={() => props.validateHandler("This ifo is from a LoginCustomer Button")}> Hello validator Button in LoginCustomerForm</button>*/}
                    </form>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                < br/>
                <br/>

            </div>
        </div>

    );
}

export default LoginNew2;