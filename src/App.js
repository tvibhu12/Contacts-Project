import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from  './utils/ContactsAPI';


class App extends Component {
  state={
    contacts : []
   }
   removeContacts=(contact)=>{
  
    this.setState((state)=>({
      contacts:state.contacts.filter((c)=>c.id!==contact.id)
    }))
   }
   componentDidMount=()=>{
     ContactsAPI.getAll().then((contacts)=>this.setState({contacts:contacts}))
   }
  
  render(){
    return(
      <div>
      <ListContacts contacts={this.state.contacts} removeContacts={this.removeContacts}/>
      </div>
    )
  }

}

export default App;
