import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default props => (
  <Layout
    pageTitle="LEcA Tool"
    location={props.location}
    showSocialMedia={["top", "bottom"]}
  >
    <SEO title="LEcA Tool" />
    <p>
      Traditionally, analyses focusing on the optimal development of EU or
      national energy systems seldom take into account major constraints related
      to the use of biomass. Hence, the choice in REEEM to integrate multiple
      ecosystem services and biodiversity in the assessment of energy transition
      plans and, specifically, plans for increasing use of forest biomass as a
      renewable energy source is crucial.
    </p>
    <p>
      The REEEM project targets to gain a comprehensive understanding of the
      system-wide implications of energy strategies in support of transitions to
      a competitive low-carbon EU society. The Landscape simulation and
      Ecological Assessment (LEcA) tool aims to create a link between energy
      assessment models and the assessment of multiple ecosystem services. The
      case study of Lithuania uses the LEcA tool, which consists of modules for
      simulation of forest management and growth, as well as the resulting
      bioenergy feedstock yield, industrial wood production, carbon storage,
      recreation area and habitat networks for prioritized biodiversity
      components. This will enable the integration of relevant ecosystem
      services, including a sustainable production of forest bioenergy
      feedstock, in sustainability assessment of energy policies and related
      forest bioenergy options.
    </p>
    <p><a href="https://openenergy-platform.org/factsheets/models/150/">LEcA Tool model FACT SHEET</a></p>
  </Layout>
)
