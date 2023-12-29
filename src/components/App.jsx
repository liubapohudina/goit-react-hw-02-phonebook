import { Component } from "react";
import Form from './Form/Form';
import Title from "./Form/Title";
import Button from "./Form/Button";
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

  render() {
    
    return <div className="App">
     <Title title="Phonebook">
        <Form name={this.state.name} onChangeInput={this.onChangeInput} />
        <Button type="submit" text="Add contact"></Button>
      </Title> 
      {/* {this.state.contacts.length !==0 ? <ContactList/> : ''} */}
      <ContactList />
    </div>
  }
  
}