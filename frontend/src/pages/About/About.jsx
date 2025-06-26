import { Link } from "react-router-dom";
import './About.css';

function About(){
  return (
    <div className="mains">
    <div className="about-container">
      <h1>About Varisis Advanced Engineering Private Limited</h1>
     
      <p>
        Established on August 7, 2003, Varisis Advanced Engineering Private Limited is an ISO 9001:2008 certified company based in Bangalore, India. We specialize in the design, development, integration, and certification of hardware and software systems, providing long-term product support. Our commitment to delivering "first-time-right solutions" underscores our customer-oriented approach.
      </p>
      <p>
        Our services include:
        </p>
        </div>
        
       <main>
        <ul>
          <li>Advanced Display Solutions</li>
          <li>Software Development</li>
          <li>Standards and Documentation</li>
          <li>Graphics and Software Tools</li>
          <li>Interfaces</li>
          <li>Emulators and Debuggers</li>
          <li>Back Planes</li>
        </ul>
        </main>
        
        
        <footer>
      
      <p>
        <button><Link to={'/'} className="llll">Go to home page</Link></button>
        For more information, visit our official website: <a href="https://varisis.in/" target="_blank" rel="noopener noreferrer">varisis.in</a>
      </p>
      </footer>
      </div>
    
  );
};

export default About; 

