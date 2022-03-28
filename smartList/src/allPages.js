import React from "react";
import {Link} from "react-router-dom"
import './allPages.css';
import CreateList from "./components/CreateList";
import Register from "./components/Register";
import Login from "./components/Login";
import DisplayList from "./components/DisplayList";
import LoginAdmin from "./components/LoginAdmin";
import Pay from "./components/Pay";



export function Home() {
    return(
        <body>
        <div>
            <nav>
                <div className="nav-wrapper #795548 brown">
                    <a href="/" className="brand-logo">Smart List</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="DisplayList"> Display List</Link></li>
                        <li><a href="/login">CreateCustomerList</a></li>
                        <li><a href="/pay">Pay</a></li>
                        <li>  <Link to="/help"> Help</Link></li>
                        <li><Link to="LoginAdminPage"> Administrator Account </Link></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><Link to="DisplayList">Display Lists</Link></li>
                <li><a href="badges.html">User Detail</a></li>
                <li><Link to="LoginAdminPage"> Administrator Account </Link></li>
                <li><a href="">  <Link to="Register"> Register  </Link> </a></li>
            </ul>
            <div className="container">
               <div class="row">
                <div class="col s2"></div>
                   <div class="col s8">
                        <div id="loginOrRegister"><Link to="Register">
                            <button class="btn waves-effect waves-light #8d6e63 brown lighten-1">
                                <i className="medium material-icons">account_box</i>  Register
                            </button>
                        </Link>
                        </div>

                       <div id="loginOrRegister">
                           <Link to="Login">
                           <button className="btn waves-effect waves-light #8d6e63 brown lighten-1">
                               <i className="medium material-icons">account_box</i> Login
                           </button>
                           </Link>
                       </div>

                        <div id="createCustomerList">
                            <Link to="CreateCustomerList">
                            <button class="btn waves-effect waves-light #8d6e63 brown lighten-1">
                                <i className="medium material-icons">build</i>
                                Create list
                            </button>
                            </Link>
                        </div>

                        <div id="pay">
                            <Link to="pay">
                                <button class="btn waves-effect waves-light #8d6e63 brown lighten-1">
                                    <i className="medium material-icons">credit_card</i>
                                    Pay
                                </button>
                            </Link>
                        </div>
                   </div>
                   <div class="col s2"></div>
               </div>


        </div>
      </div>
      </body>

    );

}

export function LoginPage() {
    return(
        <body>
        <div className="container-fluid">
            <nav>
                <div className="nav-wrapper #795548 brown">
                    <a href="/" className="brand-logo">Smart List </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li>  <Link to="Register"> Register</Link></li>
                        <li>  <Link to="CreateCustomerList"> CreateCustomerList</Link></li>
                        <li><Link to="../LoginAdminPage"> Administrator Account </Link></li>
                        <li><a href="collapsible.html">Pay</a></li>
                        <li>  <Link to="Help"> Help</Link></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><a href="">  <Link to="MyLists"> My Lists  </Link> </a></li>
                <li><Link to="Register">User Detail Register Test</Link></li>
                <li><Link to="../LoginAdminPage"> Administrator Account </Link></li>
                <li><Link to="CreateCustomerList"> CreateCustomerList  </Link> </li>
            </ul>


            <div className="container">
                <div className="row">
                    <div className="col s2"></div>
                    <div className="col s8">
                        <p id="PageTitle"> LOGIN</p>
                    </div>
                    <div className="col s2"></div>
                </div>
            </div>

            <div className="row">
                <Login />
            </div>
        </div>
        </body>
    );

}


