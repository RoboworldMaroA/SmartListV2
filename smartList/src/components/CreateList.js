import React, {Component} from "react";
import SingleContact from './SingleContact';
import AddStudentDetail from './AddStudentDetail';
import DeleteContact from "./DeleteContact";
import DeleteContactNew from "./DeleteContactNew";
import ToDoList from "./ToDoList"
import RegisterCustomer from "./RegisterCustomer";
import DeleteCustomerNew from "./DeleteCustomerNew";
import LoginCustomer from "./LoginCustomer";
import {Link} from "react-router-dom";
import FormCreateList from "./FormCreateList";
/* Class Contact uses for display and read a data from database, data is imported from other classes */
//props are data inside the divs
import './FormCreateList.css';
import 'materialize-css';
import M from 'materialize-css';


export default class CreateList extends Component{
    constructor(props){
        super(props);
        this.state= {
            contacts: [],
        };
        }

        componentDidMount(){
        /*fetch('http://localhost:8080/api/v1/student').then(response => response.json()).then(data => this.setState({contacts: data}));*/
            fetch('http://localhost:8080/api/v1/customer').then
            (response => response.json()).then(data => this.setState({contacts: data}));



            document.addEventListener('DOMContentLoaded', function() {
                var elems = document.querySelectorAll('select');
                var instances = M.FormSelect.init(elems, {});
            });

            document.addEventListener('DOMContentLoaded', function() {
                var elems = document.querySelectorAll('.datepicker');
                var instances = M.Datepicker.init(elems, {});
            });



        }
        render(){
        return(
            <div>
                <div className="row">
                    <FormCreateList />
                </div>


                <div className="row">
                    <div id ="PasswordInFormCreateList" className="input-field col s6">

                        <select multiple>
                            <option value="" disabled selected>Transport</option>
                            <option value="1">Train1</option>
                            <option value="2">Bus1</option>
                            <option value="3">Plain1</option>
                            <option value="4">Car1</option>
                            <label>TransportInCreateList</label>
                        </select>
                        {/*<input placeholder="Password" value={departureDay} type="text" onChange={(event =>*/}
                        {/*    setDepartureDay(event.target.value))}*/}
                        {/*       className="datepicker"/>*/}
                        {/*<label htmlFor="departureDay">Departure day</label>*/}
                    </div>
                </div>

                {/*<div className="row">*/}
                {/*    {this.state.contacts.map((item) =>(<DeleteCustomerNew key={item.id} item={item} /> ))}*/}
                {/*</div>*/}
                {/*<div className="row">*/}
                {/*    {this.state.contacts.map((item) =>(<SingleContact key={item.id} item={item} /> ))}*/}
                {/*</div>*/}
               //display what is inside crateList javascript link on web is CreteCustomerList
                {/*<div className="row">*/}
                {/*    <ToDoList />*/}
                {/*</div>*/}

            </div>
        )
    }

}/* end class Contact*/
