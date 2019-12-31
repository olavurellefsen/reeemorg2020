import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import wpStructure from "../images/wp-structure.png"

export default props => (
  <Layout
    pageTitle="Project Management"
    location={props.location}
    showSocialMedia={["top", "bottom"]}
  >
    <SEO title="Project Management" />
    <ImgStyle src={wpStructure} alt="Work Package structure" />

    <h4>Project Coordinator:</h4>

    <p>Prof. Mark Howells from Royal Institute of Technology (KTH), Sweden</p>

    <h4>Project Managers:</h4>
    <ul>
      <li>
        Francesco Gardumi from Royal Institute of Technology (KTH), Sweden
      </li>
      <li>
        Georgios Avgerinopoulos from Royal Institute of Technology (KTH), Sweden
      </li>
    </ul>
    <p>
      The <b>Executive Committee</b> consists of all WP leaders along with the
      Project Coordinator:
    </p>
    <ul>
      <li>Mark Howells from Royal Institute of Technology (KTH)</li>
      <li>Francesco Gardumi from Royal Institute of Technology (KTH)</li>
      <li>Georgios Avgerinopoulos Royal Institute of Technology (KTH)</li>
      <li>Louise Coffineau from KIC InnoEnergy (KIC IE)</li>
      <li>Anna Darmani from KIC InnoEnergy (KIC IE)</li>
      <li>Roland Montenegro from Universität Stuttgart (USTUTT)</li>
      <li>Ulrich Fahl from Universität Stuttgart (USTUTT)</li>
      <li>Julia Welsch from Universität Stuttgart (USTUTT)</li>
      <li>Markus Blesl from Universität Stuttgart (USTUTT)</li>
      <li>Ilkka Keppo from University College London (UCL)</li>
      <li>Nawfal Saadi Failali from University College London (UCL)</li>
      <li>Olexandr Balyk from Danmarks Tekniske Universitet (DTU)</li>
      <li>Kenneth Karlsson from Danmarks Tekniske Universitet (DTU)</li>
      <li>Olavur Ellefsen from Tökni (TOKNI)</li>
      <li>Helena Egholm from Tökni (TOKNI)</li>
      <li>Bo Lærke from Tökni (TOKNI)</li>
    </ul>
  </Layout>
)

const ImgStyle = styled.img`
  margin-top: 20px;
`
