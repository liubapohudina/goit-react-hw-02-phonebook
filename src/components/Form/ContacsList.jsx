import React from "react";
import Title from "./Title";
import Filter from "./FilterSearch";





const ContactList = ({filterContacts, onChangeInput }) => {
    const elements = filterContacts.map(item => <li key={item.id}>
        <p>{item.name}  {item.number}</p>
    </li>)
    return (
        <div className="contactsList">
            <Title title="Contacts"></Title>
             <Filter onChangeInput={onChangeInput}/>
            <ul>{elements}</ul>
            </div>
    )
}


export default ContactList;