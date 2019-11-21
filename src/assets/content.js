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
import logo4 from './img/home_logo4.png';
import logo5 from './img/home_logo5.png';
import logo6 from './img/home_logo6.png';
import logo7 from './img/home_logo7.png';

import city from "./img/about_city.svg";
import connect from "./img/about_connect.svg";
import div from "./img/about_div.svg";
import edu from "./img/about_edu.svg";
import find from "./img/about_find.svg";
import communicate from "./img/about_communicate.svg";

import educator from "./img/involve_partner.svg";
import sponsor from "./img/involve_sponsor.svg";
import expert from "./img/involve_volunteer.svg";
import innovator from "./img/involve_innovate.svg";
import mail from "./img/involve_mail.svg";
import feedback from './img/involve_feedback.svg';

import hcd from './img/process_hcd.svg';
import discover from './img/timeline_discover.svg';
import ideate from './img/timeline_ideate.svg';
import prototype from './img/timeline_prototype.svg';
import pitch from './img/timeline_pitch.svg';
import activate from './img/timeline_activate.svg';

import challenge_mobility from './img/challenge_mobility.svg';
import challenge_health from './img/challenge_health.svg';
import challenge_climate from './img/challenge_climate.svg';
import challenge_housing from './img/challenge_housing.svg';

import mobility1 from './img/mobility_lastmile.jpg';
import mobility2 from './img/mobility_safety.jpg';
import mobility3 from './img/mobility_equitable.jpg';
import mobility4 from './img/mobility_multimodal.jpg';
import housing1 from './img/housing_mixed.jpg';
import housing2 from './img/housing_resilient.jpg';
import housing3 from './img/housing_homelessness.jpg';
import housing4 from './img/housing_smart.jpg';
import health1 from './img/health_senior.jpg';
import health2 from './img/health_mental.jpg';
import health3 from './img/health_safety.jpg';
import health4 from './img/health_food.jpg';
import climate1 from './img/climate_education.jpg';
import climate2 from './img/climate_waste.jpg';
import climate3 from './img/climate_coastal.jpg';
import climate4 from './img/climate_community.jpg';


/*************************************Home content***************************************/
export const roles = [
  {
    image: innovator,
    contents: "INNOVATE"
  },
  {
    image: educator,
    contents: "PARTNER"
  },
  {
    image: expert,
    contents: "VOLUNTEER"
  },
  {
    image: sponsor,
    contents: "SPONSOR"
  }
]
export const sampleChallenges = [
  {
    id: 0,
    src: home1,
    isAction: "true",
    header: "LEARN ABOUT THE CHALLENGES: IMPROVING MOBILITY",
    title: "How might we help people move freely through our city?",
    txt: "As people are looking for alternate ways to move around, while also wanting to reduce their emissions, the topic of inclusive and environmentally conscious transportation continues to be a pressing issue in our urban environment. Mobility can be examined from a number of lenses such as motor vehicle systems, transit, parking, intermodal connections, electric vehicles, accident reduction, walkability and bike-ability, and land-use patterns. <b>Help shape this problem by joining our discussion!</b>",
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
    header: "LEARN ABOUT THE CHALLENGES: ADDRESSING CLIMATE EFFECTS",
    title: "How can we help San Diego prepare for and mitigate climate change?",
    txt: "Burning of fossil fuels has resulted in the gradual increase of global temperatures. Scientists have high confidence that global temperatures will continue to rise for decades to come. Climate change impacts areas such as transportation, housing, health, natural resources, food waste, agriculture, air pollution, and education. <b>Help shape this problem by joining our discussion!</b>",
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
    header: "LEARN ABOUT THE CHALLENGES: CREATING ACCESSIBLE HOUSING",
    title: "How can we reimagine housing to meet the needs of all San Diegans?",
    txt: "Shelter is a fundamental human need; however people have limited choices for safe, affordable, and long-term housing in San Diego. The issue of housing is more than the physical structures. It also includes homelessness, land development, smart home technology, and mixed-use housing, all of which needs to be addressed with San Diego’s growing population. <b>Help shape this problem by joining our discussion!</b>",
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
    header: "LEARN ABOUT THE CHALLENGES: LIVING HEALTHY LIVES",
    title: "How can we help all San Diegans live healthy and active lives?",
    txt: "Many San Diego residents have limited access to preventative and restorative health services. Health is determined by social and physical environments and is directly connected to how people live, learn, work, and play. Topics such as quality of life, population health, and social well being, are all different aspects of how we as a city, need to improve our well being. <b>Help shape this problem by joining our discussion!</b>",
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

export const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7]

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
    txt: "To increase the agency of bottom-up community initiatives and enhance communication between the community and city.",
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
    txt: "We have a Slack workspace set up with multiple channels that will allow innovators to communicate with their team members and the greater D4SD community. When you register online, you will be connected to our network of resources to based on how you would like to participate.",
    image: innovator,
    id: "innovators",
    link: "https://join.slack.com/t/d4sd/shared_invite/enQtMjExMjA5MDY0MjkzLTk3NjY4NGM3MTE0N2M1NTJjODAxMGRiMDgxNmQ4ZDk1NTU4Mzk0OThjMTdkMzc0NTJmY2M1ZmNkZDA3NTdjYTU",
    isAction: "true",
    action: "JOIN DISCUSSION"
  },
  {
    title: "Become a feedback provider",
    txt: "Contribute to the D4SD as a feedback provider! Innovators in D4SD need diverse community members’ perspectives to improve their solutions on civic issues. Feedback provider could use their  constructive suggestions to help innovators.",
    image: feedback,
    id: "experts",
    link: "/getinvolved/feedback_provider",
    isAction: "true",
    action: "LEARN MORE"
  },
  {
    title: "Sponsor D4SD",
    txt: "Get the chance to grow your brand within D4SD’s community by sponsoring events. This would allow either your product or service to reach new ears,while supporting a mission that matters to you.",
    image: sponsor,
    id: "sponsors",
    link: "mailto:team@d4sd.org",
    isAction: "true",
    action: "CONTACT OUR TEAM"
  },
  {
    title: "Join the D4SD team",
    txt: "We need, innovators, educators, volunteers, and more to help us reach our goal. If you’re interested in any of those roles or want to forge you own role, register with us below!",
    image: mail,
    id: "mail",
    link: "http://eepurl.com/c2kFon",
    isAction: "true",
    action: "JOIN OUR TEAM"
  },
  {
    title: "Join the mailing list",
    txt: "Keep up with D4SD updates and events with our newsletter! Every week we highlight key takeaways from discussions, shout out community members, and remind you of important deadlines to help you stay on track during the challenge.",
    image: expert,
    id: "experts",
    link: "http://eepurl.com/c2kFon",
    isAction: "true",
    action: "JOIN MAILING LIST"
  }
]}

