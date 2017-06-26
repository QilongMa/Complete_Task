import React from 'react';

import Card from '../components/Card';

const ROOT_URL = 'http://localhost:3008/';

const CardList = (props) =>{
    if(props.peopleList && props.peopleList.length > 0 && props.planetList && props.planetList.length > 0) {
        const peopleList = (props.peopleList)[0];
        const planetList = (props.planetList)[0];
        console.log(planetList);
        const cardItems = peopleList.map((person) => {
            const img = person.image;
            const srcUrl = `${ROOT_URL}${img}`;
            const index = (person.homeworld)-1;
            console.log('planet index: ', index);
            const home = planetList[index].name;
            return (
                <Card
                    key={person.id}
                    name = {person.name}
                    birth = {person.birth_year}
                    image = {srcUrl}
                    homeworld = {home}
                />
            )
        });


        return (
            <div>{cardItems}</div>
        );
    }
    return (
        <div>Loading...</div>
    )
};



export default CardList;