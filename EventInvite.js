import React from 'react';



function EventInvite() {
	
	let myStyle = {
	textAlign: "center"
	};
	
	//Maybe we could have an event class or something
	const event = {
		title: 'Pizza Party',
		email: 'alexmanka2022@u.northwestern.edu',
		description: 'We gonna eat pizza',	
		deadline: '2/10/20'
	};
	
	//Setting up the html
	return<div style={myStyle}>
		<h1> Event: {event.title} </h1>
		<h3> From: {event.email} </h3>
		<h2> Description: {event.description} </h2>
		<h2> RSVP Deadline: {event.deadline} </h2>
		<button>
			Accept
		</button>
		<button>
			Decline
		</button>
	</div>;
}

export default EventInvite;