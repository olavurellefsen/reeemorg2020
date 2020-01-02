import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import { media } from "./mediaTemplate"
import Burger from "./Burger/Burger"
import MenuBurger from "./menu-burger"
import menuLinks from "./menuLinks"
import reeemLogo from "../images/reeem-logo.png"

const Header = ({ siteDescription }) => {
  const [open, setOpen] = useState(false)
  const menuId = "main-menu"

  return(
  <HeaderStyle>
    <LogoLinkStyle to="/">
      <ImgStyle src={reeemLogo} alt="REEEM logo" />
    </LogoLinkStyle>
    <SiteDescriptionStyle>{siteDescription}</SiteDescriptionStyle>
    <BurgerMenuStyle>
      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
      <MenuBurger open={open} menuLinks={menuLinks} />
    </BurgerMenuStyle>
  </HeaderStyle>
)}

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
  padding: 30px;
`

const LogoLinkStyle = styled(props => <Link {...props} />)`
  display: flex;
  align-items: center;
`

const ImgStyle = styled.img`
  margin: 0;
  ${media.phone1`width: 70%;`}
`

const SiteDescriptionStyle = styled.div`
  font-size: 1em;
  font-style: italic;
  color: rgba(255, 255, 255, 0.5);
  margin-left: 20px;
  line-height: 60px;
  padding: 10px 0;
  ${media.phone1`display: none;`}
`

const BurgerMenuStyle = styled.div`
  display: none;
  ${media.phone1`display: block;`}
`

export default Header
