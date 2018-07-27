import { reducer } from './reducers'
import { types } from './actionCreators'

describe('reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      { todos: ["Todo 1", "Todo 2"] }
    )
  })

  test('should handle ADD', () => {
    expect(reducer(
      { todos: [] }, {
        type: types.ADD,
        payload: 'new todo'
      })
    ).toEqual(
      { todos: ["new todo"] }
    )

    expect(reducer(
      { todos: ["old todo"] }, {
        type: types.ADD,
        payload: 'new todo'
      })
    ).toEqual(
      { todos: ["new todo", "old todo"] }
    )
  })

  test('should handle REMOVE', () => {
    expect(reducer(
      { todos: [] }, {
        type: types.REMOVE,
        payload: 1
      })
    ).toEqual(
      { todos: [] }
    )

    expect(reducer(
      { todos: ["new todo"] }, {
        type: types.REMOVE,
        payload: 0
      })
    ).toEqual(
      { todos: [] }
    )
  })
})
