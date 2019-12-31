import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default (props) => (
  <Layout pageTitle="MESSAGE" location={props.location} showSocialMedia={['top', 'bottom']}>
    <SEO title="MESSAGE" />
    <p>
Lorum ipsum
    </p>
  </Layout>
)