/********************************************FAQ*****************************************/
export const faqContent = [
  {
    question: 'What is D4SD?',
    answer: 'Design for San Diego (D4SD) is a civic design initiative that brings together innovators, mentors, experts, and citizens to address San Diego’s most challenging issues through human-centered design. Our aim is to provide a space that allows for the community to discover key civic issues, to ideate and prototype solutions to the problems they see, to pitch their proposals in a public forum, and to activate others to help bring them to life.<br/><br/>This year’s theme— How can we make San Diego a more sustainable city— is rooted in the United Nations’ 2030 vision to transform our world by making cities inclusive, safe, resilient and sustainable. D4SD has organized the challenges around four main topics, but you are welcome to explore anything related to sustainability:<li>Housing</li><li>Mobility</li> <li>Health</li> <li>Climate</li>',
  },
  {
    question: 'Why should I participate in D4SD?',
    answer: "Join D4SD for this unique opportunity to collaborate and compete with other city innovators to help address sustainability-related issues facing San Diego and cities around the world. The best proposals will be rewarded with financial and mentoring resources to further develop their ideas into reality. <br/><br/>Participants may benefit from:<li> Solving real problems and inspiring change in your community.</li><li> Learning human-centered design practices from professional designers and educators in the UC San Diego Design Lab. </li><li> Working with real data and collaborate with the City of San Diego's data portal and award-winning Performance and Analytics Department. </li><li>Making new connections through networking opportunities with designers, engineers, data scientists, civic leaders, entrepreneurs, and other innovators. </li><li>Earning resources and building alliances to help develop your team’s proposal into a startup business, an infrastructure development, or a policy proposal.</li>",
  },
  {
    question: 'How can I get started?',
    answer: "Our goal is to motivate and support citizens in learning how to use human-centered design to truly understand issues facing our region and to creatively generate solutions that could improve sustainability in San Diego. There’s many ways to get started:<li>You can learn more about the D4SD sustainability topics on the <a href='/challenges'>Challenges page</a>. </li><li>You can also <a href='http://eepurl.com/c2kFon' target='_blank'>sign up to be on our mailing list</a> and to volunteer for other roles as part of the challenge. </li><li>You can chat online with other innovators, experts, and citizens through our <a href='https://join.slack.com/t/d4sd/shared_invite/enQtMjExMjA5MDY0MjkzLTk3NjY4NGM3MTE0N2M1NTJjODAxMGRiMDgxNmQ4ZDk1NTU4Mzk0OThjMTdkMzc0NTJmY2M1ZmNkZDA3NTdjYTU' target='_blank'>D4SD Slack forum</a>. </li><li>You can attend one of the in-person events to help you connect with other innovators and to get mentorship from design practitioners.</li><li>You can read up on human-centered design, get advice on building stakeholder relationships, and see example solutions on the <a href='/resources'>Resources page</a>.",
  },
  {
    question: 'How and when do I register for the challenge?',
    answer: "Participants can register here for the challenge between Jan 6th and March 15th 2020. Once you create a D4SD account, visit the Workspace to participate in key activities, such as discussing the challenges in the online forum, finding a team, developing a proposal, and requesting feedback from the community.",
  },
  {
    question: 'How do I form teams? ',
    answer: "While you do not need a team to enter the D4SD challenge, a team can help you build your good idea into a great solution. An effective team is one that has a mix of diverse talents all striving towards a common goal. <br/><br/>The best way to find team members is to attend one of the public D4SD events (announcements coming soon). The events will give you a chance to participate in fun hands-on activities, such as small group discussions, brainstorming, and prototyping, and will help you find people interested in similar problems. <br/><br/>If you cannot attend the in-person events, you can take advantage of the D4SD Slack Channel to look for teammates and discuss solutions with other challenge participants. You are free to communicate directly with other participants and form teams on your own. There is no limit to team size, however we recommend team sizes of 4-6.",
  },
  {
    question: 'Can I work on multiple teams?',
    answer: 'No. Participants can enter the challenge either as an individual or as a team. Participants can even switch teams during the challenge or combine two teams together. However, each participant can only be part of one team proposal.',
  },
  {
    question: 'Who owns the solutions?',
    answer: 'Individuals or teams will retain all intellectual property rights on solutions submitted to the D4SD Challenge. As an initiative from the UC San Diego Design Lab, D4SD is a non-profit dedicated to demonstrating the value of human-centered design and incubating great ideas into companies or longer-term projects that foster economic activity in the City of San Diego and beyond.',
  },
  {
    question: 'How can my team get help on our project?',
    answer: 'D4SD supports many ways for you and your team to get help. Your team can reach out through the Slack channel, for example, by posting a message to one of the problem thread channels. Later, during the prototyping phase of D4SD, we will open a feedback exchange where you can get input from the community. D4SD also has a resources page with various tips on how to get started.',
  },
  // {
  //   question: 'What do I need to submit throughout the challenge?',
  //   answer: "There are two deadlines for submissions: The 1st deadline is for preliminary submission which is OPTIONAL, and the 2nd deadline is for final submission which is REQUIRED. After the first deadline, there will be a feedback session during which the domain experts and community members review your submitted work and give you feedback and suggestions. After the final deadline, the deliverables will be given to our jurors to determine the winners of the challenge. So your progress on the preliminary feedback session does not play into the final judging process and it only serves for a resource for all teams to improve on their work. This is the specific requirements for these two rounds of submissions: <br/><br/><ol><li><b>Preliminary Submission</b></li><br/>The preliminary submission is valuable for you to keep track of your progress and to reflect on your work. More importantly, submitting the works by this early deadline allows you to receive feedback from the community partners of D4SD. It is up to you whether you would like to be part of this feedback session or not and your final submission will be judged on a fair basis regardless of whether you decide to enter this session or not. In other words, you can skip this deadline, submit the final submission only and still get a chance to win the challenge. However, we highly recommend that you could participate in this stage because it is the only time that you are able to get help from D4SD in terms of connecting with the specialists in the field and with the community members who are potentially affected by the problems that you defined. Their feedback might provide guidance on the iteration of your solution or even the scoping of your project overall.<br/><ol><li><b>Problem description</b></li><ol><li>Define your problem in no more than two sentences. The problem definition should be a product of your own analysis of the problem space, not simply a replication of the questions provided by D4SD. Your problem definition can be possibly grounded in user research, interviews and statistics. You can only submit one problem definition, but you can keep editing it before the deadline.</li></ol><li><b>Solutions</b></li><ol><li>You can propose at most 3 solutions for the problem you defined. Each solution should be presented as a Solution Proposal, which is suggested to include: a clear description of your solution, it could be either a concept, an illustration, a prototype of your ideas or anything that you think best represent your proposed solution. Keep in mind that at this point, the brainstorming process is more meaningful than a well constructed final product. You can upload at most 3 pdf files, each of which includes a different solution.</li></ol></ol><br/><br/><li><b>Final Submission</b></li><br/>All teams are required to submit presentation slides and a poster but only the finalists are able to give their final pitches at the summit while all teams have a chance to present their posters at the summit. These are the specific requirements for the two items in your submission:<ol><li><b>Presentation slides</b></li> <ol><li>A clear definition</li><li>An image that clearly illustrates your solution/concept </li><li> An analysis of the strengths and limitations of your solution </li></ol><li><b>Poster</b></li><ol><li>You can propose multiple solutions for the problem you choose (3 maximum), At this point, the brainstorming process is more meaningful a well constructed final product.</li><li> Each solution should include a Solution Proposal which is suggested to include: a clear description of your solution, it could be either a concept, an illustration, a prototype of your ideas or anything that you think best represent your proposed solution.</li></ol></ol>",
  // },
  // {
  //   question: 'How will my work be judged?',
  //   answer: "To enter the D4SD Challenge, teams must submit the final submission deliverables by March 15th at 11:59PM PDT.<br/><br/>In general, solutions to the D4SD Challenge will be assessed based on four key criteria: <br/><ol><li><b>Human-centered process</b> (How effectively does the team involve stakeholders, obtain feedback, and leverage data to support design decisions?)</li><li><b>Novelty</b> (How unique is the solution compared to other available solutions?)</li><li> <b>Feasibility</b> (How likely can this solution be implemented? Will it work in the real world?)</li><li><b>Impact</b> (How will the solution affect people? Does it have any downsides?) </li></ol><br/>Each deliverable will also be part of the overall judgement process: <ul><li> Problem statement:</li><ul><li>Identities and clearly articulates a real-world problem.</li><li> Provides evidence of problem (statistics pulled from cited sources, interview quotes with affected parties, etc.). </li><li> Explains how solving the problem will affect people </li></ul><li>Solution statement:</li><ul><li> Explains concept clearly and concisely.</li><li>Describes how the solution is novel/creative.</li><li> Indicates how the solution would be practical and feasible to implement. </li><li> Predicts the potential impact on both primary and secondary stakeholders.</li></ul><li>Prototype: </li><ul><li> Provides a simple demonstration of the proposed solution. </li><li> Explains clearly how the solution works.</li><li> Documents the overall process of creating the prototype and shows the iterative effort put into creating a minimal viable prototype.</li></ul><li> Poster (40” tall by 30” wide in full color):</li><ul><li>Offers a visually appealing representation of the problem and proposed solution.</li><li> Follows effective visual design principles </li><li> Represents the brand identity of the team. </li><li> Uses the designated Poster Template</li></ul></ul> <br/>The judging process has two rounds:<br/><ol><li>In round one, a panel of experts in human-centered design, civics, and business will assess the deliverables according to the criteria listed above. This judging process will happen online after the Oct 22 11:59pm PDT deadline.  Finalists will be announced on October 25th at the Design Forward community mixer at Broadway Pier (6-9pm), on the D4SD website, as well as  through email.</li><li>In round two, distinguished jurors will assess the finalists during the Design Forward Summit on Oct 26th. Teams must have at least one team member present throughout the day (7:30am-7pm) to interact with the jurors.  Finalist teams will also deliver a two-minute verbal pitch that evening during the D4SD Awards Ceremony.</li></ol>",
  // },
  // {
  //   question: 'How can I get help on my project?',
  //   answer: 'There are many ways for you and your team to get help, and D4SD supports many support options. One way your team can reach out is through the slack channel. You can propose ideas in the discussions or even ask one of the experts personally. During the D4SD challenge, there will be feedback exchange phase, where D4SD also has a resources page with various tips on how to get started.',
  // },
  // {
  //   question: 'What are the rules and resources for teams?',
  //   answer: "You do not need to work as part of a team. Individuals can create submissions on their own. If you do have a team, it can have at most five team members. <br/><br/>Each team can request a private Slack channel on the D4SD Slack Team discussion forum by filling out this form  with the team name, as well as the names and email addresses for each team member. <br/><br/>To officially enter the challenge, each individual or team must create an entry on the D4SD website by October 10.",
  // },
  // {
  //   question: 'Do I need to print my team’s poster?',
  //   answer: 'No. D4SD will cover the cost of printing posters for all valid submissions under the following conditions:<li> The entry must be complete and valid as determined by the D4SD organizing team. </li><li> The poster must follow the guidelines and use the poster template specified here. </li><li> At least one team member must be able to present your poster at the Design Forward Community Mixer on Oct 25 from 6-9pm. </li><li> If your team is selected as a finalist, at least one team member must be available for the Design Forward Summit on Oct 26th from 7:30am-7pm.</li>',
  // },
  // {
  //   question: 'How can I discuss the challenges with other people in the city? ',
  //   answer: "We created a dedicated D4SD Slack Team forum for you to discuss the challenge briefs with other innovators in the city.  Simply click here and follow the instructions to sign up. Slack is a free online messaging and collaboration software. When you receive the confirmation email, click on the link to join the D4SD slack forum. <br/><br/>After you join Slack, if you need help, you can click the “D4SD Helper Bot” to be invited to specific discussions, or send a chat to the \"D4SD Team\". <br/><br/>All discussions on the D4SD Slack forum, must adhere to the D4SD Code of Conduct.",
  // },
  // {
  //   question: 'If I still have questions, who can I contact for more information?',
  //   answer: "Contact the D4SD team at <a href='mailto:team@d4sd.org'> team@d4sd.org</a> for questions about the Civic Design Challenge or if you are having technical difficulties with the D4SD Slack discussion forum.",
  // }
];


