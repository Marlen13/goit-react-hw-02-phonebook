import React, { Component } from "react";

export class App extends Component {
  state = {
    contacts: [],
    name: ''
  };
  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <form >
                  <label htmlFor="">
                    <input type="text" />
                  </label>
                  <button type="submit"></button>
                </form>  
      </>
    )
  }
  // return (
  //   <div
  //     style={{
  //       height: '100vh',
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       fontSize: 40,
  //       color: '#010101'
  //     }}
  //   >
  //     React homework template
  //   </div>
  // );
};
