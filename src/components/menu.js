import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons"

const Menu = ({ menuLinks }) => (
  <NavStyle>
    <MenuListStyle>
      {menuLinks.map(link => (
        <MenuItemStyle key={link.name}>
          <TopLinkStyle to={link.link}>{link.name} </TopLinkStyle>
          {link.hasOwnProperty("submenu") ? (
            <>
              <TopLinkStyle to={link.link}>
                <FontAwesomeIcon icon={faCaretDown} />
              </TopLinkStyle>
              <DropdownContentStyle>
                {link.submenu.map(sublink => (
                  <SubItemStyle key={sublink.name}>
                    <SubLinkStyle to={sublink.link}>
                      {sublink.name}
                    </SubLinkStyle>
                    {sublink.hasOwnProperty("submenu") ? (
                      <>
                        <SubLinkIconStyle to={sublink.link}>
                          {" "}
                          <FontAwesomeIcon icon={faCaretRight} />
                        </SubLinkIconStyle>
                        <DroprightContentStyle>
                          {sublink.submenu.map(subsublink => (
                            <SubItemStyle key={subsublink.name}>
                              <SubLinkStyle to={subsublink.link}>
                                {subsublink.name}
                              </SubLinkStyle>
                            </SubItemStyle>
                          ))}
                        </DroprightContentStyle>
                      </>
                    ) : (
                      ""
                    )}
                  </SubItemStyle>
                ))}
              </DropdownContentStyle>
            </>
          ) : (
            ""
          )}
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
  position: relative;
  display: inline-block;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  margin: 0;
  padding: 15px 14px;
`

const TopLinkStyle = styled(props => <Link {...props} />)`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.25rem;
  text-decoration: none;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`

const DropdownContentStyle = styled.ul`
  display: none;
  position: absolute;
  background: #0a0a0a;
  min-width: 160px;
  z-index: 1;
  list-style: none;
  padding: 10px 0;
  margin: 0 0 0 -10px;
  ${MenuItemStyle}:hover & {
    display: block;
  }
`

const SubItemStyle = styled.li`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  padding: 10px 10px;
  margin: 0;
`

const SubLinkStyle = styled(props => <Link {...props} />)`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.25rem;
  text-decoration: none;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`

const SubLinkIconStyle = styled(props => <Link {...props} />)`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.25rem;
  text-decoration: none;
  float: right;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`

const DroprightContentStyle = styled.ul`
  display: none;
  position: absolute;
  background: #0a0a0a;
  min-width: 160px;
  z-index: 1;
  list-style: none;
  padding: 10px 0;
  left: 150px;
  margin: -30px 0 0 5px;
  ${SubItemStyle}:hover & {
    display: block;
  }
`

export default Menu
