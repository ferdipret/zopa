import React from "react"
import { shallow } from "enzyme"
import Button from "../Button"
import "jest-styled-components"

describe("Button", () => {
  const onClick = jest.fn()
  const props = {
    onClick
  }
  const wrapper = shallow(<Button {...props} />)

  it("renders properly", () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe("when clicking the button", () => {
    it("calls the `onClick` event", () => {
      wrapper.find("button").simulate("click")
      expect(onClick).toHaveBeenCalled()
    })
  })
})
