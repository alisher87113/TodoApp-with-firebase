import { initialState } from '../store/store';

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [
          ...state.todos,
          {
            todo: action.payload,
          },
        ],
      };
    case 'TOGGLE_SHOW_SIGN_IN':
      return {
        ...state,
        signInShow: !state.signInShow,
      };
    case 'TOGGLE_SHOW_SIGN_UP':
      return {
        ...state,
        signUpShow: !state.signUpShow,
      };
    case 'TOGGLE_SHOULD_LOGIN':
      return {
        ...state,
        shouldLogin: !state.shouldLogin,
      };
    default:
      return state;
  }
};

export default Reducer;
