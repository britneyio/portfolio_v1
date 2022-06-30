import { faReact, faJava, faGit, faPython, faJs, faHtml5, faCss3, faJsSquare, faEthereum, faGitAlt, faGithub, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
           setLetterClass('text-animate-hover');
       
       }, 3000)
   }, []); 
    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1> 
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','M','e']}
                    idx={15}
                    />
                </h1>
                <h2>Hi, I am Britney, a 2nd year computer science major at Northeastern University.
                    I am passionate about learning and exploring different fields of computer science and technology!
                    Currently, I am learning Solidity and JavaScript. </h2>
                    <h3>Skills</h3>
                <p>I have 3 years of experience in Java through school and my own personal projects. 
                    I also have a good understanding of Python. I'm experienced in git and github. I have built
                    a lot of small projects with HTML5. With the help of
                    freeCodeCamp I built this portfolio website in React to learn React!
                </p>
                <h3> Past Work Experience </h3>
                <p>Northeastern University Cybersecurity and Privacy Institute | Boston, MA
Research Assistant | 08/2021 - 05/2022
<ul>

<li>Played an active role in the implementation of Natural Language Processing algorithms to automatically process
thousands of visual and auditory ads from Amazon Alexas. </li>
<li> Worked directly with the lead professor to collect and gather data through specifically created Personas for each Amazon
Alexa. </li>
<li>Created an analysis of the network traffic to detect third-party websites that might have access to users' data.
Built a statistical model for predicting the personalized ads per Persona. </li>
 <li>Discussed the project in weekly meetings.</li>
</ul></p>

<p>Lab Four Professional Development Center | Memphis, TN IT Support Technician | 06/2018 - 06/2020
    <ul>
    <li> Supported the IT manager, configured and maintained various hardware and software, and performed regular back-ups.</li>
    <li> Developed automation scripts, managed and updated databases, and worked closely with the web development team. </li>
    <li>Managed the helpdesk and talked to clients in need of help</li> 
    <li> Worked with departments across the company, including marketing and project management, in developing new ideas, initiatives, products, and services
        </li>
        </ul>
    </p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faJava} color="#dd0031" />

                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
                        
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faGithubAlt} color="#000" />
                        
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faPython} color="#5ed4f4" />
                        
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
                        
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faEthereum} color="#215CAF" />
                        
                    </div>
    
  
                </div>
            </div>
        </div>
    )
}

export default About