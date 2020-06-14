import React, {useState} from 'react';

function App() {
	let [count, setCount] = useState(0);
	let [isMorning, setMorning] = useState(true);

	return (
	 <div className='box'>
	   <h1>Good {isMorning ? 'Morning' : 'Evening'}</h1>
	   <button onClick={ () => setMorning(!isMorning) }> 
	   Update Day
	   </button>
	   <h3>Counter is {count} </h3>
	   <br />
	   <button onClick={ () => setCount(++count)}>
	   Update Counter
	   </button>
	</div>
)
}


export default App
