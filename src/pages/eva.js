import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default props => (
  <Layout
    pageTitle="EVA"
    location={props.location}
    showSocialMedia={["top", "bottom"]}
  >
    <SEO title="EVA" />
    <p>
      The EVA system (Brandt et al., 2013a, b) is based on the impact-pathway
      chain (e.g. Friedrich and Bickel, 2001), consisting of the emissions,
      transport and chemical transformation of air pollutants, population
      exposure, health impacts and the associated external costs. The EVA system
      requires hourly gridded concentration input from a regional-scale CTM as
      well as gridded population data, exposure-response functions (ERFs) for
      health impacts, and economic valuations of the impacts from air pollution.
      As the health outcomes are age-dependent, the total population data has
      been broken down to a set of age intervals being babies (under 9 months),
      children (under 15), adult (above 15), above 30, and above 65. The EVA
      system can be used to assess the number of various health outcomes
      including different morbidity outcomes as well as short-term (acute) and
      long-term (chronic) mortality, related to exposure of O3, CO and SO2
      (short-term) and PM2.5 (long-term). Furthermore, impact on infant
      mortality in response to exposure of PM2.5 is calculated. The morbidity
      outcomes include chronic bronchitis, restricted activity days, congestive
      heart failure, lung cancer, respiratory and cerebrovascular hospital
      admissions, asthmatic children (under 15 years) and adults (above
      15 years), which includes bronchodilator use, cough, and lower respiratory
      symptoms.
    </p>
    <p>
      In frame of the REEEM project, EVA model is used to calculate the emission
      unit costs for each individual European country for a number of primary
      pollutants including NOx, SOx and PM2.5. Furthermore, in order to assess
      the non-linear relationships between pollutants concentrations, emissions
      and their health impacts, different emission perturbation are introduced
      to the underlying chemistry and transport model targeting each of the
      individual pollutants and important emission sectors such as the energy
      production and traffic. The calculated unit costs will then be used in the
      TIMES PanEU model.
    </p>
    <p><a href="https://openenergy-platform.org/factsheets/models/153/">EVA model FACT SHEET</a></p>
  </Layout>
)
