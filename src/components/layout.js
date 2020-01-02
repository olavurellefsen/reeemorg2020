import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { media } from "./mediaTemplate"
import Header from "./header"
import Menu from "./menu"
import menuLinks from "./menuLinks"
import HigherFooter from "./higherFooter"
import LeftArea from "./leftArea"
import RightArea from "./rightArea"
import LowerFooter from "./lowerFooter"
import "./layout.css"
import twitterLogo from "../images/twitter.png"
import linkedinLogo from "../images/linkedin.png"

const Layout = ({ children, pageTitle, location, showSocialMedia }) => {
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
        <SideAreaContainer>
          <LeftArea />
        </SideAreaContainer>
        <MainAreaContainer>
          <PageTitleStyle>{pageTitle.toUpperCase()}</PageTitleStyle>
          {showSocialMedia.indexOf("top") !== -1 && (
            <SocialMedia pageTitle={pageTitle} location={location} />
          )}
          <MainArea>{children}</MainArea>
          {showSocialMedia.indexOf("bottom") !== -1 && (
            <SocialMedia pageTitle={pageTitle} location={location} />
          )}
        </MainAreaContainer>
        <SideAreaContainer>
          <RightArea />
        </SideAreaContainer>
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

const SocialMedia = ({ pageTitle, location }) => (
  <>
    {!(
      Object.entries(location).length === 0 && location.constructor === Object
    ) && (
      <SocialMediaContainer>
        <a
          href={`https://twitter.com/share?url=${location.href}&text=${pageTitle}`}
        >
          <SocialMediaIcon src={twitterLogo} />
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${location.href}`}
        >
          <SocialMediaIcon src={linkedinLogo} />
        </a>
      </SocialMediaContainer>
    )}
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string,
  location: PropTypes.object,
  showSocialMedia: PropTypes.array,
}

Layout.defaultProps = {
  pageTitle: ``,
  location: {},
  showSocialMedia: ["bottom"],
}

const OuterTopContainer = styled.div`
  padding: 0;
  background: rgb(51, 54, 59);
`

const InnerTopContainer = styled.div`
  min-width: 320px;
  max-width: 1360px;
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
  overflow-x: hidden;
`

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  margin-bottom: -20px;
`

const SocialMediaIcon = styled.img`
  width: 47px;
  height: 47px;
  padding: 6px;
`

const SideAreaContainer = styled.div`
  z-index: 200;
`

const MainAreaContainer = styled.main`
  flex: 1 1 740px;
  min-width: 320px;
  max-width: 780px;
  background: white;
  z-index: 100;
`

const PageTitleStyle = styled.div`
  font-weight: bold;
  color: #666;
  padding: 15px 30px;
  border-bottom: 1px solid #eee;
  ${media.desktop3`padding-left: 84px;`}
`

const MainArea = styled.main`
  padding: 30px;
`

const HigherBottomContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  min-width: 320px;
  max-width: 1320px;
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
