import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default props => (
  <Layout
    pageTitle="EMC2"
    location={props.location}
    showSocialMedia={["top", "bottom"]}
  >
    <SEO title="EMC2" />
    <p>
      EMC² is an emission gridding model for European wide emission inventories.
      By applying source-specific proxy values, the model calculates fine
      gridded emission values with a spatial resolution of either 5km x 5km or
      1km x 1km based on national emission inventories, which are built up by
      multiplying source-specific activity data with appropriate emission
      factors. The model can be applied for different pollutants, ranging from
      classical air pollutants, such as Particulate Matter or NOx, to greenhouse
      gases or heavy metals. For spatial disaggregation the model follows the
      methodology for diffuse emissions in the framework of E-PRTR (European
      pollutant release and transfer register) as developed at the Institute of
      Energy Economics and Rational Energy Use at the University of Stuttgart
      (Theloke et al., 2011).
    </p>
    <p>
      <a href="https://openenergy-platform.org/factsheets/models/145/">EMC2 model FACT SHEET.</a>
    </p>
  </Layout>
)
