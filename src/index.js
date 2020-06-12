import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function MediaCard(props) {
   return <div>
		<h2>{props.title}</h2>
		<p>{props.body}</p>
		<img src={props.image} alt={props.title}/></div>;
}



ReactDOM.render(<MediaCard class='media'
				title="React"
				body="React is an open-source JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."
				image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"/>, document.querySelector('#root'));
