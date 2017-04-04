import React from 'react';

export default function Form(props) {
	return (
		<div className="form">
			<input id={props.colId + 'name' + props.rowId} type="text" placeholder="Enter your name" />
			<input id={props.colId + 'img' + props.rowId} type="text" placeholder="Enter your photo link" />
			<button>Save</button>
		</div>
	);
}
