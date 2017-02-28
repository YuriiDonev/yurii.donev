
const initialState = [{id: 0,
    buttonAddColumnClass: 'disactive',
    columnArray: [{id: 0,
    name: 'Guest',
    img: 'https://pp.vk.me/c629310/v629310599/10bda/i6fq9drmWn0.jpg',
    buttonClass: 'disactive'
    }]}];

export default function columns (state = initialState, action) {
    if (action.type === 'ADD_COLUMN') {
        const newState = state.slice();
        newState.splice(action.payload.id+1, 0, action.payload);
        newState.map((index, column)=> {
            newState[column].id = column;
         });
        return newState;

    } else if (action.type === 'DELETE_COLUMN') {
        const newState = state.slice();
        if (newState.length === 1) {
        return [{id: 0, columnArray: [{id: 0,
            name: 'Guest',
            img: 'https://pp.vk.me/c629310/v629310599/10bda/i6fq9drmWn0.jpg'}]}];;
        }
        newState.splice(action.payload, 1);
        newState.map((index, column)=> {
            newState[column].id = column;
         });
        return newState;

    } else if (action.type === 'READ_INPUT_NAME') {
            if (action.payload.name === '') {
                return state;
            } else {
                const newState = state.slice();
                newState[action.payload.column].columnArray[action.payload.row].name = action.payload.name;
            if (action.payload.img === '') {
                newState[action.payload.column].columnArray[action.payload.row].img = 'https://pp.vk.me/c629310/v629310599/10bda/i6fq9drmWn0.jpg';
            } else {
                newState[action.payload.column].columnArray[action.payload.row].img = action.payload.img;
            }
                return newState;
            }
    } else if (action.type === 'SHOW_BUTTONS') {
              const newState = state.slice();
              newState[action.payload.column].columnArray[action.payload.row].buttonClass = 'active';
              return newState;

    } else if (action.type === 'HIDE_BUTTONS') {
              const newState = state.slice();
              newState[action.payload.column].columnArray[action.payload.row].buttonClass = 'disactive';
              return newState;

    } else if (action.type === 'SHOW_ADD_COLUMN_BUTTON') {
                const newState = state.slice();
                newState[action.payload].buttonAddColumnClass = 'active';
                return newState;

    } else if (action.type === 'HIDE_ADD_COLUMN_BUTTON') {
                const newState = state.slice();
                newState[action.payload].buttonAddColumnClass = 'disactive';
                return newState;

    } else if (action.type === 'ADD_ROW') {
              const initialRow = {id: state[action.payload.column].columnArray.length,
              name: 'Guest',
              img: 'https://pp.vk.me/c629310/v629310599/10bda/i6fq9drmWn0.jpg'};
              const newState = state.slice();
              newState[action.payload.column].columnArray.splice(action.payload.row+1, 0, initialRow);
              newState[action.payload.column].columnArray.map((index, row)=> {
                  newState[action.payload.column].columnArray[row].id = row;
              });
              return newState;

    } else if (action.type === 'DELETE_ROW') {
              const newState = state.slice();
              if (newState[action.payload.column].columnArray.length === 1) {
                  if (newState.length === 1) {
                return [{id: 0,
                    columnArray: [{id: 0, name: 'Guest',
                    img: 'https://pp.vk.me/c629310/v629310599/10bda/i6fq9drmWn0.jpg'}]}];;
                  }
                  newState.splice(action.payload.column, 1);
                  newState.map((index, column)=> {
                      newState[column].id = column;
                   });
                  return newState;
              } else {
                  newState[action.payload.column].columnArray.splice(action.payload.row, 1);
                  newState[action.payload.column].columnArray.map((index, row)=> {
                    newState[action.payload.column].columnArray[row].id = row;
                  });
                 return newState;
              }
    }
    return state;
}