export function RegisterPage() {
    return(
        <div className="container-fluid">
            <nav>
                <div className="nav-wrapper #795548 brown">
                    <a href="/" className="brand-logo">Smart List </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="sass.html">Register </a></li>
                        <li><a href="collapsible.html">Pay</a></li>
                        <li>  <Link to="Register"> Help</Link></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><a href="sass.html">Lists</a></li>
                <li><a href="badges.html">User Detail</a></li>
                <li><a href="">  <Link to="Register"> Register  </Link> </a></li>
            </ul>


            <div className="container">
                <div className="row">
                    <div className="col s2"></div>
                    <div className="col s8">
                        <p id="PageTitle"> REGISTER PAGE</p>
                        <p> Please complete all mandatory fields.</p>
                    </div>
                    <div className="col s2"></div>
                </div>
            </div>

            <div className="row">
                <Register />
            </div>
        </div>
    );
}




export function CreateCustomerList() {
    return(
        <div className="container-fluid">
            <nav>
                <div className="nav-wrapper #795548 brown">
                    <a href="/" className="brand-logo">Smart List </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li>  <Link to="Register"> Register</Link></li>
                        <li>  <Link to="CreateCustomerList"> CreateCustomerList</Link></li>
                        <li><a href="collapsible.html">Pay</a></li>
                        <li>  <Link to="Help"> Help</Link></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><a href="">  <Link to="MyLists"> My Lists  </Link> </a></li>
                <li><Link to="Register">User Detail Register Test</Link></li>
                <li><Link to="CreateCustomerList"> CreateCustomerList  </Link> </li>
            </ul>

            <div className="container">
                <div className="row">
                    <div className="col s2"></div>
                    <div className="col s8">
                        <p id="PageTitle"> CREATE LIST</p>
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
    return(
        <div className="container-fluid">
            <nav>
                <div className="nav-wrapper #795548 brown">
                    <a href="/" className="brand-logo">Smart List </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li>  <Link to="Register"> Register</Link></li>
                        <li>  <Link to="CreateCustomerList"> CreateCustomerList</Link></li>
                        <li><a href="collapsible.html">Pay</a></li>
                        <li>  <Link to="Help"> Help</Link></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><a href="">  <Link to="MyLists"> My Lists  </Link> </a></li>
                <li><Link to="Register">User Detail Register Test</Link></li>
                <li><Link to="CreateCustomerList"> CreateCustomerList  </Link> </li>
            </ul>

            <div className="container">
                <div className="row">
                    <div className="col s2"></div>
                    <div className="col s8">
                        <p id="PageTitle"> CREATED LIST</p>
                    </div>
                    <div className="col s2"></div>
                </div>
            </div>
            <div className="row">
                <DisplayList />
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
                <div className="nav-wrapper #795548 brown">
                    <a href="/" className="brand-logo">Smart List </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li>  <Link to="Register"> Register</Link></li>
                        <li>  <Link to="CreateCustomerList"> CreateCustomerList</Link></li>
                        <li><Link to="../LoginAdminPage"> Administrator Account </Link></li>
                        <li><a href="collapsible.html">Pay</a></li>
                        <li>  <Link to="Help"> Help</Link></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><a href="">  <Link to="MyLists"> My Lists  </Link> </a></li>
                <li><Link to="Register">User Detail Register Test</Link></li>
                <li><Link to="../LoginAdminPage"> Administrator Account </Link></li>
                <li><Link to="CreateCustomerList"> CreateCustomerList  </Link> </li>
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
                <div className="nav-wrapper #795548 brown">
                    <a href="/" className="brand-logo">Smart List </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="../Destinations">Manage Destination</Link></li>
                        <li><Link to="../DisplayUsers"> Display Users </Link></li>
                        <li><Link to="../AdminHelp"> Help  </Link> </li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><Link to="../Destinations">Manage Destination</Link></li>
                <li><Link to="../DisplayUsers"> Display Users </Link></li>
                <li><Link to="../AdminHelp"> Help  </Link> </li>
            </ul>


            <div className="container">
                <div className="row">
                    <div className="col s2"></div>
                    <div className="col s8">
                        <p id="PageTitle"> LOGIN ADMINISTRATOR</p>
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






export function PageNotExist() {
    return(
        <div>
            <h1> This page not exist!!! </h1>
        </div>
    );

}





