import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import FullName from './lesson1.js';
import MediaCard from './MediaCard';
import Gate from './gate.js';
import Room from './room.js';
import App from './class5.js';
import logo from './logo.svg';

function Lessons() {
	return <div className='lessonsdiv'>
		<h2>Hello React</h2>
		<App />
		<h3>These lessons are from Dave Ceddia React Tutorial</h3>
		<FullName FirstName='Hasnain' LastName='Ali'/>
		<MediaCard title='React' url={logo} body='A JavaScript library 		for building user interfaces'/>
		<Gate isOpen={true} />
		<Room />
		</div>
	}

ReactDOM.render(<Lessons/>, document.querySelector('#root'));

