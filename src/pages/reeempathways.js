import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default props => (
  <Layout
    pageTitle="REEEMpathways tool"
    location={props.location}
    showSocialMedia={["bottom"]}
  >
    <SEO title="REEEMpathways tool" />
    <p>
      The REEEMpathways tool is available at{" "}
      <a href="https://reeempathways.org">reeempathways.org</a>
    </p>
  </Layout>
)
