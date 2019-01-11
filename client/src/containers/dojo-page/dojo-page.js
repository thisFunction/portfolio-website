import React, {Component} from 'react';
import FullPage from '../../components/full-page/full-page';
import './dojo-page.scss';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';

class DojoArticle extends Component {
    constructor(props){
        super(props);
        this.state= {
            items: [
                {id: uuid(), name: "Adam"},
                {id: uuid(), name: "Mary"},
                {id: uuid(), name: "Mike"},
            ]
        }
        this.addPerson = this.addPerson.bind(this);
    }
    addPerson() {
        const name = prompt("enter person");
        if (name) {
            this.setState(state => ({
                items: [...state.items, {id: uuid(), name}]
            }))
        }
    }
    render() {
        const items = this.state.items;

        return (
            <Container>
                <Button color="dark" style={{marginBottom: "2em"}} onClick={this.addPerson}>Add Fighter</Button>
            <ListGroup>
                <TransitionGroup className="dojo-person">
                    {items.map(({id, name}) => (
                        <CSSTransition key={id} timeout={500} classNames="dojo-person-fade">
                            <ListGroupItem>
                              <Button className="remove-person" onClick={()=> {this.setState(state => 
                                ({
                                    items: state.items.filter(item => item.id !== id)
                                }))
                            }}
                            >&times;</Button>
                                {name}
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
            </Container>
        )  
    }
}

// const dojoArticle = () => {
//    
// };

const DojoPage = () => {
    return (
        <FullPage asideTitle="dojo" mainArticle={<DojoArticle />}/>
    )
};

export default DojoPage;