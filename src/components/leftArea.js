import { Link } from "gatsby"
import styled from "styled-components"
import React from "react"
import latestDeliverables from "./latestDeliverables"
import tickmark from "../images/tickmark.png"

const LeftArea = () => (
  <LeftAreaContainer>
    <TopLeftArea>FOLLOW:</TopLeftArea>
    <MainLeftArea>
      <img src={tickmark} alt="Tickmark" />
      <h2>LATEST DELIVERABLES</h2>
      {latestDeliverables.map(deliverable => (
        <p>
          <a href={deliverable.link} id={deliverable.name}>
            {deliverable.name}
          </a>
        </p>
      ))}
      <Link to="/deliverables-by-theme">See all deliverables HERE</Link>

      <h2>PROJECT FACT SHEET</h2>
      <p>Acronym: REEEM</p>
      <p>
        Title: Role of technologies in an energy efficient economy – model based
        analysis policy measures and transformation pathways to a sustainable
        energy system
      </p>
      <p>Call: H2020-LCE</p>
      <p>Funding scheme: RIA – Research and innovation action</p>
      <p>Grant agreement no.: 691739</p>
      <p>Duration: 42 Months</p>
      <p>Start date: February 2016</p>
      <p>Estimated Project cost: €3,997,458.75</p>
      <p>Requested EU contribution: €3,997,458.75</p>
      <p>Total effort: 423.5 Person-months</p>
      <p>
        Project coordinator: Mark Howells – Department of Energy Technology,
        School of Industrial Engineering and Management, Kungliga Tekniska
        Högskolan (KTH Royal Institute of Technology)
      </p>
      <p>Project Officer: Manuela Conconi</p>

      <h2>UPCOMING EVENTS</h2>
      <p>There are no upcoming events at this time.</p>

      <Link to="/events">See previous events HERE</Link>
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
