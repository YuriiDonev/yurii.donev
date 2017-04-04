import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {

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
			<div>
				<div className="main">
					{this.props.columns.map((column, index) =>
						<div className="columnGlobal" key={index} data-mycolumn={column.id}
						onMouseOver={this.showAddColumnButton.bind(this)}
						onMouseOut={this.showAddColumnButton.bind(this)}>
						<div className="Add_column_button">
						<button className={column.buttonAddColumnClass} id="Add_column" data-column={column.id} onClick={this.addNewColumn.bind(this)}>+</button>
						</div>
						<div className="column" key={index} data-mycolumn={column.id}>

						{column.columnArray.map((row, index) => <div className="row" key={index} data-row={row.id} data-column={column.id}
						onMouseOver={this.showButtons.bind(this)}
						onMouseOut={this.showButtons.bind(this)}>
						<div className="name_image"><div><h4>{row.name}</h4></div><div className="imageContainer"><img src={row.img}/></div></div>
						<div data-row={row.id} data-column={column.id} onClick={this.readInputName.bind(this)}>
							<input id={column.id + 'name' + row.id} type="text" placeholder="Enter your name" />
							<input id={column.id + 'img' + row.id} type="text" placeholder="Enter your photo link" />
							<button>Save</button>
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
			</div>
		);
	}
}

export default connect(
	state => ({
		columns: state.columns
	}),
	dispatch => ({
		onAddNewColumn: (column) => {
			const payload = {
							id: +column,
							buttonAddColumnClass: 'disactive',
							columnArray: [{id: 0,
							name: 'Guest',
							img: 'https://pp.userapi.com/c629310/v629310599/10bda/i6fq9drmWn0.jpg'}]
						};
			dispatch({ type: 'ADD_COLUMN', payload });
		},
		onReadInputName: (column, row, name, img) => {
				const payload = {
								column: +column,
								row: +row,
								name: name,
								img: img
							};
				dispatch({ type: 'READ_INPUT_NAME', payload });
		},
		onShowAddColumnButton: (column) => {
			dispatch({ type: 'SHOW_ADD_COLUMN_BUTTON', payload: column});
		},
		onHideAddColumnButton: (column) => {
			dispatch({ type: 'HIDE_ADD_COLUMN_BUTTON', payload: column});
		},
		onShowButtons: (column, row) => {
			const payload = {
							column: +column,
							row: +row
						};
				dispatch({ type: 'SHOW_BUTTONS', payload});
		},
		onHideButtons: (column, row, id) => {
			const payload = {
							column: +column,
							row: +row
						};
				dispatch({ type: 'HIDE_BUTTONS', payload});
		},
		onAddRow: (column, row) => {
			const payload = {
							column: +column,
							row: +row
						};
				dispatch({ type: 'ADD_ROW', payload});
		},
		onDeleteRow: (column, row) => {
			const payload = {
							column: +column,
							row: +row
						};
				dispatch({ type: 'DELETE_ROW', payload});
		}
	})
)(App);
