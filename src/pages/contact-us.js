import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default props => (
  <Layout
    pageTitle="Objectives"
    location={props.location}
  >
    <SEO title="Objectives" />
    <p>To contact REEEM, please send an email to:</p>
    <ContactListStyle>
      <ListItemStyle>
        Coordinator: Georgios Avgerinopoulos (KTH) –
        <a href="mailto:georgios.avgerinopoulos@desa.kth.se">
          georgios.avgerinopoulos@desa.kth.se
        </a>
      </ListItemStyle>
      <ListItemStyle>
        Scenario: Francesco Gardumi (KTH) –{" "}
        <a href="mailto:gardumi@kth.se">gardumi@kth.se</a>
      </ListItemStyle>
      <ListItemStyle>
        Data: Ludwig Hülk (RLI) –{" "}
        <a href="mailto:ludwig.huelk@rl-institut.de">
          ludwig.huelk@rl-institut.de
        </a>
      </ListItemStyle>
      <ListItemStyle>
        Methodology: Ulrich Fahl (IER) –{" "}
        <a href="mailto:ulrich.fahl@ier.uni.stuttgart.de">
          ulrich.fahl@ier.uni.stuttgart.de
        </a>
      </ListItemStyle>
      <ListItemStyle>
        D&E: Olavur Ellefsen (TOKNI) –{" "}
        <a href="mailto:oe@tokni.com">oe@tokni.com</a>
      </ListItemStyle>
    </ContactListStyle>
  </Layout>
)

const ContactListStyle = styled.ul`
  list-style-type: square;
`

const ListItemStyle = styled.li`
  margin-bottom: 0px;
`