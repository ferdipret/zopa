import React from 'react'
import styled from 'styled-components'
import Chart from 'react-minimal-pie-chart'
import color from './style-utils/colors'
import { formatCurrency } from './helpers/format-currency'

function ChartWrapper({ sent, available }) {
  return (
    sent &&
    available && (
      <ChartContainer>
        <div>
          <ValueWrapper>{formatCurrency(sent)}</ValueWrapper>
          <div>total sent</div>
        </div>
        <Chart
          data={[
            { value: sent, color: color.chartStrokeSecondary() },
            { value: available, color: color.chartStrokePrimary() },
          ]}
          lineWidth={48}
          style={{
            height: '64px',
            width: '64px',
            margin: '0 30px',
          }}
          startAngle={-90}
          lengthAngle={-360}
        />
        <div>
          <ValueWrapper>{formatCurrency(available)}</ValueWrapper>
          <div>left available</div>
        </div>
      </ChartContainer>
    )
  )
}

const ChartContainer = styled.div`
  align-items: center;
  display: flex;
  font-family: Helvetica;
  justify-content: center;
  margin-bottom: 77px;
`

const ValueWrapper = styled.div`
  font-size: 16px;
  line-height: 24px;
`

export default ChartWrapper
