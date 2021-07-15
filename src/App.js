import { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {

  constructor(){
    super();

    this.state = {
      kittens: [],
      searchField: ''
    };

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => { return response.json() })
        .then(users => { this.setState({kittens: users}) })
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render(){

    const { kittens, searchField } = this.state;
    const filteredkittens = kittens.filter(kitten => (
      kitten.name.toLowerCase().includes(searchField.toLowerCase())
    ));

    return (
      <div className="App">
        <h1>Kittens Roledex</h1>
        <SearchBox 
          placeholder="search kittens"
          handleChange={this.handleChange}
        />
        <CardList kittens={filteredkittens}/>
      </div>
    );
  }
}

export default App;
