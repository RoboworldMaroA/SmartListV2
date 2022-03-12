import React from "react";
import {Link} from "react-router-dom"


export function Home() {
    return(
        <div>
            <h1> Welcome to Application to create list of item necessary to take with you on holiday</h1>
            <nav>
                <Link to="contactsList"> Login/Register</Link>
                <Link to="createList"> Create List</Link>
                <Link to="pay"> Pay</Link>


            </nav>

        </div>
    );

}

export function ContactsList() {
    return(
        <div>
            <h1> [Login Page]</h1>
        </div>
    );

}

export function CreateList() {
    return(
        <div>
            <h1> [Create List]</h1>

            POST /v2/translate?auth_key=92e7243f-6a39-7595-3e57-5fca1ef99da0:fx> HTTP/1.0
            Host: api-free.deepl.com
            User-Agent: YourApp
            Accept: */*
            Content-Length: [length]
            Content-Type: application/x-www-form-urlencoded

            auth_key=92e7243f-6a39-7595-3e57-5fca1ef99da0:fx&text=Hello, world&target_lang=DE

            curl https://api-free.deepl.com/v2/translate \
            -d auth_key=92e7243f-6a39-7595-3e57-5fca1ef99da0:fx \
            -d "text=Hello, world!"  \
            -d "target_lang=DE"


        </div>



    );

}


export function Pay() {
    return(
        <div>
            <h1> [Pay]</h1>
        </div>
    );

}


export function PageNotExist() {
    return(
        <div>
            <h1> This page not exist </h1>
        </div>
    );

}





