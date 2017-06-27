import React, { Component } from 'react';
import '../styles/SearchBar.css';
import { connect } from 'react-redux';
import { fetchMatchPeople } from '../actions/index';
import { bindActionCreators } from 'redux';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { term: '' };
  }

  render() {
    return (
      <div className='search-bar'>
      <input
          placeholder='Search Your Destiny'
          value={this.state.term}
          onChange={event=> this.onInputChange(event.target.value)}
      />
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.fetchMatchPeople(term);
  }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchMatchPeople}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
