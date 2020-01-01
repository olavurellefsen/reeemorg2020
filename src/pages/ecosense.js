import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default props => (
  <Layout
    pageTitle="EcoSense"
    location={props.location}
    showSocialMedia={["top", "bottom"]}
  >
    <SEO title="EcoSense" />
    <p>
      EcoSense is an integrated assessment model that estimates and assesses
      health and environmental impacts caused by the release of toxic substances
      and their precursors into the environment. The tool implements the Impact
      Pathway Approach developed within the ExternE project series
      (<a href="http://www.externe.info/">www.externe.info</a>). Based on emissions of classic air pollutants, annual
      mean concentrations of Particulate Matter, NO2 and Ozone are first
      estimated by applying a parameterized atmospheric dispersion model based
      on the EMEP Unified Model (<a href="https://www.emep.int/">www.emep.int</a>), which allocates changes in
      concentrations on grid-level to changes in emissions on source level
      (Friedrich et al., 2011; Bickel und Friedrich, 2005). With
      concentrations-response functions as recommended by the WHO (WHO, 2013),
      gridded health impacts are estimated. Additionally, environmental impacts
      such as biodiversity losses can be estimated as pdf/m² (potentially
      disappeared fraction of species per m²). Finally, all impacts are
      translated into monetary values reflecting damage costs, either based on a
      willingness-to-pay or standard price approach. These values can then be
      used for cost-benefit analyses.
    </p>
    <p>Reference:</p>
    <p>
      Bickel, P., Friedrich, R., 2005. ExternE – Externalities of Energy
      Methodology, 2005 Update, 287 pp.
    </p>
    <p>
      Friedrich, R., Kuhn, A., Bessagnet, B., Blesl, M., Bruchof, D., Cowie, H.,
      2011. INTARESE / HEIMTSA D153/D5.3.1/2: Final report of the Common Case
      Study, 263 pp.
    </p>
    <p>
      WHO, 2013. Health risks of air pollution in Europe – HRAPIE project.
      Recommendations for concentration–response functions for cost–benefit
      analysis of particulate matter, ozone and nitrogen dioxide. Online
      available at:
      <a href="http://www.euro.who.int/en/health-topics/environment-and-health/air-quality/publications/2013/health-risks-of-air-pollution-in-europe-hrapie-project.-recommendations-for-concentrationresponse-functions-for-costbenefit-analysis-of-particulate-matter,-ozone-and-nitrogen-dioxide">http://www.euro.who.int/en/health-topics/environment-and-health/air-quality/publications/2013/health-risks-of-air-pollution-in-europe-hrapie-project.-recommendations-for-concentrationresponse-functions-for-costbenefit-analysis-of-particulate-matter,-ozone-and-nitrogen-dioxide</a>
    </p>
    <p><a href="https://openenergy-platform.org/factsheets/models/146/">EcoSense model FACT SHEET</a></p>
  </Layout>
)
