import React, {Component} from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import HomeList from "./homeworld.component";

class ChildCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            isShowingModal: false
        }
    }
    componentWillMount(){
        this.setState(this.props.person);
    }

    ROOT_URL = 'http://localhost:3008/people';

    handleClick = () => {this.setState({isShowingModal: true})};
    handleClose = () => {this.setState({isShowingModal: false}); };

    onInputChange(event){
        const name = event.target.name;
        const val = event.target.value;
        this.setState({[name]: val});
    }

    transformToArray(vehicles){
        return vehicles.toString().split(",");
    }

    handleSave(){
        const person = this.props.person;
        person.image = this.state.image;
        person.edited = this.state.edited;
        person.name = this.state.name;
        person.created = this.state.created;
        person.birth_year = this.state.birth_year;
        person.vehicles = this.transformToArray(this.state.vehicles);
        person.homeworld = this.foo.state.id;
        this.setState({id:person.homeworld});
        console.log('Awesome ', this.foo.state.id);
        const url = `${this.ROOT_URL}/${person.id}`;
        axios.put(url, person).then(()=>{
            this.props.updateList();
        });
    }

    render() {
        return <div onClick={this.handleClick}>
            {
                this.state.isShowingModal &&
                <ModalContainer onClose={this.handleClose}>
                    <ModalDialog onClose={this.handleClose}>
                        <Grid>
                            <Row className="show-grid">
                                <Col xsOffset={3} md={2}><label>image:</label></Col>
                                <Col md={4}><input name="image" value={this.state.image} onChange={this.onInputChange.bind(this)} /></Col>
                            </Row>
                            <Row className="show-grid">
                                <Col xsOffset={3} md={2}><label>edited:</label></Col>
                                <Col md={4}><input name="edited" value={this.state.edited} onChange={this.onInputChange.bind(this)} /></Col>
                            </Row>
                            <Row className="show-grid">
                                <Col  xsOffset={3} md={2}><label>name:</label></Col>
                                <Col md={4}><input name="name" value={this.state.name} onChange={this.onInputChange.bind(this)} /></Col>
                            </Row>
                            <Row className="show-grid">
                                <Col  xsOffset={3} md={2}><label>created:</label></Col>
                                <Col md={4}><input name="created" value={this.state.created} onChange={this.onInputChange.bind(this)} /></Col>
                            </Row>
                            <Row className="show-grid">
                                <Col xsOffset={3} md={2}><label>birth:</label></Col>
                                <Col md={4}><input name="birth_year" value={this.state.birth_year} onChange={this.onInputChange.bind(this)} /></Col>
                            </Row>
                            <Row className="show-grid">
                                <Col xsOffset={3} md={2}><label>homeworld:</label></Col>
                                <Col md={4}>
                                    <HomeList ref={foo=>this.foo=foo} cur_world={this.state.homeworld} />
                                </Col>
                            </Row>
                            <Row className="show-grid">
                                <Col xsOffset={3} md={2}><label>vehicles:</label></Col>
                                <Col md={4}><input name="vehicles" value={this.state.vehicles} onChange={this.onInputChange.bind(this)} /></Col>
                            </Row>
                            <Row className="show-grid">
                                <Col xsOffset={7} md={2}>
                                    <Button bsStyle="primary" bsSize="xsmall"
                                        onClick={this.handleSave.bind(this)}>
                                        Save
                                    </Button>
                                </Col>
                            </Row>
                        </Grid>
                    </ModalDialog>
                </ModalContainer>
            }
        </div>;
    }
}

export default ChildCard;