export const challengeContent = {
  title: "Challenge Brief",
  content:"You can take part in D4SD in a variety of ways! Whether it be ideating solutions, giving feedback, teaching civic design in the classroom, or supporting the initiative, getting involved with D4SD can look a little different for each person. Below are a few ways to get involved.",
  nav: [
    {
      title: "Mobility",
      img: challenge_mobility,
    },
    {
      title: "Climate",
      img: challenge_climate
    },
    {
      title: "Housing",
      img: challenge_housing
    },
    {
      title: "Health",
      img: challenge_health
    }
  ],
  contents: [
    {
      id: "Mobility",
      subtitle: "MOBILITY",
      title: "How might we help people move freely through our city?",
      texts: "As people are looking for alternate ways to move around, while also wanting to reduce their emissions, the topic of inclusive and environmentally conscious transportation continues to be a pressing issue in our urban environment. Mobility can be examined from a number of lenses such as motor vehicle systems, transit, parking, intermodal connections, electric vehicles, accident reduction, walkability and bike-ability, and land-use patterns.",
      problems: [
        {
          img: mobility1,
          problem: "Last Mile",
          detail: "How might we optimize the last mile of a commute?"
        },
        {
          img: mobility2,
          problem: "Safety",
          detail: "What steps can be taken to minimize accidents and protect drivers and pedestrians?"
        },
        {
          img: mobility3,
          problem: "Equitable Access",
          detail: "How can we provide mobility solutions that meet the unique needs of every San Diegan?"
        },
        {
          img: mobility4,
          problem: "Multimobdal Transportation",
          detail: "How can transportation adapt to changing day to day needs?"
        }
      ]
    },
    {
      id: "Climate",
      subtitle: "CLIMATE",
      title: "How can we help San Diego prepare for and mitigate climate change?",
      texts: "Burning of fossil fuels has resulted in the gradual increase of global temperatures. Scientists have high confidence that global temperatures will continue to rise for decades to come. Climate change impacts areas such as transportation, housing, health, natural resources, food waste, agriculture, air pollution, and education.",
      problems: [
        {
          img: climate1,
          problem: "Education and Awareness",
          detail:"How can we educate San Diegans about climate change and encourage them to take action in their communities?"
        },
        {
          img: climate2,
          problem: "Waste Management",
          detail:"How can we reduce the amount of food, water, energy wasted in San Diego? "
        },
        {
          img: climate3,
          problem: "Coastal Living",
          detail:"How can we design San Diego to be resilient in the face of climate change, beach erosion, and rising water levels?"
        },
        {
          img: climate4,
          problem: "Community Infrastructure ",
          detail:"How can we leverage connections between people and organizations to create community-based climate interventions?"
        }
      ]
    },
    {
      id: "Housing",
      subtitle: "HOUSING",
      title: "How can we reimagine housing to meet the needs of all San Diegans?",
      texts: "Shelter is a fundamental human need; however people have limited choices for safe, affordable, and long-term housing in San Diego. The issue of housing is more than the physical structures. It also includes homelessness, land development, smart home technology, and mixed-use housing, all of which needs to be addressed with San Diego’s growing population.",
      problems: [
        {
          img: housing1,
          problem: "Mixed-Use Housing and Placemaking",
          detail: "How might we do a better job of creating a sense of place and community in the face of vacation rentals, mixed-use houses, and gentrification?"
        },
        {
          img: housing2,
          problem: "Resilient Homes",
          detail: "How can we make homes more resilient to climate change, desertification, and other environmental challenges facing San Diego?"
        },
        {
          img: housing3,
          problem: "Homelessness",
          detail: "How can we create opportunities to address the needs of the most vulnerable (shelter, safety, nutrition..)?"
        },
        {
          img: housing4,
          problem: "Internet of Things (IoT)",
          detail: "How can smart home technology connect us rather than isolate us while still keeping a sense of privacy and security?"
        }
      ]
    },
    {
      id: "Health",
      subtitle: "HEALTH",
      title: "How can we help all San Diegans live healthy and active lives?",
      texts: "Many San Diego residents have limited access to preventative and restorative health services. Health is determined by social and physical environments and is directly connected to how people live, learn, work, and play. Topics such as quality of life, population health, and social well being, are all different aspects of how we as a city, need to improve our well being.",
      problems: [
        {
          img: health1,
          problem: "Senior Health Care",
          detail: "How can we offer effective care services for senior people?"
        },
        {
          img: health2,
          problem: "Mental Health",
          detail: "How might we provide the care and resources needed to help people with mental health issues?"
        },
        {
          img: health3,
          problem: "Safety",
          detail: "How can we build resilience into our community so that people feel safe? "
        },
        {
          img: health4,
          problem: "Food Insecurity",
          detail: "How might we ensure that everyone in San Diego has reliable access to food?"
        }
      ]
    }
  ],
}

