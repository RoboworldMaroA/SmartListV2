import React, {Component} from "react";
import FormCreateList from "./FormCreateList";
/* Class Contact uses for display and read a data from database, data is imported from other classes */
//props are data inside the divs
import './FormCreateList.css';
import 'materialize-css';
import M from 'materialize-css';
import DeleteCustomerNew from "./DeleteCustomerNew";
import DisplayCustomerTrip from "./DisplayCustomerTrip";
import DocumentsList from "./DocumentsList";
import DisplayList from "./DisplayList";
import exampleCreteList from "./exampleSelect";
import {UserContext} from "../UserContext";



export default class CreateList extends Component{
    constructor(props){
        super(props);
        this.state= {
            trips: [],
            value: '',
        };

        }

        componentDidMount(){
        /*fetch('http://localhost:8080/api/v1/student').then(response => response.json()).then(data => this.setState({contacts: data}));*/
            fetch('api/v1/trip').then
            (response => response.json()).then(data => this.setState({trips: data}));


            document.addEventListener('DOMContentLoaded', function() {
                const elems = document.querySelectorAll('select');
                const instances = M.FormSelect.init([],elems,this.options);
            });

            document.addEventListener('DOMContentLoaded', function() {
                const elems = document.querySelectorAll('.datepicker');
                const instances = M.Datepicker.init([],elems, this.options);
            });



        }



    render() {
        return (
            <div>

                {/*<div className="row">*/}
                {/*    <exampleSelect/>*/}
                {/*</div>*/}
                {/*<div className="row">*/}
                {/*    <FormCreateList value1={this.state.value}/>*/}
                {/*</div>*/}


                <div className="row">
                    <FormCreateList/>
                </div>
                <div className="row">
                    <p>It is a detail Trip</p>
                    {this.state.trips.map((item) => (<DisplayCustomerTrip key={item.id} item={item}/>))}
                </div>


            </div>

        )
    }

}/* end class Contact*/
