import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default props => (
  <Layout
    pageTitle="EnergyPLAN"
    location={props.location}
    showSocialMedia={["top", "bottom"]}
  >
    <SEO title="EnergyPLAN" />
    <p>
      EnergyPLAN is an input/output energy system analysis model developed and
      maintained by Aalborg University. It is deterministic and simulates the
      operation of regional and national energy systems on an hourly basis. It
      includes electricity, heating, cooling, industry and transport sectors.
      Within the REEEM project, EnergyPLAN is used for modelling hourly
      electricity prices which are used as inputs to the modelling in energyPRO.
    </p>
    <p><a href="https://openenergy-platform.org/factsheets/models/148/">EnergyPLAN model FACT SHEET</a></p>
  </Layout>
)
