import home1 from './img/home_mobility.svg';
import home2 from './img/home_climate.svg';
import home3 from './img/home_housing.svg';
import home4 from './img/home_health.svg';

import action2 from './img/home_action2.jpg';
import action3 from './img/home_action3.jpg';
import action4 from './img/home_action4.jpg';
import action5 from './img/home_action5.jpg';

import community1 from './img/home_logo_designlab.svg';
import community2 from './img/home_logo_yankelovich.png';
import community3 from './img/home_logo_id8.png';
import community4 from './img/home_logo_hth.png';
import community5 from './img/home_logo_league.png';
import community6 from './img/home_logo_AltSchool.png';
import community7 from './img/home_logo_centerforthearts.jpg';
import community8 from './img/home_logo_D39C.png';
import community9 from './img/home_logo_hoover.jpg';
import community10 from './img/home_logo_usd.png';
import community11 from './img/home_logo_idealab.jpg';
import community12 from './img/home_logo_idealabgov.png';
import community13 from './img/home_logo_wit.png';
import community14 from './img/home_logo_VIDA.png';
import community15 from './img/home_logo_LJCDS.png';
import community16 from './img/home_logo_pointloma.png';
import community17 from './img/home_logo_sdsu.png';
import community18 from './img/home_logo_sdja.png';
import community19 from './img/home_logo_newschool.png';
import community20 from './img/home_logo_swccd.png';
import community21 from './img/home_logo_sdcc.png';
import community22 from './img/home_logo_e3.png';
import community23 from './img/home_logo_nu.png';
import community24 from './img/home_logo_zip.jpg';
import community25 from './img/home_logo_urban.png';
import community26 from './img/home_logo_ucsd.png';

import logo1 from './img/home_logo1.png';
import logo2 from './img/home_logo2.png';
import logo3 from './img/home_logo3.png';

import city from "./img/about_city.svg";
import connect from "./img/about_connect.svg";
import div from "./img/about_div.svg";
import edu from "./img/about_edu.svg";
import find from "./img/about_find.svg";
import communicate from "./img/about_communicate.svg";

import playbook_educator from "./img/involve_playbook.pdf";
import educator from "./img/involve_partner.svg";
import sponsor from "./img/involve_sponsor.svg";
import expert from "./img/involve_volunteer.svg";
import innovator from "./img/involve_innovate.svg";
import question from "./img/involve_question.svg";
import mail from "./img/involve_mail.svg";

/*************************************Home content***************************************/
export const roles = [
  {
    image: innovator,
    contents: "Innovate"
  },
  {
    image: educator,
    contents: "Partner"
  },
  {
    image: expert,
    contents: "Volunteer"
  },
  {
    image: sponsor,
    contents: "Sponsor"
  }
]
export const sampleChallenges = [
  {
    id: 0,
    src: home1,
    isAction: "true",
    header: "IMPROVING MOBILITY",
    title: "How might we help people move freely through our city?",
    txt: "As people are looking for a more efficient way to move around, the mission of reducing our emissions and increasing the inclusivity of transportation continues to be an essential topic of discussion in our urban environments. Mobility can be examined from a number of lenses’ such as motor vehicle systems, transit, parking, intermodal connections, electric vehicles, accident reduction, walkability and bike-ability, and land-use patterns. <b>Help shape this problem by joining our discussion!</b>",
    action: "See what happened in 2017",
    link: "http://d4sd2017.org",
    isAction2: "false",
    action2: "",
    link2: ""
  },
  {
    id: 1,
    src: home2,
    isAction: "false",
    header: "ADDRESSING CLIMATE EFFECTS",
    title: "How can we help San Diego prepare for and mitigate climate change?",
    txt: "Greenhouse gas emission from the burning of fossil fuels has resulted in the gradual increase of global temperatures. Scientists have high confidence that global temperatures will continue to rise for decades to come. Climate change impacts areas such as transportation, housing, health, natural resources, food waste, agriculture, air pollution, and education. <b>Help shape this problem by joining our discussion!</b>",
    action: "Get Involved",
    link: "http://eepurl.com/c2kFon",
    isAction2: "false",
    action2: "",
    link2: ""
  },
  {
    id: 2,
    src: home3,
    isAction: "false",
    header: "CREATING ACCESSIBLE HOUSING",
    title: "How can we reimagine housing to meets the needs of all San Diegans?",
    txt: "After food and water, shelter is the most fundamental human need. Unfortunately, people have limited choices for safe, affordable, and long-term housing in San Diego. The issue affects the lives of all San Diegans. Housing is not just about physical structures, but includes other areas such as homelessness, land development, smart home technology, and mixed-use housing. <b>Help shape this problem by joining our discussion!</b>",
    action: "Get Involved",
    link: "http://eepurl.com/c2kFon",
    isAction2: "false",
    action2: "",
    link2: ""
  },
  {
    id: 3,
    src: home4,
    isAction: "false",
    header: "LIVING HEALTHY LIVES",
    title: "How can we help all San Diegans live healthy and active lives?",
    txt: "Many people have limited access to preventative and restorative health services. Health is determined by social and physical environments and is directly connected to how people live, learn, work, and play and touches on topics such as quality of life, population health, mental, physical and emotional health, and well being. <b>Help shape this problem by joining our discussion!</b>",
    action: "Get Involved",
    link: "http://eepurl.com/c2kFon",
    isAction2: "false",
    action2: "",
    link2: ""
    }
]

