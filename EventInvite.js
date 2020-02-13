import React from 'react';

//Component Hierarchy
//	EventInvite
//		Buttons (accept/decline)
//		Event (title, user, description, time)

let	myStyle = {
	textAlign: 'center'
}	

class EventInvite2 extends React.Component {
	constructor(props) {
		super(props);
		this.props = {
			title: '',
			user: '',
			description: '',
			deadline: ''
		};
		this.state = {
			isAccepted: false,
			isDenied: false
		};
	}
	
	handleClickA() {
		this.setState(state => ({
			isAccepted: true
		}));
		//Add event to user's eventList
		//Send to homepage
	}
	
	handleClickD() {
		this.setState(state => ({
			isDenied: true
		}));
		//Send to homepage
	}
	
	render() {
		return (
			<div style={myStyle}>
				<h1> Event: {this.props.title} </h1>
				<h3> From: {this.props.user} </h3>
				<h2> Description: {this.props.description} </h2>
				<h2> RSVP Deadline: {this.props.deadline} </h2>
				<button onClick={this.handleClickA}>
					Accept
				</button>
				<button onClick={this.handleClickD}>
					Decline
				</button>
			</div>
		);
	}
}

export default EventInvite2;
