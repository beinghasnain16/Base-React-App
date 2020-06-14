import React, {useState} from 'react';

function Room() {
	const [isLit, setLit] = useState(true)
	
	return (
		<div className={`room ${isLit ? 'lit' : 'dark'}`} >
			The room is {isLit ? 'lit' : 'dark'}
			<br />
			<button onClick={() => setLit(!isLit)}>
			flip
			</button>					
	</div>
	);
}

export default Room
