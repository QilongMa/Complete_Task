import React, { Component } from 'react';
import '../styles/App.css';
import SearchBar from "./SearchBar.js"
import star from '../images/star.svg';
import wars from '../images/wars.svg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPeople, fetchPlanets} from '../actions/index';
import CardList from '../components/card-list';
import PageView from './page_view';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            page : 1,
            term : ""
        }
    }

    componentDidMount(){
        this.props.fetchPeople();
        this.props.fetchPlanets();
    }

    changeSearch(data = ""){
        return this.setState({term : data}, ()=>{
            this.props.fetchPeople(data, this.state.page);
        })
    }

    changePage(page){

        return this.setState({page: page}, ()=>{
            this.props.fetchPeople(this.state.term, page);
        })
    }

  render() {

    return (
      <div className='content'>
        <div className='logo'>
          <img src={star} alt="star-logo" />
          <span className='interview-text'>The Interview</span>
          <img src={wars} alt="wars-logo" />
        </div>
        <SearchBar search_holder={this.changeSearch.bind(this)} />
        <PageView page_holder={this.changePage.bind(this)} />

        <CardList peopleList={this.props.peopleList} planetList={this.props.planetList} />

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
