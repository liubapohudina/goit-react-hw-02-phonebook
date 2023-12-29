import React from "react";
import Title from "./Title";


const ContactList = ({ contactsArr }) => {
    const elements = contactsArr.map(item => <li key={item.id}>
        <p>{item.name}</p>
    </li>)
    return (
        <div className="contactsList">
        <Title title="Contacts"></Title>
            <ul>{elements}</ul>
            </div>
    )
}


export default ContactList;