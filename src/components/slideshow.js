import React, { useState, useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
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

const SlideShow = () => {
  const [index, setIndex] = useState(0)
  const [resetInterval, setResetInterval] = useState(false)

  useInterval(
    () => {
      handleNext()
    },
    !resetInterval ? 4000 : setResetInterval(false)
  )
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "images/empe2017" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 721, maxHeight: 401) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `
  )

  const length = allFile.edges.length - 1
  const handleNext = () => {
    index === length ? setIndex(0) : setIndex(index + 1)
    setResetInterval(true)
  }
  const handlePrevious = () => {
    index === 0 ? setIndex(length) : setIndex(index - 1)
    setResetInterval(true)
  }
  const { node } = allFile.edges[index]

  return (
    <div>
      <SlideshowStyle>
        <Img
          fluid={node.childImageSharp.fluid}
          key={node.id}
          alt={node.name.replace(/-/g, " ").substring(2)}
          imgStyle={{ objectFit: "contain" }}
        />
        <LeftArrow onClick={() => handlePrevious()}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </LeftArrow>
        <RightArrow onClick={() => handleNext()}>
          <FontAwesomeIcon icon={faChevronRight} />
        </RightArrow>
      </SlideshowStyle>
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
  color: white;
  font-size: 2rem;
  width: 33px;
  height: 31px;
  top: 185px;
  left: 15px;
`

const RightArrow = styled.div`
  position: absolute;
  color: white;
  font-size: 2rem;
  width: 33px;
  height: 31px;
  top: 185px;
  right: 15px;
`

export default SlideShow
