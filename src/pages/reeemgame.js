import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default (props) => (
  <Layout pageTitle="REEEMgame" location={props.location} showSocialMedia={['bottom']}>
    <SEO title="REEEMgame" />
    <p>
      The REEEMgame is available at <a href="https://reeemgame.org">reeemgame.org</a>
    </p>
  </Layout>
)
