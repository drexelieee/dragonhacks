import './css/app.css';

import React, { Component } from 'react';
import NavBar from './js/navbar';
import Section from './js/section';
import Text from './js/text';
import Logo from './js/logo';
import SponsorTier from './js/sponsor_tier';
import FAQ from './js/faq';
import Clickable from './js/clickable';

export default class App extends Component {
  static data = {
    year: 2019,
  };

  render() {
    return (
      <div>
        <NavBar/>
        <Section id="home" main>
          <h1>Dragon<wbr/>Hacks</h1>
          <Text big>
            Drexel's very own 24-hour hackathon!
          </Text>
          <Text big>
            <Text big inline prefix>
              <span className="fas fa-map-marker-alt"/>
            </Text>
            <Clickable href="https://goo.gl/maps/EQj1FVXS1UG2">
              Bossone Research Enterprise Center
            </Clickable>
          </Text>
          <Text big>
            <Text inline big prefix>
              <span className="fas fa-calendar"/>
            </Text>
            <Text inline big>
              <time dateTime="2019-04-20">
                April 20<sup>th</sup>&ndash;21<sup>st</sup> {this.props.year}
              </time>
            </Text>
          </Text>
          <Text big>
            <Clickable border href="https://drexelieee.typeform.com/to/rzQNqb">
              Register for DragonHacks
            </Clickable>
          </Text>
        </Section>
        <Section id="about" heading={"About DragonHacks " + App.data.year}>
          <Text>
            DragonHacks is Drexel University's 24 hour hardware-focused
            hackathon event hosted by Drexel University IEEE in {App.data.year} in
            the Bossone Research Enterprise Center. DragonHacks {App.data.year} is
            bringing in the brightest minds of the world's best schools to
            spend 24 hours to create ground breaking new products from scratch!
          </Text>
          <Text>
            We will have more than enough East coast exclusive food and
            caffeine to energize hungry and excited hackers. With over $10,000
            in prizes this year, your sleepless efforts will be rewarded!
          </Text>
          <Text>
            Hacking begins at 2 PM Saturday April 20th right after the 1 PM
            opening ceremony and ends at 2 PM Sunday April 21st. You must
            submit your project on Devpost. In order to be eligible for prizes,
            you also must participate on the Sunday judging.
          </Text>
        </Section>
        <Section id="schedule" heading="Schedule"/>
        <Section id="faq" heading="FAQ">
          <FAQ question="Is there a code of conduct?">
            Yes. Abide by the <Clickable link href="http://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH
            Code of Conduct</Clickable>
          </FAQ>
          <FAQ question="What should I bring to the hackathon?">
            A valid student ID, laptop, charger, and whatever makes you
            comfortable or supports your coding activities
            (keyboard, mouse, etc.).
          </FAQ>
          <FAQ question="Do you provide any hardware?">
            Yes! Here is the list of hardware we will be providing during DragonHacks {' '}
            {App.data.year}: {' '}
            <Clickable link href="img/DragonHacks%202018%20Hardware%20List.pdf">Hardware List</Clickable>
          </FAQ>
          <FAQ question="Are there prizes?">
            With over $10,000 in prizes at DragonHacks {App.data.year}, there is more
            than enough to go around! You will have the opportunity to compete
            in plenty of challenges for a chance to win: Xbox Ones, PS4s, GoPros,
            Apple Watches, Samsung LED TVs, Nintendo Switches, iPad Airs, and way
            more! First place gets first choice of prizes with each member in
            the winning team choosing one prize from the list, down to the last
            DragonHacks challenge winners. All projects <strong>must</strong> be
            submitted on Devpost in order to be eligible for judging.
          </FAQ>
          <FAQ question="How do we submit our projects?">
            All submissions will be due on 2 PM Sunday on the DragonHacks {App.data.year}
            {' '} <Clickable link href="http://dragonhacks2018.devpost.com/">Devpost</Clickable>
            {' '} site. We highly recommend you submit at 1:30 PM to give yourself some
            wiggle room for any last-minute technical issues. All projects {' '}
            <strong>must</strong> be submitted on Devpost in order to be eligible
            for judging and the $10,000 in prizes!
          </FAQ>
          <FAQ question="I don't have a team or idea :( What should I do?">
            If you do not currently have a team or idea, do not fear! Many
            hackers come in without teams or ideas. There are two methods to
            find teammates, and trust us, hacking with a team is a lot more
            fun! Team sizes have to be 2&ndash;5 people. You should be invited to
            the official DragonHacks {App.data.year} {' '}
            <Clickable link href="https://dragonhacks2018.slack.com">Slack Group</Clickable> where we
            have a <b>#teamformation</b> channel dedicated to team formations.
            We will also be holding a team formation event before the kickoff
            and opening ceremony. Also check out the DragonHacks {App.data.year} {' '}
            <Clickable link href="http://dragonhacks2018.devpost.com/">Devpost</Clickable> challenges
            for inspiration on what problems to tackle.
          </FAQ>
          <FAQ question="What challenges are there?">
            On top of the usual first, second, and third places, we also have
            challenges like best healthcare hack, funniest hack, hack with the
            best design or name &mdash; not everything is fully technical! We
            also have sponsor challenges from JetBrains, .tech, Wolfram, Lockheed
            Martin, Close School of Entrepreneurship, GLOBO, and more! The full
            list of challenges are listed in the Official DragonHacks {App.data.year}
            {' '} <Clickable link href="http://dragonhacks2018.devpost.com/">Devpost</Clickable>.
          </FAQ>
          <FAQ question="Who can join?">
            DragonHacks is open to all university students (undergrad/grad). High
            school students are welcome as well so long as they are 18 years of
            age or older. No prior hackathon or hardware experience is necessary.
          </FAQ>
          <FAQ question="When and Where is it?">
            April 20<sup>th</sup>&ndash;21<sup>st</sup>, with a start time at
            1 PM. Located at 3140 Market St, Philadelphia, PA 19104.
          </FAQ>
          <FAQ question="Why Should I come?">
            Sure, spending 24 hours working on a project outside of school may
            seem a little daunting but we promise you will not regret it! First,
            you will make tons of fun memories, meet new people, make a lot of
            new connections, get free stuff and free food, meet corporate
            sponsors, and potentially win big prizes. Secondly, and on a more
            serious note, you will further develop your skills in: coding, working
            with hardware, and working on projects outside of school &mdash; it's
            interesting, unique, shows passion, it’s something to talk about
            during interviews!
          </FAQ>
          <FAQ question="What should I not bring to the hackathon?">
            Firearms, knives, and weapons of any kind are banned. If you can't
            bring it on an airplane, don't bring it here!
          </FAQ>
          <FAQ question="What is a hackathon?">
            A hackathon is an event where students work together in small teams
            to create a technical project over a short period of time.
          </FAQ>
          <FAQ question="How is the application process?">
            Just register on the site! If space becomes limited, we will review
            applications. Registration is individual and teams can be formed
            the day of the event.
          </FAQ>
          <FAQ question="How much will this cost me?">
            Attendance is free. Dinner, lunch, breakfast, drinks, and snacks
            are on us! As well as T-shirts and other swag. We will be having
            free demos from companies. The only thing that you are responsible
            for is transportation.
          </FAQ>
        </Section>
        <div style={{backgroundColor: "var(--bg-color-light)"}}>
          <Section id="sponsors" heading="Sponsors">
            <SponsorTier>
              <Logo href="https://www.ieee.org/"
                imgSrc="logo_ieee.png"
                altText="IEEE UPP"/>
              <Logo href="https://drexel.edu/engineering/"
                imgSrc="logo_drexel_ece.png"
                altText="Drexel ECE Dept."/>
              <Logo href="https://drexel.edu/provost/"
                imgSrc="logo_drexel_provost.jpg"
                altText="Drexel Office of the Provost"/>
            </SponsorTier>
            <SponsorTier>
              <Logo href="http://www.lutron.com/en-US/Pages/default.aspx"
                imgSrc="logo_lutron.png"
                altText="Lutron"/>
              <Logo href="https://www.lockheedmartin.com/en-us/index.html"
                imgSrc="logo_lockheed.svg"
                altText="Lockheed Martin"/>
              <Logo href="https://boomi.com/"
                imgSrc="logo_dell_boomi.svg"
                altText="Dell Boomi"/>
              <Logo href="https://cloud.google.com/"
                imgSrc="logo_google_cloud.svg"
                altText="Google Cloud Platform"/>
            </SponsorTier>
            <SponsorTier>
              <Logo href="https://investor.vanguard.com/corporate-portal/"
                imgSrc="logo_vanguard.svg"
                altText="Vanguard"/>
              <Logo href="https://balsamiq.com/"
                imgSrc="logo_balsamiq.svg"
                altText="Balsamiq"/>
            </SponsorTier>
            <SponsorTier>
              <Logo href="https://www.jetbrains.com/"
                imgSrc="logo_jetbrains.png"
                altText="JetBrains"/>
              <Logo href="https://www.hedera.com/"
                imgSrc="logo_hedera.png"
                altText="Hedera Hashgraph"/>
              <Logo href="https://www.sketchapp.com/"
                imgSrc="logo_sketch.png"
                altText="Sketch"/>
            </SponsorTier>
          </Section>
          <Section heading="Sponsor Us!">
            <Text>
              Please support our hackathon! Benefits include: The ability to
              recruit from the hackathon participants, gaining feedback and new
              users from participants using your products, and recognition for your
              company. More information is in the link to the right. Please
              contact {' '}
              <Clickable link href="mailto:teamdragonhacks@gmail.com">teamdragonhacks@gmail.com</Clickable>
              {' '} to
              begin sponsoring!
            </Text>
            <div style={{textAlign: 'center', padding: '20px 0'}}>
              <Text big>
                In partnership with
              </Text>
              <Logo href="https://mlh.org"
                imgSrc="logo_mlh.svg"
                altText="MLH"/>
              <Clickable border href={require('./pdf/Dragon_Hacks_2018_Sponsorship_Document.pdf')}>
                <Text inline>Full Sponsorship Information</Text>
              </Clickable>
            </div>
          </Section>
        </div>
      </div>
    );
  }
}
