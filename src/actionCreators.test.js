import { actionCreators, types } from './actionCreators'

describe('actionCreators', () => {
  test('should create an action to add a todo', () => {
    const text = 'new todo';
    const expectedAction = {
      type: types.ADD,
      payload: text
    }

    expect(actionCreators.add(text)).toEqual(expectedAction);
  })

  test('should create an action to remove a todo', () => {
    const expectedAction = {
      type: types.REMOVE,
      payload: 1
    }

    expect(actionCreators.remove(1)).toEqual(expectedAction)
  })
})
