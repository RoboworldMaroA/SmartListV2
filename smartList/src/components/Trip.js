import React, {Component} from "react";
import LoginAdminDetail from "./LoginAdminDetail";
import DeleteCustomerNew from "./DeleteCustomerNew";
import DisplayCustomerTrip from "./DisplayCustomerTrip";

export default class Trip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
        };
    }

    componentDidMount(){
        fetch('api/v1/trip').then(response => response.json()).
        then(data => this.setState({contacts: data}));
    }

    render(){
        return(
            <div>
                <div className="row">
                    {this.state.contacts.map((itemTrip) =>(<DisplayCustomerTrip key={itemTrip.id} item={itemTrip} /> ))}
                </div>
            </div>
        )

    }

}