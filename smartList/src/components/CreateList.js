import React, {Component} from "react";
import FormCreateList from "./FormCreateList";
/* Class Contact uses for display and read a data from database, data is imported from other classes */
//props are data inside the divs
import './FormCreateList.css';
import 'materialize-css';
import M from 'materialize-css';
import DeleteCustomerNew from "./DeleteCustomerNew";
import DisplayCustomerTrip from "./DisplayCustomerTrip";


export default class CreateList extends Component{
    constructor(props){
        super(props);
        this.state= {
            contacts: [],
        };
        }


        componentDidMount(){
        /*fetch('http://localhost:8080/api/v1/student').then(response => response.json()).then(data => this.setState({contacts: data}));*/
            fetch('http://localhost:8080/api/v1/trip').then
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
                <p>It is a detail Trip

                    {this.state.contacts.map((item) =>(<DisplayCustomerTrip key={item.id} item={item} /> ))}
                </p>

            </div>

                <div className="row">
                    <FormCreateList />
                </div>
    </div>

        )
    }

}/* end class Contact*/
