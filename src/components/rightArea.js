import styled from "styled-components"
import React from "react"
import euFlag from "../images/eu-flag.png"
import reflex from "../images/reflex.png"
import setNav from "../images/set-nav.png"
import medeas from "../images/medeas.png"

const RightArea = ({ data }) => (
  <RightAreaContainer>
    <TopRightContainer>
      <TopRightArea>MORE</TopRightArea>
    </TopRightContainer>
    <MainRightContainer>
      <MainRightArea>
        <img src={euFlag} alt="EU flag" />
        <EuNote>
          This project has received funding from the European Union’s Horizon
          2020 research and innovation programme under grant agreement No
          691739.
        </EuNote>
        <h4>REEEM IS PART OF THE LCE21-2015 PROJECT FAMILY</h4>
        <ProjectLinkStyle href="http://reflex-project.eu/">
          <ProjectImgStyle src={reflex} alt="Reflex project logo" />
        </ProjectLinkStyle>
        <ProjectLinkStyle href="http://www.set-nav.eu/">
          <ProjectImgStyle src={setNav} alt="SET-Nav project logo" />
        </ProjectLinkStyle>
        <ProjectLinkStyle href="http://medeas.eu/#home">
          <ProjectImgStyle src={medeas} alt="Medeas project logo" />
        </ProjectLinkStyle>
      </MainRightArea>
    </MainRightContainer>
  </RightAreaContainer>
)

const RightAreaContainer = styled.div`
  flex: 1 0 260px;
  color: #777;
  font-size: 1rem;
  background: #eaeaea;
  margin: 0px;
  line-height: 24px;
  height: 1000px;
  padding-right: calc((100vw - 1380px) / 2);
`

const TopRightContainer = styled.div`
  background: rgb(51, 54, 59);
  display: flex;
  justify-content: flex-start;
`

const TopRightArea = styled.div`
  min-width: 260px;
  max-width: 260px;
  color: white;
  background: #82b965;
  padding: 15px 30px;
`

const MainRightContainer = styled.div`
  background: #eaeaea;
  display: flex;
  justify-content: flex-start;
`

const MainRightArea = styled.div`
  min-width: 260px;
  max-width: 260px;
  color: #777;
  background: #f0f0f0;
  padding: 30px;
`

const EuNote = styled.p`
  font-size: 1.1rem;
  padding-bottom: 30px;
`

const ProjectLinkStyle = styled.a`
  border: 0;
`

const ProjectImgStyle = styled.img`
  padding: 30px 0;
`

export default RightArea
