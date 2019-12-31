import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default (props) => (
  <Layout pageTitle="EMC2" location={props.location} showSocialMedia={['top', 'bottom']}>
    <SEO title="EMC2" />
    <p>
Lorum ipsum
    </p>
  </Layout>
)
