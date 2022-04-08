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
import DisplayCustomerTrip from "./DisplayCustomerTrip";
import displayCustomerTrip from "./DisplayCustomerTrip";
import FormCreateList from "./FormCreateList";
import ParentComponent from "./ParentComponent";


export default class DisplayList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            tripData: [],
            displayDocuments: true,
            displayEssential: true,
            displayBeach: true,
            camera:' ',
            parentName2:'Parent',

        }

        // this.greetParent2=this.greetParent2.bind(this);
    }

    // I am testing to get value from FormCreateList
    // greetParent2(childName2){
    //     // alert('Hello'+this.state.parentName );
    //     alert(`Hello ${this.state.parentName2} from ${childName2}`);
    // }

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


    //import data from the trip and get a data customers, compare with
    // customer and display list that has status true
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

        this.beachState();
    }

    beachState() {
        //here will be logic what lit to display, depen what customer choose in the form FormCrteteList
        console.log(this.state.displayBeach)
        this.setState(
            {
                displayBeach: !this.state.displayBeach
            },()=>"eceee")
    }


    render() {


        return (
            <div>

                {/*//do mapping in the trip and  check what is a status for the unique parameter i thing listName*/}
                {/*//because it has to be unique*/}

                {/*<div className="row">*/}

                {/*    {this.state.contacts.map((item) =>(<DeleteCustomerNew key={item.id} item={item} /> ))}*/}

                {/*</div>*/}

                {/*not working*/}
                {/*<div className="row">*/}
                {/*    <p>Camera:</p>*/}
                {/*    <div  className="input-field col s10">*/}
                {/*        /!*<select value={this.camera} onChange={event => this.state.setCamera(event.target.value)}>*!/*/}
                {/*        <select>*/}
                {/*        {this.state.tripData.map((item)=>(<item value={item.id}>{item.camera}</item>))}*/}
                {/*            <option value="" disabled selected>Transport{this.state.tripData.map((item)=>(<item value={item.id}>{item.camera}</item>))}</option>*/}
                {/*            <option value="Plane">Plane</option>*/}
                {/*            <option value="Bus">Bus</option>*/}
                {/*            <option value="Train">Train</option>*/}
                {/*            <option value="Car">Car</option>*/}
                {/*            <label>Transport</label>*/}
                {/*        </select>*/}
                {/*    </div>*/}
                {/*</div>*/}



                {/*<div  className="input-field col s10">*/}
                {/*<select>*/}
                {/*    {this.state.tripData.map((item)=>(<item value={item.id}>{item.camera}</item>))}*/}

                {/*</select>*/}
                {/*</div>*/}
               {/* <div className="row">*/}


               {/* <p> Get a value from a FormCreateList and pass them to this component (Display List) and*/}
               {/*     then use this data to display lists that customer will need</p>*/}

               {/* <FormCreateList greetHandler2={this.greetParent2}/>*/}
               {/*     /!*<ParentComponent />*!/*/}

               {/*     /!*<p> ddddddddd dddddddd {this}</p>*!/*/}
               {/*</div>*/}


                <p> Display single value from a trip using display customer trip </p>
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
                    {this.state.displayBeach ?
                        <BeachList/>
                        : null
                    }
                </div>


                    <button onClick={() => this.documentState()}> Display/Hide List</button>



                <div className="row">
                    <p>It is a detail Trip</p>
                    {this.state.contacts.map((data) => (<DisplayCustomerTrip key={data.id} item={data}/>))}
                </div>
                </div>







                )
                }

                }/* end class Contact*/
