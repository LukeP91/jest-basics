import React from 'react';
import Inpute from './Inpute.js';
import renderer from 'react-test-renderer';

describe('Inpute', () => {
  test('renders correctly', () => {
    const sumbitEdititng = jest.fn()
    const placeholder = 'placeholder'
    const input = renderer
      .create(<Inpute
        placeholder={placeholder}
        onSubmitEditing={sumbitEdititng}
      />)
      .toJSON();
    expect(input).toMatchSnapshot();
  });

  test('handleChange', () => {
    const input = renderer.create(<Inpute/>).getInstance()
    expect(input.state).toEqual({value: ""})
    input.handleChange({target: {value: "test"}})
    expect(input.state).toEqual({value: "test"})
  })

  describe('handleKeyPress', () => {
    describe('Enter pressed', () => {
      test('reset state and submit input value if value is not empty', () => {
        const sumbitEdititng = jest.fn()
        const input = renderer
        .create(<Inpute
          onSubmitEditing={sumbitEdititng}
        />)
        .getInstance()
        input.state = {value: 'test'}
        const e = { key: 'Enter'}
        input.handleKeyPress(e)
        expect(input.state).toEqual({value: ""})
        expect(sumbitEdititng).toBeCalledWith("test")
      })

      test('does nothing if value is empty', () => {
        const sumbitEdititng = jest.fn()
        const input = renderer
        .create(<Inpute
          onSubmitEditing={sumbitEdititng}
        />)
        .getInstance()
        input.state = {value: ''}
        const e = { key: 'Enter'}
        input.handleKeyPress(e)
        expect(sumbitEdititng).not.toBeCalled()
      })
    })

    describe('Key other than Enter pressed', () => {
      test('does nothing', ()=> {
        const sumbitEdititng = jest.fn()
        const input = renderer
        .create(<Inpute
          onSubmitEditing={sumbitEdititng}
        />)
        .getInstance()
        input.state = {value: 'test'}
        const e = { key: 'Space'}
        input.handleKeyPress(e)
        expect(input.state).toEqual({value: "test"})
        expect(sumbitEdititng).not.toBeCalled()
      })
    })
  })
});
