import React, {Component} from 'react';
import {Card, Container, Grid} from 'semantic-ui-react'

import Candidate from './Candidate.jsx';


export default class App extends Component {

	getCandidates() {
		return [
			{_id: 1, name:'katumba wamala', party: 'NRM', slogan:'peace & prosperity'},
			{_id: 2, name:'Jesse James', party: 'DP', slogan:'jobs jobs jobs'},
			{_id: 3, name:'Alan Turing', party: 'FDC', slogan:'drastic change'},	
		];
	}

	renderCandidates(){
		return this.getCandidates().map((candidate) => (
			<Candidate key={candidate._id} candidate={candidate}/> 
		));
	}



	render(){
		return(
			<Container>
				<header>
					<h1> Candidates List </h1>
				</header>
				<Card.Group>
					{this.renderCandidates()}
				</Card.Group>
			</Container>

			);
	}



}