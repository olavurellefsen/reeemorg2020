import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import figureX from "../images/integration-chart_figure-x.png"

export default props => (
  <Layout
    pageTitle="Overview and Model Integration"
    location={props.location}
    showSocialMedia={["top", "bottom"]}
  >
    <SEO title="Overview and Model Integration" />
    <ul>
      {models.map(model => (
        <ItemStyle key={model.name}>
          <Link to={model.link}>{model.name}</Link>
        </ItemStyle>
      ))}
    </ul>
    <p>
      The REEEM project aims at analyzing how different technologies can impact
      the transition to a low carbon economy in the EU28+2 (Norway and
      Switzerland) by 2050. To do so, a suite of models is used, looking at
      different aspects (macroeconomics, energy system optimization, LCA of
      energy technologies etc.) and on different scales spanning from pan EU28+2
      to case studies covering either single countries or even municipalities.
      In many cases those models are soft-linked resulting in a multi-modelling
      framework.
    </p>
    <p>
      Soft-linking models means establishing an exchange of inputs and/or
      outputs between them, so that one can be informed by the findings of
      another. The exchange can be either mono-directional (from one model to
      the other) or bi-directional (through iterations). In either way, soft-
      linking models is a complicated process and it requires a set of
      well-defined and documented actions.
    </p>
    <p>
      In REEEM, the integrated modelling framework will be created step-by-step,
      linking two models at every step.
    </p>
    <p>
      The full integrated modelling framework completed by end of the
      project can be summarized by the figure below.
    </p>
    <ImgStyle
      src={figureX}
      alt="Full integrated modelling framework"
    />
  </Layout>
)

const models = [
  { name: "NEWAGE", link: "/newage/" },
  { name: "EMC2", link: "/emc2/" },
  { name: "MESSAGE", link: "/message/" },
  { name: "EcoSense", link: "/ecosense/" },
  { name: "EnergyPRO", link: "/energypro/" },
  { name: "EnergyPLAN", link: "/energyplan/" },
  { name: "Times", link: "/times/" },
  { name: "LEcA Tool", link: "/eca-tool/" },
  { name: "Plexos", link: "/plexos/" },
  { name: "EVA", link: "/eva/" },
  { name: "ESME", link: "/esme/" },
  { name: "Aalto's in-house model", link: "/aaltos-in-house-model/" },
]

const ItemStyle = styled.li`
  margin: 0;
`

const ImgStyle = styled.img`
  margin: 0;
`
