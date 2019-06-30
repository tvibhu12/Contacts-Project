import React, { Component } from 'react';

class ListContacts extends Component {
  state={
   contacts : [
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]
  }
render(){
  return(
    <ol className='contact-list'>
      {this.state.contacts.map((contact)=>
      (
        <li key={contact.id} className='contact-list-item'>
       <div className='contact-avatar' style={{backgroundImage:`url(${contact.avatarURL})`}}/>
       <div className='contact-details'>
         <p>{contact.name}</p>
         <p>{contact.email}</p>
       </div>
       <button className='contact-remove'>
         Remove
       </button>
     </li>
     )
      )}
    </ol>
  );
}
}

export default ListContacts
