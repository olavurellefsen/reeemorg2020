import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import kthLogo from "../images/logo/kth.jpg"
import aaltoLogo from "../images/logo/aalto.png"
import aarhusLogo from "../images/logo/aarhus.png"
import dtuLogo from "../images/logo/dtu.png"
import eihpLogo from "../images/logo/eihp.png"
import eitLogo from "../images/logo/eit.png"
import leiLogo from "../images/logo/lei.png"
import rliLogo from "../images/logo/rli.png"
import tokniLogo from "../images/logo/tokni.png"
import uclLogo from "../images/logo/ucl.png"
import ustuttLogo from "../images/logo/ustutt.png"

export default props => (
  <Layout
    pageTitle="Partners"
    location={props.location}
    showSocialMedia={["top", "bottom"]}
  >
    <SEO title="Partners" />
    <ImgStyle src={kthLogo} alt="KTH logo" />
    <h4>KUNGLIGA TEKNISKA HOEGSKOLAN (COORDINATOR)</h4>
    <p>
      With a total of almost 14,000 undergraduate students and more than 1,700
      active postgraduate students, KTH is responsible for one third of Sweden’s
      capacity for technical research and engineering education. Academic
      activities at the university span numerous focus areas from natural
      sciences to all branches of engineering. On a macro level, it is organized
      into five corresponding Platforms encompassing Energy, ICT, Materials,
      Transport and Life Science Technology. KTH is a lead partner in two
      program areas within the European Institute of Innovation and Technology
      (EIT): InnoEnergy and ICT Labs. Finally, KTH is involved in over 200
      ongoing EU projects.
    </p>

    <ImgStyle src={aaltoLogo} alt="Aalto logo" />
    <h4>AALTO-KORKEAKOULUSAATIO</h4>
    <p>
      Aalto University (AALTO) is a Finnish multidisciplinary university founded
      in 2010 by merging Helsinki School of Economics, the University of Art and
      Design Helsinki, and Helsinki University of Technology. The formerly
      independent Helsinki University of Technology, the second-oldest
      university in Finland and the leading Finnish university of technology,
      continues its activities in the form of four Aalto University Schools of
      technology corresponding to its former faculties. Aalto University has
      participated in 159 EC-FP7 projects, acting as coordinator in 48 of them.
      Aalto University also has 15 EC-Horizon 2020 projects under preparation or
      active. In REEEM, AALTO will be in charge of undertaking a Case Study 3 on
      “District Heating” and supporting Case Study 1 on “Regional Energy
      Security”. Aalto University has six schools with nearly 20 000 students
      and 4 700 employees, 390 of whom are professors. There is a wide variety
      of bachelor’s and master’s degrees awarded at Aalto University, and we
      also offer doctoral programmes in all the fields of study. Aalto
      University was founded in 2010 as Helsinki University of Technology, the
      Helsinki School of Economics and the University of Art and Design Helsinki
      were merged. The main campus is located in Otaniemi in Espoo, Finland. The
      other campuses are in Töölö and Arabia in Helsinki.
    </p>

    <ImgStyle src={aarhusLogo} alt="Aarhus Universitet logo" />
    <h4>AARHUS UNIVERSITET</h4>
    <p>
      The Aarhus University (AU), Department of Environmental Science (ENVS) has
      a staff of 130 people, where about 60 people work in atmospheric research.
      The department is very interdisciplinary with expertizes ranging from
      atmospheric physics and chemistry, atmospheric multiscale modelling,
      computer science, emissions, field experiments and monitoring,
      microbiology to geography, environmental economics, sociology and policy
      analysis. The aim of the department is to undertake both basic and applied
      research on some of the major challenges facing society, such as pollution
      and pollution control mechanisms, management of air, land, soil, water,
      and biodiversity, protection of ecosystem services and climate change. AU
      will contribute their expertise in health impact assessments to WP 5 on
      “Environment, Health and Resources”.
    </p>

    <ImgStyle src={dtuLogo} alt="DTU logo" />
    <h4>DANMARKS TEKNISKE UNIVERSITET</h4>
    <p>
      The Technical University of Denmark (DTU) is one of the leading technical
      universities in Europe (in the Leiden Ranking number one in the Nordic
      region and number seven in Europe). DTU has a strong focus on research,
      while holding a business-oriented approach, and is known for its focus on
      sustainability. The research programme Energy Systems Analysis (ESY),
      which prior to the merger with DTU had been part of the Risø National
      Laboratory for Sustainable Energy, has a strong record on developing
      methods and models for the analysis of energy, environmental and economic
      issues, including policy analysis and the adaptation of new technologies
      to complex energy systems. The Programme employs a multi-disciplinary team
      of about 15 scientists with four focus areas: 1) Macro-economics,
      econometrics, and forecast models, 2) system modelling, optimization, and
      simulation, 3) micro-economics, regulation, and policy analysis, and 4)
      evaluation and integration of new energy technologies. The team has
      undertaken a number of EU, national and regional projects in regards to
      renewable energies in energy systems modelling and policy analysis of the
      electricity sector and also in the heating, transport and waste sectors.
      The team has an excellent network in the Nordic countries from previous
      and on-going cooperation with a number of universities, businesses and
      public authorities. DTU will lead WP 5 on “Environment, Health and
      Resources” and contribute their expertise on integrated modelling
      approaches, especially between energy and climate models.
    </p>

    <ImgStyle src={eihpLogo} alt="EIHP logo" />
    <h4>ENERGETSKI INSTITUT HRVOJE POZAR</h4>
    <p>
      EIHP is a non-profit public institution owned by the Republic of Croatia,
      which grew upon a fifty-year-old tradition of energy sector planning. EIHP
      has specific competencies in the fields of energy system operation and
      development planning, energy statistics and balances, energy strategies
      and policy issues, market analysis, investment appraisal, regulation of
      energy markets, micro economic, econometric and risk analysis.
      Internationally renowned models such as MARKAL, WASP, MESSAGE, MAED,
      PLEXOS, BALANCE, IMPACT and ENPEP are used for long-term, mid-term or
      short-term demand and supply-side planning on different levels. Within
      REEEM, EIHP will lead Case Study 5 on “Grid and Dispatch” and contribute
      with their demand-side modelling expertise to WP 4 on “Society, Consumers
      and Behaviour”.
    </p>

    <ImgStyle src={eitLogo} alt="EIT Innoenergy logo" />
    <h4>EIT INNOENERGY</h4>
    <p>
      EIT InnoEnergy is a European consortium acting as a catalyser of
      innovation in sustainable energy by supporting innovation projects,
      providing acceleration services to start-ups and organizing Master’s and
      PhD programmes. EIT InnoEnergy counts 28 institutions as shareholders and
      over 90 associated partners. EIT-IE is experienced in developing cost
      analysis of technologies, drafting technology roadmaps and identifying top
      EU innovators in the energy field. At EIT InnoEnergy we support and invest
      in innovation at every stage of the journey – from classroom to customers.
      With our network of partners we build connections across Europe, bringing
      together inventors and industry, entrepreneurs and markets, graduates and
      employers, researchers and businesses.
    </p>

    <ImgStyle src={leiLogo} alt="LEI logo" />
    <h4>LIETUVOS ENERGETIKOS INSTITUTAS</h4>
    <p>
      The LEI is a technical research centre dealing with energy related
      research focusing on the analysis of security of energy supply,
      development of energy planning methods, fuel cells and hydrogen, renewable
      energy, thermal physics and fluid mechanics, nuclear safety, structural
      integrity assessment of components and structures and the simulation of
      complex energy systems. LEI has over 300 employees, including 13 Dr.
      Habilitus, 84 PhDs, 36 researchers with BSc and MSc degree, and 28 PhD
      candidates. LEI has extensive experience in international projects funded
      by: the IAEA (9 projects), FP5 (11 projects), FP6 (14 projects), FP7 (14
      projects), Phare, Intelligent Energy Europe (27 projects), COST (14
      projects), Eureka (4 projects), Leonardo da Vinci (1 project), INTERREG
      III (3 projects), the Baltic Sea Region 2007-2013 programme (3 project),
      etc. LEI has over 30 years of experience in modelling energy systems,
      including amongst others different aspects/technologies such as energy
      security, economic implications, CHP, storages, nuclear, intermittent
      energy sources (wind, solar, etc.), system reserves (primary, secondary,
      tertiary) and competition between different uses of land (competition
      food/energy). As part of REEEM, LEI will lead Case Study 1 on “Regional
      Energy Security” and support Case Study 3 on “District heating”. In
      addition, LEI will contribute their expertise in economic modelling to WP
      3 on “Economy”.
    </p>

    <ImgStyle src={rliLogo} alt="RLI logo" />
    <h4>REINER LEMOINE INSTITUT</h4>
    <p>
      The RLI is an independent non-profit research institution that performs
      scientific research on the subject of renewable energy. The objective is
      to make a scientific contribution to the transformation of the energy
      system towards 100% RE. The main fields of research are “optimised energy
      systems”, which investigate future scenarios with high penetration of RE,
      “sustainable mobility” considering the integration of RE in mobility
      concepts and potentials and economics of “off-grid systems” in remote
      areas and islands. Core competencies of the RLI are energy system models
      and simulations that consider renewable resource data to calculate
      potential power generation in hybrid systems, mini-grids and regional to
      global grid areas.
    </p>

    <ImgStyle src={tokniLogo} alt="Tøkni logo" />
    <h4>TØKNI</h4>
    <p>
      Tokni SpF (TOKNI) is an SME that develops learning simulations and other
      software to educational institutions, authorities and industry. Tokni
      focuses on developing collaborative learning solutions that are engaging,
      enjoyable and educational. All learning simulations developed by Tokni are
      based on a system dynamics approach with a strong emphasis on intuitive
      and effective graphical user interfaces. Between 2002 and 2014, Tokni
      developed and provided the learning simulation OilSim for the
      international oil and gas training and education industry. The major
      oilfield service company Schlumberger acquired OilSim and the oil and gas
      training business in February 2014, and continues to develop OilSim and
      the associated learning approach in the oil and gas industry. Tokni
      continues with simulations and training services not related to oil and
      gas.
    </p>

    <ImgStyle src={uclLogo} alt="UCL logo" />
    <h4>UNIVERSITY COLLEGE LONDON</h4>
    <p>
      UCL is one of the UK’s premier universities and UCL Energy Institute is
      the university’s mechanism for bringing together a wide range of
      perspectives, understandings and procedures in energy research,
      transcending the boundaries between academic disciplines. In particular,
      the UCL Energy Institute undertakes research in the areas of energy
      systems, transport and energy‐demand reduction and in doing so, develops
      and applies a wide portfolio of energy models focused on energy systems,
      macro‐economics, integrated assessment, and end‐ use sectors (industry,
      transport and buildings).
    </p>

    <ImgStyle src={ustuttLogo} alt="University of Stuttgart logo" />
    <h4>UNIVERSITAET STUTTGART</h4>
    <p>
      The Institute of Energy Economics and the Rational Use of Energy of the
      University of Stuttgart undertakes research and teaching in renewable
      energies, system analysis, technology assessment and energy economics. The
      Department of Energy Economics and Systems Analysis (ESA) consults
      politicians and industry on energy-economy-technical questions, assessment
      of policy instruments to increase energy and ecological efficiency,
      development and application of energy system and energy economic models
      and sustainable development of the energy system. The Department of
      Technology Assessment and Environment (TFU) has been engaged in research
      work on integrated assessment of health, environmental and climate impacts
      of energy systems, estimation of external costs of energy systems and
      development of efficient air pollution control and climate protection
      strategies.
    </p>
  </Layout>
)

const ImgStyle = styled.img`
  margin-top: 20px;
  max-height: 50px;
  max-width: 117px;
`
