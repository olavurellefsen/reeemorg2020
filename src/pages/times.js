import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default props => (
  <Layout
    pageTitle="Times"
    location={props.location}
    showSocialMedia={["top", "bottom"]}
  >
    <SEO title="Times" />
    <p>
      TIMES is an energy system model generator which is a further development
      of the model generators MARKAL and EFOM-ENV, written in GAMS. TIMES is a
      bottom-up linear optimization model based on a technical approach. The aim
      of the model is to optimize the energy system cost according to the given
      energy demands, energy technologies, and policy requirements. The
      Pan-European TIMES energy system model (TIMES PanEU) is a 30 region
      partial equilibrium energy system model. The model covers the EU-28
      countries, with addition of Norway and Switzerland. The base year is 2010
      and the time horizon ends in 2050. The current structure accounts for 12
      time slices, 4 seasonal and 3 daily. The model is split in 5-year time
      steps. Both greenhouse gas emissions (CO2, CH4, N2O, SF6) and local air
      pollutant emissions (SO2, CO, NOx, NMVOC, PM10, PM2.5) are included. TIMES
      PanEU contains the country specific data covering all the sectors related
      to energy supply and demand. The system commences from the potential of
      different energy sources in a particular country and includes public and
      industrial generation of electricity, industry, agriculture, refineries,
      inventory power stations and the end-use service demands such as heating,
      lighting and transportation.
    </p>
    <p><a href="https://openenergy-platform.org/factsheets/models/41/">TIMES model FACT SHEET</a></p>
  </Layout>
)
