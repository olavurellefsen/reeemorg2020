import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "reeem-logo-transparent.png" }) {
          childImageSharp {
            fixed(width: 217) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fixed
      return <Img fixed={imageData} />
    }}
  />
)

export default Logo
