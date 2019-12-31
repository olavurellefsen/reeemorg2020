import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default (props) => (
  <Layout pageTitle="ESME" location={props.location} showSocialMedia={['top', 'bottom']}>
    <SEO title="ESME" />
    <p>
Lorum ipsum
    </p>
  </Layout>
)
