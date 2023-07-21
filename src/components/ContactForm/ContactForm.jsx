import React, { Component } from 'react';
// import { nanoid } from 'nanoid'
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  nameInputId = nanoid();
  numberInputId = nanoid();
  handleChange = e => {
    // console.log(e.currentTarget);
    // console.log(e.currentTarget.name);
    // console.log(e.currentTarget.value);
    const { name, value } = e.currentTarget;
    // this.setState({[e.currentTarget.name] : e.currentTarget.value });
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    //   console.log(this.state);
      this.props.onSubmit({...this.state });
    this.reset();
  };
  reset = () => {
    this.setState({ contacts: [], name: '', number: '' });
  };
  render() {
    return (
      <form className={css.contactform} onSubmit={this.handleSubmit}>
        <label className={css.contact_label} htmlFor={this.nameInputId}>
          Name
          <input
            className={css.contact_input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.contact_label} htmlFor={this.numberInputId}>
          Number
          <input
            className={css.contact_input}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            id={this.numberInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.contact_btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
