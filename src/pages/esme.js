import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default props => (
  <Layout
    pageTitle="ESME"
    location={props.location}
    showSocialMedia={["top", "bottom"]}
  >
    <SEO title="ESME" />
    <p>
      The ESME (Energy Systems Modelling Environment) model is national
      integrated energy systems model for the UK, used to simulate a range of
      different low carbon pathways. Built in the AIMMS environment, the model
      uses linear programming to assess cost-optimal technology portfolios
      across all sectors of the energy system, to deliver CO2 emission
      reductions (Heaton 2014). It is spatially resolved, providing insights on
      the energy system change across different regions of the UK (Li, Pye, and
      Strachan 2016). ESME also features a module for simulating large numbers
      of runs to explore parametric uncertainty of model inputs, through Monte
      Carlo sampling (Pye, Sabio, and Strachan 2015; Pye, Usher, and Strachan
      2014), and it is this feature that is used in the REEEM project. In
      addition to its use in research, ESME has been used to inform energy
      policy and strategy in the UK, both for the Department for Energy and
      Climate Change (DECC 2011), [1] and the UK Committee on Climate Change
      (CCC) (CCC 2013, 2011).
    </p>
    <p><a href="https://openenergy-platform.org/factsheets/models/144/">ESME model FACT SHEET</a></p>
  </Layout>
)
