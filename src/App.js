import React, { Component } from 'react';
import Sponsor from './component/sponsor';
import FAQ from './component/faq';
import './css/app.css';

export default class App extends Component {
  static year = 2019;

  render() {
    return (
      <div id="app">
        <nav id="navbar">
          <span>Dragon<span className="accent">Hacks</span></span>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#sponsors">Sponsors</a></li>
          </ul>
        </nav>


        <section id="home">
          <h1>Dragon<wbr/>Hacks!</h1>
          <div>Drexel's very own 24-hour hackathon!</div>
          <div>
            <a href="https://goo.gl/maps/EQj1FVXS1UG2">
              <span className="fas fa-map-marker-alt prepend"/>
              <span>
                Bossone Research Enterprise Center
              </span>
            </a>
          </div>
          <div>
            <span className="fas fa-calendar prepend"/>
            <time dateTime="2019-04-20">
              April 20<sup>th</sup>&ndash;21<sup>st</sup> {App.year}
            </time>
          </div>
        </section>


        <section id="about">
          <header>
            <h2>About DragonHacks {App.year}</h2>
          </header>
          <p>
            DragonHacks is Drexel University's 24 hour hardware-focused
            hackathon event hosted by Drexel University IEEE in {App.year} in
            the Bossone Research Enterprise Center. DragonHacks {App.year} is
            bringing in the brightest minds of the world's best schools to
            spend 24 hours to create ground breaking new products from scratch!
          </p>
          <p>
            We will have more than enough East coast exclusive food and
            caffeine to energize hungry and excited hackers. With over $10,000
            in prizes this year, your sleepless efforts will be rewarded!
          </p>
          <p>
            Hacking begins at 2 PM Saturday April 20th right after the 1 PM
            opening ceremony and ends at 2 PM Sunday April 21st. You must
            submit your project on Devpost. In order to be eligible for prizes,
            you also must participate on the Sunday judging.
          </p>
        </section>


        <section id="schedule">
          <header>
            <h2>Schedule</h2>
          </header>
        </section>


        <section id="faq">
          <header>
            <h2>FAQ</h2>
          </header>
          <FAQ question="Is there a code of conduct?">
            Yes. Abide by the <a href="http://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH
            Code of Conduct</a>
          </FAQ>
          <FAQ question="What should I bring to the hackathon?">
            A valid student ID, laptop, charger, and whatever makes you
            comfortable or supports your coding activities
            (keyboard, mouse, etc.).
          </FAQ>
          <FAQ question="Do you provide any hardware?">
            Yes! Here is the list of hardware we will be providing during DragonHacks
            {App.year}: <a href="img/DragonHacks%202018%20Hardware%20List.pdf">Hardware List</a>
          </FAQ>
          <FAQ question="Are there prizes?">
            With over $10,000 in prizes at DragonHacks {App.year}, there is more
            than enough to go around! You will have the opportunity to compete
            in plenty of challenges for a chance to win: Xbox Ones, PS4s, GoPros,
            Apple Watches, Samsung LED TVs, Nintendo Switches, iPad Airs, and way
            more! First place gets first choice of prizes with each member in
            the winning team choosing one prize from the list, down to the last
            DragonHacks challenge winners. All projects <strong>must</strong> be
            submitted on Devpost in order to be eligible for judging.
          </FAQ>
          <FAQ question="How do we submit our projects?">
            All submissions will be due on 2 PM Sunday on the DragonHacks {App.year}
            {' '} <a href="http://dragonhacks2018.devpost.com/">Devpost</a>
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
            the official DragonHacks {App.year} {' '}
            <a href="https://dragonhacks2018.slack.com">Slack Group</a> where we
            have a <b>#teamformation</b> channel dedicated to team formations.
            We will also be holding a team formation event before the kickoff
            and opening ceremony. Also check out the DragonHacks {App.year} {' '}
            <a href="http://dragonhacks2018.devpost.com/">Devpost</a> challenges
            for inspiration on what problems to tackle.
          </FAQ>
          <FAQ question="What challenges are there?">
            On top of the usual first, second, and third places, we also have
            challenges like best healthcare hack, funniest hack, hack with the
            best design or name &mdash; not everything is fully technical! We
            also have sponsor challenges from JetBrains, .tech, Wolfram, Lockheed
            Martin, Close School of Entrepreneurship, GLOBO, and more! The full
            list of challenges are listed in the Official DragonHacks {App.year}
            {' '} <a href="http://dragonhacks2018.devpost.com/">Devpost</a>.
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
          <FAQ question="Why Fire and Ice?">
            While you are busy developing your new product, or procrastinating
            doing so (hey, we don’t judge), DragonHacks will have an ongoing
            competition between the two factions. During registration, you will
            identify as either the fire dragon or the ice dragon. This will place
            you right in the middle of an epic battle to prove who is the better
            dragon. Pride and glory, and maybe something more, await the winners!
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
        </section>


        <section id="sponsors">
          <header>
            <h2>Sponsors</h2>
          </header>
          <Sponsor link="https://drexel.edu/engineering/"
            logo={require("./img/logo_drexel_ece.png")}
            alt="Drexel ECE Dept."/>
          <Sponsor link="http://www.lutron.com/en-US/Pages/default.aspx"
            logo={require("./img/logo_lutron.jpg")}
            alt="Lutron"/>
          <Sponsor link="https://boomi.com/"
            logo={require("./img/logo_dell_boomi.svg")}
            alt="Dell Boomi"/>
          <Sponsor link="https://drexel.edu/provost/"
            logo={require("./img/logo_drexel_provost.jpg")}
            alt="Drexel Office of the Provost"/>
          <Sponsor link="https://www.hedera.com/"
            logo={require("./img/logo_hedera.png")}
            alt="Hedera Hashgraph"/>
          <Sponsor link="https://investor.vanguard.com/corporate-portal/"
            logo={require("./img/logo_vanguard.svg")}
            alt="Vanguard"/>
          <Sponsor link="https://www.jetbrains.com/"
            logo={require("./img/logo_jetbrains.png")}
            alt="JetBrains"/>
          <Sponsor link="https://www.lockheedmartin.com/en-us/index.html"
            logo={require("./img/logo_lockheed.svg")}
            alt="Lockheed Martin"/>
          <Sponsor link="https://www.ieee.org/"
            logo={require("./img/logo_ieee.png")}
            alt="IEEE UPP"/>
          <Sponsor link="https://www.sketchapp.com/"
            logo={require("./img/logo_sketch.png")}
            alt="Sketch"/>
        </section>


        <section id="sponsorUs">
          <header>
            <h2>Sponsor Us!</h2>
          </header>
          <p>
            Please support our hackathon! Benefits include: The ability to
            recruit from the hackathon participants, gaining feedback and new
            users from participants using your products, and recognition for your
            company. More information is in the link to the right. Please
            contact <a href="mailto:teamdragonhacks@gmail.com">teamdragonhacks@gmail.com</a> to
            begin sponsoring!
          </p>
          <a href={require('./pdf/Dragon_Hacks_2018_Sponsorship_Document.pdf')}>
            Full Sponsorship information
          </a>
          <div>
            In partnership with
          </div>
          <img src={require("./img/logo_mlh.svg")} width="300" alt="MLH"/>
        </section>


        <footer id="pageFooter">
          Copyright &copy; {App.year} Technical Chairs, Drexel IEEE. All Rights Reserved.
        </footer>
      </div>
    );
  }
}
