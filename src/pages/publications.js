import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default props => (
  <Layout
    pageTitle="Publications"
    location={props.location}
    showSocialMedia={["top", "bottom"]}
  >
    <SEO title="Publications" />
    <table>
      <thead>
        <tr>
          <Column1>Title</Column1>
          <Column2>Authors</Column2>
        </tr>
      </thead>
      <tbody>
        {articles.map(article => (
          <tr key={article.title}>
            <Column1>
              <a href={article.link}>{article.title}</a>
            </Column1>
            <Column2>{article.authors}</Column2>
          </tr>
        ))}
      </tbody>
    </table>
  </Layout>
)

const articles = [
  {
    title: "District heating in cities as a part of low-carbon energy system",
    link: "https://aaltodoc.aalto.fi/handle/123456789/30753",
    authors: "Hast, Aira; Syri, Sanna; Lekavičius, Vidas; Galinis, Arvydas",
  },
  {
    title:
      "Water use in electricity generation for water-energy nexus analyses: The European case",
    link: "https://zenodo.org/record/1468438",
    authors: "Larsen, Morten Andreas Dahl; Drews, Martin",
  },
  {
    title:
      "Attributing differences in the fate of lateral boundary ozone in AQMEII3 models to physical process representations",
    link: "https://doi.org/10.5194/acp-18-17157-2018",
    authors:
      "P. Liu; T. Spero; C. Hogrefe; U. Im; J. H. Christensen; J. Bieser; U. Nopmongcol; G. Yarwood; R. Mathur; S. Roselle",
  },
  {
    title:
      "Assessment and economic valuation of air pollution impacts on human health over Europe and the United States as calculated by a multi-model ensemble in the framework of AQMEII3",
    link:
      "https://hal-ineris.archives-ouvertes.fr/ineris-01863336/file/2018-053.pdf",
    authors:
      "Im, Ulas; Balzarini, Alessandra; Baro, Rocio; Bellasio, Roberto; Bianconi, Roberto; Bieser, Johannes; Colette, Augustin; CURCI, Gabriele; Farrow , Aidan; Flemming , Johannes; Fraser, Andrea; Brandt, Jorgen; Jimenez-guerrero, Pedro; Kitwiroon, Nutthida; Liang, Ciao-Kai; Nopmongcol, Uarporn; Pirovano, Guido; Pozzoli, Luca; Prank, Marje; Rose, Rebecca; Sokhi, Ranjeet; Tuccella, Paolo; Geels, Camilla; Unal, Alper; VIVANCO, Marta G.; West, Jason; Yarwood, Greg; Hogrefe, Christian; Galmarini, Stefano; Hansen, Kaj M.; Christensen, Jesper H.; Andersen, Mikael S.; Solazzo, Efisio; Kioutsioukis, Ioannis; Alyuz, Ummugulsum",
  },
  {
    title:
      "Influence of anthropogenic emissions and boundary conditions on multi-model simulations of major air pollutants over Europe and North America in the framework of AQMEII3",
    link: "https://www.atmos-chem-phys.net/18/8929/2018/",
    authors:
      "Im, Ulas; Bellasio, Roberto; Bianconi, Roberto; Bieser, Johannes; Colette, Augustin; Curci, Gabriele; Farrow, Aidan; Flemming, Johannes; Fraser, Andrea; Jimenez-Guerrero, Pedro; Kitwiroon, Nutthida; Christensen, Jesper Heile; Liu, Peng; Nopmongcol, Uarporn; Palacios-Peña, Laura; Pirovano, Guido; Pozzoli, Luca;Prank, Marje; Rose, Rebecca; Sokhi, Ranjeet; Tuccella, Paolo; Unal, Alper; Geels, Camilla; Vivanco, Marta G.; Yarwood, Greg; Hogrefe, Christian; Galmarini, Stefano; Hansen, Kaj Mantzius; Brandt, Jørgen; Solazzo, Efisio; Alyuz, Ummugulsum; Balzarini, Alessandra; Baro, Rocio",
  },
  {
    title:
      "Assessing the benefits of demand-side flexibility in residential and transport sectors from an integrated energy systems perspective",
    link:
      "http://discovery.ucl.ac.uk/10052679/1/Li_1-s2.0-S0306261918310237-main.pdf",
    authors: "Li, P. H.; Pye, S.",
  },
  {
    title:
      "From the development of an open-source energy modelling tool to its application and the creation of communities of practice: The example of OSeMOSYS",
    link: "http://discovery.ucl.ac.uk/10046102/",
    authors:
      "Gardumi, F.; Niet, T.; Almulla, Y.; Ramos, E.; Burandt, T.; Balderrama, G. P.;Moura, GNPD; Zepeda, E.; Alfstad, T.; Shivakumar, A.; Morrison, R.; Taliotis, C.; Broad, O.; Beltramo, A.; Sridharan, V.; Howells, M.; Hörsch, J.",
  },
  {
    title:
      "Transition to carbon neutral energy systems – implications to district heating in cities",
    link: "https://aaltodoc.aalto.fi/handle/123456789/34281",
    authors:
      "Hast, Aira; Syri, Sanna; Welsch, Julia; Korkmaz, Pinar; Balyk, Olexandr",
  },
  {
    title:
      "Transparency, reproducibility, and quality of energy system analyses ? A process to improve scientific work",
    link:
      "https://www.sciencedirect.com/science/article/pii/S2211467X18300828?via%3Dihub",
    authors:
      "Hülk, Ludwig; Müller, Berit; Glauer, Martin; Förster, Elisa; Schachler, Birgit",
  },
  {
    title:
      "Comprehensive representation of models for energy system analyses: Insights from the Energy Modelling Platform for Europe (EMP-E) 2017",
    link:
      "https://www.sciencedirect.com/science/article/pii/S2211467X18300154?via%3Dihub",
    authors: "Müller, Berit; Gardumi, Francesco; Hülk, Ludwig",
  },
  {
    title:
      "Technology interdependency in the United Kingdom’s low carbon energy transition",
    link:
      "https://www.sciencedirect.com/science/article/pii/S2211467X1930029X?via%3Dihub",
    authors: "Steve Pye, Pei-Hao Li, Ilkka Keppo, Brian O’Gallachoir",
  },
]

const Column1 = styled.td`
  width: 50%;
  vertical-align: top;
`

const Column2 = styled.td`
  width: 50%;
  vertical-align: top;
`
