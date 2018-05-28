import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'

describe('App', () => {
  const wrapper = shallow(<App />)

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('when clicking the `Send` button', () => {
    it('should call the handleSend classMethod', () => {
      wrapper.find('.send-btn').simulate('click')
    })
  })
})
