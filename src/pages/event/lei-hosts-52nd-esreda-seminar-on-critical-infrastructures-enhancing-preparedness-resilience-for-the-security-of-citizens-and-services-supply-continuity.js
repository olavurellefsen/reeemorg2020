import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import esrada from "../../images/esrada-logo2016-wide.svg"

export default props => (
  <Layout
    pageTitle="LEI and VMU host 52nd ESReDA Seminar On Critical Infrastructures"
    location={props.location}
    showSocialMedia={["bottom"]}
  >
    <SEO title="LEI and VMU host 52nd ESReDA Seminar On Critical Infrastructures" />
    <h1>
      LEI and VMU host 52nd ESReDA Seminar On Critical Infrastructures:
      Enhancing Preparedness & Resilience for the Security of Citizens and
      Services Supply Continuity
    </h1>
    <div>
      <h2>30th May 2017 - 31st May 2017</h2>
      <img src={esrada} alt="ESReDA" />
    </div>
    <div>
      <h3>Subject</h3>

      <p>
        Critical Infrastructures Preparedness and Resilience (CIP&R) is a major
        societal security issue in modern society. Critical Infrastructures
        (CIs) provide vital services to modern societies. Some CIs’ disruptions
        may endanger the security of the citizen, the safety of the strategic
        assets and even the governance continuity.
      </p>

      <p>
        The critical role that CIs play in the security of modern societies is a
        direct effect of the ever-increasing spread out of the information
        technology (IT) in every smallest task in man’s daily-life. The
        continuous progress in the IT fields pushes modern systems and
        infrastructures to be more and more: intelligent, distributed and
        proactive. That increases the productivity, the prosperity and the
        living standards of the modern societies. But, it increases the
        complexity of the systems and the infrastructures, as well. The more
        complex a system is, the more vulnerable it will be and the more
        numerous the threats that can impact on its operability. The loss of
        operability of critical infrastructures may result in major crises in
        modern societies.
      </p>

      <p>
        To counterbalance the increasing vulnerability of the systems,
        engineers, designers and operators should enhance the system
        preparedness and resilience facing different threats. Much interest is
        currently paid to the Modelling, Simulation & Analysis (SM&A) of the CI
        in order to enhance the CIs’ preparedness & resilience.
      </p>

      <p>
        The European Safety, Reliability and Data Association (ESReDA) as one of
        the most active EU networks in the field has initiated a project group
        (CI‐PR/MS&A‐Data) on the “Critical Infrastructure/Modelling, Simulation
        and Analysis – Data”. The main focus of the project group is to report
        on the state of progress in MS&A of the CIs preparedness & resilience
        with a specific focus on the corresponding data availability and
        relevance.
      </p>

      <p>
        In order to report on the most recent developments in the field of the
        CIs preparedness & resilience MS&A and the availability of the relevant
        data, ESReDA will hold its 52nd Seminar on the following thematic:
        “Critical Infrastructures: Enhancing Preparedness & Resilience for the
        security of citizens and services supply continuity”.
      </p>

      <h3>Topics</h3>
      <ul>
        <li>Threats identifications & specifications</li>
        <li>CIs disruptions MS&A</li>
        <li>CI’s vulnerability MS&A</li>
        <li>CIs’ dependencies and interdependency MS&A</li>
        <li>Data and Databases</li>
        <li>Emergency and crises management models & tools</li>
        <li>IT inferences on CIs preparedness & resilience</li>
        <li>Standards & Ontology in the domain of CI protection (CIP)</li>
      </ul>
      <h3>Time and place</h3>
      <p>
        The seminar will take place on the 31th-31st of May, 2017 at Vytauto
        Didžiojo universitetas / Vytautas Magnus University (VMU) S. Daukanto g.
        28 (Small Hall, 2nd floor).
      </p>

      <h3>Registration</h3>

      <p>
        A registration form and the practical information package will be made
        available <a href="https://esreda.org/">on the ESReDA website</a>.
      </p>

      <p>
        For more information on the conference, venue, programme and up-to-date
        information visit <a href="https://esreda.org/">esreda.org</a>
      </p>
    </div>
  </Layout>
)
