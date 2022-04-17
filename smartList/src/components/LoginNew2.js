import React, {useState} from 'react';
import Register from "./Register";
import {useNavigate} from "react-router-dom";


 function LoginNew2() {

const navigate = useNavigate();
     //database
     const adminUser ={

         name:"Marek",
         email:"admin@admin.com",
         password:"admin123"
     }

     const[userName,setUserName]= useState("");
     const[userEmail,setUserEmail]= useState("");

     const [isError, setIsError] = useState('');
     const [loginErrorEmpty, setLoginErrorEmpty] = useState("");
     const [loginError, setLoginError] = useState(true);


     const [isErrorEmail, setIsErrorEmail] = useState('');
     const [emailErrorEmpty, setEmailErrorEmpty] = useState("");
     const [emailError, setEmailError] = useState(true);

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



     const verifyAllFields = (event)=>{
         if(!loginError){

             if(!emailError){
                 console.log("i want to go to the registration page")
                 navigate("/CreateCustomerList");

             }


         }

         // if(!emailError){
         //     return verifyEmail();
         //
         // }
         if(loginError || emailError){
             setLoginErrorEmpty("CAN NOT BE EMPTY");
             event.preventDefault();
         }



     }



     function verifyName(event) {
         const pass =event.target.value;
         setUserName(pass);
         if(adminUser.name!==pass) {
             if(userName===" "){
                 setLoginErrorEmpty("CAN NOT BE EMPTY Not same pass");
             }
             else{setIsError("password mus be the same!!!!");}
         }

         else{
             setIsError("Login OK");
             setLoginError(false);
         }
     }



     function verifyEmail(event) {
         const em =event.target.value;
         setUserEmail(em);
         if(adminUser.email!==em) {
             if(userEmail===" "){
                 setEmailErrorEmpty("CAN NOT BE EMPTY Not same email");
             }
             else{setIsErrorEmail("email must be the same!!!!");}
         }

         else{
             setIsErrorEmail("Email OK");
             setEmailError(false);
         }
     }

     return (
            <div>

                <div id="ItemsInLoginCustomer" className="row">
                    {/*<form className="col s12" onSubmit={() => validateCustomer()}>*/}
                    <form className="col s12" onSubmit={verifyAllFields}>
                        {/*<form className="col s12" onSubmit="" >*/}
                        <div className="row">
                            <div className="input-field col s8">
                                <input placeholder="Login" value={userName} type="text" onChange={(event => verifyName(event))}
                                       className="validate"/>
                                <label htmlFor="name"> Login</label>
                                <p>Name (Name from database){adminUser.name}.  User nAme that is writing{userName}</p>
                            <p>Is error login :{isError}</p>

                                <p>Login error is empty : {loginErrorEmpty}</p>
                                <p>Login Error :{loginError}</p>


                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s8">
                                <input placeholder="Password" value={userEmail} type="email" onChange={(event => verifyEmail(event))}
                                       className="validate"/>
                                <label htmlFor="name"> Email</label>
                                <p>Email (Email from database){adminUser.email}.  User nAme that is writing{userEmail}</p>
                                <p>Is error login :{isErrorEmail}</p>

                                <p>Login error is empty : {emailErrorEmpty}</p>
                                <p>Login Error :{emailError}</p>

                            </div>
                        </div>

                        <div className="row">
                            {/*<Link to="../CreateCustomerList">*/}
                            <button className="waves-effect waves-light btn #795548 brown " type="submit" name="action">
                                Login(Verification password not ready yet)
                            </button>
                            {/*</Link>*/}
                        </div>
                        {/*This execute fuction in the Parent function LoginCustomerForm*/}
                        {/*<button onClick={props.validateHandler}> Hello validator Button in LoginCustomerForm</button>*/}

                        {/*If you want to pass a values from child to the parent you have to use arrow function*/}
                        {/*<button onClick={() => props.validateHandler("This ifo is from a LoginCustomer Button")}> Hello validator Button in LoginCustomerForm</button>*/}
                    </form>
                </div>

            </div>
        );
}

export default LoginNew2;