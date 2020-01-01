import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default (props) => (
  <Layout pageTitle="EnergyPRO" location={props.location} showSocialMedia={['top', 'bottom']}>
    <SEO title="EnergyPRO" />
    <p>EnergyPRO is a commercial modelling software developed by EMD International A/S. It is an input/output model that can be used for combined techno-economic design, analysis and optimization of co- and trigeneration projects. Time step for the analysis is user-defined (e.g. one hour).</p>
    <p>Within the REEEM project, energyPRO is used for modelling the district heating systems of Helsinki region and Warsaw. It solves the optimal heat and electricity production profiles by minimizing the total variable costs. It thus determines the optimal operation of each energy plant, heat pump and use of energy storages. The results show especially how much heat and electricity is produced, how high the production costs are and how much each fuel is consumed.</p>
    <p><a href="https://openenergy-platform.org/factsheets/models/147/">EnergyPRO model FACT SHEET</a></p>
  </Layout>
)
