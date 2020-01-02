import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

export default props => (
  <Layout
    pageTitle="REEEM events"
    location={props.location}
    showSocialMedia={["bottom"]}
  >
    <SEO title="REEEM events" />
    <h1>REEEM events 2017-19</h1>
    <ul>
      <li>16-17 May 2017: <a href="/event/european-modelling-platform-for-europe-emp-e-2017-in-brussels">EMP-E 2017</a></li>
      <li>25-26 May 2017: <a href="/event/14th-international-conference-of-young-scientists-on-energy-issues-cyseni-2017">LEI hosts the 14th International Conference of Young Scientists on Energy Issues (CYSENI 2017)</a></li>
      <li>30-31 May 2017: <a href="/event/lei-hosts-52nd-esreda-seminar-on-critical-infrastructures-enhancing-preparedness-resilience-for-the-security-of-citizens-and-services-supply-continuity">LEI and VMU host 52nd ESReDA Seminar On Critical Infrastructures: Enhancing Preparedness & Resilience for the Security of Citizens and Services Supply Continuity</a></li>
      <li>27-28 February 2018: <a href="/event/networking-workshop-on-decision-framing-and-uncertainty">Networking Workshop on Decision Framing and Uncertainty</a></li>
      <li>25-25 September 2018: <a href="/event/energy-modelling-platform-for-europe-emp-e-2018-in-brussels">Energy Modelling Platform for Europe (EMP-E) 2018 in Brussels</a></li>
      <li>26-28 November 2018: <a href="/event/6th-reeem-general-assembly">6th REEEM General Assembly</a></li>
      <li>19 March 2019: <a href="/event/eit-innoenergy-hosts-3rd-reeem-technology-and-innovation-roadmap-workshop-on-energy-efficiency-in-buildings">EIT InnoEnergy hosts 3rd REEEM Technology and Innovation Roadmap Workshop on Energy Efficiency in Buildings</a></li>
      <li>15-16 April 2019: <a href="/event/7th-reeem-general-assembly">7th REEEM General Assembly</a></li>
      <li>4 June 2019: <a href="/event/workshop-regional-aspects-of-european-energy-transition">Workshop: Regional Aspects of European Energy Transition</a></li>
      <li>15-17 July 2019: <a href="/event/reeem-final-meeting">REEEM Final Meeting</a></li>
      <li>8-9 October 2019: <a href="/event/energy-modelling-platform-for-europe-2019-emp-e-2019">Energy Modelling Platform for Europe 2019 (EMP-E 2019)</a></li>
    </ul>
  </Layout>
)
