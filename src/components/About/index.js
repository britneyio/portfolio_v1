import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () => {
    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1> 
                    <AnimatedLetters
                    strArray={['A','b','o','u','t',' ','M','e']}
                    idx={15}
                    />
                </h1>
                <p>How ambitious i am </p>
                <p>How confident i am</p>
                <p>Last finishing sentence</p>
            </div>
        </div>
    )
}

export default About