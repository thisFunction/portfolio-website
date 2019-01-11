import React, {Component} from 'react';
import FullPage from '../../components/full-page/full-page';
import './dojo-page.scss';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';
import { connect } from 'react-redux';
import {getDojoItems} from '../../actions/dojo-actions';
import PropTypes from 'prop-types';

class DojoArticle extends Component {
    constructor(props){
        super(props);
        this.addPerson = this.addPerson.bind(this);
    }
    componentDidMount(){
        this.props.getDojoItems()
    }
    addPerson() {
        const name = prompt("enter person");
        debugger
        if (name) {
            this.setState(state => ({
                items: [...state.items, {id: uuid(), name}]
            }))
        }
    }
    render() {
        const items = this.props.items;
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
    }DojoPage
}

const DojoPage = (props) => {
    return (
        <FullPage asideTitle="dojo" mainArticle={<DojoArticle items={props.dojo.items} getDojoItems={props.getDojoItems}  />}/>
    )
};

DojoArticle.propTypes = {
    getDojoItems: PropTypes.func.isRequired,
    dojo: PropTypes.object
}

const mapStateToProps = (state) => {
    return (
        {dojo: state.dojo}
    )
}

export default connect(mapStateToProps, { getDojoItems })(DojoPage);