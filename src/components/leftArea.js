import React, { useState } from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import tickmark from "../images/tickmark.png"
import latestDeliverables from "./latestDeliverables"
import { media } from "./mediaTemplate"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import {
  faAngleDoubleRight,
  faAngleDoubleLeft,
} from "@fortawesome/free-solid-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const LeftArea = () => {
  const [open, setOpen] = useState(false)
  return (
    <LeftAreaOuterContainer>
      <LeftAreaButton open={open} onClick={() => setOpen(!open)}>
        {!open && <FontAwesomeIcon icon={faAngleDoubleRight} />}
        {open && <FontAwesomeIcon icon={faAngleDoubleLeft} />}
      </LeftAreaButton>
      <LeftAreaContainer open={open}>
        <TopLeftContainer>
          <TopLeftArea>
            <FollowStyle open={open}>FOLLOW:</FollowStyle>
            <TwitterStyle href="https://twitter.com/ReeemProject">
              <FontAwesomeIcon icon={faTwitter} />
            </TwitterStyle>
          </TopLeftArea>
        </TopLeftContainer>
        <MainLeftContainer>
          <MainLeftArea>
            <h4>
              <ImgStyle src={tickmark} alt="Tickmark" />
              LATEST DELIVERABLES
            </h4>
            {latestDeliverables.map((deliverable, index) => (
              <p key={index}>
                <Deliverable href={deliverable.link}>
                  {deliverable.name}
                </Deliverable>
              </p>
            ))}
            <p>
              <LinkStyle to="/deliverables-by-theme">
                See all deliverables HERE
              </LinkStyle>
            </p>
            <HeadingStyle>PROJECT FACT SHEET</HeadingStyle>
            <p>
              <b>Acronym</b>: REEEM
              <br />
              <b>Title</b>: Role of technologies in an energy efficient economy
              – model based analysis policy measures and transformation pathways
              to a sustainable energy system
              <br />
              <b>Call</b>: H2020-LCE
              <br />
              <b>Funding scheme</b>: RIA – Research and innovation action
              <br />
              <b>Grant agreement no.</b>: 691739
              <br />
              <b>Duration</b>: 42 Months
              <br />
              <b>Start date</b>: February 2016
              <br />
              <b>Estimated Project cost</b>: €3,997,458.75
              <br />
              <b>Requested EU contribution</b>: €3,997,458.75
              <br />
              <b>Total effort</b>: 423.5 Person-months
              <br />
              <b>Project coordinator</b>: Mark Howells – Department of Energy
              Technology, School of Industrial Engineering and Management,
              Kungliga Tekniska Högskolan (KTH Royal Institute of Technology)
              <br />
              <b>Project Officer</b>: Manuela Conconi
            </p>

            <HeadingStyle>EVENTS</HeadingStyle>
            <p>
              <LinkStyle to="/event">See previous events HERE</LinkStyle>
            </p>
          </MainLeftArea>
        </MainLeftContainer>
      </LeftAreaContainer>
    </LeftAreaOuterContainer>
  )
}

const LeftAreaOuterContainer = styled.div`
  positon: relative;
`

const LeftAreaButton = styled.button`
  position: absolute;
  width: 54px;
  height: 54px;
  margin: 0 -54px 0 0;
  border: 0;
  &:focus {
    outline: none;
  }
  cursor: pointer;
  background-color: #3b8dbd;
  color: white;
  font-size: 2.5rem;
  display: none;
  ${media.desktop3`
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

const LeftAreaContainer = styled.div`
  flex: 1 0 330px;
  color: #777;
  font-size: 1rem;
  margin: 0px;
  line-height: 24px;
  background: #eaeaea;
  padding-left: calc((100vw - 1380px) / 2);
  ${media.desktop3`
    display: none;
    ${props =>
      props.open &&
      css`
        display: block;
        position: absolute;
        left: 0;
      `}
  `}
`

const TopLeftContainer = styled.div`
  background: rgb(51, 54, 59);
  display: flex;
  justify-content: flex-end;
`

const TopLeftArea = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 330px;
  max-width: 330px;
  color: white;
  background: #3b8dbd;
  padding: 15px 30px;
`

const FollowStyle = styled.p`
  font-size: 1rem;
  margin: 0;
  padding-left: ${props => (props.open ? "40px" : "0")};
`

const TwitterStyle = styled.a`
  font-size: 1.75em;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`

const MainLeftContainer = styled.div`
  background: #eaeaea;
  display: flex;
  justify-content: flex-end;
`

const MainLeftArea = styled.div`
  min-width: 330px;
  max-width: 330px;
  color: #777;
  background: #f0f0f0;
  padding: 30px;
`

const HeadingStyle = styled.h4`
  padding-top: 40px;
`

const ImgStyle = styled.img`
  margin: 0;
`

const Deliverable = styled.a`
  font-size: 1rem;
  color: #777;
  text-decoration: none;
  &:hover {
    color: black;
  }
`

const LinkStyle = styled(props => <Link {...props} />)`
  font-size: 1rem;
  color: #777;
  text-decoration: none;
  &:hover {
    color: black;
  }
`

export default LeftArea
