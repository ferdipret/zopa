import React from "react"
import { shallow } from "enzyme"
import History from "../History"

describe("History", () => {
  const transactions = [
    {
      name: "Jimmy",
      email: "jimmyblogs@zopa.com",
      amount: 2000
    }
  ]

  const wrapper = shallow(<History transactions={transactions} />)
  it("renders properly", () => {
    expect(wrapper).toMatchSnapshot()
  })
})
