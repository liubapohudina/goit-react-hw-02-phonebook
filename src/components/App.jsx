import { Component } from "react";
import { nanoid } from 'nanoid'
import Form from './Form/Form';
import Title from "./Form/Title";

import ContactList from "./Form/ContacsList";



export class App extends Component {
state = {
  contacts: [],
  name: ''
  }
  
  

  onChangeInput = (event) => {
    //console.log(event)
    return this.setState({
      name: event.currentTarget.value})
  }

  onClickSubmit = (event) => {
    //console.log(event.currentTarget)
    event.preventDefault(); 
    this.setState({
      contacts: [
        ...this.state.contacts,
        {
          name: this.state.name,
          id: nanoid(),
        }
      ],
      name: '' 
    });
    event.currentTarget.reset()
  }


  render() {
    const contactsArr = Object.values(this.state.contacts)
    //console.log(contactsArr)
    return <div className="App">
     <Title title="Phonebook">
        <Form name={this.state.name} onChangeInput={this.onChangeInput} onClickSubmit={this.onClickSubmit} />
      </Title> 
      {this.state.contacts.length !==0 ? <ContactList contactsArr={contactsArr}/> : ''}
    </div>
  }
  
}