import React from "react"
import styled from "styled-components"

function History({ transactions }) {
  return transactions.map((t, i) => (
    <div key={i}>
      <div>{t.name}</div>
      <div>{t.email}</div>
      <div>{t.amount}</div>
    </div>
  ))
}

export default History
