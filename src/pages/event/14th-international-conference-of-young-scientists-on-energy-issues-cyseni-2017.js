import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ciceni from "../../images/Ciceni-2017.jpg"

export default props => (
  <Layout
    pageTitle="LEI hosts the 14th International Conference of Young Scientists on Energy Issues (CYSENI 2017)"
    location={props.location}
    showSocialMedia={["bottom"]}
  >
    <SEO title="LEI hosts the 14th International Conference of Young Scientists on Energy Issues (CYSENI 2017)" />
    <h1>
      LEI hosts the 14th International Conference of Young Scientists on Energy
      Issues (CYSENI 2017)
    </h1>
    <div>
      <h2>25th May 2017 - 26th May 2017</h2>
      <img src={ciceni} alt="Ciceni" />
    </div>

    <div>
      <h3>Subject</h3>
      <p>
        2nd call for papers for the{" "}
        <strong>
          14th International Conference of Young Scientists on Energy Issues
          (CYSENI 2017)
        </strong>
        . We kindly inform you that the deadline of the online abstract
        submission is January 6, 2017..
      </p>
      <p>
        The main goal of the 14th annual Conference is to discuss issues and
        perspectives of energy sector worldwide; as well as to provide a{" "}
        <strong>free</strong> platform for young scientists to develop their
        skills. Undergraduate, MSc, PhD students, postdoc, entrant engineers and
        all other young professionals doing research on energy issues are
        welcome to present their work at the Conference, free of charge.
      </p>
      <h3>Conference topics</h3>
      <ol>
        <li>Renewable energy sources</li>
        <li>Energy efficiency and reliability</li>
        <li>Smart energy networks</li>
        <li>Energy economics and policy</li>
        <li>Hydrogen energy and fuel cell technologies</li>
        <li>Fusion energy</li>
        <li>Nuclear fission and radiation protection</li>
        <li>Combustion and plasma processes</li>
        <li>Thermal physics, fluid mechanics and metrology</li>
        <li>Material sciences and technologies</li>
        <li>Global change and ecosystems</li>
        <li>Cross-cutting energy issues</li>
      </ol>
      <h3>Time and place</h3>
      <p>
        The conference will take place on <strong>25-26th of May, 2017</strong>{" "}
        at the&nbsp;<strong>Lithuanian Energy Institute&nbsp;</strong>
        (Breslaujos st. 3, Kaunas, Lithuania).
      </p>
      <h3>Deadlines</h3>
      <p>
        <em>January 6</em>, 2017 – the deadline for registration and abstract
        submission
      </p>
      <p>
        <em>March 6</em>, 2017 – deadline for draft paper submission
      </p>
      <h3>Registration</h3>
      <p>
        Registration&nbsp;via:&nbsp;
        <a href="http://cyseni.com/registration/">
          http://cyseni.com/registration/
        </a>
      </p>
      <p>
        For more information on the conference, venue, programme and up-to-date
        information visit the conference website:
      </p>
      <p>
        <strong>
          <a title="CYSENI.COM" href="http://url.lei.lt/cyseni2017">
            www.cyseni.com
          </a>
        </strong>
      </p>
    </div>
  </Layout>
)
