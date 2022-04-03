import React, {Component} from "react";
import ToDoList from "./ToDoList"
/* Class Contact uses for display and read a data from database, data is imported from other classes */
//props are data inside the divs
import './FormCreateList.css';
import 'materialize-css';
import M from 'materialize-css';
import DocumentsList from "./DocumentsList";
import EssentialList from "./EssentialList";
import essentialList from "./EssentialList";
import BeachList from "./BeachList";


export default class DisplayList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            tripData: [],
            displayDocuments: true,
            displayEssential: true,
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/v1/customer').then
        (response => response.json()).then(data => this.setState({contacts: data}));


        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, {});
        });

        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.datepicker');
            var instances = M.Datepicker.init(elems, {});
        });


    }

    components() {
        fetch('http://localhost:8080/api/v1/trip').then
        (response => response.json()).then(data => this.setState({tripData: data}));

    }

    documentState() {
        //here will be logic what lit to display, depen what customer choose in the form FormCrteteList
        console.log(this.state.displayDocuments)
        this.setState(
            {
                displayDocuments: !this.state.displayDocuments
            },()=>"eecece")

        this.essentialState();

    }

    essentialState() {
        //here will be logic what lit to display, depen what customer choose in the form FormCrteteList
        console.log(this.state.displayEssential)
        this.setState(
            {
                displayEssential: !this.state.displayEssential
            },()=>"eceee")
    }




    render() {
        return (
            <div>
                <div className="row">
                    {this.state.displayDocuments ?
                        <DocumentsList/>
                        : null
                    }
                </div>

                    <div className="row">
                        {this.state.displayEssential ?
                            <EssentialList/>
                            : null
                        }
                    </div>

                <div className="row">
                    {this.state.displayEssential ?
                        <BeachList/>
                        : null
                    }
                </div>


                    <button onClick={() => this.documentState()}> Display/Hide List</button>
                </div>
                )
                }

                }/* end class Contact*/
