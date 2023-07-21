import React from "react";
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onRemoveContact }) => {
    return(
    <ul className={css.contact_list}>
        {contacts.map((contact) => {
            return (
              
                <li key={contact.id}>{contact.name}: {contact.number} 
                    {<button className={css.btn_delete} type="button" name="delete" onClick={() => onRemoveContact(contact.id)}>Delete</button>}</li>
                
               
           )
       })}
   </ul>)
        
    
}