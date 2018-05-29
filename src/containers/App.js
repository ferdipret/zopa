import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchProfile } from "../actions/profile"
import {
  updateInputValue,
  postTransaction,
  fetchTransactions
} from "../actions/transaction"
import Header from "../components/Header"
import Input from "../components/Input"
import Button from "../components/Button"
import Chart from "../components/Chart"
import History from "../components/History"

export class App extends Component {
  componentDidMount() {
    this.getData(1)
  }

  render() {
    const { transaction, profile } = this.props
    return (
      <div>
        <div className="section">
          <Header>Send money</Header>
          <Input
            className="name-input"
            value={transaction.name}
            label="Name"
            onChange={e => this.handleInputChange(e, "name")}
          />
          <Input
            className="email-input"
            value={transaction.email}
            label="Email address"
            onChange={e => this.handleInputChange(e, "email")}
          />
          <Input
            className="amount-input"
            value={transaction.amount.toString()}
            label="Amount"
            onChange={e => this.handleInputChange(e, "amount")}
          />
          <Button className="send-btn" onClick={this.handleSend}>
            Send
          </Button>
        </div>
        <div className="section">
          <Header>My account</Header>
          <Chart
            sent={
              transaction.transactionHistory.length > 0
                ? transaction.transactionHistory.reduce(
                    (a, b) => a + b.amount,
                    0
                  )
                : 0
            }
            available={profile.balance || 0}
          />
          <div>
            <Header>Transactions</Header>
            <History transactions={transaction.transactionHistory} />
          </div>
        </div>
      </div>
    )
  }

  getData = async id => {
    const res = await this.props.fetchProfile(id)
    this.props.fetchTransactions(res.payload.transactionIds)
  }

  handleInputChange = (event, ref) => {
    const { value } = event.target
    this.props.updateInputValue({ value, ref })
  }

  handleSend = () => {
    const { transaction, postTransaction, profile } = this.props
    const { name, email, amount } = transaction

    postTransaction(profile, { name, email, amount })
  }
}

export function mapStateToProps({ transaction, profile }) {
  return {
    transaction,
    profile
  }
}

export default connect(
  mapStateToProps,
  { updateInputValue, postTransaction, fetchProfile, fetchTransactions }
)(App)
