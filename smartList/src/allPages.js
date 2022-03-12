import React from "react";
import {Link} from "react-router-dom"
import './allPages.css';




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
                        <li><a href="badges.html">Register</a></li>
                        <li><a href="collapsible.html">Pay</a></li>
                        <li>  <Link to="Register"> Help</Link></li>
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

                        <div id="createList"><Link to="createList">  <button class="btn waves-effect waves-light #8d6e63 brown lighten-1">   <i className="medium material-icons">build</i>  Create list</button> </Link></div>

                        <div id="pay"><Link to="pay">  <button class="btn waves-effect waves-light #8d6e63 brown lighten-1">   <i className="medium material-icons">credit_card</i>  Pay    </button> </Link> </div>
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

export function CreateList() {
    return(
        <div>
            <h1> [Create List]</h1>

            POST /v2/translate?auth_key=92e7243f-6a39-7595-3e57-5fca1ef99da0:fx> HTTP/1.0
            Host: api-free.deepl.com
            User-Agent: YourApp
            Accept: */*
            Content-Length: [length]
            Content-Type: application/x-www-form-urlencoded

            auth_key=92e7243f-6a39-7595-3e57-5fca1ef99da0:fx&text=Hello, world&target_lang=DE

            curl https://api-free.deepl.com/v2/translate \
            -d auth_key=92e7243f-6a39-7595-3e57-5fca1ef99da0:fx \
            -d "text=Hello, world!"  \
            -d "target_lang=DE"


        </div>



    );

}


export function Pay() {
    return(
        <div>
            <h1> [Pay] </h1>
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





