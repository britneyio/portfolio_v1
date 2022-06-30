import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
            'service_6siv58m', 'template_pami0y4', refForm.current, 'hC63Dz7PnWywobuX9')
          .then((result) => {
              alert('Message successfully sent!');
              window.location.reload(false);
          }, (error) => {
              alert('Failed to send message, please try again: ' +  error.text);
          });
      };
    useEffect(() => {
        setTimeout(() => {
           setLetterClass('text-animate-hover');
       
       }, 4000)
   }, []);
    return (
        <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t',' ','M','e' ]}
                    idx={15}
                    />
                </h1>
                <p>
                    I am interested in freelance, volunteer, and company opportunities. From University Research
                    to Industry Software Development, if you have a request or question, don't hesitate
                    to contact me using the form below. If a project link sent you here, code will be given at request.
                </p>
                <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" required />
                                 </li>
                                 <li className="half">
                                <input type="email" name="email" placeholder="Email" required />
                                 </li>
                                 <li>
                                <input 
                                placeholder="Subject"
                                type="text"
                                name="subject"
                                required />
                                </li>
                                <li>
                                    <textarea placeholder="Message"
                                    name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact