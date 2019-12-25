import styled from "styled-components"
import React from "react"
import euFlag from "../images/eu-flag.png"
import reflex from "../images/reflex.png"
import setNav from "../images/set-nav.png"
import medeas from "../images/medeas.png"

const RightArea = ({ data }) => (
  <RightAreaContainer>
    <TopRightArea>MORE</TopRightArea>
    <MainRightArea>
      <img src={euFlag} alt="EU flag" />
      <p>
        This project has received funding from the European Union’s Horizon 2020
        research and innovation programme under grant agreement No 691739.
      </p>
      <h2>REEEM IS PART OF THE LCE21-2015 PROJECT FAMILY</h2>
      <img src={reflex} alt="Reflex project logo" />
      <img src={setNav} alt="SET-Nav project logo" />
      <img src={medeas} alt="Medeas project logo" />
    </MainRightArea>
  </RightAreaContainer>
)

const RightAreaContainer = styled.div`
  flex: 0 1 340px;
  color: #777;
  font-size: 15px;
  background: white;
  margin: 0px;
  line-height: 24px;
`

const TopRightArea = styled.div`
  color: white;
  background: #82b965;
`

const MainRightArea = styled.div`
  color: #777;
  background: #f0f0f0;
`

export default RightArea
