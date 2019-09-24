import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Mark Macdonald"
        const siteDescription = "Mark Macdonald's home on the web"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

            

                  <p>Well hello! I’m Mark, a technical product leader, founder of <a target="0" href="https://gazet.com">Gazet</a>, caretaker at <a href="http://suckagain.com/">Suck, Again</a>, and previously on the founding team at <a target="0" href="https://skimlinks.com">Skimlinks</a>. I have over a decade of experience at every stage of the product lifecycle and a dedication to supporting inclusive teams.</p>

<p>I’m continuously fascinated by the power of technology to change the context of human behavior. How does newsfeed design influence what we write? What are the consequences of shifting the temporal context of media? How can ubiquitous data collection be used for good and help us make better decisions about our financial, physical, or our planet’s health?</p>

<p>Addressing these types of questions requires empathetic collaboration with a broad range of talent, and that’s something I look for in each aspect of my work. Additionally, intelligent product development needs constant feedback from users, through smart customer development, and rigorous analysis of product use.</p>

<p>Over the years, I’ve spec’d features, written code, built teams, pitched customers, freelanced, bootstrapped a company, raised money, lost money, celebrated successes and learned from failures. </p>

<p>I began my professional career as a research specialist studying the neural basis of learning and memory first at <a target="0" href="https://www.researchgate.net/publication/5276850_Learning_and_Consolidation_of_Novel_Spoken_Words">Cambridge University</a> then <a target="0" href="https://www.ncbi.nlm.nih.gov/pubmed/18082362">UPenn</a>. While mining terabytes of fMRI brain imaging data, I developed an appreciation for careful experimental design and analysis. Additionally, I discovered a respect for the power of code that led me to pursue opportunities within the startup world.</p>

<p>After a stint doing QA, ops and customer support for a (<a target="0" href="https://techcrunch.com/2008/09/24/swoopo-entertainment-shopping-or-scam/">notorious</a>!) German e-commerce platform’s UK launch, I found my way to Skimlinks, an online monetization and analytics company headquartered in London. I was the first client facing hire in a tiny team and consequently undertook everything from user research and wireframing on-boarding systems, to presenting at conferences and building custom SQL reports for VIP clients.</p>

<p>As the company grew, I relocated to San Francisco with our CEO to help setup and lead the day-to-day running of our new west-coast office. I hired, trained and managed a team of fourteen Publisher Development Managers across three cities, and collaborated with Engineering, Design and Marketing as a key stakeholder in the launch of numerous successful products.</p>

<p>A long-time hobbyist programmer, on leaving <a target="0" href="https://skimlinks.com">Skimlinks</a> I decided to improve my technical foundation by attending <a target="0" href="https://www.hackreactor.com/">Hack Reactor</a>, an immersive software engineering course in San Francisco. With freelance consulting gigs on the side, and a desire to scratch the entrepreneurial itch, I set about developing a couple of startup ideas before settling on <a target="0" href="https://gazet.com">Gazet</a> - a media aggregator powered by a community of volunteer editors.</p>

<p>As the sole product owner and engineer building Gazet (a PWA written in React/Node), I’ve approached the development with a bias towards action and experimentation. Collaborating with a talented product designer and other contractors, I’ve taken care to inform product decisions with measurable user insights and interviews. With limited resources, prioritization is paramount, and I’ve been deliberate in utilizing effective sprint planning and backlog management to ensure technical debt didn’t swamp the project.</p>

<p>Running Gazet has been unbelievably powerful experience, but ultimately bootstrapping a media startup is intensely hard, and the time has come to look for new challenges. If you’re interested in working with me, or just want to say hi, please <a href="mailto:hello@markm.ac">drop me a line</a>.</p>



                </div>

            </Layout>
        )
    }
}

export default HomeIndex