export const actionImg = [action2, action3, action4, action5]
export const communityLogo = [
  community1, community2, community3, community4, community5, community6,
  community7, community8, community9, community10, community11, community12, community13,
  community14, community15, community16, community17, community18, community19,
  community20, community21, community22, community23, community24, community25, community26]

export const logos = [logo1, logo2, logo3]

/*************************************About content***************************************/
export const aboutContent = {
  title1: "About D4SD",
  content1:"Design for San Diego (D4SD) is a civic design challenge that provides a space for all of us to address the region's most challenging issues. D4SD offers a series of public workshops to bring together a wide range of stakeholders and to scaffold a process of framing human-centered design problems, prototyping solutions, and building alliances to bring good ideas to life.",
  title2: "Who can participate?",
  content2: "Anyone! If you care about the city and want to have a chance to have your voice included in the conversation, then we welcome you! Find below some potential ways groups that can participate.",
  title3: "What are the goals of D4SD?",
  title4: "What and when are the key events?",
  content4: "D4SD will have three public events that link together a human-centered design process: round-table discussions, designathons, and the D4SD Summit. Different roles will have a slightly different process and these events will hold a different purpose. Innovators will be the ones gathering information and iterating upon ideas while community members will be teaching innovators about the problem topics and giving feedback throughout the process.",
  title5: "Learn more about D4SD 2017",
  content5: "In 2017, we started Design For San Diego, where hundreds of people were involved with generating concepts with the goal to create a San Diego where we all move freely. 23 teams ideated solutions using human-centered design principles to help solve the city’s problems regarding mobility. Visit our 2017 website to learn more about what we did in 2017 and to see some of the projects worked on during this time.",
  content3: [
  {
    txt: "To connect innovators, experts, city officials, professional designers, business leaders, and community members through a combination of in-person events and online activities.",
    img: connect
  },
  {
    txt: "To increase and diversity participation, particularly for typically underrepresented or marginalized populations, by creating a range of specific roles while striving for diversity, equity, and inclusion.",
    img: div
  },
  {
    txt: "To provide bottom-up community actions with more agency and to enhance the communications between the government and the local groups.",
    img: communicate
  },
  {
    txt: "To contribute to the burgeoning design-driven economy in San Diego by providing resources to help launch top proposals by bringing together leaders from various sectors.",
    img: city
  },
  {
    txt: "To provide an educational opportunity that serves people from a wide range of ages, backgrounds, and motivations.",
    img: edu
  },
  {
    txt: "To collaboratively explore a range of civic problems that the San Diego region faces.",
    img: find
  }
]}

/*************************************Involve content***************************************/
export const involveContent = {
  title1: "Get Involved",
  content1:"You can take part in D4SD in a variety of ways! Whether it be ideating solutions, giving feedback, teaching civic design in the classroom, or supporting the initiative, getting involved with D4SD can look a little different for each person. Below are a few ways to get involved.",
  roles: [
  {
    title: "Join the discussion",
    txt: "NEW TEXT",
    image: innovator,
    id: "innovators",
    link: "http://eepurl.com/c2kFon",
    isAction: "false",
    action: ""
  },
  {
    title: "Join the mailing list",
    txt: "NEW TEXT",
    image: expert,
    id: "experts",
    link: "http://eepurl.com/c2kFon",
    isAction: "false",
    action: ""
  },
  {
    title: "Sponsor D4SD",
    txt: "D4SD provides a stage to share the problems and topics you care about. You can tap into a network of innovators to solve problems that matter to you. There are also many opportunities to interact with the broader San Diego community to get further support and traction for the developed solutions.",
    image: sponsor,
    id: "sponsors",
    link: "mailto:team@d4sd.org",
    isAction: "true",
    action: "CONTACT OUR TEAM"
  },
  {
    title: "Join the D4SD team",
    txt: "NEW TEXT",
    image: mail,
    id: "mail",
    link: "http://eepurl.com/c2kFon",
    isAction: "true",
    action: "JOIN OUR MAILING LIST"
  },
]}
