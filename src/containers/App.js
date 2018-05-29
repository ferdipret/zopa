import React, { Component } from "react"
import Header from "../components/Header"
import Input from "../components/Input"
import Button from "../components/Button"

export class App extends Component {
  render() {
    return (
      <div>
        <Header>Send money</Header>
        <Input label="Name" />
        <Input label="Email address" />
        <Input label="Amount" />
        <Button className="send-btn" onClick={this.handleSend}>
          Send
        </Button>
      </div>
    )
  }

  handleSend = () => {}
}

export default App
