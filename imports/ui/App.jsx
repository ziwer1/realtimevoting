import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Card, Container, Grid} from 'semantic-ui-react';

import {Candidates} from '../api/candidates.js';

import Candidate from './Candidate.jsx';


class App extends Component {

	getCandidates() {
		return [
			{_id: 1, name:'katumba wamala', party: 'NRM', slogan:'peace & prosperity'},
			{_id: 2, name:'Jesse James', party: 'DP', slogan:'jobs jobs jobs'},
			{_id: 3, name:'Alan Turing', party: 'FDC', slogan:'drastic change'},	
		];
	}

	renderCandidates(){
		return this.props.candidates.map((candidate) => (
			<Candidate key={candidate._id} candidate={candidate}/> 
		));
	}



	render(){
		return(
			<Container>
				<header>
					<h1>Kampala LC5 Candidates List </h1>
				</header>
				<Card.Group>
					{this.renderCandidates()}
				</Card.Group>
			</Container>

			);
	}



}

export default createContainer(() => {
	return{
		candidates: Candidates.find({}).fetch(),
	};
}, App);