export const timelineContent = {
  title1: "Workspace",
  content1: "D4SD provides support for our community to follow a human-centered design process where we collectively discover and understand civic issues, ideate and prototype potential solutions, pitch proposals to civic and business leaders, and activate the local community to address key civic challenges in our region.",
  title2: "How to get started?",
  content2: "If you’re a problem solver and you want to devote your ideas, energy, and enthusiasm to addressing complex challenges in San Diego, we want you to participate!  To get started, <a href='/challenges'>read the challenge briefs</a> about making a more sustainable San Diego, read our <a href='/resources/process/'>advice on methods for human-centered design</a>, and register on the platform (opens Jan 6th, 2020).",
  title3: "D4SD 2020 Timeline",
  content3: "The deadline to submit a civic design concept is <b>March 15, 2020</b>. D4SD is structured to help people collaborate through a process of Discovery, Ideation, Prototyping, Pitching, and Activation. The timeline below offers a schedule of activities for participants who want to innovate.  If you want to get involved as a mentor, feedback provider or speaker, please <a href='/getinvolved'>learn more about these roles</a>.",
  title4: "Deliverables",
  content4: "A valid submission for D4SD 2020 includes a written summary of a specific problem you aim to solve, a written summary of your solution, a link to a prototype of your solution, and a visual poster that can be printed and displayed at a design summit.",
  timeline: [
    {
      stage: "Explore Challenges Impacting our Community ",
      date: "STARTS JAN 6",
      detail: "Problem discovery is perhaps the most important part of the design process. It is crucial to learn more about the problems impacting our community before trying to innovate new solutions. To get started, <a href='/challenges'>read up on this year’s challenge topics</a>. To further engage in problem discovery, you can contribute to online discussions about these problem topics on the <a href='https://join.slack.com/t/d4sd/shared_invite/enQtMjExMjA5MDY0MjkzLTk3NjY4NGM3MTE0N2M1NTJjODAxMGRiMDgxNmQ4ZDk1NTU4Mzk0OThjMTdkMzc0NTJmY2M1ZmNkZDA3NTdjYTU' target='_blank'>D4SD Slack Channel</a>. Be sure to read <a href='/resources'>our advice on methods to support the discovery process</a>.",
      action1: "Join the Online Discussion",
      action2: "Explore Civic Challenges",
      state1: "active",
      state2: "active",
      isAction1: true,
      isAction2: true,
      link1: 'https://join.slack.com/t/d4sd/shared_invite/enQtMjExMjA5MDY0MjkzLTk3NjY4NGM3MTE0N2M1NTJjODAxMGRiMDgxNmQ4ZDk1NTU4Mzk0OThjMTdkMzc0NTJmY2M1ZmNkZDA3NTdjYTU',
      link2: '/challenges',
      target: "_blank",
      img: discover,
    },
    {
      stage: "Share your Ideas and Find a Team",
      date: "BY FEB 3",
      detail: "Great teams can tap into the diversity of skills and perspectives of their members as they collaborate. Visit the D4SD Slack channel to meet other participants and form teams around the D4SD challenges. After Jan 6th, you can register and to get updates about what’s happening with D4SD.",
      action1: "Search for teammates on Slack",
      state1: "active",
      action2: "Register your team",
      state2: "inactive",
      note: "Registration will open on JAN 6",
      link1: 'https://join.slack.com/t/d4sd/shared_invite/enQtMjExMjA5MDY0MjkzLTk3NjY4NGM3MTE0N2M1NTJjODAxMGRiMDgxNmQ4ZDk1NTU4Mzk0OThjMTdkMzc0NTJmY2M1ZmNkZDA3NTdjYTU',
      isAction1: true,
      isAction2: true,
      img: ideate,
    },
    {
      stage: "Propose Initial Concepts and Get Community Feedback",
      date: "BY FEB 14",
      detail: "Your team will have the opportunity to get early feedback from members of the San Diego community on your initial concepts. Community feedback can be particularly valuable as these stakeholders will likely have a sense of what’s feasible and desirable in solutions to address key civic issues. To participate in community feedback, register and submit your team’s preliminary concepts here in the D4SD Workspace by Feb 15th. The preliminary submission must include a description of the problem and potential solutions, details about your team, and questions for feedback providers to answer about your concept.",
      action1: "Sign up for D4SD",
      state1: "inactive",
      action2: "Register your team",
      state2: "inactive",
      note: "Registration will open on JAN 6",
      isAction1: true,
      isAction2: false,
      img: prototype,
    },
    {
      stage: "Submit Final Proposals for the D4SD Summit  ",
      date: "FEB 15 TO FEB 29",
      detail: "How will your prototype be received when presented in public? After viewing feedback on your prototype, refine your concept and submit your final submission here.  A complete submission should demonstrate that your team has meaningfully engaged with a particular issue and thoughtfully constructed a prototype solution that addresses the needs of specific stakeholder groups.",
      action1: "Sign up for D4SD",
      state1: "inactive",
      action2: "Register your team",
      state2: "inactive",
      note: "Registration will open on JAN 6",
      isAction1: true,
      isAction2: false,
      img: pitch,
    },
    {
      stage: "Create Community Alliances to Support your Proposal ",
      date: "APR 4",
      detail: "Many good concepts fail to gain traction at this point.  The D4SD summit offers a platform from which you can personally introduce your concept to civic leaders, entrepreneurs, and community members.  The best submissions will draw on evidence to demonstrate the viability of their solutions, while critically discussing the opportunity, barriers to deployment, and potential risks associated with the prototype.  While your presentation may be just a few minutes, the conversation about your prototype might lead to meaningful change.",
      action1: "Sign up for D4SD Summit",
      state1: "inactive",
      action2: "Register your team",
      state2: "inactive",
      note: "Registration will open on JAN 6",
      isAction1: true,
      isAction2: false,
      img: activate,
    },
  ]
}

