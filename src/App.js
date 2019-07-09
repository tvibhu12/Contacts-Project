import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from  './utils/ContactsAPI';
import { Route } from 'react-router-dom'
import CreateContact from './CreateContact'

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
   createContact(contact) {
    ContactsAPI.create(contact).then(contact => {
      this.setState(state => ({
        contacts: state.contacts.concat([ contact ])
      }))
    })
  }

  
   render(){
     return(
       <div>
      <Route exact path='/' render ={()=>(
      <ListContacts contacts={this.state.contacts} removeContacts={this.removeContacts}/>
      )}/>

<Route path='/create' render={({ history }) => (
    <CreateContact
            onCreateContact={(contact) => {
              this.createContact(contact)
              history.push('/')
            }}
          />
        )}/>
    
      </div>
    )
  }

}

export default App;
