import styled from "styled-components"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

const LowerFooter = () => (
  <LowerFooterStyle>
    <CopyrightStyle>© REEEM 2016-{new Date().getFullYear()}</CopyrightStyle>
    <TwitterStyle href="https://twitter.com/ReeemProject">
      <FontAwesomeIcon icon={faTwitter} />
    </TwitterStyle>
  </LowerFooterStyle>
)

const LowerFooterStyle = styled.div`
  min-width: 320px;
  max-width: 1380px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(51, 54, 59);
  padding: 30px 50px;
`

const CopyrightStyle = styled.a`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
`

const TwitterStyle = styled.a`
  font-size: 1.75em;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`

export default LowerFooter
