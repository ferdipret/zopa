import React from 'react'
import { shallow } from 'enzyme'
import Header from '../Header'
import 'jest-styled-components'

describe('Header', () => {
  const wrapper = shallow(<Header />)
  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render dynamic styles based on props', () => {
    expect(wrapper).toHaveStyleRule('font-size', '16px')
    wrapper.setProps({ main: true })
    expect(wrapper).toHaveStyleRule('font-size', '32px')
  })
})
