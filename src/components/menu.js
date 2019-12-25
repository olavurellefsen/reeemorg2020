import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"

const Menu = ({ menuLinks }) => (
  <NavStyle>
    <MenuListStyle>
      {menuLinks.map(link => (
        <MenuItemStyle key={link.name}>
          <LinkStyle to={link.link}>
            {link.name} <FontAwesomeIcon icon={faCaretDown} />
          </LinkStyle>
        </MenuItemStyle>
      ))}
    </MenuListStyle>
  </NavStyle>
)

Menu.propTypes = {
  menuLinks: PropTypes.array,
}

Menu.defaultProps = {
  menuLinks: [],
}

const NavStyle = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: rgb(51, 54, 59);
  padding: 0;
  list-style: none;
`

const MenuListStyle = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #0a0a0a;
  width: 100vw;
  padding: 0px 15px;
  margin: 0;
  list-style: none;
`

const MenuItemStyle = styled.li`
  font-size: 1rem;
  display: inline-block;
  margin: 0;
  padding: 15px 14px;
`

const LinkStyle = styled(props => <Link {...props} />)`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.25rem;
  text-decoration: none;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`

export default Menu
