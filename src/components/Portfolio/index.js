import React, { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import pD from '../../data/portfolioData.json';
const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
           setLetterClass('text-animate-hover');
       
       }, 3000)
   }, []);
   const renderPortfolio = (p) => {
       return (
           <div className="images-container">
               {
                   p.map((port, idx) => {
                       return (
                           <div className="image-box" key={idx}>
                               <img src={port.cover} 
                               alt="project image"
                               className="port-image"
                               />
                               <div className="content">
                                   <p className="title">{port.title}</p>
                                   <h4 className="description">{port.description}</h4>
                                   <button className="btn"
                                   onClick={() => window.open(port.url)}>
                                        View
                                   </button>
                                   </div>
                               
                               </div>
                       )
                   })
               }
           </div>
       )
   };

    return (
        <div className="container portfolio-page">
            <h1 className="page-title"> 
            <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['P','r','o','j','e','c','t','s']}
                    idx={15}
                    /></h1>
            <div>
                {renderPortfolio(pD.portfolio)}
            </div>
        </div>
    )
};

export default Portfolio;