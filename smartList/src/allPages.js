import React from "react";
import {Link} from "react-router-dom"
import './allPages.css';
import CreateList from "./components/CreateList";




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
                        <li><Link to="Register"> Register</Link></li>
                        <li><a href="/login">CreateCustomerList</a></li>
                        <li><a href="/pay">Pay</a></li>
                        <li>  <Link to="/help"> Help</Link></li>
                        <li><Link to="LoginAdmin"> Administrator Account </Link></li>

                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><a href="sass.html">Lists</a></li>
                <li><a href="badges.html">User Detail</a></li>
                <li><a href="collapsible.html">Administrator</a></li>
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





export function ContactsList() {
    return(
        <div>
            <h1> [Register Page]</h1>
        </div>
    );

}

export function CreateCustomerList() {
    return(
        <div>
            <h1> [Create List display if there is an error with my link to this functionality]</h1>

        </div>



    );

}

// zamiast w app w tej funkcji powinienem zaimplementowac prawdopodobnie, jaka zaleta nie jestem pewny
// ponoc wszystko mialo sie wyswietlac wtedy w jednym oknie, pororbic testy
export function Pay() {
    return(
        <div>
            <h1> [Pay is not implemented yet]  </h1>
            <CreateList />
        </div>
    );

}


export function LoginAdmin() {
    return(
        <div>
            <h1> [CreateCustomerList Admin]</h1>
        </div>
    );

}



export function PageNotExist() {
    return(
        <div>
            <h1> This page not exist </h1>
        </div>
    );

}





