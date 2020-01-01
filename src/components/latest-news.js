import React, { useState, useEffect, useRef } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

export default () => {
  const [index, setIndex] = useState(0)
  const [resetInterval, setResetInterval] = useState(false)

  useInterval(
    () => {
      handleNext()
    },
    !resetInterval ? 4000 : setResetInterval(false)
  )
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { fields: frontmatter___date, order: DESC }
          limit: 5
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                path
                date(formatString: "DD MMMM YYYY")
                coverImage {
                  childImageSharp {
                    fluid(maxWidth: 690, maxHeight: 344) {
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
  )

  const length = allMarkdownRemark.edges.length - 1
  const handleNext = () => {
    index === length ? setIndex(0) : setIndex(index + 1)
    setResetInterval(true)
  }
  const handlePrevious = () => {
    index === 0 ? setIndex(length) : setIndex(index - 1)
    setResetInterval(true)
  }
  const { node } = allMarkdownRemark.edges[index]

  return (
    <div>
      <SlideshowStyle>
        <Img
          fluid={node.frontmatter.coverImage.childImageSharp.fluid}
          key={node.id}
          alt={node.frontmatter.title.replace(/-/g, " ").substring(2)}
          imgStyle={{ objectFit: "contain" }}
        />
        <LeftArrow onClick={() => handlePrevious()}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </LeftArrow>
        <RightArrow onClick={() => handleNext()}>
          <FontAwesomeIcon icon={faChevronRight} />
        </RightArrow>
      </SlideshowStyle>
      <DateStyle>{node.frontmatter.date}</DateStyle>
      <HeadlineContainerStyle>
        <HeadlineStyle to={node.frontmatter.path}>
          {node.frontmatter.title}
        </HeadlineStyle>{" "}
      </HeadlineContainerStyle>
      <ExerptStyle>{node.excerpt}</ExerptStyle>
    </div>
  )
}

const useInterval = (callback, delay) => {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }

    let id = setInterval(tick, delay)
    return () => clearInterval(id)
  }, [delay])
}

const SlideshowStyle = styled.div`
  position: relative;
`

const LeftArrow = styled.div`
  position: absolute;
  color: #bbb;
  font-size: 2rem;
  width: 33px;
  height: 31px;
  top: -40px;
  right: 65px;
  cursor: pointer;
`

const RightArrow = styled.div`
  position: absolute;
  color: #bbb;
  font-size: 2rem;
  width: 33px;
  height: 31px;
  top: -40px;
  right: 15px;
  cursor: pointer;
`

const HeadlineContainerStyle = styled.h2`
  display: block;
  color: #3b8dbd;
  text-align: left;
`

const HeadlineStyle = styled(props => <Link {...props} />)`
  display: block;
  text-decoration: none;
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
