import React from 'react';

//Lesson 1 of Dave Ceddia React Tutorial

function FullName(props) {
	return <div>
		<h3>Lesson 1</h3>
		<p>Hey There!, My name is <strong>{props.FirstName} {props.LastName}</strong></p>
		</div>;
	}

export default FullName
