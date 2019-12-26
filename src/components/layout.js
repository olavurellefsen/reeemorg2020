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

const Layout = ({ children, pageTitle }) => {
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
        <MainAreaContainer>
          <PageTitleStyle>{pageTitle}</PageTitleStyle>
          <MainArea>{children}</MainArea>
        </MainAreaContainer>
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
  pageTitle: PropTypes.string,
}

Layout.defaultProps = {
  pageTitle: ``,
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
  background: #eaeaea;
  padding: 0px 0px 60px 0px;
  font-size: 1rem;
  line-height: 24px;
`

const MainAreaContainer = styled.main`
  flex: 1 0 780px;
  min-width: 320px;
  max-width: 780px;
  background: white;
`

const PageTitleStyle = styled.div`
  font-weight: bold;
  color: #666;
  padding: 15px 30px;
  border-bottom: 1px solid #eee;
`

const MainArea = styled.main`
  padding: 30px;
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
