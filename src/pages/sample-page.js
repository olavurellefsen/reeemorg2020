import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout pageTitle="NEWS">
    <SEO title="NEWS" />
    {data.allMarkdownRemark.edges.map(({ node }, index) => {
      console.log(node.frontmatter.title)
      return(
      <NewsItemStyle key={index}>
        <ImgStyle sizes={node.frontmatter.coverImage.childImageSharp.fluid} />
          <HeadlineStyle to={node.frontmatter.path}>
            {node.frontmatter.title}
          </HeadlineStyle>
        <DateStyle>{node.frontmatter.date}</DateStyle>
        <ExerptStyle>
          {node.excerpt}{" "}
          <ReadMoreStyle to={node.frontmatter.path}>Read More »</ReadMoreStyle>
        </ExerptStyle>
      </NewsItemStyle>
    )})}
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "DD MMMM YYYY")
            coverImage {
              childImageSharp {
                fluid(maxWidth: 120, maxHeight: 60) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt(pruneLength: 215)
        }
      }
    }
  }
`

const NewsItemStyle = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  margin-bottom: 30px;
`

const ImgStyle = styled(props => <Img {...props} />)`
  width: 120px;
  margin-right: 10px;
  float: left;
`

const HeadlineStyle = styled(props => <Link {...props} />)`
  display: block;
  text-decoration: none;
  color: #777777;
  font-weight: bold;
  &:hover {
    color: black;
  }
`

const DateStyle = styled.p`
  color: #bbbbbb;
  margin-bottom: 0px;
`

const ExerptStyle = styled.div`
  color: #777777;
  font-weight: normal;
  font-size: 0.9rem;
`

const ReadMoreStyle = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: #777777;
  font-weight: normal;
  &:hover {
    color: black;
  }
`
