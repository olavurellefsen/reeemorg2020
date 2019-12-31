import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default props => (
  <Layout
    pageTitle="Deliverables"
    location={props.location}
    showSocialMedia={["top", "bottom"]}
  >
    <SEO title="Deliverables" />
    <p>
      <b>
        The tables present the REEEM public deliverables. Link to the
        deliverables will become available as the project progresses.
      </b>
    </p>
    <p>REEEM reports are divided into 5 types , which are described below.</p>
    <h4>Focus Reports</h4>
    <p>
      REEEM brings together expertise from a wide range of fields to assess the
      impacts of technology pathways on the economy, the society and the
      environment. The Focus Reports will provide insights on the results and
      findings focusing specifically on each of the three impact areas. They
      will improve the present knowledge base regarding the impacts of
      development in sustainable energy technologies. This will help decision
      makers better evaluate different future pathways by understanding their
      implications on different parts associated with the energy system. At
      least two Focus Reports will be published for each impact area, at
      different points during the project. Each report will have a summary for
      policy makers.
    </p>
    <h4>Case Studies</h4>
    <p>
      In REEEM, case studies are employed to supplement the overarching pathways
      by allowing for in-depth studies that “zoom in” on a particular topic,
      timeframe and/or region of the EU energy system. Applying an
      interdisciplinary approach to the case studies, REEEM will address several
      cross-cutting themes such as energy security, the impact of carbon leakage
      on competitiveness, behavioural dynamics, and valuing ecosystem services.
      The case studies will be further enhanced and fine-tuned through
      stakeholder workshops during the course of the project. The final results
      of each case study will be presented in an individual report. For
      anticipated publication dates, refer to Section 3.1. Each report will have
      a summary for policy makers.
    </p>
    <h4>Technology and Innovation Roadmaps with Innovation Readiness Levels</h4>
    <p>
      Low-carbon energy technologies play a critical role in meeting the
      ambitious 2030 energy and climate targets set by EU member states to
      address challenges such as energy security, climate change and economic
      growth and competitiveness. To support action towards achieving the EU’s
      2030 targets and beyond, this project will consolidate a series of
      Technology and Innovation Roadmaps which cover all the technologies from
      the SET-Plan, as these technologies are identified as likely to play an
      important role in the transition to a competitive low-carbon society.
    </p>
    <p>
      Based on inputs and guidance from experts in governments, industry and
      academia, the roadmaps will indicate the status of technology development
      and identify areas for priority actions. While other technology roadmaps
      exist, this work aims to be the first that is based on the SET-Plan and
      linked to energy system models. As such, they will be more nuanced as they
      provide ranges for the development of economic, technical and
      environmental parameters of different technologies aligned with the main
      REEEM pathways. They will, thus, form the basis of all technology-related
      modelling work within this project.
    </p>
    <p>
      While the Technology and Innovation Roadmaps identify key areas for
      technical development, it is important to determine their market potential
      and readiness expected at different time horizons. Through supplementary
      assessments of the Innovation Readiness Level and their quantification
      through advanced cost analysis, this project will provide a comprehensive
      vision of both “technology push” as well as “market pull” in the spirit of
      the SET-Plan ‘Integrated Roadmap’. These assessments will highlight
      current market conditions and identify barriers to the uptake of specific
      technologies. Three Technology and Innovation Roadmaps will be produced
      throughout this project.
    </p>
    <h4>Integrated Impact Reports</h4>
    <p>
      Integrated Impact Reports will present the core work of the REEEM project.
      They will further strengthen the scientific underpinning of the SET-Plan
      through detailed impact assessments, and by analysing the role of
      different technologies in the EU’s future energy system. They will be a
      culmination of the assessments carried out for the Technology and
      Innovation Roadmaps and within the three impact areas, combined through an
      integrated energy systems model. Informed by the Focus Reports, the
      Integrated Impact Reports will serve to provide a balanced assessment of
      the implications of various technology pathways based on their impacts
      across the economy, the society and the environment. A comparison across
      these impact areas will be enabled through a multi-criteria decision
      analysis based on cross-disciplinary indicators assessed for each pathway.
      This will allow identifying the most effective strategies for a transition
      to an efficient low carbon energy system. Two Integrated Impact Reports
      will be published. The first one will summarise the work after two years
      and the second one will integrate all the insights at the end of the
      project. Each report will have a summary for policy makers.
    </p>
    <h4>Policy Briefs</h4>
    <p>
      The aforementioned reports will serve to strengthen the knowledge base and
      scientific understanding of the energy system. Complementary to these and
      the provided summaries for policy makers, a series of Policy Briefs will
      alert the EC in a few pages to the most valuable key insights of the
      assessments. They will analyse the implications of the technology pathways
      on the EC’s work and propose energy strategy recommendations.
    </p>
    <p>
      The analysis and recommendations in the Policy Briefs will be supported by
      input from civil society, industry and academia. Further, they will form
      the basis for broader outreach to perform appropriate ‘reality checks’ for
      the policy-relevance of all project outputs. At least one Policy Brief is
      foreseen for each case study, impact area (derived from the Focus Report)
      and for the Integrated Impact Reports.
    </p>
    <h2>Completed deliverables</h2>
    {themes.map(theme => (
      <div key={theme}>
        <h3>{theme.theme}</h3>
        <table>
          <thead>
            <Column1>Id</Column1>
            <Column2>Name</Column2>
            <Column3>Date</Column3>
          </thead>
          <tbody>
            {theme.deliverables.map(deliverable => (
              <tr key={deliverable.id}>
                <Column1>{deliverable.id}</Column1>
                <Column2><a href={deliverable.link}>{deliverable.name}</a></Column2>
                <Column3>{deliverable.date}</Column3>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ))}
  </Layout>
)

const themes = [
  {
    theme: "Theme 1 (Economy and Society)",
    deliverables: [
      {
        id: "D1.3a",
        name:
          "Policy Brief – How to facilitate the transition to a low-carbon, competitive and secure EU society",
        date: "Jan-18",
        link: "https://doi.org/10.5281/zenodo.3368412",
      },
      {
        id: "D1.3b",
        name: "Policy Brief",
        date: "Jul-19",
        link: "https://doi.org/10.5281/zenodo.3368426",
      },
      {
        id: "D3.1a",
        name: "Focus Report on economic impacts",
        date: "Jul-18",
        link: "https://doi.org/10.5281/zenodo.3368483",
      },
      {
        id: "D3.1b",
        name: "Focus Report on economic impacts",
        date: "Jul-19",
        link: "https://doi.org/10.5281/zenodo.3368488",
      },
      {
        id: "D3.2",
        name: "Case study on carbon leakage and competitiveness",
        date: "Jul-18",
        link: "https://doi.org/10.5281/zenodo.3368490",
      },
      {
        id: "D3.3a",
        name: "Carbon Leakage and competitiveness in the EU until 2050",
        date: "Jul-18",
        link: "https://doi.org/10.5281/zenodo.3368493",
      },
      {
        id: "D3.3b",
        name:
          "Macroeconomic and distributional impacts of decarbonisation pathways",
        date: "Jul-19",
        link: "https://doi.org/10.5281/zenodo.3368495",
      },
      {
        id: "D4.1a",
        name:
          "The Role of Behaviour and Heterogeneity for the Adoption of Technologies",
        date: "Jul-18",
        link: "https://doi.org/10.5281/zenodo.3368501",
      },
      {
        id: "D4.1b",
        name: "Focus Report on behavioural effects and distributional impacts",
        date: "May-19",
        link: "https://doi.org/10.5281/zenodo.3368506",
      },
      {
        id: "D4.3a",
        name:
          "Policy Brief – The Role of Behaviour and Heterogeneity for the Adoption of Technologies",
        date: "Jul-18",
        link: "https://doi.org/10.5281/zenodo.3368510",
      },
      {
        id: "D4.3b",
        name:
          "Policy Brief – The Role of Behaviour and Heterogeneity for the Adoption of Technologies",
        date: "Jul-19",
        link: "https://doi.org/10.5281/zenodo.3368514",
      },
    ],
  },
  {
    theme: "Theme 2 (Environment and Resources)",
    deliverables: [
      {
        id: "D5.1",
        name: "Focus Report on climate impacts on the Energy-Food-Water nexus",
        date: "Jan-19",
        link: "https://doi.org/10.5281/zenodo.3368523",
      },
      {
        id: "D5.2",
        name: "Focus Report on Environmental impacts",
        date: "Jan-19",
        link: "https://doi.org/10.5281/zenodo.3368529",
      },
      {
        id: "D5.3",
        name:
          "Focus Report on LCA and critical material demand for energy technologies",
        date: "May-19",
        link: "https://doi.org/10.5281/zenodo.3368531",
      },
      {
        id: "D5.4",
        name: "Ecosystem Services case study report",
        date: "Jan-18",
        link: "https://doi.org/10.5281/zenodo.3368533",
      },
      {
        id: "D5.5a",
        name:
          "Policy Brief – Accounting for Ecosystem Services in Energy Planning",
        date: "Jan-18",
        link: "https://doi.org/10.5281/zenodo.3368535",
      },
      {
        id: "D5.5b",
        name: "Policy Brief",
        date: "Jan-19",
        link: "https://doi.org/10.5281/zenodo.3368537",
      },
    ],
  },
  {
    theme: "Theme 3 (System Transition and Innovation)",
    deliverables: [
      {
        id: "D1.1",
        name: "Report on pathway definition",
        date: "Jul-17",
        link: "https://doi.org/10.5281/zenodo.3368400",
      },
      {
        id: "D1.2a",
        name: "Integrated Impact report",
        date: "Jan-18",
        link: "https://doi.org/10.5281/zenodo.3366028",
      },
      {
        id: "D1.2b",
        name: "Integrated Impact report",
        date: "Jul-19",
        link: "https://zenodo.org/record/3403800#.XX9TOpNKhTE",
      },
      {
        id: "D2.1a",
        name: "Technology Roadmap – Energy Storage Application",
        date: "Jul-17",
        link: "https://doi.org/10.5281/zenodo.3368430",
      },
      {
        id: "D2.1b",
        name: "Technology Roadmap – Renewable Energy Integration",
        date: "Jul-18",
        link: "https://doi.org/10.5281/zenodo.3368432",
      },
      {
        id: "D2.1c",
        name: "Technology Roadmaps",
        date: "Jul-19",
        link: "https://doi.org/10.5281/zenodo.3368434",
      },
      {
        id: "D2.2a",
        name: "Innovation Readiness Level Report – Energy Storage Technologies",
        date: "Jul-17",
        link: "https://doi.org/10.5281/zenodo.3368438",
      },
      {
        id: "D2.2b",
        name:
          "Innovation Readiness Level Report – Renewable Energy Technologies",
        date: "Jul-18",
        link: "https://doi.org/10.5281/zenodo.3368441",
      },
      {
        id: "D2.2c",
        name: "Innovation Readiness Level assessments",
        date: "Jul-19",
        link: "https://doi.org/10.5281/zenodo.3368456",
      },
      {
        id: "D2.3",
        name:
          "Methodology for linking technology innovation to energy system models",
        date: "Jan-17",
        link: "https://doi.org/10.5281/zenodo.3368463",
      },
      {
        id: "D2.4",
        name: "Co-evolution of technologies case study report",
        date: "Feb-18",
        link: "https://doi.org/10.5281/zenodo.3368474",
      },
      {
        id: "D4.2",
        name: "District heating case study report",
        date: "Jan-19",
        link: "https://doi.org/10.5281/zenodo.3368508",
      },
      {
        id: "D6.1",
        name: "Integrated Energy System Model",
        date: "Jan-19",
        link: "https://doi.org/10.5281/zenodo.3368541",
      },
      {
        id: "D6.2",
        name: "Regional energy security case study report",
        date: "Jan-19",
        link: "https://doi.org/10.5281/zenodo.3368543",
      },
      {
        id: "D6.3",
        name: "Grid and dispatch case study report",
        date: "Jan-19",
        link: "https://doi.org/10.5281/zenodo.3368547",
      },
      {
        id: "D6.4",
        name: "Policy Brief",
        date: "Jan-19",
        link: "https://doi.org/10.5281/zenodo.3368549",
      },
    ],
  },
  {
    theme: "Theme 4 (Stakeholder Engagement and Dissemination)",
    deliverables: [
      {
        id: "D7.1",
        name: "Stakeholder Interaction Portal",
        date: "Jul-19",
        link: "https://doi.org/10.5281/zenodo.3368567",
      },
      {
        id: "D7.2",
        name: "Pathways Diagnostic Tool",
        date: "Jul-19",
        link: "https://doi.org/10.5281/zenodo.3368569",
      },
      {
        id: "D7.3",
        name: "Open-source Engagement Model",
        date: "Apr-18",
        link: "https://doi.org/10.5281/zenodo.3368573",
      },
      {
        id: "D7.4",
        name: "Online Energy Systems Learning Simulation",
        date: "Jan-18",
        link: "https://doi.org/10.5281/zenodo.3368575",
      },
      {
        id: "D7.5",
        name: "Communication Plan",
        date: "May-16",
        link:
          "http://www.reeem.org/wp-content/uploads/2017/04/REEEM-D8.1-and-D7.5.pdf",
      },
      {
        id: "D7.6",
        name: "Energy Modelling Platform for Europe (EMP-E)",
        date: "Feb-17",
        link: "https://doi.org/10.5281/zenodo.3368577",
      },
    ],
  },
  {
    theme: "Theme 5 (Project Management)",
    deliverables: [
      {
        id: "MS3",
        name: "First version of Integrated Energy System Model developed",
        date: "Sep-17",
        link: "https://doi.org/10.5281/zenodo.3368585",
      },
      {
        id: "D6.6",
        name: "Data Management Plan (DMP)",
        date: "Jul-18",
        link: "https://doi.org/10.5281/zenodo.3368557",
      },
      {
        id: "D6.5",
        name: "Pathways Database",
        date: "Jan-19",
        link: "https://doi.org/10.5281/zenodo.3368551",
      },
      {
        id: "D8.1",
        name: "Project Manual",
        date: "Apr-16",
        link:
          "http://www.reeem.org/wp-content/uploads/2017/04/REEEM-D8.1-and-D7.5.pdf",
      },
    ],
  },
]

const Column1 = styled.td`
  width: 20%
`

const Column2 = styled.td`
  width: 60%
`

const Column3 = styled.td`
  width: 20%
  text-align: right;
`