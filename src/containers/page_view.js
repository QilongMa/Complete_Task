import React, { Component } from 'react';
import ReactPaginate from 'react-paginate'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../styles/App.css';
import { fetchPeople, fetchPlanets} from '../actions/index';



class PageView extends Component{
    render(){
        return(
            <div>
                <ReactPaginate
                    pageCount={9}
                    previousLabel={'prev'}
                    nextLabel={'next'}
                    onPageChange={(event)=>{const index = event.selected + 1; this.props.fetchPeople(index)}}
                />
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchPeople:fetchPeople, fetchPlanets:fetchPlanets}, dispatch);
}

export default connect(null, mapDispatchToProps)(PageView);
