import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import osembeReeemIntegration from "../images/osembe-reeem-integration.png"

export default props => (
  <Layout
    pageTitle="OSeMBE Engagement Model"
    location={props.location}
    showSocialMedia={["top", "bottom"]}
  >
    <SEO title="OSeMBE Engagement Model" />
    <div>
      <p>
        <strong>
          View,&nbsp;download and contribute to&nbsp;the REEEM Stakeholder
          Engagement Model OSeMBE: an&nbsp;open source&nbsp;model of the EU28+2
          electricity system.
        </strong>
      </p>
      <p>
        Download:&nbsp;
        <strong>
          <a href="http://www.osemosys.org/uploads/1/8/5/0/18504136/osembe_documentation.pdf">
            Documentation
          </a>
          &nbsp;
        </strong>
        and&nbsp;
        <strong>
          <a href="../uploads/osembe_v1r1_20190731.zip">
            Zip-archive
          </a>
        </strong>
      </p>
      <p>
        The Open Source energy MOdelling SYStem –{" "}
        <strong>
          <a href="http://www.osemosys.org/">OSeMOSYS</a>
        </strong>{" "}
        is a long-term integrated assessment and energy planning tool that
        stands for an open, transparent and accessible approach of energy
        planning. It is a bottom-up linear optimization modelling system. In the
        last few years OSeMOSYS has already been used to build regional models
        like the The Electricity Model Base for Africa – TEMBA, and The open
        source South American Model Base – SAMBA. In the REEEM project the Open
        Source energy Modelling Base for the European Union – OSeMBE is
        developed.
      </p>
      <p>
        OSeMBE is a fully open source long-term electricity system model of the
        EU28 plus Norway and Switzerland. The power systems of the 30 countries
        included are individually modelled and connected by trans-border
        transmission lines. This allows country specific characteristics and
        trans-border electricity flows to be considered and their evolution
        within EU28+2 decarbonisation pathways assessed. The modelled period
        spans from 2015 to 2050. Each year is divided into five seasons. Each
        season is constituted by one representative day, which is divided into
        three parts. Therefore, in total each year consists of fifteen so called
        ‘time slices’.
      </p>
      <p>
        In REEEM, OSeMBE constitutes an engagement model, i.e. a simplified yet
        comprehensive representation of the whole modelling exercise carried out
        in the project. In other words, an entry point for stakeholders. This
        shows in its structure and setting of parameters, which keep the model
        purposefully simple.
      </p>
      <h3>
        Modellers are invited to contribute to reviewing the assumptions and
        contacting us for{" "}
        <a href="https://groups.google.com/forum/#!forum/osemosys">feedback</a>
      </h3>
      <p>
        <strong>
          <a href="https://openenergy-platform.org/factsheets/models/62/">
            OSeMBE model FACT SHEET
          </a>
        </strong>
      </p>
      <p>
        <img
          src={osembeReeemIntegration}
          alt="OSeMBE REEEM integration chart"
        />
      </p>
      <p>Placement of OSeMBE Engagement Model in the REEEM toolset</p>
      <p>
        <strong>
          Recording of the webinar, which was held on October 10<sup>th </sup>
          2018.
        </strong>
      </p>
      <iframe
        id="_ytid_65277"
        width="480"
        height="270"
        data-origwidth="480"
        data-origheight="270"
        src="https://www.youtube.com/embed/7-GnZ-Xhars?enablejsapi=1&amp;autoplay=0&amp;cc_load_policy=0&amp;iv_load_policy=1&amp;loop=0&amp;modestbranding=0&amp;rel=1&amp;fs=1&amp;playsinline=0&amp;autohide=2&amp;theme=dark&amp;color=red&amp;controls=1&amp;"
        title="YouTube player"
        allow="autoplay; encrypted-media"
        data-no-lazy="1"
        data-skipgform_ajax_framebjll=""
      ></iframe>
      <p>
        The webinar, gives an overview and some insights on OSeMBE. You are
        provided with an introduction to the Open Source energy Modelling System
        (OSeMOSYS) and the Open Source energy Model Base for the European Union
        (OSeMBE) itself.
      </p>
      <p>
        The section on OSeMBE is first explaining the structure of the model
        before providing insights to the results of the model. The presentation
        closes with information on the usages of the model.
      </p>
    </div>
  </Layout>
)
