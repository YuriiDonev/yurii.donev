import { DEFAULT_IMAGE } from '../default';
import { DEFAULT_NAME } from '../default';

export const Action = {
	onAddNewColumn: (column) => {
		const payload = {
						id: +column,
						buttonAddColumnClass: 'disactive',
						columnArray: [{id: 0,
						name: DEFAULT_NAME,
						img: DEFAULT_IMAGE}]
					};
		return {
			type: 'ADD_COLUMN',
			payload
		}
	},
	onReadInputName: (column, row, name, img) => {
		const payload = {
						column: +column,
						row: +row,
						name: name,
						img: img
					};
		return {
			type: 'READ_INPUT_NAME',
			payload
		}
	},
	onShowAddColumnButton: (column) => {
		return {
			type: 'SHOW_ADD_COLUMN_BUTTON',
			payload: column
		}
	},
	onHideAddColumnButton: (column) => {
		return {
			type: 'HIDE_ADD_COLUMN_BUTTON',
			payload: column
		}
	},
	onShowButtons: (column, row) => {
		const payload = {
						column: +column,
						row: +row
					};
		return {
			type: 'SHOW_BUTTONS',
			payload}
	},
	onHideButtons: (column, row, id) => {
		const payload = {
						column: +column,
						row: +row
					};
		return {
			type: 'HIDE_BUTTONS',
			payload
		}
	},
	onAddRow: (column, row) => {
		const payload = {
						column: +column,
						row: +row
					};
		return {
			type: 'ADD_ROW',
			payload
		}
	},
	onDeleteRow: (column, row) => {
		const payload = {
						column: +column,
						row: +row
					};
		return {
			type: 'DELETE_ROW',
			payload
		}
	}
}
