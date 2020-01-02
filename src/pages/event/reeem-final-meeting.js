import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import reeemfinal from "../../images/reeem_finalmeeting.png"

export default props => (
  <Layout
    pageTitle="REEEM Final Meeting"
    location={props.location}
    showSocialMedia={["bottom"]}
  >
    <SEO title="REEEM Final Meeting" />
    <h1>REEEM Final Meeting</h1>
    <div>
      <h2>15th July 2019 - 17th July 2019</h2>
      <img src={reeemfinal} alt="REEEM Final Meeting" />
    </div>
    <p>
      After three years, the REEEM project comes to an end by the end of July.
      For this occasion, the final meeting of the REEEM project partners will
      take place from July 15th – 17th in Brussels at the European Commission.
      In three days, all partners come together to discuss the success of the
      project
    </p>
  </Layout>
)
