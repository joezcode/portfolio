import './About.css';
import profilepic from '../assets/me.jpg'

function About() {
  return (
      <div className="About" name="About">
        <div className="About-backstory">
        <h1 className="About-backstory-headline separator">More about me</h1>
          <div className="About-backstory-column">
            <p>I am a <em>frontend heavy</em> developer with a broad set of digital skills. I thrive in challenging environments, being a fast-learner with a nothing is impossible mindset.</p><br/>
            <p>My education has given me the right mindset, tools and methods to tackle any task efficiently, both in a team or alone. Through my work experience, I have learned to perform excellent customer service, giving me great people skills.</p>
            <br/>
            <p>
              Here are a few technologies I have been working with recently:
            </p>
            
            <ul style={{float:'left', width:'100%', marginLeft:'40px', fontSize:'0.8em', marginBottom:'1em'}}>
              <li>React</li>
              <li>Node.js</li>
              <li>Python</li>
            </ul>

            <p>
              More about my experience can be found in my resume:
            </p>
            <button className="button-cta">Resume</button>

          </div>

          <div className="About-backstory-column">
            <img className="About-backstory-picture" src={profilepic} alt="me"/>
          </div>

        </div>
        {/* <ScrollLink to="Projects" smooth duration={200} delay={50}><ScrollDown /></ScrollLink> */}
      </div>
  );
}

export default About;
