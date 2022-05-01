import React, {useState} from "react";
import {Link} from "react-router-dom"
import './allPages.css';
import CreateList from "./components/CreateList";
import Register from "./components/Register";
import Login from "./components/Login";
import DisplayList from "./components/DisplayList";
import LoginAdmin from "./components/LoginAdmin";
import Pay from "./components/Pay";
import LoginNew from "./components/LoginNew";
import LoginNew2 from "./components/LoginNew2";
import {UserContext} from "./UserContext";
import DisplayListFunctionalComponent from "./components/DisplayListFuctionalComponent";
import Help from "./components/Help";
import ManageDestinationFunctionalComponent from "./components/ManageDestinationFuctionalComponent";

import background from "./photo/backgroundRegisterPageMod.png";
import backgroundHome from "./photo/backgroundHomePage3.jpg";
import backgroundLogin from "./photo/backgroundLoginPage3.jpg";
import HomeButtons from "./components/HomeButtons";
import CustomerCreateOrDisplayList from "./components/CustomerCreateOrDisplayList";
import CustomerPickListToDisplay from "./components/CustomerPickListToDisplay";


export function Home() {
    return(

        <div  className="container-fluid"
            style={{ backgroundImage: `url(${backgroundHome})`,
                        backgroundRepeat: 'repeat-no',
                        // backgroundSize:'950px',
                backgroundSize:"cover",
                opacity:0.98,

                   }}

        >


            <nav>
                <div className="nav-wrapper #5d4037 brown darken-2">
                    <a id="TitleHomePage" href="/" className="brand-logo">SmartLuggage</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        {/*<li><Link to="/Register"> Register</Link></li>*/}
                        <li><Link to="DisplayList"> My Travel List</Link></li>
                        {/*<li><Link to="/CreateCustomerList"> Create List</Link></li>*/}
                        {/*<li><Link to="/CreateCustomerList"> Pay</Link></li>*/}
                        {/*<li><a href="/CreateCustomerList">Create List</a></li>*/}
                        {/*<li><a href="/pay">Pay</a></li>*/}
                        <li>  <Link to="/help"> Help</Link></li>
                        <li><Link to="LoginAdminPage"> Administrator</Link></li>
                    </ul>
                </div>
            </nav>


            <ul className="sidenav" id="mobile-demo">
                {/*<li><Link to="/Register"> Register</Link></li>*/}
                <li><Link to="DisplayList"> My List</Link></li>
                {/*<li><Link to="/CreateCustomerList"> Create List</Link></li>*/}
                {/*<li><Link to="/CreateCustomerList"> Pay</Link></li>*/}
                {/*<li><a href="/CreateCustomerList">Create List</a></li>*/}
                {/*<li><a href="/pay">Pay</a></li>*/}
                <li>  <Link to="/help"> Help</Link></li>
                <li><Link to="LoginAdminPage"> Administrator</Link></li>
            </ul>


            {/*<div*/}
            {/*    className="container">*/}
            {/*   <div className="row">*/}


            {/*    <div   className="col s2">    </div>*/}


            {/*       <div className="col s8">*/}

            {/*           <div id="loginOrRegister">*/}
            {/*               <Link to="Register">*/}
            {/*                <button  id="buttonSizeRegister" className="btn waves-effect waves-light #8d6e63 brown lighten-1">*/}
            {/*                    <i id="iconRegister" className="medium material-icons">account_box</i>  Register*/}
            {/*                </button>*/}
            {/*            </Link>*/}
            {/*            </div>*/}

            {/*           /!*LOGIN BUTTON ON HOME PAGE*!/*/}
            {/*           <div id="loginOrRegister">*/}
            {/*               <Link to="Login">*/}
            {/*               <button id="buttonSizeLogin" className="btn waves-effect waves-light #8d6e63 brown lighten-1">*/}
            {/*                   <i id="iconLogin" className="medium material-icons">login</i> Login*/}
            {/*               </button>*/}
            {/*               </Link>*/}
            {/*           </div>*/}

            {/*            <div id="createCustomerList">*/}
            {/*                <Link to="CreateCustomerList">*/}
            {/*                <button id="buttonSizeCreateList" className="btn waves-effect waves-light #8d6e63 brown lighten-1">*/}
            {/*                    <i id="iconCreateList" className="medium material-icons">build</i>*/}
            {/*                    Create List*/}
            {/*                </button>*/}
            {/*                </Link>*/}
            {/*            </div>*/}

            {/*            <div id="pay">*/}
            {/*                <Link to="pay">*/}
            {/*                    <button  id="buttonSizePay" className="btn waves-effect waves-light #8d6e63 brown lighten-1">*/}
            {/*                        <i id="iconPay" className="medium material-icons">credit_card</i>*/}
            {/*                        Pay*/}
            {/*                    </button>*/}
            {/*                </Link>*/}
            {/*            </div>*/}
            {/*       </div>*/}



            {/*       <div className="col s2"  >   </div>*/}
            {/*   </div>*/}


            {/*</div>*/}

            <div className="row">
                <HomeButtons />
            </div>




         <br/>
            <br/>
            <br/>

        </div>

    );

}







