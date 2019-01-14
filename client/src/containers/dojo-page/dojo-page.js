import React, {Component} from "react";
import FullPage from "../../components/full-page/full-page";
import "./dojo-page.scss";
import {Container, ListGroup, ListGroupItem, Button} from "reactstrap";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {connect} from "react-redux";
import {
	getDojoItems,
	deleteDojoItem,
	addDojoItem
} from "../../actions/dojo-actions";
import PropTypes from "prop-types";
import ItemModal from "../../components/item-modal/item-modal";

class DojoArticle extends Component {
	constructor(props) {
		super(props);
		this.addPerson = this.addPerson.bind(this);
		this.removePerson = this.removePerson.bind(this);
	}
	componentDidMount() {
		this.props.getDojoItems();
	}
	addPerson() {
		const name = prompt("enter person");
		if (name) {
			this.props.addDojoItem(name);
		}
	}
	removePerson = id => {
		this.props.deleteDojoItem(id);
	};
	render() {
		const items = this.props.items;
		return (
			<Container>
				<ItemModal />

				<ListGroup>
					<TransitionGroup className="dojo-person">
						{items.map(({_id, name}) => (
							<CSSTransition
								key={_id}
								timeout={500}
								classNames="dojo-person-fade"
							>
								<ListGroupItem>
									<Button
										className="remove-person"
										onClick={this.removePerson.bind(
											this,
											_id
										)}
									>
										&times;
									</Button>
									{name}
								</ListGroupItem>
							</CSSTransition>
						))}
					</TransitionGroup>
				</ListGroup>
			</Container>
		);
	}
}

const DojoPage = props => {
	return (
		<FullPage
			asideTitle="dojo"
			mainArticle={
				<DojoArticle
					items={props.dojo.items}
					getDojoItems={props.getDojoItems}
					deleteDojoItem={props.deleteDojoItem}
					addDojoItem={props.addDojoItem}
				/>
			}
		/>
	);
};

DojoArticle.propTypes = {
	getDojoItems: PropTypes.func.isRequired,
	dojo: PropTypes.object
};

const mapStateToProps = state => {
	return {dojo: state.dojo};
};

export default connect(
	mapStateToProps,
	{getDojoItems, deleteDojoItem, addDojoItem}
)(DojoPage);
