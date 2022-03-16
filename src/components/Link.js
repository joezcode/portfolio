import { Link as Scroll } from 'react-scroll'
import './Link.css';

function Link({to, value}) {

  return (
        <Scroll 
            activeClass="active"
            to={to}
            spy={true}
            smooth={true}
            offset={-5}
            duration={500}>

            {value}
            
        </Scroll>
);
}

export default Link;
