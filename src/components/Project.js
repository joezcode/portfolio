import './Project.css';
import { FiExternalLink } from 'react-icons/fi';
import { AiFillGitlab } from 'react-icons/ai';

function Project(props) {

  const tags = props.tags.map(item => {
    return (
      <li className="Project-tag" key={`Project-tag-${item.toLowerCase()}`}>{item}</li>
    )
  });

  const imagePath = (filename) => {
    return require (`../assets/${filename}`)
  }

  console.log()
  return (
    <div className="Project">
      <div className="Project-wrap">
          <img className="Project-image" src={imagePath(props.image)} alt={props.title} />
      </div>
      
      <h2 className="Project-title">{props.title}</h2>
      <div className="Project-links">
        <a className="Project-url" href={props.url ? props.url : undefined} target="_blank" rel="noreferrer"><FiExternalLink /></a>
        <a className="Project-repository" href={props.repository ? props.url : undefined} target="_blank" rel="noreferrer"><AiFillGitlab /></a>
      </div>
      
      <p className="Project-description">{props.description}</p>
      
      <ul className="Project-tags">{tags}</ul>
      
      
 

  </div>   
  )

}


export default Project;
