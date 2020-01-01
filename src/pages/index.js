import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"
import LatestNews from "../components/latest-news"
import SEO from "../components/seo"
import reeemClouds from "../images/reeem-clouds.jpg"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Latest News</h1>
    <LatestNewsContainer>
      <LatestNews />
    </LatestNewsContainer>
    <ImageStyle
      src={reeemClouds}
      alt="Modelling the transformation of the European Energy System"
    />
    <p>
      REEEM AIMS to gain a clear and comprehensive understanding of the
      system-wide implications of energy strategies in support of transitions to
      a competitive low-carbon EU energy society, given the objectives and
      framework outlined in the Strategic Energy Technology Plan. The provisions
      of the energy services in this society will be defined by their
      sustainability, affordability, efficiency, energy security and
      reliability.
    </p>
    <p>
      The supportive technology impact assessments will target the full
      integration from demand to supply and from the individual to the entire
      system. It will further address the trade-offs across society, environment
      and economy along the whole transition pathway…{" "}
      <Link to="/objectives">Read more</Link>
    </p>
    <hr />
    <br />
    <br />
    <h1>Other News</h1>
    <br />
    {data.allMarkdownRemark.edges.map(({ node }, index) => (
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
    ))}
    <AllNewsStyleContainer>
      <AllNewsStyle to="/sample-page">All news items »</AllNewsStyle>
    </AllNewsStyleContainer>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 10
      skip: 5
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "DD MMMM YYYY")
            coverImage {
              childImageSharp {
                fluid(maxWidth: 345, maxHeight: 172) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt(pruneLength: 570)
        }
      }
    }
  }
`

const ImageStyle = styled.img`
  margin: 0;
`

const LatestNewsContainer = styled.div`
  margin: 60px 0px;
`

const NewsItemStyle = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  margin-bottom: 30px;
`

const ImgStyle = styled(props => <Img {...props} />)`
  width: 345px;
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

const AllNewsStyleContainer = styled.p`
  text-align: right;
`

const AllNewsStyle = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: #3b8dbd;
  font-size: 1.4rem;
  font-weight: normal;
  &:hover {
    color: black;
  }
`
