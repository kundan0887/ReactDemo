import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters:[
      ],
      searchField: ''
    };

    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
          .then(res => res.json())
          .then(user => this.setState({monsters: user}));
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredmonster = monsters.filter(mon =>
      mon.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
    <div className="App">
      <SearchBox
        placeholder="search monster"
        //handleChange={e => this.setState({searchField: e.target.value})}
        handleChange={this.handleChange}
      />
      <CardList monsters={filteredmonster}>
      </CardList>
    </div>
    );
  }
}

export default App;
