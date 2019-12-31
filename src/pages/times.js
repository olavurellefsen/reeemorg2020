import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default (props) => (
  <Layout pageTitle="Times" location={props.location} showSocialMedia={['top', 'bottom']}>
    <SEO title="Times" />
    <p>
Lorum ipsum
    </p>
  </Layout>
)
