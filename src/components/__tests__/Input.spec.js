import React from 'react'
import { mount, shallow } from 'enzyme'
import StyledInput, { Input } from '../Input'
import 'jest-styled-components'

describe('Input', () => {
  const onChange = jest.fn()

  const defaultProps = {
    onChange,
    error: true,
    helperText: 'Invalid Username',
    value: 'Hello there, brown bear!',
  }
  const wrapper = mount(<StyledInput {...defaultProps} />)

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('when the user change the input value', () => {
    const input = wrapper.find('.input-field')
    it('should call the `onChange` prop', () => {
      input.simulate('change', { target: { value: 'Hey now, brown cow!' } })
      expect(onChange).toHaveBeenCalled()
    })

    it('should contain a `has-content` class to apply styles', () => {
      expect(wrapper.find('.has-content').exists()).toBe(true)
    })
  })

  describe('when the user gains focus on the input field', () => {
    const inputClass = shallow(<Input onChange={jest.fn()} />)
    const input = inputClass.find('.input-field')
    it('should update the component state', () => {
      input.simulate('focus')
      expect(inputClass.state().active).toBe(true)
    })
  })

  describe('given some helper text', () => {
    it('should set render the text', () => {
      expect(wrapper.find('.helper').text()).toEqual(wrapper.prop('helperText'))
    })

    it('should also accept an array of helper text to render', () => {
      wrapper.setProps({ helperText: ['This', 'is', 'valid', 'too'] })

      expect(wrapper.find('.helper').length).toEqual(
        wrapper.prop('helperText').length,
      )
    })
  })

  describe('given an error prop', () => {
    it('should render some helperText with an `error-text`, class to indicate the error state', () => {
      expect(wrapper.find('.error-text').exists()).toBe(true)
    })
  })
})
