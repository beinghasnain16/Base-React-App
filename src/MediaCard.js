import React from 'react';

const MediaCard = ({title, body, url}) => (
	<div className='media'>
	<h3>Lesson 2</h3>
	<h4>{title}</h4>
	<img style={{height:'100px', width: '150px'}} src={url} alt={title}/>
	<p>{body}</p>
	</div> 
);

export default MediaCard
