import React from "react"
import { shallow } from "enzyme"
import Chart from "../Chart"

describe("Chart", () => {
  const wrapper = shallow(<Chart sent={100} available={100} />)
  it("renders properly", () => {
    expect(wrapper).toMatchSnapshot()
  })
})
