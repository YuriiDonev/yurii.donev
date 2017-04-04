const testPayload = 'Test_name';

export const asyncGetNames = () => dispatch => {
		setTimeout(() => {
			dispatch({type: 'FETCH_NAMES', payload: testPayload});
		}, 1000)
}
