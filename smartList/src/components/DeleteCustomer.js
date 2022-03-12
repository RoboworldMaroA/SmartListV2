import React, {useState}  from 'react';
import deleteCustomerNew from "./DeleteCustomerNew";
/* useState is used to set a value  */

//it deletes element when you say what id want to delete

const DeleteCustomer = ({item}) => {

    const [id, setId] = useState('');



    const deleteCustomer = async () => {
        const result = await fetch("http://localhost:8080/api/v1/customer/"+id, {
            method: "DELETE",
            //body: JSON.stringify({id}),
            //headers: {
            //     "Content-Type": "application/json",
           // }


        })

        const body = await result.json();
        item(body);

    }


    return (

        <div className="row">
            <form className="col s12" onSubmit={() => deleteCustomerNew()}>

                <div className="row">
                    <div className="input-field col s6">
                        <input placeholder="Placeholder" value={id} type="text"
                               onChange={(event => setId(event.target.value))} className="validate"/>
                        <label htmlFor="What Id want you delete">Id</label>
                    </div>
                </div>

                <div className="row">
                    <button className="waves-effect waves-light btn " type="submit" name="action">Delete Customer</button>

                </div>
            </form>
        </div>


    );

}

export default DeleteCustomer;


