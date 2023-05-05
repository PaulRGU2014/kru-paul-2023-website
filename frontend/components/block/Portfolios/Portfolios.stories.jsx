import React from 'react';
import Portfolios from './Portfolios.jsx';
import AveryLogo from './dummypics/Avery.png'
import UpwingLogo from './dummypics/Upwing.png'
import AirforceLogo from "./dummypics/usAir.png"
import SwiftNavLoog from './dummypics/SwiftNav.png'
import CSULogo from './dummypics/CSU.png'
import PinnBankLogo from './dummypics/PinnBank.png'
import CupertinoLogo from './dummypics/CupertinoE.png'
import ProofpointLogo from './dummypics/proofpoint.png'

export default {
  title: 'Block/Portfolios',
  component: Portfolios,
};

export const Primary = (args, { loaded: { storyContent } }) => {
  return <Portfolios content={
    {cards:[
      {
        id: 0,
        logo: AveryLogo,
        profile:"Avery",
        category:"Website Redesign",
        link:{
          name:"View Site",
          url:"#",
        },
        tabs:[
          {
            img:"Avery_preview_1.png",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
          },
          {
            img:"Avery_preview_2.png",
            desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
          },
          {
            img:"Avery_preview_3.png",
            desc:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
          }
        ]
      },
      {
        id: 1,
        logo: UpwingLogo,
        profile:"Upwing",
        category:"Website Redesign",
        link:{
          name:"View Site",
          url:"#",
        },
        tabs:[
          {
            img:"",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
          },
          {
            img:"",
            desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
          },
          {
            img:"",
            desc:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."}
        ]
      },
      {
        id: 2,
        logo: AirforceLogo,
        profile:"US Air Force",
        category:"Website Redesign",
        link:{
          name:"View Site",
          url:"#",
        },
        tabs:[
          {
            img:"USAir_preview_0.png",
            desc:"<p>Starting with interactive displays for the Southeast Asia Pavilion/Plaza of Heroes on the Academy grounds, Chronos then partnered with the USAFA Association of Graduates and the Class of 1970 to create an equally engaging and content rich website.</p>"
          },
          {
            img:"USAir_preview_1.png",
            desc:"<h5 class='t-h5-red'>Solution.</h5><h6>Interactive website</h6><p>After the interactive displays were finished, the Academy and graduates were so pleased with the project they approached Chronos to explore ways to offer the same experience and content to those who cannot visit the SEA Pavillion. The result of this new cooperative effort with the AOG and the Class of 1970 is the SEA Asia Memorial website.</p>"
          },
          {
            img:"USAir_preview_2.png",
            desc:"<h5 class='t-h5-red'>Solution.</h5><h6>Interactive online timeline</h6><p>The website is a virtual presentation of the SEA Pavilion and Plaza of Heroes. Not only can users explore the same interactive map and timeline content that exists in the physical interactive displays, they can also submit their own stories of a family member or friend, and connect the graduates’ stories together.</p><p>The goal is to preserve the stories of the graduates who participated in the Southeast Asia operations and honor the heritage for future generations of cadets.</p>"
          },
          {
            img:"USAir_preview_3.png",
            desc:"<h5 class='t-h5-red'>Solution.</h5><h6>Interactive online map</h6><p>Additionally, visitors of the site have access to explore important locations on an interactive map of SE Asia, follow a timeline of major air operations during the war, and read the stories of the airmen who lived through them.</p>"
          }
        ]
      },
      {
        id: 3,
        logo: SwiftNavLoog,
        profile:"SwiftNav",
        category:"Website Redesign",
        link:{
          name:"View Site",
          url:"#",
        },
        tabs:[
          {
            img:"",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
          },
          {
            img:"",
            desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
          },
          {
            img:"",
            desc:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
          }
        ]
      },
      {
        id: 4,
        logo: CSULogo,
        profile:"CSU",
        category:"Website Redesign",
        link:{
          name:"View Site",
          url:"#",
        },
        tabs:[
          {
            img:"",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
          },
          {
            img:"",
            desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
          },
          {
            img:"",
            desc:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
          }
        ]
      },
      {
        id: 5,
        logo: PinnBankLogo,
        profile:"Pinnbank",
        category:"Website Redesign",
        link:{
          name:"View Site",
          url:"#",
        },
        tabs:[
          {
            img:"",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
          },
          {
            img:"",
            desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
          },
          {
            img:"",
            desc:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
          }
        ]
      },
      {
        id: 6,
        logo: CupertinoLogo,
        profile:"Cupertino Electric",
        category:"Client Since 2013",
        link:{
          name:"View Site",
          url:"#",
        },
        tabs:[
          {
            img:"Cupertino_preview_0.png",
            desc:"<p>Cupertino Electric, Inc. (CEI) is one of the largest specialty contractors in the nation and is renowned for designing, procuring, constructing, installing, commissioning, and maintaining complex electrical systems. We were engaged to create a rich interactive, highly structured Content Management System. The CEI website is extensive and visually impactful. It showcases nearly 130 projects, each with detailed data and photo galleries. It is maintained entirely by CEI staff, thanks to the custom Drupal 9 headless CMS upon which it is deployed.</p>"
          },
          {
            img:"Cupertino_preview_1.png",
            desc:"<h5 class='t-h5-red'>Solution.</h5><h6>Robust portfolio modules & map</h6><p>CEI has an impressive—and extensive—portfolio of projects. We created a sortable, searchable inventory of their showcase work to allow visitors to quickly target specific types of projects and learn about CEI's expertise.</p>"
          },
          {
            img:"Cupertino_preview_2.png",
            desc:"<h5 class='t-h5-red'>Scalable Project Data</h5><h6>Rich data enhances user experience</h6><p>Each project features 17 attributes, which provides a highly structured environment for consistently communicating about CEI's work, while also providing sorting and categorizing capability. An image gallery, project categories, and client quote box, create a pleasing and graphically rich display</p>"
          },
          {
            img:"Cupertino_preview_3.png",
            desc:"<h5 class='t-h5-red'>Interactive Information.</h5><h6>Animations bring data alive</h6><p>A simple website becomes a rich interactive experience when animations and effects encourage exploration. The result: site visitors get more information because the compelling implementation invites clicks. We encourage you to move around their site to view the micro-animations that give depth to its clean, beautiful design.</p>"
          }
        ]
      },      
      {
        id: 7,
        logo: ProofpointLogo,
        profile:"Proofpoint",
        category:"Client Since 2017",
        link:{
          name:"View Site",
          url:"#",
        },
        tabs:[
          {
            img:"Proofpoint_preview_0.png",
            desc:"<p>Proofpoint is a leading cybersecurity company that protects organizations' greatest assets and biggest risks: their people. We work closely every day with Proofpoint’s dynamic digital marketing team to improve their site, from the user interface to the nuances of server performance, and everything in between.</p>"
          },
          {
            img:"Proofpoint_preview_1.png",
            desc:"<h5 class='t-h5-red'>Solution.</h5><h6>Drupal 8 CMS</h6><p>With Drupal 7’s end-of-life date approaching, Proofpoint turned to the Chronos team to perform a complicated online tango: Upgrade the technology platform supporting the website from Drupal 7 to Drupal 8, while simultaneously redesigning significant portions of the UI and extending a robust digital marketing juggernaut without breaking stride. Anyone in the Drupal community can tell you, the move from Drupal 7 to Drupal 8 is not an “in-place” upgrade. For a site of Proofpoint’s scope, this is a full site rebuild.</p>"
          },
          {
            img:"Proofpoint_preview_2.png",
            desc:"<h5 class='t-h5-red'>Discover. Design.</h5><h6>User Interface. User Experience.</h6><p>Our design team has worked closely with Proofpoint's MarCom division to create new, contemporary components and pages in a progressive redesign of the entire website. The process has included a process of discovery, wireframing, and visual design, one section at a time. It has been critical to create user interfaces and experiences that significantly improve the website, while simultaneously co-existing with older, more dated design templates. The resulting design components have allowed Proofpoint's content managers to create new pages from a library of carefully curated modules.</p>"
          },
          {
            img:"Proofpoint_preview_3.png",
            desc:"<h5 class='t-h5-red'>Custom Interactive Solutions.</h5><p>When Proofpoint sought to create an online tool that would allow their website visitors to undertake an online assessment of their preparedness to protect their people from BEC/EAC attacks, Chronos delivered. Integrated seamlessly into the Drupal 8 enterprise site, the interactive tool informed and educated Proofpoint's customers.</p>"
          }
        ]
      },

    ]}
  } />
};
