import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { fetchProfile } from '../actions/profile'
import {
  updateInputValue,
  postTransaction,
  fetchTransactions,
} from '../actions/transaction'
import Header from '../components/Header'
import Input from '../components/Input'
import Button from '../components/Button'
import Chart from '../components/Chart'
import History from '../components/History'
import media from '../components/style-utils/media'
import color from '../components/style-utils/colors'

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${media.desktop`
    flex-direction: row;
  `};
`

const Section = styled.div`
  padding: 10px;

  ${media.tablet`
    padding: 20px 20%;
  `};

  ${media.desktop`
    margin: 78px auto;
    padding: 20px 100px;
    width: 50%;

    &:nth-child(1) {
      border-right: 1px solid ${color.greyInputBorder()};
    }
  `};
`

export class App extends Component {
  componentDidMount() {
    this.getData(1)
  }

  render() {
    const { transaction, profile } = this.props
    return (
      <AppWrapper>
        <Section>
          <Header main>Send money</Header>
          <Input
            className="name-input"
            value={transaction.name}
            label="Name"
            onChange={e => this.handleInputChange(e, 'name')}
          />
          <Input
            className="email-input"
            value={transaction.email}
            label="Email address"
            onChange={e => this.handleInputChange(e, 'email')}
          />
          <Input
            className="amount-input"
            value={transaction.amount.toString()}
            label="Amount"
            onChange={e => this.handleInputChange(e, 'amount')}
          />
          <Button className="send-btn" onClick={this.handleSend}>
            Send
          </Button>
        </Section>
        <Section>
          <Header main style={{ marginBottom: '70px' }}>
            My account
          </Header>
          <Chart
            sent={
              transaction.transactionHistory.length > 0
                ? transaction.transactionHistory.reduce(
                    (a, b) => a + b.amount,
                    0,
                  )
                : 0
            }
            available={profile.balance || 0}
          />
          <div>
            <Header>Transactions</Header>
            <History transactions={transaction.transactionHistory} />
          </div>
        </Section>
      </AppWrapper>
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

    if ((name, email, amount)) {
      postTransaction(profile, { name, email, amount })
    }
  }
}

export function mapStateToProps({ transaction, profile }) {
  return {
    transaction,
    profile,
  }
}

export default connect(
  mapStateToProps,
  { updateInputValue, postTransaction, fetchProfile, fetchTransactions },
)(App)
