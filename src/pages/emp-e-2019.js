import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import empe from "../images/empe_720x360.jpg"

export default props => (
  <Layout
    pageTitle="EMP-E 2019"
    location={props.location}
    showSocialMedia={["top", "bottom"]}
  >
    <SEO title="EMP-E 2019" />
    <p>
      The first Energy Modelling Platform for Europe (EMP-E) event was created
      within the REEEM project and was held in Brussels in 2017.
    </p>

    <p>
      The second EMP-E was held held on 25th-26th September 2018, at the
      premises of the European Commission’s DG R&I in Brussels.
    </p>

    <ImgStyle src={empe} alt="Energy Modelling Platform for Europe logo" />
    <p>
      The third <a href="http://www.energymodellingplatform.eu/home-emp-e-2019.html">Energy Modelling Platform for Europe Conference (EMP-E 2019)</a>,
      hosted by the European Commission, will take place on 8th – 9th October 2019 in
      Brussels.
    </p>
    <p>
      This year’s conference is hosted by nine projects funded within the{" "}
      <a href="https://ec.europa.eu/programmes/horizon2020/en">
        European Union’s Horizon 2020 Research and Innovation programme
      </a>{" "}
      – <a href="https://www.medeas.eu/">MEDEAS</a>,
      <a href="https://magic-nexus.eu/">MAGIC</a>,{" "}
      <a href="https://www.magnitude-project.eu/">MAGNITUDE</a>,{" "}
      <a href="https://www.plan4res.eu/project/the-project/">plan4res</a>,{" "}
      <a href="https://www.h2020-planet.eu/">PLANET</a>, REEEM,{" "}
      <a href="http://reflex-project.eu/">Reflex</a>,{" "}
      <a href="http://www.set-nav.eu/">SET-Nav</a> and{" "}
      <a href="http://www.spine-model.org/">Spine</a> – and is open to experts,
      scientists, industry, civil society and policy makers, to exchange views
      and research on current energy modelling issues.
    </p>
    <p>
      A <b>networking space</b>, where all participants can meet and exchange on
      common questions and the exhibited posters, constitutes a central part of
      the conference and provides an overview of the EU model-landscape and an
      insight to ongoing projects.
    </p>
    <p>
      In four plenary sessions, these key themes will be discussed on day 1:
    </p>
    <ol type="I">
      <li>
        Achieving ambitious RES deployment in a multi-coupled European energy
        system – technoeconomical, financial and societal challenges
      </li>
      <li>The effects of externalisation on decarbonisation</li>
      <li>Pathways and scenarios towards the Paris agreement</li>
      <li>
        Decarbonisation of cities: Modelling energy transition, sector coupling
        and cross-sectoral challenges
      </li>
    </ol>
    <p>
      REEEM co-organises with <a href="http://www.set-nav.eu/">SET-Nav</a> the plenary session lll “Pathways and
      scenarios towards the Paris agreement”.
    </p>
    <p>
      More detailed discussions and active work will be possible on day 2 in
      several <b>focus groups</b> with specialised <b>topics</b> where proactive
      contribution of participants is welcome.
    </p>
    <p>
      The results of the meeting will be published after a peer-review process
      in a <b>Special Issue</b> of the Journal Energy Strategy Reviews
      (Elsevier).
    </p>
    <p>
      <a href="http://www.energymodellingplatform.eu/program-and-presentations.html">
        See the full EMP-E 2019 program.
      </a>
    </p>
  </Layout>
)

const ImgStyle = styled.img`
  margin-top: 20px;
`
