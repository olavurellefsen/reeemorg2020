import styled from "styled-components"
import React from "react"
import latestDeliverables from "./latestDeliverables"

const LeftArea = () => (
  <LeftAreaContainer>
    <TopLeftArea>FOLLOW:</TopLeftArea>
    <MainLeftArea>
      <h1>LATEST DELIVERABLES</h1>
      {latestDeliverables.map(deliverable => (
        <p>
          <a href={deliverable.link} id={deliverable.name}>
            {deliverable.name}
          </a>
        </p>
      ))}
    </MainLeftArea>
  </LeftAreaContainer>
)

const LeftAreaContainer = styled.div`
  flex: 0 1 340px;
  color: #777;
  font-size: 15px;
  background: white;
  margin: 0px;
  line-height: 24px;
`

const TopLeftArea = styled.div`
  color: white;
  background: #3b8dbd;
`

const MainLeftArea = styled.div`
  color: #777;
  background: #f0f0f0;
`

export default LeftArea
