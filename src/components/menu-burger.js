import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import React from "react"

const MenuBurger = ({ open, menuLinks }) => (
  <NavStyle open={open}>
    <MenuListStyle>
      {menuLinks.map(link => (
        <MenuItemStyle key={link.name}>
          <TopLinkStyle to={link.link}>{link.name} </TopLinkStyle>
          {link.hasOwnProperty("submenu") ? (
            <>
              <DropdownContentStyle>
                {link.submenu.map(sublink => (
                  <SubItemStyle key={sublink.name}>
                    <SubLinkStyle to={sublink.link}>
                      {sublink.name}
                    </SubLinkStyle>
                    {sublink.hasOwnProperty("submenu") ? (
                      <>
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

MenuBurger.propTypes = {
  open: PropTypes.bool,
  menuLinks: PropTypes.array,
}

MenuBurger.defaultProps = {
  menuLinks: [],
}

const NavStyle = styled.nav`
  position: absolute;
  z-index: 500;
  display: ${props => props.open ? 'flex' : 'none'};
  left: 10px;
  top: 15px;
  width: 95vw;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  background: rgb(51, 54, 59);
  padding: 0;
  list-style: none;
`

const MenuListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: #0a0a0a;
  padding: 50px 30px;
  margin: 0;
  list-style: none;
`

const MenuItemStyle = styled.li`
  position: relative;
  display: inline-block;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.2rem;
  margin: 0;
  padding: 0;
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
  display: block;
  position: relative;
  background: #0a0a0a;
  min-width: 160px;
  z-index: 1;
  list-style: none;
  padding: 10px 0 10px 40px;
  margin: 0 0 0 -10px;
  z-index: 400;
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
`

const DroprightContentStyle = styled.ul`
  display: block;
  background: #0a0a0a;
  min-width: 160px;
  z-index: 1;
  list-style: none;
  padding: 10px 0;
`

export default MenuBurger
