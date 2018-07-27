import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Title from './Title'

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    children: "Title"
  }

  const enzymeWrapper = mount(<Title {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Title', () => {
    test('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()

      expect(enzymeWrapper.find('div.title').text()).toBe('Title')
    })
  })
})
