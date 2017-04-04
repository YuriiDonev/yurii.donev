import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {asyncGetNames} from '../actions/test-async-actions';

class Async extends Component {

	render() {
		return (
			<div className="async">
				<button onClick={this.props.onGetNames}>Get asinc action</button>
				{this.props.names.map((name, index) => <div key={index}> {name} </div>)}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
			names: state.names
	   };
};

const matchDispatchToProps = dispatch => {
	return bindActionCreators({
		onGetNames: asyncGetNames
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Async);
