import React from "react";
// import css from './ContactList.module.css';
export const ContactList = ({ contacts }) => {
    return(
    <ul>
        {contacts.map((contact) => {
            return (
                <li key={contact.id}>{ contact.name}</li>
           )
       })}
   </ul>)
        
    
}