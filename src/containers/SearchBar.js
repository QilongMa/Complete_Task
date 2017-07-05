import React, { Component } from 'react';
import '../styles/SearchBar.css';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { term: '' };
  }

  keyPress(event){
    if(event.key === 'Enter'){
      this.props.search_holder(event.target.value);
    }
  }

  render() {
    return (
      <div className='search-bar'>
      <input
          placeholder='Search Your Destiny'
          value={this.state.term}
          onChange={event=> this.onInputChange(event.target.value)}
          onKeyPress={this.keyPress.bind(this)}
      />
      </div>
    );
  }

  onInputChange(val){
    this.setState({term:val});
  }
}


export default SearchBar