export const resourcesContent = {
  title1: "Resources",
  content1: "This page provides a wealth of resources to help you learn methods for human-centered design, find out about the latest technology related to the challenges, and get answers to your frequently asked questions.",
  resource: [
    {
      title: "D4SD Process Guide",
      content: "Modeled after best practices in human-centered design research, the D4SD process involves five key phases: Discovery, Ideate, Prototype, Pitch, Activate.  Read more about how you and your team can get the most out of each phase.",
      action: "LEARN MORE",
      link: "/resources/process"
    },
    {
      title: "Stakeholder Relationships",
      content: "Addressing civic challenges often involves understanding diverse perspectives from many stakeholders, including people who are directly and indirectly impacted by a particular problem or opportunity. See our guide on building community relationships.",
      action: "LEARN MORE",
      link: "resources/stakeholder"
    },
  ]
}

export const processContent = {
    title1: "Process",
    content1: "D4SD participants will work together on teams to <b>discover</b> civic issues, to <b>ideate</b> novel solutions for those issues, to <b>prototype</b> and get feedback on proposed solutions, to pitch your refined concept, and to <b>activate</b> your community to help bring good ideas to life.  The following resources are meant to help you and your team get started at each phase of the D4SD civic design process.",
    title2: "Human-Centered Design",
    content2: "Design for San Diego seeks to tackle complex civic challenges that affect our region by engaging and coordinating hundreds of innovators in a process of human-centered design.",
    content3: [
      {
        title: "Discover:	What experiences do people have with different civic issues?",
        txt: "To investigate a civic issue, civic innovators conduct interviews, focus groups, and other fieldwork to deeply understand how an issue affects different stakeholders as they engage with the communities of people affected most by an issue.  During the discovery phase, innovators listen for stakeholder values, resources, and concerns, which they translate into design constraints that bound the space of viable solutions as well as questions to explore further.  Innovators build empathy with the stakeholders through the process of discovery.<br/><a href='/resources/stakeholder'>How do I identify stakeholder groups?</a>"
      },
      {
        title: "Ideate: Can we imagine better ways to address the issues? ",
        txt: "Civic innovators generate ideas with other people and as teams. Through the process of generating ideas, civic innovators explore the solutions an issue in the design space paying careful attention to the design constraints and design questions identified during the Discovery phase.  Civic innovators may also reach out to the stakeholder community as collaborators throughout the ideation process."
      },
      {
        title: "Prototype: How can we make our ideas concrete and testable?  ",
        txt: "As civic innovators identify viable design ideas, they begin to work with physical materials, such as paper, web systems, and other lightweight media to rapidly realize the idea.  By working with physical materials, civic innovators may also recognize new design constraints and design questions about the issue, which can require revisiting their Discovery phase."
      },
      {
        title: "Pitch: How can we convince other people that we have a good concept?",
        txt: "Prototypes do not need to be fully fleshed out to add value to the civic design process.  A well-crafted paper prototype can provide enough context so that community stakeholders can offer feedback about the ideas.  Through an iterative process, civic innovators work with community stakeholders to generate feedback that leads toward refining a prototyped idea.  At this phase, a civic innovator might use talk aloud scenarios, focus groups, experiments, and field deployment through an iterative process of testing-and-refinement."
      },
      {
        title: "Activate: What are the opportunities and barriers toward deployment?",
        txt: "Many civic ideas suffer without community support.  After developing a viable prototype, civic innovators will take it back to the communities affected by an issue to build alliances with community leaders and organizations."
      }
    ]
}

