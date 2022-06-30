import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo-b.png';
import LogoSub from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => {
    return (
   <div className="nav-bar">
       <Link className="logo" to="/portfolio">
           <img src={LogoS} alt="logo" />
           {/* <img className="sub-logo" src={LogoSub} alt="logo subtitle" /> */}
       </Link>
       <nav>
           <NavLink exact="true" activeclassname="active" to="/portfolio">
               <FontAwesomeIcon icon={faHome} color="#e27d60" />
           </NavLink>
           <NavLink activeclassname="active" className="about-link" to="/portfolio/about">
               <FontAwesomeIcon icon={faUser} color="#e27d60" />
           </NavLink>
           <NavLink activeclassname="active" className="contact-link" to="/portfolio/contact">
               <FontAwesomeIcon icon={faEnvelope} color="#e27d60" />
           </NavLink>
           <NavLink activeclassname="active" className="portfolio-link" to="/portfolio/projects">
               <FontAwesomeIcon icon={faSuitcase} color="#e27d60" />
           </NavLink>
       </nav>
       <ul>
           <li>
               <a 
               target="_blank"
               rel="noreferrer"
               href="https://www.linkedin.com/in/britneyokhiria"
               >
                   <FontAwesomeIcon icon={faLinkedin} color="#e27d60" />
               </a>
           </li>
           <li>
               <a 
               target="_blank"
               rel="noreferrer"
               href="https://www.github.com/britneyio"
               >
                   <FontAwesomeIcon icon={faGithub} color="#e27d60" />
               </a>
           </li>
       </ul>
   </div>

)
    };


export default Sidebar