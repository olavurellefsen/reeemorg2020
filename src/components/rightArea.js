import PropTypes from "prop-types"
import styled from "styled-components"
import React from "react"

const RightArea = ({ disclaimer }) => (
  <DisclaimerStyle>{disclaimer}</DisclaimerStyle>
)

RightArea.propTypes = {
  disclaimer: PropTypes.string,
}

RightArea.defaultProps = {
  disclaimer: `MORE`,
}

const DisclaimerStyle = styled.div`
  flex: 0 1 260px;
  color: #777;
  font-size: 15px;
  background: white;
  margin: 0px;
  line-height: 24px;
`

export default RightArea