export const stakeholderContent = {
  title1: "How to build stakeholder relationships",
  content1: "Addressing a design challenge involves understanding diverse perspectives from stakeholders within that space—including the people who impact, and the people who are impacted by, a particular problem or opportunity.   With the goal of building relationships and community around civic design, we have developed this guide for leading “relationship-based inquiry” with community stakeholders.",
  title2: "Principles for engaging with stakeholders over time",
  content2: [
    {
      title: "Focus on cultivating a relationship before asking for help",
      txt: "When developing a relationship with a stakeholder group, cultivate your relationship with the group before asking for their ideas, help, and time.  Strive to move at the pace of trust.  Focus first on getting to know people rather than getting to know problems. Build empathy by focusing on what matters to the stakeholder. <br/><br/>Create the space for parties to build alignment on values and set realistic expectations.  The following are several articles about how to cultivate a meaningful relationship with stakeholders through empathy."
    },
    {
      title: "Prioritize small improvements over massive changes to the system",
      txt: "What is feasible today, tomorrow, or might be in the future?  Muddling through, incrementalism, tinkering, addressing modules—all these activities are important, but risk missing the root cause of a civic issue.  When decisions about how to engage with an issue are too focused on feasibility today, the decisions may divert energy from impactful work. <br/><br/>Seek to understand the complexity of the system and root causes to challenges.  Leave enough time to tinker, as a way to leave space to detect unintended consequences early in the civic design process.  Think about your work with stakeholders as cultivating assets to address an immediate challenge now, but that leave room to lead more substantial change through the future. <br/><br/>The following is a small collection of articles about project scoping, management, and communication."
    },
    {
      title: "Appreciate that stakeholders have shared their time with you",
      txt: "Time is valuable.  When you request something from stakeholders remember that you are asking for their time and energy.  While you and your team are working to address meaningful civic issues that may matter to the stakeholder, be grateful when they offer their time and energy.  You might demonstrate your appreciation by writing thank you notes, by responding promptly when stakeholders raise questions, and by paying attention to them.<br/><br/>The following are a few templates for writing thank you notes and demonstrating your appreciation for the stakeholders time and energy."
    },
  ],
  title3: "What does that look like in action?",
  content3: [
    {
      title: "Establish connections",
      txt: "A first meeting will feel less like an interview and more like a meet-and-greet.  When reaching out to a stakeholder, come with general questions about their day-to-day, rather than targeted questions based on your hunches about the design challenge space. (e.g., What kind of role do you play related to [design challenge arena]? In what ways do you currently work to address [design challenge arena]? What is going well? What is not going so well? Where do you anticipate this going in the future (near term, long term)?) <br/><br/>Resources below include sample interview questions and agendas for a first meeting with a stakeholder group."
    },
    {
      title: "Be honest and committed",
      txt: "Be transparent and realistic.  Don’t promise a stakeholder more than you know you can contribute:  Under-promise and over-deliver.  Ask the stakeholder about their level of interest in the civic design process, to appropriately plan for their participation (or lack thereof) in the future. <br/><br/>Linked below are a set of articles about how to negotiate expectations related to community projects."
    },
    {
      title: "Document the evolving relationship",
      txt: "The stakeholder relationship ultimately serves as a tool for tracking how you and your team navigate the problem-space for a particular civic design challenge.  Take notes on the following as you develop a stronger relationship with a stakeholder group: <br/><li>Description of the design challenge space as described by the stakeholder</li> <li>Role the stakeholder plays related to the design challenge space</li> <li>Insights about possible solutions to the challenge (or workarounds)</li> <li>Assets currently available that may help address the challenge</li> <li>Description of the relationship-networks that connect assets</li> <li>Key terminology/language used by stakeholders, particularly any nuances in language that may vary across the design challenge landscape</li>"
    },
    {
      title: "Monitor for unintended consequences",
      txt: "Sometimes a particular design proposal can result in negative unintended consequences for a stakeholder group.  For example, a design proposal may advantage those with rich resources over those with few resources, and thus, perpetuating inequity among stakeholder groups.  As you and your team build stakeholder relationships, we encourage you to regularly pause and reflect on those relationships, how they influence your approach to civic design, and shape your role as a civic innovator. <br/><br/>The links below point to a few case studies of times when civic design went wrong and some strategies for recovery. "
    },
  ]
}

