import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import FullName from './lesson1.js';
import MediaCard from './MediaCard';

function Lessons() {
	return <div className='lessonsdiv'>
		<h2>Hello React</h2>
		<h3>These lessons are from Dave Ceddia React Tutorial</h3>
		<FullName FirstName='Hasnain' LastName='Ali'/>
		<MediaCard title='React' url='https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png' body='A JavaScript library 		for building user interfaces'/>
		</div>
	}

ReactDOM.render(<Lessons/>, document.querySelector('#root'));

