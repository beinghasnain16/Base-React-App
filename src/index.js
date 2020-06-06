import React from 'react';
import ReactDOM from 'react-dom';

function Hi(props) {
   return <div>Hello, World! from {props.firstName} {props.lastName}.</div>;
}

ReactDOM.render(<Hi firstName="Hasnain" lastName='Ali'/>, document.querySelector('#root'));
