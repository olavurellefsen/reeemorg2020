import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default props => (
  <Layout
    pageTitle="Plexos"
    location={props.location}
    showSocialMedia={["top", "bottom"]}
  >
    <SEO title="Plexos" />
    <p>
      PLEXOS Integrated Energy Model is a simulation software designed for
      energy market analysis. It was first developed as an electricity market
      simulator. Its functionality was then extended so that the recent versions
      of PLEXOS integrate electric power, gas, heat and water. PLEXOS is a
      high-performance simulation platform, operationally used by energy market
      participants, system planners, investors, regulators, consultants and
      analysts worldwide. The PLEXOS simulations are based on mathematical
      programming. The system supports various planning horizons from long-term
      to short-term, and several different time steps: the simulated time frames
      can range from minutes and hours to tens of years. The PLEXOS models can
      capture specifics of short-term operational limits, as well as the effects
      of system expansion. Further information and details on PLEXOS can be
      found on Energy Exemplar web site [1].
    </p>
    <p>
      Within REEEM, PLEXOS is used for modelling in case study on “Grid and
      Dispatch in South-Eastern Europe”. The main objective of this case study
      is to verify the feasibility of dispatch calculated in the Integrated
      European Model (IEM) for five countries in South-Eastern Europe and to
      analyse the influence of short-term variability on long-term investments
      and resulting system configurations.
    </p>
    <p><a href="https://openenergy-platform.org/factsheets/models/152/">PLEXOS model FACT SHEET</a></p>
  </Layout>
)
