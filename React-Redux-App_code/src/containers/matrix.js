import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Form from '../components/form.js';
import User from '../components/user.js';
import {Action} from '../actions';

class Matrix extends Component {

	addNewColumn(event) {
		this.props.onAddNewColumn(event.target.dataset.column);
	}
	readInputName(event) {
		const current = event.target;
		if (current.tagName !== 'BUTTON') {
		return;
		} else {
			const name = document.getElementById(event.currentTarget.dataset.column+'name'+event.currentTarget.dataset.row);
			const img = document.getElementById(event.currentTarget.dataset.column+'img'+event.currentTarget.dataset.row);
			this.props.onReadInputName(event.currentTarget.dataset.column, event.currentTarget.dataset.row, name.value, img.value);
			name.value = '';
			img.value = '';
		}
	}
	showButtons(event) {
		if (event.type === 'mouseover') {
			this.props.onShowButtons(event.currentTarget.dataset.column, event.currentTarget.dataset.row);
		} else if (event.type === 'mouseout') {
			this.props.onHideButtons(event.currentTarget.dataset.column, event.currentTarget.dataset.row);
		}
	}

	showAddColumnButton(event) {
		if (event.type === 'mouseover') {
			this.props.onShowAddColumnButton(event.currentTarget.dataset.mycolumn);
		} else if (event.type === 'mouseout') {
			this.props.onHideAddColumnButton(event.currentTarget.dataset.mycolumn);
		}
	}

	addRow(event) {
		this.props.onAddRow(event.target.dataset.column, event.target.dataset.row);
	}
	deleteRow(event) {
		this.props.onDeleteRow(event.target.dataset.column, event.target.dataset.row);
	}

	render() {
		return (
		<div className="main">
			{this.props.columns.map((column, index) =>
				<div className="columnGlobal" key={index} data-mycolumn={column.id}
						onMouseOver={this.showAddColumnButton.bind(this)}
						onMouseOut={this.showAddColumnButton.bind(this)}>
						<div className="Add_column_button">
							<button className={column.buttonAddColumnClass} id="Add_column" data-column={column.id}
							onClick={this.addNewColumn.bind(this)}>+</button>
						</div>
						<div className="column" key={index} data-mycolumn={column.id}>
				{column.columnArray.map((row, index) =>
					<div className="row" key={index} data-row={row.id} data-column={column.id}
						onMouseOver={this.showButtons.bind(this)}
						onMouseOut={this.showButtons.bind(this)}>
								<User userName={row.name} userImage={row.img} colId={column.id} rowId={row.id} />
							 <div data-row={row.id} data-column={column.id} onClick={this.readInputName.bind(this)}>
								<Form colId={column.id} rowId={row.id}/>
							</div>
						<div className="Add_Delete_Row">
							 <button className={row.buttonClass} id="add_row" data-row={row.id} data-column={column.id}
							 onClick={this.addRow.bind(this)}>+</button>
							 <button className={row.buttonClass} id="delete_row" data-row={row.id} data-column={column.id}
							 onClick={this.deleteRow.bind(this)}>-</button>
						</div>
					</div>)}
				</div>
			</div>
			)}
		</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
	        columns: state.columns
	   };
};

const matchDispatchToProps = dispatch => {
	return bindActionCreators({
		onAddNewColumn: Action.onAddNewColumn,
		onReadInputName: Action.onReadInputName,
		onShowAddColumnButton: Action.onShowAddColumnButton,
		onHideAddColumnButton: Action.onHideAddColumnButton,
		onShowButtons: Action.onShowButtons,
		onHideButtons: Action.onHideButtons,
		onAddRow: Action.onAddRow,
		onDeleteRow: Action.onDeleteRow
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Matrix);
