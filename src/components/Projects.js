import './Projects.css';
import Project from './Project';
import data from '../assets/projectData.json';

function Projects() {


    const projects = data.map(item => {
        return (
            <Project 
                key={item.id}
                {...item}
            />
        )
    })

    return (       
        <div className="Projects" name="Projects">
            <h1 className="Project-headline separator">Selected projects</h1>
            <div className="Projects-wrap">
                {projects}
            </div>
            {/* <ScrollLink to="Contact" smooth duration={200} delay={50}><ScrollDown /></ScrollLink> */}
      </div>
    )
}

export default Projects;
