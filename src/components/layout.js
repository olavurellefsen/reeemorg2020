import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Menu from "./menu"
import menuLinks from "./menuLinks"
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
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </MainContainer>
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
  padding: 0px 1.0875rem 1.45rem;
  max-width: 960px;
  margin: 0 auto;
`

export default Layout
