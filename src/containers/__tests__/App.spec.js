import React from "react"
import { shallow } from "enzyme"
import { App, mapStateToProps } from "../App"

describe("App", () => {
  const updateInputValue = jest.fn()
  const fetchProfile = jest.fn()
  const postTransaction = jest.fn()
  const fetchTransactions = jest.fn()
  const props = {
    transaction: {
      name: "",
      email: "",
      amount: 0,
      transactionHistory: []
    },
    profile: {
      id: 1,
      firstname: "",
      lastname: "",
      email: "",
      balance: 0,
      transactionIds: []
    },
    updateInputValue,
    fetchProfile,
    postTransaction,
    fetchTransactions
  }
  const wrapper = shallow(<App {...props} />)

  it("renders properly", () => {
    // expect(wrapper).toMatchSnapshot()
  })

  describe("when clicking the `Send` button", () => {
    it("should call the handleSend classMethod", () => {
      wrapper.find(".send-btn").simulate("click")
    })
  })

  describe("when changing the input fields", () => {
    it("should call the handleInputChange, which will fire the updateInputValue function", () => {
      wrapper
        .find(".name-input")
        .simulate("change", { target: { value: "Lee" } })
      wrapper
        .find(".email-input")
        .simulate("change", { target: { value: "Lee" } })
      wrapper
        .find(".amount-input")
        .simulate("change", { target: { value: "100" } })

      expect(updateInputValue).toHaveBeenCalledTimes(3)
    })
  })
})

describe("mapStateToProps", () => {
  it("should return state for transaction and profile detail", () => {
    const state = {
      transaction: {
        name: "",
        email: "",
        amount: 0,
        transactionHistory: []
      },
      profile: {
        id: 1,
        firstname: "",
        lastname: "",
        email: "",
        balance: 0,
        transactionIds: []
      }
    }
    expect(mapStateToProps(state)).toEqual(state)
  })
})
