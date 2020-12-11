import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default (props) => (
  <Layout pageTitle="REEEMgame" location={props.location} showSocialMedia={['bottom']}>
    <SEO title="REEEMgame" />
    <p>
      The REEEMgame is available at <a href="https://game.reeem.org">game.reeem.org</a>
    </p>
  </Layout>
)
