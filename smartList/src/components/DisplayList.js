import React, {Component} from "react";
import ToDoList from "./ToDoList"
/* Class Contact uses for display and read a data from database, data is imported from other classes */
//props are data inside the divs
import './FormCreateList.css';
import 'materialize-css';
import M from 'materialize-css';


export default class DisplayList extends Component{
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

                <div className="row">
                    <ToDoList />
                </div>

        )
    }

}/* end class Contact*/
