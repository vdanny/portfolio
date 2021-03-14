import React, { useRef } from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Sidebar from '../components/Sidebar';
import SkillSection from '../components/SkillSection';
import EducationSection from '../components/EducationSection';
import Timeline from '../components/Timeline';
import PortfolioSection from '../components/PortfolioSection';
import ContactSection from '../components/ContactSection';

const start = 2014;
const currentYear = new Date().getFullYear();
const duration = currentYear - start;

export default ({ data }) => {
  const title = data.site.siteMetadata.title;
  const avatar = data.site.siteMetadata.avatar;
  const cvUrl = data.site.siteMetadata.cvUrl;

  const greetings = data.allGreetingsJson.nodes.map(greeting => greeting.word);
  const menus = data.allSidebarJson.nodes;
  const skills = data.allSkillsJson.nodes;
  const education = data.allEducationJson.nodes;
  const experiences = data.allExperiencesJson.nodes;
  const portfolios = data.allPortfolioJson.nodes;

  const refHome = useRef(null);
  const refAbout = useRef(null);
  const refSkills = useRef(null);
  const refEducation = useRef(null);
  const refExperience = useRef(null);
  const refWork = useRef(null);
  const refContact = useRef(null);

  return (
    <div>
      <Helmet title={title}/>
      <Sidebar 
        refs={[
          refHome,
          refAbout,
          refSkills,
          refEducation,
          refExperience,
          refWork,
          refContact
        ]}
        menus={menus}
        avatarUrl={avatar}
      />
      <div className="container">
        <div id="home" ref={refHome} className="img-cover">
          <div className="title-wrapper">
            <h1>
              <div id="flipped">
              {greetings && greetings.map((greeting, idx) => <div key={idx} className={`word w${idx + 1}`}>{greeting}</div>)}
              </div>
              I'm<br/>
              Danny
            </h1>
            <a 
              href={cvUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-download"
            >
              Download CV
            </a>
            <div
              onClick={() => {
                refAbout.current.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-download"
            >
              Know me more &raquo;
            </div>
          </div>
        </div>

        <div id="about" ref={refAbout}>
          <h3>About me <pre>&#47;&#47; Fullstack Developer</pre></h3>
          <h2>I'd love to code beautiful and functional things.</h2>
          <p>
            Starting as a developer professionally {duration} years ago,<br/>
            I've designed and built apps that helped startups and companies.<br/>
            I am naturally curious and eager to learn something new.<br/>
            Focusing to solve daily problems through technology.
          </p>
        </div>

        <div id="skills" ref={refSkills}>
          <h3 style={{ marginBottom: '1.5rem' }}>Things I usually play with</h3>
          <div>
            {skills && skills.map((skill, idx) => (
              <SkillSection key={idx} title={skill.title} score={skill.score}>
                <span dangerouslySetInnerHTML={{ __html: skill.line_1 }} /><br/>
                <span dangerouslySetInnerHTML={{ __html: skill.line_2 }} />
              </SkillSection>  
            ))}
          </div>
        </div>

        <div id="education" ref={refEducation}>
          <h3>Education</h3>

          <div style={{ overflow: 'hidden' }}>
            {education && education.map((edu, idx) => (
              <EducationSection
                key={idx}
                title={edu.title}
                schoolName={edu.schoolName}
                year={edu.year}
                defaultOpen={edu.defaultOpen}
              >
                {edu.desc}
              </EducationSection>
            ))}
          </div>
        </div>

        <div id="experience" ref={refExperience}>
          <h3>Working Experience</h3>

          <Timeline data={experiences}/>
        </div>

        <div id="work" ref={refWork}>
          <h3>My Projects &amp; Work</h3>

          <PortfolioSection data={portfolios} />
        </div>

        <div id="contact" ref={refContact}>
          <h3>Contact Me</h3>

          <p>
            Interested to hire or work on a project with me?<br/>
            Send me a hello on
          </p>

          <ContactSection />

          <p>&copy; {currentYear} Vinsensius Danny</p>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`query {
  allSidebarJson {
    nodes {
      name
    }
  }
  allExperiencesJson {
    nodes {
      desc
      id
      name
      time
      title
      url
    }
  }
  allEducationJson {
    nodes {
      defaultOpen
      desc
      schoolName
      title
      year
    }
  }
  allGreetingsJson {
    nodes {
      word
    }
  }
  allSkillsJson {
    nodes {
      title
      score
      line_1
      line_2
    }
  }
  site {
    siteMetadata {
      careerStart
      cvUrl
      title
      avatar
    }
  }
  allPortfolioJson {
    nodes {
      color
      description
      image
      name
      url
      width
    }
  }
}`