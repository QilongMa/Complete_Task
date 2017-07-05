import React, { Component } from 'react';
import '../styles/Card.css';
import Axios from 'axios';
import ChildCard from '../containers/card_modal';


class Card extends Component{
    constructor(props){
        super(props);
        let homeArray = this.props.home;
        let idx = this.props.person.homeworld - 1;
        this.url = 'http://localhost:3008/peoplefavorites';
        this.state = {
            flag : false,
            cur_world: homeArray[idx].name,
            liked: false
        }
    }

    componentDidMount(){
        let myUrl = `${this.url}/${this.props.person.id}`;
        let that = this;
        Axios.get(myUrl)
            .then(response=>{
                that.setState({liked:true});
            })
            .catch(err=>{
                console.log('Error in child card', err);
            })
    }

    updateWorld(e){
        e.preventDefault();
        console.log('You are updating home world');
        this.setState({
            cur_world: 'mychange'
        })
    }

    updateList(){
        this.setState({flag: !this.state.flag});
    }

    changeFavoriteList(val, data){
        const myUrl = `${this.url}/${data.id}`;
        if(val > 0){
            Axios.post(this.url, data)
                .then(res=>{
                    console.log('success posting new favorite card', data);
                    this.props.favorite_count();
                })
                .catch(err=>{
                    console.log(err);
                })
        }
        else{
            Axios.delete(myUrl)
                .then(res=>{
                    console.log('success deleting card from favorite list', res);
                    this.props.favorite_count();
                })
                .catch(err=>{
                    console.log('error in deleting card from list', err);
                })
        }
    }

    clickHandler(){
        const wasLiked = this.state.liked;
        this.setState({liked: !wasLiked}, ()=>{
            const val = this.state.liked ? 1: -1;
            console.log('val',val);
            this.changeFavoriteList(val, {id:this.props.person.id});
        });
    }


    render() {
        const divStyle = {
            textAlign: 'right'
        };
        return (
        <div>
            <div className='card'>
                <div className='card-content'>
                    <div style={divStyle}>
                        <i className={this.state.liked ?"fa fa-heart" : "fa fa-heart-o"} aria-hidden="true"
                            onClick={this.clickHandler.bind(this)} > </i>

                        <span> {this.state.cnt}</span>
                    </div>
                    <div className='card-name'>{this.props.person.name}</div>
                    <div style={divStyle}>
                        <i className="fa fa-pencil-square-o" aria-hidden="true" style={divStyle}
                           onClick={()=>{this.foo.handleClick()}}  > </i>
                    </div>
                    <img src={this.props.image} alt='profile'/>
                    <p>
                        <span>Birthday:</span>
                        <span>{this.props.person.birth_year}</span>
                    </p>
                    <p>
                        <span>Homeworld:</span>
                        <span>{this.state.cur_world}</span>
                    </p>
                </div>

            </div>
            <ChildCard ref={(foo)=>{this.foo = foo}}
                       person={this.props.person}
                       handler={this.updateWorld.bind(this)}
                       updateList={this.updateList.bind(this)} />

        </div>
        );
    }
}

export default Card;
