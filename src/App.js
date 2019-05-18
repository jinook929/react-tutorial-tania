import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
  state = {
    characters: [{
              name: 'Charlie',
              job: 'Janitor',
            },
            {
              name: 'Mac',
              job: 'Bouncer',
            },],
  }

  removeCharacter = (index) => {
    console.log('removeBtn', index)
    // console.log('removeBtn', this.state)
    const {characters} = this.state
    // const characters = this.state.characters

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  } 

  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
  }

  render() {
    // console.log('App props', this)
    // console.log('App props', this.props)
    // console.log('App state', this.state)
    // const characters = this.state.characters
    // const removeCharacter = this.removeCharacter
    return (
      <div className="container">
        <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

// class App extends Component {
//   render() {
//     const characters = [
//       {
//         name: 'Charlie',
//         job: 'Janitor',
//       },
//       {
//         name: 'Mac',
//         job: 'Bouncer',
//       },
//       {
//         name: 'Dee',
//         job: 'Actress',
//       },
//       {
//         name: 'Dennis',
//         job: 'Bartender',
//       },
//     ]

//     return (
//       <div className="container">
//         <Table characterData={characters} />
//       </div>
//     );
//   }
// }

export default App;