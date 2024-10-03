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

            

                <p>Well hello - I'm Mark, a technical product leader with experience leading Community Growth at <a href="https://www.strava.com">Strava</a>, previously Senior PM at <a href="https://newsela.com">Newsela</a> and <a href="https://academia.edu">Academia.edu</a>, founder of <a href="https://gazet.com">Gazet</a>, and on the founding team at <a href="https://skimlinks.com">Skimlinks</a>. I have over 15 years of experience at every stage of the product lifecycle and a dedication to supporting inclusive teams.</p>
                <p>I'm continuously fascinated by the power of technology to change the context of human behavior. How does newsfeed design influence what we share? What are the consequences of shifting the temporal context of media? How can we leverage data and machine learning to improve user engagement and retention while respecting privacy?</p>

<h3>How I work</h3>
<p>Addressing these types of questions requires effective collaboration across varied teams, and I strive to bring a sense of curiosity, humility, and empathy to this work. I've found that developing effective products requires user-centric leadership, data-driven product discovery, and considered analysis of product metrics.</p>

<p>Over the years, I've spec'd features, written code, built teams, pitched customers, freelanced, bootstrapped a company, reversed declining metrics, and led successful product launches. I thrive on making sense of ambiguous challenges and continuously work to develop the skills needed to tackle an ever-changing technological landscape.</p>

<h3>Experience</h3>
<p>I began my professional career as a research specialist studying the neural basis of learning and memory at the University of Pennsylvania's Center for Cognitive Neuroscience. While mining terabytes of fMRI brain imaging data, I developed an appreciation for careful experimental design and analysis, and discovered a respect for the power of code that led me to pursue opportunities within the startup world.</p>

<p>My journey in tech product management began at <a href="https://skimlinks.com">Skimlinks</a>, where I was part of the founding team. As Senior Director of Publisher Development, I collaborated with design, engineering, and operations teams, scaling our platform to handle over 15 billion API calls per month and integrating with 20,000+ e-commerce merchants.</p>

<p>After a stint as the founder of <a href="https://gazet.com">Gazet</a>, a content-curation platform, I moved into roles at established tech companies. At <a href="https://academia.edu">Academia.edu</a>, I led the development of mobile apps and content discovery systems for 127M users. At <a href="https://newsela.com">Newsela</a>, I drove content discovery and engagement for their edTech platform used in 90% of US schools.</p>

<p>Most recently, as Product Lead for Community Growth at <a href="https://www.strava.com">Strava</a>, I've led a product pod focused on acquisition, activation, and engagement of 120M users. I've collaborated with ML teams to redesign feed ranking systems, reversed multi-year declines in new user retention, and led successful campaigns that beat revenue targets by 35%.</p>

<p>Throughout my career, I've maintained a strong focus on data-driven decision making, effective experimental design, and mentoring junior team members. I've contributed to annual planning at the leadership level and have a track record of improving key metrics across various products and platforms.</p>

<h3>Say hi!</h3>
<p>I'm always excited to tackle new challenges and collaborate with innovative, mission-driven product teams. Whether it's optimizing ML algorithms, improving user engagement, or developing novel product strategies, I bring a wealth of experience and a passion for user-centric design. I welcome any chance to chat with like-minded folks about the future of tech and product management. Do <a href="mailto:hello@markm.ac">get in touch</a>!</p>

</div>

            </Layout>
        )
    }
}

export default HomeIndex
