import React, { Component } from 'react';
import './styles/App.css';
import SearchBar from "./SearchBar.js"
import star from './images/star.svg';
import wars from './images/wars.svg';
import { connect } from 'react-redux';
import { fetchPeople, fetchPlanets} from './actions/index';
import { bindActionCreators } from 'redux';
import CardList from './containers/card-list';

class App extends Component {
    constructor(props){
        super(props);
        this.props.fetchPeople();
        this.props.fetchPlanets();
    }

  render() {
    return (
      <div className='content'>
        <div className='logo'>
          <img src={star} alt="star-logo" />
          <span className='interview-text'>The Interview</span>
          <img src={wars} alt="wars-logo" />
        </div>
        <SearchBar />
        <CardList peopleList={this.props.peopleList} planetList = {this.props.planetList} />
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        peopleList:state.people,
        planetList:state.planets
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchPeople:fetchPeople, fetchPlanets:fetchPlanets}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
