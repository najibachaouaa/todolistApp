
  const initialState = []
const todos = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            input: action.input,
            completed: false
          }
        ];
      case 'REMOVE_TODO':
        return state.map(todo =>
            todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
          );
      default:
        return state;
    }
  }
  
  export default todos;