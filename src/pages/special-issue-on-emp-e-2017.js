import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import empe from "../images/empe_150x150.png"

export default props => (
  <Layout
    pageTitle="Special Issue on EMP-E 2017"
    location={props.location}
    showSocialMedia={["bottom"]}
  >
    <SEO title="Special Issue on EMP-E 2017" />
    <ImgStyle src={empe} alt="EMP-E logo" />
    <p>
      The <b>Special Issue</b> focuses on the modelling methodologies, case
      studies and policy-relevant insights discussed at the first meeting of the
      Energy Modelling Platform for Europe (EMP-E) organised by the REEEM
      project.
    </p>

    <p>
      The papers of the Virtual Special Issue ‘
      <b>Energy transition and decarbonisation pathways for the EU</b>‘ of{" "}
      <b>Energy Strategy Reviews (Elsevier)</b> can be found here, with
      introduction by the European Commission’s DG Ener, DG JRC and DG R&I. The
      collection provides a peer-reviewed digest of models and insights on
      decarbonisation pathways for the EU energy system, vis-à-vis the Energy
      Union Strategy. Modelling teams and projects from across Europe
      contributed.
    </p>
  </Layout>
)

const ImgStyle = styled.img`
  height: 150px;
  width: 150px;
`
