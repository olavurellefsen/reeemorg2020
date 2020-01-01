import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default props => (
  <Layout
    pageTitle="Aalto's in-house model"
    location={props.location}
    showSocialMedia={["top", "bottom"]}
  >
    <SEO title="Aalto's in-house model" />
    <p>
      Aalto’s in-house model is a Matlab-based hourly model that simulates
      district heat production in an open district heating market where external
      heat production is possible. Model minimizes the total production costs so
      that the heat demand is met and determines the hourly running order of the
      energy plants. In REEEM project, model can be used in addition to
      energyPRO in verifying the results from energyPRO.
    </p>
    <p><a href="https://openenergy-platform.org/factsheets/models/149/">Aalto’s in-house model model FACT SHEET</a></p>
  </Layout>
)
