import React, {Component} from 'react';
import { Button, Card, Image } from 'semantic-ui-react';

import {Candidates} from '../api/candidates.js';

export default class Candidate extends Component {

	constructor(){
		super()
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(no, e){
		e.preventDefault();

		if (no == 1){
			Candidates.update(this.props.candidate._id, {$inc :{votes:1}});
		}else{
			Candidates.update(this.props.candidate._id, {$inc :{votes:-1}});
		}


	}

	render(){
		return(
			<Card>
		      <Card.Content>
		        <Image floated='right' size='mini' src={'/assets/images/uploads/avatar/'+this.props.candidate._id+'.jpg'} />
		        <Card.Header>
		          {this.props.candidate.name}
		        </Card.Header>
		        <Card.Meta>
		          {this.props.candidate.party}
		        </Card.Meta>
		        <Card.Description>
		          {this.props.candidate.slogan}
		        </Card.Description>
		        <div>
		        <strong>
		          vote count: {this.props.candidate.votes}
		         </strong>
		        </div>
		      </Card.Content>
		      <Card.Content extra>
		        <div className='ui two buttons'>
		          <Button basic color='green' onClick={(e) => this.handleClick(1, e)}>Vote</Button>
		          <Button basic color='red' onClick={(e) => this.handleClick(0, e)}>Unvote</Button>
		        </div>
		      </Card.Content>
		    </Card>
	    );
	}






}