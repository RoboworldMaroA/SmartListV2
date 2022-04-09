import React, {Component} from "react";
import SingleContact from './SingleContact';
import AddStudentDetail from './AddStudentDetail';
import DeleteContact from "./DeleteContact";
import DeleteContactNew from "./DeleteContactNew";
import ToDoList from "./ToDoList"
import RegisterCustomer from "./RegisterCustomer";
import DeleteCustomerNew from "./DeleteCustomerNew";
/* Class Contact uses for display and read a data from database, data is imported from other classes */
//props are data inside the divs
export default class Register extends Component{
    constructor(props){
        super(props);
        this.state= {
            contacts: [],
        };
        }

        componentDidMount(){
        /*fetch('http://localhost:8080/api/v1/student').then(response => response.json()).then(data => this.setState({contacts: data}));*/
            fetch('api/v1/customer').then(response => response.json()).then(data => this.setState({contacts: data}));

        }

        render(){
        return(

                <div className="row">
                    <RegisterCustomer />

                </div>



        )

    }

}/* end class Contact*/
