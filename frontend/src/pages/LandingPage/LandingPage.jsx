import './Landing.css';
import greater from '../../assets/icons8-greater-than-30.png'
import arrow from '../../assets/icons8-right-arrow-24.png';
import tick from '../../assets/icons8-checked-checkbox-50.png';
import display from '../../assets/icons8-display-50.png'
import settings from '../../assets/icons8-settings-50.png'
import camera from '../../assets/icons8-camera-enhance-50.png'
import light from '../../assets/icons8-lightning-bolt-50.png'
import bharat from '../../assets/bharatelectronics.jpg'
import hal from '../../assets/hal.jpg'
import thales from '../../assets/icons8-lightning-bolt-50.png'
import iai from '../../assets/iai.jpg'
import mbed from '../../assets/icons8-display-50.png'
import print from '../../assets/icons8-printer-maintenance-80.png'
import tools from '../../assets/icons8-tools-50.png'
import services from '../../assets/icons8-services-50.png'
import instagram from '../../assets/icons8-instagram-logo-94.png'
import twitter from '../../assets/icons8-twitter-bird-50.png'

const LandingPage = () => {
  return (
    <>
      {}
      <section className='first-section'>
        <div className="landing-page">
          <h1>Varisis</h1>
          <span>Empowering India Defence with Precision Engineering Solutions.</span>
          <button><a href="#">Learn More</a></button>
        </div>
      </section>

      {}
      <section>
        <div className="left-div">
          {[
            {
              img: light,
              title: "Power Supply Unit",
              description: "Customized MIL Grade PS and UPS for Avionics and Ground Systems."
            },
            {
              img: display,
              title: "Display",
              description: "Avionics Test Equipments Ruggedized."
            },
            {
              img: settings,
              title: "RF Sub-Systems",
              description: "Transmitter-Receiver Module Test Equipment Radar."
            },
            {
              img: settings,
              title: "Software",
              description: "DO178 Embedded Software Development, Validation and Certification."
            },
            {
              img: camera,
              title: "PIDS",
              description: "Perimeter Intrusion Detection System."
            }
          ].map((item, index) => (
            <div className="right-div" key={index}>
              <div className="icon" />
              <img src={item.img} alt={item.title} />
              <div className="power">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {}
      <section className='firstsection'>
        <div className="leftcontainer">
          <div className="left">
            <img src={greater} alt="Greater Than Icon" />
            <span>WHO WE ARE</span>
            <span>Our Background Based on Your Needs</span>
            <button 
              className="learn" 
              style={{
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                fontSize: '1rem',
                borderRadius: '5px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                transition: 'background-color 0.3s ease',
                outline: 'none',
                width: '50%',
                marginLeft: '20px'
              }}
            >
              Learn more<span><img src={arrow} alt="Arrow" /></span>
            </button>
          </div>
        </div>

        <div className="rightcontainer">
          {[
            "Project-based company founded by a group of defense veterans in 2003.",
            "Design, development, integration, installation, and long-term support of systems/sub-systems for customized engineering hardware and software.",
            "Focused on providing solutions to the Indian Defence Market.",
            "First contract executed in 2006."
          ].map((text, index) => (
            <div className="right" key={index}>
              <img src={tick} alt="Tick Icon" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      {}
      <section className="clients">
        <h3>Our Clients</h3>
        <h1>We have worked with a few of the best Organizations.</h1>
        <p>Varisis has had the great honor and privilege of collaborating with some of the most prestigious, globally-renowned organizations in our industry, allowing us to gain more knowledge and expertise about their processes which has enabled us to provide even better service to our highly valued clients.</p>
        <p>Our dedication to delivering excellence and going above and beyond requirements has been a critical factor in our ability to establish mutually beneficial partnerships with some of the most influential and well-respected organizations in the world. These partnerships have proven to be incredibly rewarding for both sides and are a testament to our commitment to being the best.</p>
        <div className="images">
          <img src={bharat} alt="Bharat" />
          <img src={thales} alt="Thales" />
          <img src={hal} alt="HAL" />
          <img src={iai} alt="IAI" />
          <img src={mbed} alt="MBED" />
        </div>
      </section>

      {}
      <section className='service'>
        <div className="services">
          <h4>Our Services</h4>
          <h1>We Offer Multiple Services From Hardware, Software, Research, or Maintenance.</h1>
          <div className="boxes">
            {[
              {
                img: tools,
                title: "Build-To-Specs",
                description: "We offer a comprehensive “Build to Spec” service where we design and develop tailored hardware and software systems to meet your specific requirements."
              },
              {
                img: print,
                title: "Build-To-Print",
                description: "We offer a Build to Print service where we manufacture hardware and software systems to your exact specifications."
              },
              {
                img: services,
                title: "System Integration, Assembly, and Certification",
                description: "Varisis specializes in providing comprehensive system integration, core capabilities assembly, and certification services tailored to the unique needs of the defence industry."
              },
              {
                img: settings,
                title: "Software Validation and Certification",
                description: "We specialise in providing reliable and comprehensive software validation and certification services for the defence and aerospace sectors."
              },
              {
                img: tools,
                title: "Testing, Maintenance, Repair, Servicing and Overhaul",
                description: "Our MRO services guarantee the operational readiness, safety and extended life of military aircraft to support defence missions."
              }
            ].map((service, index) => (
              <div className="icon-box" key={index}>
                <img src={service.img} alt={service.title} />
                <span>{service.title}</span>
                <p>{service.description}</p>
                <a href="#">Learn More<span><img src={arrow} alt="Arrow" /></span></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section>
        <div className="leftportion">
          <div className="headings">
            <h2>CORE FEATURES</h2>
            <h1>We Are Trusted By Many Clients</h1>
            
          </div>
        </div>
        <div className="rightportion">
          <div className="headings">
            
            <p>VARISIS is an ISO 9001:2008 certified company renowned for its customer-oriented approach and its commitment to providing “first-time-right solution” every time. The company was incorporated in the bustling tech hub of Bangalore on 7th August 2003 and registered as a Pvt. Ltd. With their passion for excellence, VARISIS has become one of the leading companies in the region, offering quality services to their customers. Our company specializes in the design, development, integration, and certification of hardware and software systems, as well as providing long-term product support.</p>
          </div>
          <button className='learn'>Learn More</button>
        </div>
      </section>

      {}
      <section className="next">
        <div className="image">
          
          <div className="images">
            <h2>Our Products More</h2>
            <h1>We Combine Knowledge, Skills, & Constant Learning.</h1>
            <ul>
              <li>Advanced Display Solutions.</li>
              <li>Software.</li>
              <li>Standards And Documentation.</li>
              <li>Graphics And Software Tools.</li>
              <li>Interfaces.</li>
              <li>Emulators And Debuggers.</li>
              <li>Back Planes.</li>
            </ul>
          </div>
        </div>
      </section>

      {}
      <section className="information">
        <div className="info">
          <h3>We had Love To Hear From You</h3>
          <h2>Contact Us</h2>
        </div>

        <div className="storesContainer">
          {[
            {
              title: "Find us Here",
              content: "Bldg No-15, First floor, Basant look, Community Center, Vasant Vihar, New Delhi, 110057"
            },
            {
              title: "Get In touch",
              content: "info@varisis.in\n011-83304 Fax"
            },
            {
              title: "Working Hours",
              content: "Mon-Fri: 9am to 8pm\nSaturday: 10am to 4pm"
            }
          ].map((store, index) => (
            <div className="storesInfo" key={index}>
              <h2>______</h2>
              <h1>{store.title}</h1>
              <p>{store.content}</p>
            </div>
          ))}
        </div>

        <div className="address">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="tel" placeholder="Phone Number" />
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="Leave a Message" />
        </div>

        <button className="btn2">Send Message</button>
        <p>Varisis is aspiring to further expand its footprint in the electronics, electro-mechanical, IoT, Telecommunication, and defense market. It has already executed a good number of projects and now venturing into hardware manufacturing.</p>
      </section>

      {}
      <section className='subscribe'>
        {/* Add subscribe form or content here */}
      </section>

      {}
      <footer>
        <div className="leftpart">
          <div className="image">
            
            <p>Varisis specializes in engineering and software technologies, providing customized hardware and software systems. We have successfully served many Indian customers, including major defense sector companies like DRDO, BEL, and HAL, with long-term support.</p>
            <h4>__________</h4>
            <div className="social-icons">
              <img src={instagram} alt="Instagram" />
              <img src={twitter} alt="Twitter" />
              <img src={display} alt="YouTube" />
            </div>
          </div>
        </div>

        <div className="rightpart">
          <h1>Quick Links</h1>
          <ul className="quick-links">
            <li>About Us</li>
            <li>Products</li>
            <li>Projects</li>
            <li>Services</li>
            <li>Career</li>
            <li>Contact</li>
          </ul>

          <div className="rightnext">
            <h2>Head Office</h2>
            <p>Bldg No. 15, First Floor, Basant Lok Community Center, Vasant Vihar, New Delhi – 110057</p>
            <h3>CIN</h3>
            <p>U75100KA2003PTC032373</p>
            <h2>GST No. (Noida):</h2>
            <p>09AABCV7195H1ZU</p>
          </div>
        </div>

        <div className="bottom">
          <h1>Say Hello</h1>
          <div className="contact-info">
            </div>
<div className="register">
            <div className="work-office">
              <h2>Registered Office</h2>
              <p>102, First Floor Sathya Park View, No.12, 2nd Main, Kasturinagar, Bengaluru - 560043</p>
            </div>
            <div className="work-office">
              <h2>Work Office</h2>
              <p>B-6, Sector-58, Noida, Gautam Buddh Nagar, Uttar Pradesh-201301</p>
            </div>
          </div>
        </div>

        <div className="foot">
          <p>Copyright © 2025 Varisis, All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;