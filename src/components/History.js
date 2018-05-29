import React from 'react'
import styled from 'styled-components'
import { formatCurrency } from './helpers/format-currency'
import color from './style-utils/colors'

function History({ transactions }) {
  return transactions.map((t, i) => (
    <ListItem
      key={i}
      style={{
        borderTop: `${
          i === 0 ? 'none' : '1px solid ' + color.greyInputBorder(50)
        }`,
      }}>
      <div>
        <Name>{t.name}</Name>
        <Email>{t.email}</Email>
      </div>
      <Amount>{formatCurrency(t.amount)}</Amount>
    </ListItem>
  ))
}

const ListItem = styled.div`
  align-items: center;
  display: flex;
  font-family: Helvetica;
  justify-content: space-between;
  height: 56px;
`

const Name = styled.div`
  color: ${color.labelText()};
  font-size: 16px;
`

const Email = styled.div`
  color: ${color.labelHelper()};
  font-size: 12px;
  line-height: 24px;
`

const Amount = styled.div`
  color: ${color.labelText()};
  font-size: 16px;
`

export default History
