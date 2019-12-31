import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import projectOverviewImage from "../images/project-overview.png"
export default props => (
  <Layout
    pageTitle="Project Overview"
    location={props.location}
    showSocialMedia={["top", "bottom"]}
  >
    <SEO title="Project Overview" />
    <img src={projectOverviewImage} alt="Project overview diagram" />
    <p>
      The overall approach of this project can be grouped into three main
      stages, which address the overall objectives of this proposal.
    </p>
    <ul>
      <li>
        <b>Trends</b>: This addresses the first objective and part of the second
        objective, namely to develop an integrated assessment framework and to
        define pathways and case studies. Pathways and case studies are defined
        and key assumptions quantified. Technology and Innovation Roadmaps
        define ranges for performance criteria
      </li>
      <li>
        <b>Analysis</b>: The second objective is addressed by assessing the
        pathways and case studies defined under Trends. Indicators are evaluated
        to ensure comparability across impact areas. Pathways and case studies
        are assessed through a suite of tools and models across the three impact
        areas in an integrated fashion
      </li>
      <li>
        <b>Results</b>: The third and fourth objectives are addressed by
        creating a science-policy interface and establish transparency. Various
        deliverables are developed based on the work done under Analysis to
        address the needs of different groups of decision makers
      </li>
    </ul>
  </Layout>
)
