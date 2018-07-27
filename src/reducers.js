import { types } from './actionCreators'

const initialState = {
  todos: ["Todo 1", "Todo 2"]
};

export const reducer = (state = initialState, action) => {
  const { todos } = state;
  const { type, payload } = action;

  switch (type) {
    case types.ADD: {
      return {
        ...state,
        todos: [payload, ...todos]
      };
    }
    case types.REMOVE: {
      return {
        ...state,
        todos: todos.filter((todo, i) => i !== payload)
      };
    }
    default: {
      return state
    }
  }
}
