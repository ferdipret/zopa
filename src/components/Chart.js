import React from "react"
import styled from "styled-components"
import Chart from "react-minimal-pie-chart"

function ChartWrapper({ sent, available }) {
  return (
    sent &&
    available && (
      <ChartContainer>
        <div>
          <div>£{sent}</div>
          <div>total sent</div>
        </div>
        <Chart
          data={[
            { value: sent, color: "#00ff00" },
            { value: available, color: "#ff0000" }
          ]}
          lineWidth={30}
          style={{
            height: "50px",
            width: "50px"
          }}
          startAngle={-90}
          lengthAngle={-360}
        />
        <div>
          <div>£{available}</div>
          <div>left available</div>
        </div>
      </ChartContainer>
    )
  )
}

const ChartContainer = styled.div`
  display: flex;
`

export default ChartWrapper
