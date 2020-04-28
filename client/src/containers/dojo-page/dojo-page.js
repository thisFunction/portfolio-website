import React, {Component} from "react";
import FullPage from "../../components/full-page/full-page";
import "./dojo-page.scss";
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
			<div className="dojo-page">
				<span className="separate-line">/dōˈjō/</span>
				<hr />
				<p className="italics">noun</p>
				<ol>
					<li>
						a hall or space for immersive learning or meditation
					</li>
					<li>
						a place where I showcase things I'm currently working
						on, including anything from training material to random
						meditations on life.
					</li>
					<li>always a work in progress...</li>
				</ol>
				<hr className="bottom" />

				<span className="separate-line">MERN</span>
				<p>
					This website is a full-stack app created with mongoDB,
					express, react.js, and node.js.
				</p>
				<p>
					Ultimately, it will be used to serve content from server to
					the dojo. At the moment, it allows you to add or remove
					items in my mongoDB database:
				</p>
				<ItemModal />
				<ul className="dojo-list">
					{items.map(({_id, name}) => (
						<li key={_id}>
							<button
								className="remove"
								onClick={this.removePerson.bind(this, _id)}
							>
								&times;
							</button>
							{name}
						</li>
					))}
				</ul>
				<hr className="bottom" />

				<span className="separate-line">Articles</span>
				<p>I enjoy writing articles that might help developers coming into 
					the Ember ecosystem. Currently, I'm writing an in depth explanation of 
					ember-data's <code>store.push()</code> and <code>store.pushPayload()</code> methods. 
				</p>
				<p>
					In the meantime, you can enjoy these finished articles:
				</p>
				<p>
					<a target="_blank" rel="noopener noreferrer" href="https://medium.com/@skocadam/ember-cli-mirage-lets-build-a-kick-ass-server-and-mock-database-2854a75b14ff">
						Ember-CLI-Mirage: Let’s build a kick-ass server and mock database <span aria-label="surfing emoji" role="img">🏄</span>
					</a>
					</p>
				<p>
					<a target="_blank" rel="noopener noreferrer" href="https://medium.com/@skocadam/ember-data-turn-frustration-into-celebration-52891fdf3df8">
						Ember-data: Turn Frustration <span aria-label="angry emoji" role="img">🤬</span> into Celebration <span aria-label="celebration emoji" role="img">🎉</span>
					</a>
				</p>
				<hr className="bottom" />
				<span className="separate-line">Learning</span>

				<p>
					I love that JavaScript frameworks and the language itself keeps evolving at a very fast pace.
					Being a constant learner drives my passion for software development.
				</p>
				<p>
					At the moment I'm learning from the following course:
				</p>
				<a target="_blank" rel="noopener noreferrer" href="https://www.udemy.com/course/understanding-typescript/">
					Understanding Typescript - 2020 Edition
				</a>	
			</div>
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
