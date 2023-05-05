import HomeScroll from "../../components/block/HomeScroll/HomeScroll";
import RecentProjects from "../../components/block/RecentProjects/RecentProjects";
import YourProject from "../../components/block/YourProject/YourProject";
import Layout from "../../components/block/Layouts/Layout";

function Home() {
  return (
    <div className="home">
      <HomeScroll />
      <RecentProjects
        content={{
          cards: [
            {
              isLeft: false,
              img: { url: "/Avery_ex.png", alt: "Avery Website Preview" },
              logo: { url: "/Avery_logo.png", alt: "Avery Logo" },
              desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
              link: { name: "View Site", url: "#" },
            },
            {
              isLeft: true,
              img: { url: "/Upwing_ex.png", alt: "Upwing Website Preview" },
              logo: { url: "/Upwing_logo.png", alt: "Upwing Logo" },
              desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
              link: { name: "View Site", url: "#" },
            },
            {
              isLeft: false,
              img: { url: "/USAirforce_ex.png", alt: "USAirforce Website Preview", },
              logo: { url: "/USAirforce_logo.png", alt: "USAirforce Logo" },
              desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
              link: { name: "View Site", url: "#" },
            },
            {
              isLeft: true,
              img: { url: "/Swift_ex.png", alt: "SwiftNav Website Preview" },
              logo: { url: "/Swift_logo.png", alt: "SwiftNav Logo" },
              desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
              link: { name: "View Site", url: "#" },
            },
          ],
        }}
      />
      <YourProject content={{
        title:"Tell us about your project",
        desc:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
        link: {name:"Talk To Us", url:"#"}
      }} />
    </div>
  );
}

export default Home;

Home.getLayout = Layout()