export function LoginPage() {
    const[value,setValue] = useState("");
    return(
        <body>
        <div id="loginPage"
            // style={{ backgroundImage: `url(${backgroundLogin})`,
            //     backgroundRepeat: 'repeat-no',
            //     backgroundSize:"cover",
            //     opacity:0.96,
            // }}





            className="container-fluid">
            <nav>
                <div className="nav-wrapper #5d4037 brown darken-2">
                    <a href="/" className="brand-logo">SmartLuggage </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        {/*<li>  <Link to="../Register"> Register</Link></li>*/}
                        {/*<li>  <Link to="../CreateCustomerList"> Pack Your Luggage</Link></li>*/}
                        <li><Link to="../LoginAdminPage"> Administrator </Link></li>
                        {/*<li><Link to="../Pay">Pay</Link></li>*/}
                        <li>  <Link to="../Help"> Help</Link></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                {/*<li><a href="">  <Link to="MyLists"> My List </Link> </a></li>*/}
                {/*<li><Link to="../Register">Register</Link></li>*/}
                <li><Link to="../LoginAdminPage"> Administrator </Link></li>
                {/*<li><Link to="../CreateCustomerList"> Pack Your Luggage </Link> </li>*/}
                <li>  <Link to="../Help"> Help</Link></li>
            </ul>


            {/*<div className="container">*/}
            {/*    <div className="row">*/}
            {/*        <div className="col s2"></div>*/}
            {/*        <div className="col s8">*/}
            {/*            <p id="PageTitle"> LOGIN</p>*/}
            {/*        </div>*/}
            {/*        <div className="col s2"></div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div id="loginContainer" >

                <UserContext.Provider value ={{value,setValue}}>
                <LoginNew2 />

                </UserContext.Provider>

            </div>
            <br/>
        </div>
        </body>
    );

}


export function RegisterPage() {

    const[value,setValue] = useState("Hello from context");


    return(
        <div id= "registerPage" className="container-fluid"
            //  style={
            // { backgroundImage: `url(${background})`,
            // backgroundRepeat: 'repeat-no',
            //     backgroundPositionX:-100,
            // backgroundSize:'1250px',
            //     opacity:0.92,
            //
            //
            // }}


        >
            <nav>
                <div className="nav-wrapper #5d4037 brown darken-2">
                    <a href="/" className="brand-logo">SmartLuggage </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li> <Link to="../"> Home</Link></li>
                        <li>  <Link to="../help"> Help</Link></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li> <Link to="../"> Home</Link></li>
                <li>  <Link to="../help"> Help</Link></li>
            </ul>


            <div className="container">
                <div className="row">
                    <div className="col s2"></div>
                    <div className="col s8">
                        <p id="PageTitleRegister"> CREATE ACCOUNT</p>
                        {/*<p> Please complete all mandatory fields.</p>*/}
                    </div>
                    <div className="col s2"></div>
                </div>
            </div>

            <div className="row">

                <UserContext.Provider value ={{value,setValue}}>
                <Register />
                </UserContext.Provider>

            </div>
        </div>
    );
}








