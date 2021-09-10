import Head from 'next/head';
import { CenterTextCard, LeftImageCard, RightImageCard, Slider, TitleCard } from "../components";
import { withLayout } from "../layouts/public/Layout";

function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Eivolo – Digital Solutions</title>
        <meta name="keywords" content="IT-company" />
      </Head>

      <TitleCard
        htagText="Digital Solutions"
        htagSize="h1"
        buttonText="Learn More"
        buttonLink="/success-stories"
        objdata="/EivoloLandingPage_DigitalSolutions_Illustration.svg"
      >
        Our industry leading team will drive and support your digital projects end to end.
      </TitleCard>

      <CenterTextCard
        htagText="How can we evolve your business?"
      >
        <p className="lead mb-4">We can customise our services to meet your requirements and accommodate any of your digital needs.</p>
      </CenterTextCard>

      <LeftImageCard
        htagText="Outsourcing"
        buttonText="Learn More >"
        buttonLink="/outsourcing"
        objdata="/EivoloLandingPage_WhyOutsource_Illustration.svg"
      >
        <p>
          We understand how difficult it can be to source experienced local talent,
          which is why we offer access to skilled technical professionals from all over the world.
        </p>
      </LeftImageCard>

      <RightImageCard
        htagText="Web Design and Development"
        buttonText="Learn More >"
        buttonLink="/web-development"
        objdata="/EivoloLandingPage_WebDesignandDevelopment_Illustration.svg"
      >
        <p>
          In an increasingly digital world, simple websites are no longer immersive or intuitive enough
          to meet changing consumer expectations. We provide end-to-end solutions to help you with everything from design
          to content writing to web development and maintenance.
        </p>
      </RightImageCard>

      <LeftImageCard
        htagText="App Design & Development"
        buttonText="Learn More >"
        buttonLink="/mobile-development"
        objdata="/EivoloLandingPage_AppDesignandDevelopment_Illustration.svg"
      >
        <p>
          Mobile apps deliver absolute customer loyalty within an engaging, immersive format.
          We provide end-to-end app solutions, from building product architecture to app design and development
          as well as aftercare support and maintenance packages.
        </p>
      </LeftImageCard>

      <RightImageCard
        htagText="Security Audit Services"
        buttonText="Learn More >"
        buttonLink="/security-auditing"
        objdata="/EivoloLandingPage_SecurityAuditServices_Illustration.svg"
      >
        <p>
          Cybersecurity is a growing concern in both private and public sectors,
          as witnessed in the recent malicious attacks on government agencies and critical industries globally.
        </p>
      </RightImageCard>

      <LeftImageCard
        htagText="For Startup"
        buttonText="Get In Touch >"
        buttonLink="/for-startups"
        objdata="/EivoloLandingPage_ForStartups_Illustration.svg"
      >
        <p>
          In a fast-paced world that is rich with new ideas, we welcome new innovators to share their ideas with us.
          We are here to listen, support, customise, or even provide additional support or resources for start-ups.
        </p>
        <strong>Are you a start-up looking for help, or even just an individual seeking to develop a unique product idea?</strong>
        <br /><br />
      </LeftImageCard>

      <Slider />
    </>
  );
}

export default withLayout(Home);
