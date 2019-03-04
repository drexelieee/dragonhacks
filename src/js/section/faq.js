import React, { Component } from 'react';
import FAQItem from '../component/faq_item';

export default class FAQ extends Component {
  render() {
    return (
      <section id="faq">
        <header>
          <h2>FAQ</h2>
        </header>
        <FAQItem question="Is there a code of conduct?">
          Yes. Abide by the <a href="http://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH
          Code of Conduct</a>
        </FAQItem>
        <FAQItem question="What should I bring to the hackathon?">
          A valid student ID, laptop, charger, and whatever makes you
          comfortable or supports your coding activities
          (keyboard, mouse, etc.).
        </FAQItem>
        <FAQItem question="Do you provide any hardware?">
          Yes! Here is the list of hardware we will be providing during DragonHacks {' '}
          {this.props.year}: <a href="img/DragonHacks%202018%20Hardware%20List.pdf">Hardware List</a>
        </FAQItem>
        <FAQItem question="Are there prizes?">
          With over $10,000 in prizes at DragonHacks {this.props.year}, there is more
          than enough to go around! You will have the opportunity to compete
          in plenty of challenges for a chance to win: Xbox Ones, PS4s, GoPros,
          Apple Watches, Samsung LED TVs, Nintendo Switches, iPad Airs, and way
          more! First place gets first choice of prizes with each member in
          the winning team choosing one prize from the list, down to the last
          DragonHacks challenge winners. All projects <strong>must</strong> be
          submitted on Devpost in order to be eligible for judging.
        </FAQItem>
        <FAQItem question="How do we submit our projects?">
          All submissions will be due on 2 PM Sunday on the DragonHacks {this.props.year}
          {' '} <a href="http://dragonhacks2018.devpost.com/">Devpost</a>
          {' '} site. We highly recommend you submit at 1:30 PM to give yourself some
          wiggle room for any last-minute technical issues. All projects {' '}
          <strong>must</strong> be submitted on Devpost in order to be eligible
          for judging and the $10,000 in prizes!
        </FAQItem>
        <FAQItem question="I don't have a team or idea :( What should I do?">
          If you do not currently have a team or idea, do not fear! Many
          hackers come in without teams or ideas. There are two methods to
          find teammates, and trust us, hacking with a team is a lot more
          fun! Team sizes have to be 2&ndash;5 people. You should be invited to
          the official DragonHacks {this.props.year} {' '}
          <a href="https://dragonhacks2018.slack.com">Slack Group</a> where we
          have a <b>#teamformation</b> channel dedicated to team formations.
          We will also be holding a team formation event before the kickoff
          and opening ceremony. Also check out the DragonHacks {this.props.year} {' '}
          <a href="http://dragonhacks2018.devpost.com/">Devpost</a> challenges
          for inspiration on what problems to tackle.
        </FAQItem>
        <FAQItem question="What challenges are there?">
          On top of the usual first, second, and third places, we also have
          challenges like best healthcare hack, funniest hack, hack with the
          best design or name &mdash; not everything is fully technical! We
          also have sponsor challenges from JetBrains, .tech, Wolfram, Lockheed
          Martin, Close School of Entrepreneurship, GLOBO, and more! The full
          list of challenges are listed in the Official DragonHacks {this.props.year}
          {' '} <a href="http://dragonhacks2018.devpost.com/">Devpost</a>.
        </FAQItem>
        <FAQItem question="Who can join?">
          DragonHacks is open to all university students (undergrad/grad). High
          school students are welcome as well so long as they are 18 years of
          age or older. No prior hackathon or hardware experience is necessary.
        </FAQItem>
        <FAQItem question="When and Where is it?">
          April 20<sup>th</sup>&ndash;21<sup>st</sup>, with a start time at
          1 PM. Located at 3140 Market St, Philadelphia, PA 19104.
        </FAQItem>
        <FAQItem question="Why Fire and Ice?">
          While you are busy developing your new product, or procrastinating
          doing so (hey, we don’t judge), DragonHacks will have an ongoing
          competition between the two factions. During registration, you will
          identify as either the fire dragon or the ice dragon. This will place
          you right in the middle of an epic battle to prove who is the better
          dragon. Pride and glory, and maybe something more, await the winners!
        </FAQItem>
        <FAQItem question="Why Should I come?">
          Sure, spending 24 hours working on a project outside of school may
          seem a little daunting but we promise you will not regret it! First,
          you will make tons of fun memories, meet new people, make a lot of
          new connections, get free stuff and free food, meet corporate
          sponsors, and potentially win big prizes. Secondly, and on a more
          serious note, you will further develop your skills in: coding, working
          with hardware, and working on projects outside of school &mdash; it's
          interesting, unique, shows passion, it’s something to talk about
          during interviews!
        </FAQItem>
        <FAQItem question="What should I not bring to the hackathon?">
          Firearms, knives, and weapons of any kind are banned. If you can't
          bring it on an airplane, don't bring it here!
        </FAQItem>
        <FAQItem question="What is a hackathon?">
          A hackathon is an event where students work together in small teams
          to create a technical project over a short period of time.
        </FAQItem>
        <FAQItem question="How is the application process?">
          Just register on the site! If space becomes limited, we will review
          applications. Registration is individual and teams can be formed
          the day of the event.
        </FAQItem>
        <FAQItem question="How much will this cost me?">
          Attendance is free. Dinner, lunch, breakfast, drinks, and snacks
          are on us! As well as T-shirts and other swag. We will be having
          free demos from companies. The only thing that you are responsible
          for is transportation.
        </FAQItem>
      </section>
    );
  }
}
