import React, { Component } from "react";
import { connect } from "react-redux";
import { addDojoItem } from "../../actions/dojo-actions";
import Modal from "react-modal";
import uuid from "uuid";
Modal.setAppElement("#root");

class ItemModal extends Component {
	state = {
		showModal: false,
		name: ""
	};

	handleOpenModal = () => {
		this.setState({ showModal: true });
	};

	handleCloseModal = () => {
		this.setState({ showModal: false });
	};

	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit = e => {
		e.preventDefault();

		const newItem = {
			id: uuid(),
			name: this.state.name
        };
       
		this.props.addDojoItem(newItem);
		this.handleCloseModal();
	};

	render() {
		return (
			<div>
				<button className="button" onClick={this.handleOpenModal}>
					Add Item
				</button>
				<Modal
					onRequestClose={this.handleCloseModal}
					shouldCloseOnOverlayClick={true}
					isOpen={this.state.showModal}
					toggle={this.toggle}
					addDojoItem={this.addDojoItem}
				>
					<h1>Add to training</h1>
					<form onSubmit={this.onSubmit}>
						<label htmlFor="item">Item</label>
						<input
							type="text"
							name="name"
							id="item"
							placeholder="Add training"
							onChange={this.onChange}
						/>
						<button>Add training</button>
					</form>
				</Modal>
			</div>
		);
	}
}
const mapStateToProps = state => ({
    item: state.item
})
export default connect(mapStateToProps, {addDojoItem})(ItemModal);