export function CustomerCreateOrDisplay() {

    return(
        <div id="CustomerCreateOrDisplayListPage" className="container-fluid">
            <nav>
                <div className="nav-wrapper #5d4037 brown darken-2">
                    <a href="/" className="brand-logo">SmartLuggage </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        {/*<li>  <Link to="../DisplayList"> Display Trips</Link></li>*/}
                        <li>  <Link to="../Pay"> Pay</Link></li>
                        {/*<li><a href="collapsible.html">Pay</a></li>*/}
                        <li>  <Link to="../Help"> Help</Link></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                {/*<li>  <Link to="../DisplayList"> Display Trips</Link></li>*/}
                <li>  <Link to="../Pay"> Pay</Link></li>
                {/*<li><a href="collapsible.html">Pay</a></li>*/}
                <li>  <Link to="../Help"> Help</Link></li>
            </ul>

            {/*<div className="container">*/}
            {/*    <div className="row">*/}
            {/*        <div className="col s2"></div>*/}
            {/*        <div className="col s8">*/}
            {/*            <p id="PageTitle"> Pick on of this options</p>*/}
            {/*        </div>*/}
            {/*        <div className="col s2"></div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="row">
                <CustomerCreateOrDisplayList />
            </div>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}


export function CustomerPickListsToDisplay() {

    return(
        <div id="CustomerCreateOrDisplayListPage" className="container-fluid">
            <nav>
                <div className="nav-wrapper #5d4037 brown darken-2">
                    <a href="/" className="brand-logo">SmartLuggage </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        {/*<li>  <Link to="../DisplayList"> Display Trips</Link></li>*/}
                        <li>  <Link to="../Pay"> Pay</Link></li>
                        {/*<li><a href="collapsible.html">Pay</a></li>*/}
                        <li>  <Link to="../Help"> Help</Link></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                {/*<li>  <Link to="../DisplayList"> Display Trips</Link></li>*/}
                <li>  <Link to="../Pay"> Pay</Link></li>
                {/*<li><a href="collapsible.html">Pay</a></li>*/}
                <li>  <Link to="../Help"> Help</Link></li>
            </ul>

            {/*<div className="container">*/}
            {/*    <div className="row">*/}
            {/*        <div className="col s2"></div>*/}
            {/*        <div className="col s8">*/}
            {/*            <p id="PageTitle"> Pick on of this options</p>*/}
            {/*        </div>*/}
            {/*        <div className="col s2"></div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="row">
                <CustomerPickListToDisplay/>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}







export function CreateCustomerList() {

    return(
        <div className="container-fluid">
            <nav>
                <div className="nav-wrapper #5d4037 brown darken-2">
                    <a href="/" className="brand-logo">SmartLuggage </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li>  <Link to="../DisplayList"> Display Trips</Link></li>
                        <li>  <Link to="../Pay"> Pay</Link></li>
                        {/*<li><a href="collapsible.html">Pay</a></li>*/}
                        <li>  <Link to="../Help"> Help</Link></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li>  <Link to="../DisplayList"> Display Trips</Link></li>
                <li>  <Link to="../Pay"> Pay</Link></li>
                {/*<li><a href="collapsible.html">Pay</a></li>*/}
                <li>  <Link to="../Help"> Help</Link></li>
            </ul>

            <div className="container">
                <div className="row">
                    <div className="col s2"></div>
                    <div className="col s8">
                        <p id="PageTitle"> CREATE TRAVEL LIST</p>
                    </div>
                    <div className="col s2"></div>
                </div>
            </div>
            <div className="row">
                <CreateList />
            </div>
        </div>
    );
}



export function DisplayTravelerList() {

    const[value,setValue] = useState("Hello from context");

    return(
        <div id={"DisplayListFirstPage"}>
        <div className="container-fluid">
            <nav>
                <div className="nav-wrapper #5d4037 brown darken-2">
                    <a href="/" className="brand-logo">SmartLuggage </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        {/*<li>  <Link to="../Register"> Register</Link></li>*/}
                        {/*<li>  <Link to="../CreateCustomerList"> Pack Your Luggage</Link></li>*/}
                        <li>  <Link to="../Pay"> Travel Guide</Link></li>
                        <li>  <Link to="../Pay"> Weather</Link></li>
                        <li>  <Link to="../Pay"> Pay</Link></li>
                        <li>  <Link to="../help"> Help</Link></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                {/*<li>  <Link to="../Register"> Register</Link></li>*/}
                {/*<li>  <Link to="../CreateCustomerList"> Pack Your Luggage</Link></li>*/}

                <li>  <Link to="../Pay"> Pay</Link></li>
                <li>  <Link to="../help"> Help</Link></li>
            </ul>

            <div className="container">
                <div className="row">
                    <div className="col s2"></div>
                    <div className="col s8">
                        <p id="PageTitle"> YOUR LUGGAGE</p>
                    </div>
                    <div className="col s2"></div>
                </div>
            </div>
            <div className="row">


                <UserContext.Provider value ={{value,setValue}}>
                    <DisplayListFunctionalComponent />
                    {/*<DisplayList />*/}

                </UserContext.Provider>

            </div>
        </div>

        </div>
    );

}


