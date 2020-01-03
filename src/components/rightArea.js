import React, { useState } from "react"
import styled, { css } from "styled-components"
import euFlag from "../images/eu-flag.png"
import reflex from "../images/reflex.png"
import setNav from "../images/set-nav.png"
import medeas from "../images/medeas.png"
import { media } from "./mediaTemplate"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAngleDoubleRight,
  faAngleDoubleLeft,
} from "@fortawesome/free-solid-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const RightArea = () => {
  const [open, setOpen] = useState(false)
  return (
    <RightAreaOuterContainer>
      <RightAreaButton open={open} onClick={() => setOpen(!open)}>
        {open && <FontAwesomeIcon icon={faAngleDoubleRight} />}
        {!open && <FontAwesomeIcon icon={faAngleDoubleLeft} />}
      </RightAreaButton>
      <RightAreaContainer open={open}>
        <TopRightContainer>
          <TopRightArea>MORE</TopRightArea>
        </TopRightContainer>
        <MainRightContainer>
          <MainRightArea>
            <img src={euFlag} alt="EU flag" />
            <EuNote>
              This project has received funding from the European Union’s
              Horizon 2020 research and innovation programme under grant
              agreement No 691739.
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
    </RightAreaOuterContainer>
  )
}

const RightAreaOuterContainer = styled.div`
  positon: relative;
`

const RightAreaButton = styled.button`
  position: absolute;
  width: 54px;
  height: 54px;
  padding: 10px;
  margin: 0 0 0 -54px;
  border: 0;
  &:focus {
    outline: none;
  }
  cursor: pointer;
  background-color: #82b965;
  color: white;
  font-size: 2.5rem;
  display: none;
  ${media.desktop2`
    display: block;
    ${props =>
      props.open &&
      css`
        position: fixed;
        width: 54px;
        z-index: 700;
      `}
  `}
`

const RightAreaContainer = styled.div`
  flex: 1 0 250px;
  color: #777;
  font-size: 1rem;
  background: #eaeaea;
  margin: 0px;
  line-height: 24px;
  height: 1000px;
  padding-right: calc((100vw - 1380px) / 2);
  ${media.desktop2`
    display: none;
    ${props =>
      props.open &&
      css`
        display: block;
        position: absolute;
        right: 0;
      `}
  `}
`

const TopRightContainer = styled.div`
  background: rgb(51, 54, 59);
  display: flex;
  justify-content: flex-start;
`

const TopRightArea = styled.div`
  min-width: 250px;
  max-width: 250px;
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
  min-width: 250px;
  max-width: 250px;
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
