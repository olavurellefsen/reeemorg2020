import PropTypes from "prop-types"
import styled from "styled-components"
import React from "react"

const LeftArea = ({ disclaimer }) => (
  <DisclaimerStyle>{disclaimer}</DisclaimerStyle>
)

LeftArea.propTypes = {
  disclaimer: PropTypes.string,
}

LeftArea.defaultProps = {
  disclaimer: `FOLLOW`,
}

const DisclaimerStyle = styled.div`
  flex: 0 1 340px;
  color: #777;
  font-size: 15px;
  background: white;
  margin: 0px;
  line-height: 24px;
`

export default LeftArea