// zamiast w app w tej funkcji powinienem zaimplementowac prawdopodobnie, jaka zaleta nie jestem pewny
// ponoc wszystko mialo sie wyswietlac wtedy w jednym oknie, pororbic testy
export function PayPage() {
    return(
        <body>
        <div className="container-fluid">
            <nav>
                <div className="nav-wrapper #5d4037 brown darken-2">
                    <a href="/" className="brand-logo">SmartLuggage </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li>  <Link to="../Register"> Register</Link></li>
                        <li>  <Link to="../CreateCustomerList"> Pack Your Luggage</Link></li>
                        <li><Link to="../LoginAdminPage"> Administrator</Link></li>
                        <li>  <Link to="../help"> Help</Link></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li> <Link to="../DisplayList"> Trips</Link></li>
                <li><Link to="../Register">Register</Link></li>
                <li><Link to="../LoginAdminPage"> Administrator Account </Link></li>
                <li><Link to="../CreateCustomerList"> Create List  </Link> </li>
            </ul>


            <div className="container">
                <div className="row">
                    <div className="col s2"></div>
                    <div className="col s8">
                        <p id="PageTitle"> PAYMENT</p>
                    </div>
                    <div className="col s2"></div>
                </div>
            </div>

            <div className="row">
                <Pay />
            </div>
        </div>
        </body>

    );

}


export function LoginAdminPage() {
    return(
        <body>
        <div className="container-fluid">
            <nav>
                <div className="nav-wrapper #5d4037 brown darken-2">
                    <a href="/" className="brand-logo">SmartLuggage </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="../destination">Manage Destination</Link></li>
                        {/*<li><Link to="../LoginAdminPage"> Display Users </Link></li>*/}
                        <li><Link to="../help"> Help  </Link> </li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><Link to="../destination">Manage Destination</Link></li>
                {/*<li><Link to="../LoginAdminPage"> Display Users </Link></li>*/}
                <li><Link to="../help"> Help  </Link> </li>
            </ul>


            <div className="container">
                <div className="row">
                    <div className="col s2"></div>
                    <div className="col s8">
                        <p id="PageTitle"> MANAGE USERS</p>
                    </div>
                    <div className="col s2"></div>
                </div>
            </div>

            <div className="row">
                <LoginAdmin />
            </div>
        </div>
        </body>
    );

}






export function HelpPage() {
    return(
        <body>
        <div className="container-fluid">
            <nav>
                <div className="nav-wrapper #5d4037 brown darken-2">
                    <a href="/" className="brand-logo">SmartLuggage </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li>  <Link to="../Register"> Register</Link></li>
                        <li>  <Link to="../CreateCustomerList"> CreateCustomerList</Link></li>
                        <li><Link to="../LoginAdminPage"> Administrator Account </Link></li>
                        <li>  <Link to="../help"> Help</Link></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li> <Link to="../DisplayList"> Trips</Link></li>
                <li><Link to="../Register">Register</Link></li>
                <li><Link to="../LoginAdminPage"> Administrator Account </Link></li>
                <li><Link to="../CreateCustomerList"> Create List  </Link> </li>
            </ul>


            <div className="container">
                <div className="row">
                    <div className="col s2"></div>
                    <div className="col s8">
                        <p id="PageTitle"> FAQ</p>
                    </div>
                    <div className="col s2"></div>
                </div>
            </div>

            <div className="row">
                <Help />
            </div>
        </div>
        </body>

    );

}


export function DestinationPage() {


    const[value,setValue] = useState();
    return(
        <body>
        <div className="container-fluid">
            <nav>
                <div className="nav-wrapper #5d4037 brown darken-2">
                    <a href="/" className="brand-logo">SmartLuggage </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        {/*<li><Link to="../destination">Manage Destination</Link></li>*/}
                        <li><Link to="../LoginAdminPage"> Display Users </Link></li>
                        <li><Link to="../help"> Help  </Link> </li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                {/*<li><Link to="../destination">Manage Destination</Link></li>*/}
                <li><Link to="../LoginAdminPage"> Display Users </Link></li>
                <li><Link to="../help"> Help  </Link> </li>
            </ul>


            <div className="container">
                <div className="row">
                    <div className="col s2"></div>
                    <div className="col s8">
                        <p id="PageTitle"> MANAGE DESTINATION </p>
                    </div>
                    <div className="col s2"></div>
                </div>
            </div>

            <div className="row">


                <UserContext.Provider value ={{value,setValue}}>
                <ManageDestinationFunctionalComponent />
                </UserContext.Provider>


            </div>
        </div>
        </body>
    );

}

export function PageNotExist() {
    return(
        <div>
            <h1> This page not exist!!! </h1>
        </div>
    );

}





