import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

export default function Template({ data, location }) {
  const { markdownRemark } = data
  const { html, frontmatter } = markdownRemark
  return (
    <Layout pageTitle={frontmatter.title} location={location}>
      <StyledMain>
        <StyledTitle>{frontmatter.title}</StyledTitle>
        <StyledDate>{frontmatter.date.toUpperCase()}</StyledDate>
        <StyledContent dangerouslySetInnerHTML={{ __html: html }} />
      </StyledMain>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        path
      }
    }
  }
`

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0px;
`

const StyledTitle = styled.h1`
  color: #444444;
  font-size: 3em;
  font-weight: normal;
  margin: 0;
  padding: 0 0 10px 0;
`

const StyledDate = styled.p`
  color: #aaaaaa;
  font-size: 1.2rem;
`

const StyledContent = styled.div`
  &:a {
    text-decoration: none;
  }
`
