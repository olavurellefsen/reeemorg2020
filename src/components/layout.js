import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Menu from "./menu"
import menuLinks from "./menuLinks"
import HigherFooter from "./higherFooter"
import LeftArea from "./leftArea"
import RightArea from "./rightArea"
import LowerFooter from "./lowerFooter"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)

  return (
    <>
      <OuterTopContainer>
        <InnerTopContainer>
          <Header siteDescription={data.site.siteMetadata.description} />
          <Menu menuLinks={menuLinks} />
        </InnerTopContainer>
      </OuterTopContainer>
      <MainContainer>
        <LeftArea />
        <MainArea>{children}</MainArea>
        <RightArea />
      </MainContainer>
      <footer>
        <HigherBottomContainer>
          <HigherFooter />
        </HigherBottomContainer>
        <LowerBottomContainer>
          <LowerFooter />
        </LowerBottomContainer>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const OuterTopContainer = styled.div`
  padding: 0 20px;
  background: rgb(51, 54, 59);
`

const InnerTopContainer = styled.div`
  min-width: 320px;
  max-width: 1380px;
  width: 100%;
  margin: 0 auto;
`

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px;
  min-width: 320px;
  max-width: 1380px;
  margin: 0 auto;
`

const MainArea = styled.main`
  flex: 1 0 780px;
`

const HigherBottomContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  min-width: 320px;
  max-width: 1380px;
  width: 100%;
  margin: 20px auto;
  padding: 0 20px;
  background: white;
`

const LowerBottomContainer = styled.div`
  padding: 0 20px;
  background: rgb(51, 54, 59);
`

export default Layout
