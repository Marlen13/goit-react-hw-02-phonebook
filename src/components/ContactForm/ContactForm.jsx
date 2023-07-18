import React, { Component } from "react";
import css from './ContactForm.module.css';

export class ContactForm extends Component {
    state = {
    contacts: [],
    name: ''
    };
    render() {
        return (
            <form className={css.contactform}>
                <label className={css.contact_label} htmlFor="">
                    Name
                    <input className={css.contact_input}type="text"
                        name="name"
                        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
         
                </label>
                <button className={ css.contact_btn} type="submit">Add contact</button>
            </form>)
    } }