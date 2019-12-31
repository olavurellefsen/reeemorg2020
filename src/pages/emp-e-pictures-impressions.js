import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slideshow from "../components/slideshow"

export default props => (
  <Layout
    pageTitle="EMP-E Pictures and Impressions"
    location={props.location}
    showSocialMedia={["top", "bottom"]}
  >
    <SEO title="EMP-E Pictures and Impressions" />
    <Slideshow />
    <hr />
    <p>Pictures Metadata</p>
    <p>
      Author: Kaddy Sabally Müller
      <br />
      Copyright: Reiner Lemoine Institut
      <br />
      License: Creative Commons Attribution 4.0 International (
      <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>)
      <br />
      Instructions: You are free: To Share, To Create, To Adapt; As long as you:
      Attribute!
      <br />
      Citation: ©{" "}
      <a href="http://reiner-lemoine-institut.de/">Reiner Lemoine Institut</a> /
      CC BY 4.0
    </p>
  </Layout>
)
