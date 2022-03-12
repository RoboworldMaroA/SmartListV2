import React, {Component} from "react";
import './App.css';
import Contacts from './components/Contacts'

//import necessary to change pages, i will use more than one page
import { Routes, Route} from "react-router-dom";
import { Home, CreateList, Pay, ContactsList, PageNotExist} from "./allPages";


function App() {
  return (
      <div>
          <Routes>
              <Route path ='/' element={<Home/>}/>

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
