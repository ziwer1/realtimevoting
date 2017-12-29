import React, {Component} from 'react';
import { Button, Card, Image } from 'semantic-ui-react';

export default class Candidate extends Component {


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
		      </Card.Content>
		      <Card.Content extra>
		        <div className='ui two buttons'>
		          <Button basic color='green'>Vote</Button>
		          <Button basic color='red'>Unvote</Button>
		        </div>
		      </Card.Content>
		    </Card>
	    );
	}






}