import React from 'react';
import { Link } from 'react-router';

export default function User(props) {
	return (
		<div className="name_image">
			<div>
				<Link to={`/users/${props.colId}_${props.rowId}`} ><h4>{props.userName}</h4> </Link>
			</div>
			<div className="imageContainer">
				<img src={props.userImage}/>
			</div>
		</div>
	);
}
