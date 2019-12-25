import PropTypes from "prop-types"
import styled from "styled-components"
import React from "react"

const HigherFooter = ({ disclaimer }) => (
  <DisclaimerStyle>{disclaimer}</DisclaimerStyle>
)

HigherFooter.propTypes = {
  disclaimer: PropTypes.string,
}

HigherFooter.defaultProps = {
  disclaimer: `The sole responsibility for the content of this material lies with the authors. 
  It does not necessarily represent the views of the European Union, and neither EASME nor 
  the European Commission are responsible for any use of this material.`,
}

const DisclaimerStyle = styled.div`
  width: 33%;
  color: #777;
  font-size: 15px;
  background: white;
  margin: 0px;
  line-height: 24px;
  padding: 30px;
`

export default HigherFooter
