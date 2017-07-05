import React, { Component } from 'react';
import ReactPaginate from 'react-paginate'
import '../styles/App.css';


class PageView extends Component{


    render(){
        return(
            <div>
                <ReactPaginate
                    pageCount={9}
                    previousLabel={'prev'}
                    nextLabel={'next'}
                    onPageChange={(event)=>{const index = event.selected + 1; this.props.page_holder(index)}}
                />
            </div>
        )
    }
}


export default PageView