export const feedbackContent = {
  title1: "Sign up to be a feedback provider",
  content1: "Innovators in D4SD would love to hear community members’ perspectives on their proposals.All community members are welcome to sign up here and to share their knowledge and experience with D4SD teams.",
  title2: "What do I do as a feedback provider?  ",
  content2:"<ul><li>Sign up below by Feb 1st.<ul><li>  Feedback providers will registered on our system and will receive an email with instructions and next steps </li></ul></li> <li>Review design concepts by different teams: <ul><li> D4SD teams will submit their preliminary design concepts by XX, including details about their design proposals and questions for you to answer As a feedback provider, you will get an email with a request to review proposals from 1-3 teams. The community feedback exchange will take place from Feb 6th - Feb 14th.</li></ul></li> <li>Provide feedback:<ul><li> Using the feedback interface, try to understand the team’s problem framing, design proposal, and goals. Explore the question and provide open-ended feedback follow the advice provided by a checklist-style guideline. If you finish reviewing one team and you still have time, provide feedback for another!</li></ul></li> <li>Stay in touch with your teams.</li> <li>Your feedback will be sent directly to the D4SD teams to help them refine their concepts  for the final submission. You have the option to leave your contact information so the team can contact you directly with follow-up questions.  </li></ul> <br/>If this sounds like a fun way to contribute to this initiative, sign up here:"
}
