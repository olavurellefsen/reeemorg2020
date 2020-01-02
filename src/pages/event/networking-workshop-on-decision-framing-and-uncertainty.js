import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ucl from "../../images/ucl.jpg"

export default props => (
  <Layout
    pageTitle="Networking Workshop on Decision Framing and Uncertainty"
    location={props.location}
    showSocialMedia={["bottom"]}
  >
    <SEO title="Networking Workshop on Decision Framing and Uncertainty" />
    <h1>Networking Workshop on Decision Framing and Uncertainty</h1>
    <div>
      <h2>27th February 2018 - 28th February 2018</h2>
      <img src={ucl} alt="UCL" />
    </div>
    <div>
      <p>
        © Image:{" "}
        <a href="https://creativecommons.org/licenses/by-sa/2.5/legalcode">
          CC BY-SA 2.5
        </a>
        , the original uploader was{" "}
        <a href="https://fr.wikipedia.org/wiki/User:Telerg">Telerg</a> at{" "}
        <a href="https://fr.wikipedia.org/wiki/">French Wikipedia</a>,{" "}
        <a href="https://commons.wikimedia.org/wiki/File:Cour_intérieure_Imperial_College_18-10-2004.jpeg">
          Cour intérieure Imperial College 18-10-2004
        </a>
        , cropped by RLI
      </p>
      <p>
        <strong>Subject</strong>
      </p>
      <p>
        In context of the networking activities,{" "}
        <a href="http://reiner-lemoine-institut.de/en/about-us/team/alexander-wanitschke/">
          Alexander Wanitschke
        </a>
        , researcher and PhD Candidate at the{" "}
        <a href="http://reiner-lemoine-institut.de/">
          Reiner Lemoin Institut (RLI)
        </a>
        , will participate in the{" "}
        <a href="http://www3.imperial.ac.uk/newsandeventspggrp/imperialcollege/naturalsciences/environmentalpolicy/eventssummary/event_27-4-2017-14-27-38">
          Networking Workshop on Decision Framing and Uncertainty
        </a>{" "}
        at the Royal Geography Society in London. The Workshop is hosted by the
        Centre for Environmental Policy (CEP) at Imperial College London with
        specialists from Warwick University, London School of Economics,
        Lancaster University, E3G, UK Government, and Atkins. During two-day
        workshop , experts from the fields of psychology, statistics, decision
        science, and communications, as well as a number of decision makers from
        government, industry, and policy will meet to develop a better
        understanding of how the analytical community can support real-life
        decision makers in making better decisions under uncertainty.
      </p>
      <p>
        <strong>Time and place</strong>
      </p>
      <p>
        The seminars and workshops will take place on the <strong>27th</strong>
        <strong>-28st of Feb, 2017</strong>&nbsp;at Royal Geographical Society
        London, (
        <a href="http://www3.imperial.ac.uk/campusinfo/southkensington">
          South Kensington Campus
        </a>
        ), SW7 2AR
      </p>
    </div>
  </Layout>
)
