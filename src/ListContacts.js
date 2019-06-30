import React, { Component } from 'react';

class ListContacts extends Component {
  
  
render(){
  let contacts=this.props.contacts;
  return(
    <ol className='contact-list'>
      {contacts.map((contact)=>
      (
        <li key={contact.id} className='contact-list-item'>
       <div className='contact-avatar' style={{backgroundImage:`url(${contact.avatarURL})`}}/>
       <div className='contact-details'>
         <p>{contact.name}</p>
         <p>{contact.email}</p>
       </div>
       <button className='contact-remove' onClick={()=>this.props.removeContacts(contact)}>
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
