import React from 'react';
import { connect } from 'react-redux';

const Users = ({ user, userImg }) =>
		<div>
			<div>{user}</div>
			<div className="imageContainer">
				<img src={userImg} />
			</div>
		</div>;

const mapStateToProps = (state, ownProps) => {
	console.log(ownProps);
	let columnParams = +ownProps.params.id.split('')[0];
	let rowParams = +ownProps.params.id.split('')[2];
	console.log(columnParams, ' ' , rowParams);
	for (let i = 0; i < state.columns.length; i++) {
		for (let j = 0; j < state.columns[i].columnArray.length; j++ ) {
		if (i === columnParams && j === rowParams) {
			return {
				user: state.columns[i].columnArray[j].name,
				userImg: state.columns[i].columnArray[j].img
				};
			}
		}
	}
};

export default connect(mapStateToProps)(Users);
