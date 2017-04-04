const initialState = [];

export default function names (state = initialState, action) {

    if (action.type === 'FETCH_NAMES') {
        const newState = state.slice();
        newState.push(action.payload);
        return newState;
	}
	return state;
}
