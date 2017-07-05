import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import Card from './Card';

const ROOT_URL = 'http://localhost:3008/';

const divStyle = {
    textAlign: 'right'
};


class CardList extends Component{
    constructor(props){
        super(props);
        this.state = {
            favorite_count:0
        }
    }

    changeFavorite(){
        axios.get('http://localhost:3008/peoplefavorites')
            .then((response)=>{
                const len = response.data.length;
                console.log('Favorite list... In will mount ', response.data);
                this.setState({favorite_count:len});
            })
            .catch((err)=>{
                console.log('Error in getting favorite list ', err);
            })
    }

    componentWillMount(){
        this.changeFavorite();
    }

    handleFavorite(){
        this.changeFavorite();
    }
    render() {
        if (this.props.peopleList && this.props.peopleList.length > 0 && this.props.planetList && this.props.planetList.length > 0) {
            const peopleList = (this.props.peopleList)[0];
            const cardItems = peopleList.map((person) => {
                const img = person.image;
                const srcUrl = `${ROOT_URL}${img}`;
                return (
                    <Card
                        favorite_count = {this.handleFavorite.bind(this)}
                        key={person.id}
                        image={srcUrl}
                        home={this.props.planetList[0]}
                        person={person}
                    />
                )
            });


            return (
                <div style={divStyle}>
                    Favorite Count: <span> <Link to="/favorites">{this.state.favorite_count}</Link> </span>
                    <div>{cardItems}</div>
                </div>

            );
        }
        return (
            <div>Loading...</div>
        )
    }
}

export default CardList;
// function mapStateToProps(state) {
//     console.log('in cardlist', state.favorite.cnt);
//     return {
//         favorite_cnt:state.favorite.cnt
//     }
// }


// export default connect(mapStateToProps)(CardList);