import React, {Component} from "react";
import './App.css';
import Contacts from './components/Contacts'
import Register from './components/Register'
import LoginAdmin from "./components/LoginAdmin";

//import necessary to change pages, i will use more than one page
import {Routes, Route, Link} from "react-router-dom";
import { Home, Pay, CreateCustomerList, PageNotExist} from "./allPages";
import CreateList from "./components/CreateList";
import Login from "./components/Login";



function App() {
  return (
      <div>
          <Routes>
              <Route path ='/' element={<Home/>}/>

              {/*Register*/}
              <Route path='/Register' element={
                  <div className="container-fluid">
                      <nav>
                          <div className="nav-wrapper #795548 brown">
                              <a href="/" className="brand-logo">Smart List </a>
                              <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                                  className="material-icons">menu</i></a>
                              <ul className="right hide-on-med-and-down">
                                  <li><a href="sass.html">Register </a></li>
                                  <li><Link to="LoginAdmin"> CreateCustomerList Admin </Link></li>
                                  <li><a href="collapsible.html">Pay</a></li>
                                  <li>  <Link to="Register"> Help</Link></li>
                              </ul>
                          </div>
                      </nav>

                      <ul className="sidenav" id="mobile-demo">
                          <li><a href="sass.html">Lists</a></li>
                          <li><a href="badges.html">User Detail</a></li>
                          <li><Link to="LoginAdmin"> Administrator</Link></li>
                          <li><a href="">  <Link to="Register"> Register  </Link> </a></li>
                      </ul>


                      <div className="container">
                          <div className="row">
                              <div className="col s2"></div>
                              <div className="col s8">
                                 <p> Please complete all mandatory fields.</p>
                              </div>
                              <div className="col s2"></div>
                          </div>
                      </div>


                      <div className="row">
                          <Register />
                      </div>
                  </div>
              }/>




              {/*Login*/}
              <Route path='/Login' element={
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
                          <li><Link to="LoginAdmin">Administrator</Link></li>
                          <li><Link to="CreateCustomerList"> CreateCustomerList  </Link> </li>
                      </ul>


                      <div className="container">
                          <div className="row">
                              <div className="col s2"></div>
                              <div className="col s8">
                                  <p>  This is in the app.js file login page.</p>
                              </div>
                              <div className="col s2"></div>
                          </div>
                      </div>





                      <div className="row">
                          <Login />
                      </div>
                  </div>
              }/>













              {/*CreateCustomerList*/}
              <Route path='/CreateCustomerList' element={
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
                          <li><Link to="LoginAdmin">Administrator</Link></li>
                          <li><Link to="CreateCustomerList"> CreateCustomerList  </Link> </li>
                      </ul>


                      <div className="container">
                          <div className="row">
                              <div className="col s2"></div>
                              <div className="col s8">
                                  <p>  This is in the app.js file login page.</p>
                              </div>
                              <div className="col s2"></div>
                          </div>
                      </div>


                      <div className="row">
                          <CreateList />
                      </div>
                  </div>
              }/>












             {/* contacts use as a Administrator*/}
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



              <Route path ='/createCustomerList' element={<CreateCustomerList/>}/>

              <Route path ='/pay' element={<Pay/>}/>

              <Route path ='/loginAdmin' element={<LoginAdmin/>}/>

              <Route path ='/*' element={<PageNotExist/>}/>

          </Routes>


      </div>



  );
}

export default App;
