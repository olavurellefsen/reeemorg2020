import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default (props) => (
  <Layout pageTitle="Blog" location={props.location} showSocialMedia={['top', 'bottom']}>
    <SEO title="Blog" />
    <p>
Lorum ipsum
    </p>
  </Layout>
)
