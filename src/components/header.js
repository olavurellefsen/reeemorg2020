import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import React from "react"
import reeemLogo from "../images/reeem-logo.png"

const Header = ({ siteDescription }) => (
  <HeaderStyle>
    <LogoLinkStyle to="/">
      <img src={reeemLogo} alt="REEEM logo" />
    </LogoLinkStyle>
    <SiteDescriptionStyle>{siteDescription}</SiteDescriptionStyle>
  </HeaderStyle>
)

Header.propTypes = {
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteDescription: ``,
}

const HeaderStyle = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: rgb(51, 54, 59);
  padding: 30px 50px;
`

const LogoLinkStyle = styled(props => <Link {...props} />)`
  display: flex;
  align-items: center;
`

const SiteDescriptionStyle = styled.div`
  font-size: 1em;
  font-style: italic;
  color: rgba(255,255,255,.5);
  margin-left: 20px;
  line-height: 60px;
  padding: 10px 0;
`

export default Header
