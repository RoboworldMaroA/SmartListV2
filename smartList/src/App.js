import React, {Component} from "react";
import './App.css';
import Contacts from './components/Contacts'
import Login from './components/Login'
import Register from './components/Register'

//import necessary to change pages, i will use more than one page
import {Routes, Route, Link} from "react-router-dom";
import { Home, CreateList, Pay, ContactsList, PageNotExist} from "./allPages";



function App() {
  return (
      <div>
          <Routes>
              <Route path ='/' element={<Home/>}/>

              //Register
              <Route path='/Register' element={
                  <div className="container-fluid">
                      <nav>
                          <div className="nav-wrapper #795548 brown">
                              <a href="/" className="brand-logo">Smart List </a>
                              <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                                  className="material-icons">menu</i></a>
                              <ul className="right hide-on-med-and-down">
                                  <li><a href="sass.html">Register </a></li>
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
                          <div className="row">
                              <div className="col s2"></div>
                              <div className="col s8">
                                 <p>  Complete all fields marked with an asterisk. The remaining fields are optional, but if you fill them in, the generated list will be more accurate.</p>
                              </div>
                              <div className="col s2"></div>
                          </div>
                      </div>


                      <div className="row">
                          <Register />
                      </div>
                  </div>
              }/>




              //Login
              <Route path='/Login' element={
                  <div className="container-fluid">
                      <nav>
                          <div className="nav-wrapper #795548 brown">
                              <a href="/" className="brand-logo">Smart List </a>
                              <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                                  className="material-icons">menu</i></a>
                              <ul className="right hide-on-med-and-down">
                                  <li>  <Link to="Register"> Register</Link></li>
                                  <li>  <Link to="Login"> Login</Link></li>
                                  <li><a href="collapsible.html">Pay</a></li>
                                  <li>  <Link to="Help"> Help</Link></li>
                              </ul>
                          </div>
                      </nav>

                      <ul className="sidenav" id="mobile-demo">
                          <li><a href="">  <Link to="MyLists"> My Lists  </Link> </a></li>
                          <li><a href="/Register">User Detail Register Test</a></li>
                          <li><a href="/AdminLogin">Administrator</a></li>
                          <li><a href="">  <Link to="Login"> Login  </Link> </a></li>
                      </ul>


                      <div className="container">
                          <div className="row">
                              <div className="col s2"></div>
                              <div className="col s8">
                                  <p>  Complete all fields marked with an asterisk. The remaining fields are optional, but if you fill them in, the generated list will be more accurate.</p>
                              </div>
                              <div className="col s2"></div>
                          </div>
                      </div>


                      <div className="row">
                          <Login />
                      </div>
                  </div>
              }/>







              //contacts use as a Administrator
              <Route path='/contactsList' element={
                <div className="container-fluid">
                    <nav>
                        <div className="nav-wrapper center-align">
                            <a href="/" className="brand-logo"> Contacts </a>
                        </div>
                    </nav>
                    <div className="row">
                        <Contacts />
                    </div>
                </div>
              }/>



              <Route path ='/createList' element={<CreateList/>}/>

              <Route path ='/pay' element={<Pay/>}/>

              <Route path ='/*' element={<PageNotExist/>}/>

          </Routes>


      </div>



  );
}

export default App;
