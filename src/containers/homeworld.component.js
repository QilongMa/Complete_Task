import React, {Component} from 'react';
import axios from 'axios';

class HomeList extends Component{
    constructor(props){
        super(props);
        this.state = {
            homeArray: [],
            id : this.props.cur_world
        }
    }

    componentWillMount(){
        axios.get('http://localhost:3008/planets')
            .then((response)=>{
                const Array = response.data;
                const res = [];
                Object.keys(Array).map((key)=>{
                    res[key] = Array[key].name;
                });
                return this.setState({homeArray:res});
            })
    }

    handleChange(event){
        console.log(event.target.value);
        this.setState({id:event.target.value});
    }

    render(){
        let index = 0;
        const home_list = this.state.homeArray.map((key)=>{
            index++;
           return(
               <option value={index} key={index}>{key}</option>
           );
        });
        return(
            <select onChange={this.handleChange.bind(this)} value={this.state.id} >
                {home_list}
            </select>
        )
    }
}

export default HomeList;