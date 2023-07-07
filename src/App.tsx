import React from 'react';
import logo from './asset/logo.svg';
import './App.css';
import img from './asset/profile.png'
import bisag from './asset/bisag.png'
import my_captain from './asset/my_captain.png'
import eatit from './asset/Green Gradient Application Showcase Presentation.png'
import analytica from './asset/analytica.jpg'
import toshal from './asset/toshal.png'
import vha from './asset/vha.jpg'
import pdwp from './asset/pdwp.jpg'
import md from './asset/md.jpg'
import em from './asset/em.jpg'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import research from './asset/research.png'

import back from './asset/back.jpg'
import re1 from './asset/Analysis Of Stock Price Prediction Models (1).png'

import re2 from './asset/Analysis Of Stock Price Prediction Models (2).png'
function sendEmail() {
  var email = 'developer.0208@gmail.com';
  var subject = 'I want to inquire';
  var body = 'Hello ....';

  const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.open(gmailUrl);
}


function App() {
  var url="bobbyhadz"
  return (
    <div className="App">
      <nav className="navbar  navbar-dark navbar-expand-lg  ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Yash Mehta</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                  aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#intro">Introduction</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Research</a>
              </li>

            </ul>
            <button className="button_hire" onClick={sendEmail}></button>
          </div>
        </div>
      </nav>
      <div className="con_main" id="intro">
        <div className="left">
          <div className="card">
            <div className="name-details row">
              <h1 className="name">Yash Mehta</h1>
              <h1 className="details">Developer, Designer & Analyst</h1>
            </div>
            <div className="photo">
              <div className="bg">
                <img className="pic" src={img} />
              </div>
              <div className="blob"></div>
            </div>
            <div className="yt">
              <h2 className="yt_name">It’s not a bug — it’s an undocumented feature.</h2>
            </div>
            <h2 className="detail">Get in touch : developer.0228@gmail.com </h2>
            <button className="btn" onClick={sendEmail}>Hire Me!</button>
            <div className="social-links">
              <a href={'https://youtube.com/@codetodevelop4212'} target={'_blank'}>
                <div id="youtube" className="social-btn flex-center">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                    <path fill="#FF3D00"
                          d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path>
                    <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                  </svg>
                  <span>CodeToDevelop</span>
                </div>
              </a>
              <a href={'https://www.linkedin.com/in/yash-mehta-9b3524198/'} target={'_blank'}>
                <div id="linkedin" className="social-btn flex-center">
                  <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                  </svg>
                  <span>Yash Mehta</span>
                </div>
              </a>
              <a href={'https://github.com/yash0208'} target={'_blank'}>
                <div id="github" className="social-btn flex-center" >
                  <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                  <span>Yash0208</span>
                </div>
              </a>
              <a href={'https://www.instagram.com/yash_mehta_0208/'} target={'_blank'}>
                <div id="instagram" className="social-btn flex-center">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0 0 64 64">
                    <linearGradient id="jm_nAfYbxsVmTlYr5N4x9a_43625_gr1" x1="32" x2="32" y1="6.667" y2="57.872"
                                    gradientUnits="userSpaceOnUse" spreadMethod="reflect">
                      <stop offset="0" stop-color="#1a6dff"></stop>
                      <stop offset="1" stop-color="#c822ff"></stop>
                    </linearGradient>
                    <path fill="url(#jm_nAfYbxsVmTlYr5N4x9a_43625_gr1)"
                          d="M44,57H20c-7.168,0-13-5.832-13-13V20c0-7.168,5.832-13,13-13h24c7.168,0,13,5.832,13,13v24 C57,51.168,51.168,57,44,57z M20,9C13.935,9,9,13.935,9,20v24c0,6.065,4.935,11,11,11h24c6.065,0,11-4.935,11-11V20 c0-6.065-4.935-11-11-11H20z"></path>
                    <linearGradient id="jm_nAfYbxsVmTlYr5N4x9b_43625_gr2" x1="32" x2="32" y1="18.167" y2="45.679"
                                    gradientUnits="userSpaceOnUse" spreadMethod="reflect">
                      <stop offset="0" stop-color="#6dc7ff"></stop>
                      <stop offset="1" stop-color="#e6abff"></stop>
                    </linearGradient>
                    <path fill="url(#jm_nAfYbxsVmTlYr5N4x9b_43625_gr2)"
                          d="M32,45c-7.168,0-13-5.832-13-13c0-7.168,5.832-13,13-13c7.168,0,13,5.832,13,13 C45,39.168,39.168,45,32,45z M32,23c-4.962,0-9,4.038-9,9c0,4.963,4.038,9,9,9c4.963,0,9-4.037,9-9C41,27.038,36.963,23,32,23z"></path>
                    <linearGradient id="jm_nAfYbxsVmTlYr5N4x9c_43625_gr3" x1="46" x2="46" y1="12.75" y2="23.049"
                                    gradientUnits="userSpaceOnUse" spreadMethod="reflect">
                      <stop offset="0" stop-color="#6dc7ff"></stop>
                      <stop offset="1" stop-color="#e6abff"></stop>
                    </linearGradient>
                    <path fill="url(#jm_nAfYbxsVmTlYr5N4x9c_43625_gr3)"
                          d="M46 15A3 3 0 1 0 46 21A3 3 0 1 0 46 15Z"></path>
                  </svg>
                  <span>Yash Mehta</span>
                </div>
              </a>
            </div>
          </div>

        </div>
        <div className="right">
          <div className="introduction" id="introduction">
            <button className="button_intro">
              <span className="button-content">Introduction </span>
            </button>
            <h1 className="intro_head">Hello! I'm <span className="intro_name">Yash Mehta</span></h1>
            <p className="intro_details">Seasoned software engineer specializing in Android, web, and data science.
              Proficient in architecting robust solutions. Published research
              paper on advanced data analysis. Exceptional problem-solving skills. Committed to professional growth and
              technological advancement.</p>
            <div className="cards">
              <div className="card_project">

                <h1>15+</h1>
                <h2>Projects</h2>
              </div>
              <div className="card_project">
                <h1>4</h1>
                <h2>Internships</h2>
              </div>
              <div className="card_project">
                <h1>10+</h1>
                <h2>Hackathons</h2>
              </div>
              <div className="card_project">
                <h1>1</h1>
                <h2>Publication</h2>
              </div>

            </div>
            <a href={'https://drive.google.com/file/d/15UjnHI2AVzXW0M-kIdEwvI5E29TEUN2Y/view?usp=sharing'} target={'_blank'}>
              <button className="cssbuttons-io">
              <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"></path><path
                  fill="currentColor"       d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"></path></svg> Download CV</span>
              </button>
            </a>

          </div>
        </div>
      </div>
      <div className="introduction_experience" id="experience">
        <button className="button_intro">
          <span className="button-content">Work Experience </span>
        </button>
        <div className="row workex_container">
          <div className="col-lg-4 col-sm-12 ">
            <div className="card_exp">
              <img className="logo" src={bisag} alt="Company 1 Logo"/>
                <div className="company-name">Bhaskaracharya Institute for Space Applications and Geoinformatics</div>
                <div className="position">Data Engineer</div>
                <div className="bullet-points">
                  <div className="bullet-point">Employed as a data engineer at Bhaskaracharya Institute for Space
                    Applications and Geoinformatics, acquiring extensive expertise in the
                    field of data science
                  </div>
                  <div className="bullet-point">Utilized my proficiency in data engineering and data science to create
                    an advanced web portal for URL-based phishing detection. This portal
                    incorporated sophisticated techniques to identify and mitigate phishing threats effectively.
                  </div>
                  <div className="bullet-point">Deployed cutting-edge algorithms and techniques to meticulously analyze
                    URLs, enabling the identification of potential phishing threats.
                    This implementation significantly bolstered cybersecurity measures, ensuring enhanced protection for
                    users accessing the web portal
                  </div>
                </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card_exp">
              <img className="logo" src={toshal} alt="Company 1 Logo"/>
                <div className="company-name">Toshal Infotech</div>
                <div className="position">Web Developer</div>
                <div className="bullet-points">
                  <div className="bullet-point">Thrived as a web developer at Toshal Infotech, acquiring comprehensive
                    proficiency in HTML, CSS, SCSS, and Bootstrap frameworks.
                    Demonstrated adeptness in leveraging these technologies to deliver exceptional web solutions and
                    enhance user experiences.
                  </div>
                  <div className="bullet-point">Spearheaded the creation of "Enovate Me," a groundbreaking e-learning
                    website, harnessing my expertise in web development. Seamlessly
                    integrating innovative design elements and interactive features, the website revolutionized the
                    online learning experience.

                  </div>
                  <div className="bullet-point">Implemented cutting-edge design and interactive features to enhance user
                    experience on Enovate Me platform, creating an engaging
                    learning environment.
                  </div>
                </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card_exp">
              <img className="logo" src={my_captain} alt="Company 1 Logo"
                   />
                <div className="company-name" >My Captain</div>
                <div className="position">Campus Ambassador</div>
                <div className="bullet-points">
                  <div className="bullet-point">Demonstrated expertise in lead generation, social marketing, and course
                    sales as a campus ambassador, driving successful conversion rates.
                  </div>
                  <div className="bullet-point">Utilized diverse marketing channels and strategic networking to promote
                    courses, resulting in increased awareness and enrollment.
                  </div>
                  <div className="bullet-point">Leveraged leadership skills to mentor and train interns, imparting
                    knowledge and fostering their development in sales and marketing.
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="introduction_skills" id="skills" >
        <button className="button_intro">
          <span className="button-content">Skills </span>
        </button>
        <div className="row skill_container">
          <div className="con2">
            <div className=" con1 ">
              <div className="progress-bar">
                <CircularProgressbar value={85} text={'85%'}/>
              </div>
              <h1>UX & UI</h1>
              <a href={'https://drive.google.com/file/d/1TYUJOJ3VFUo-IDGHAHZsJkHQTI7S1HAI/view?usp=drive_link'}>UX UI Design (My Captain)</a>
            </div>
          </div>
          <div className="con2">
            <div className=" con1 ">
              <div className="progress-bar">
                <CircularProgressbar value={80} text={'80%'}/>
              </div>
              <h1>Data Science</h1>
              <a href={'#'}>Goggle Data Science Course</a>
            </div>
          </div>
          <div className="con2">
            <div className=" con1 ">
              <div className="progress-bar">
                <CircularProgressbar value={85} text={'85%'}/>
              </div>
              <h1>Web Development</h1>
              <a href={'https://drive.google.com/file/d/1tUSZknttiXSLi6YrCN1s1_WHDRhV8YrU/view?usp=sharing'}>Web Development (My Captain)</a>
            </div>
          </div>
          <div className="con2">
            <div className=" con1 ">
              <div className="progress-bar">
                <CircularProgressbar value={90} text={'90%'}/>
              </div>
              <h1>Android Development</h1>
              <a href={'https://drive.google.com/file/d/1-tywaKN50hJZAA1E9iH_zjdFxLR_QtJc/view?usp=sharing'}>Android Development (My Captain)</a>
            </div>
          </div>
          <div className="con2">
            <div className=" con1 ">
              <div className="progress-bar">
                <CircularProgressbar value={75} text={'75%'}/>
              </div>
              <h1>Database Managment</h1>
              <a href={'#'}>Firebase & My SQL</a>
            </div>
          </div>
          <div className="con2">
            <div className=" con1 ">
              <div className="progress-bar">
                <CircularProgressbar value={60} text={'60%'}/>
              </div>
              <h1>Machine Learning</h1>
              <a href={'https://drive.google.com/file/d/1A9_Px92m74fTEW9p861a4RReqxx2p0YF/view?usp=sharing'}>Machine Learning (Standford University)</a>
            </div>
          </div>
          <div className="con2">
            <div className=" con1 ">
              <div className="progress-bar">
                <CircularProgressbar value={66} text={'66%'}/>
              </div>
              <h1>Game Development</h1>
              <a href={'https://drive.google.com/file/d/12OkzNqySRkRGydKCjqXdEolbRYJQCmur/view?usp=sharing'}>Game Development (My Captain)</a>
            </div>
          </div>
          <div className="con2">
            <div className=" con1 ">
              <div className="progress-bar">
                <CircularProgressbar value={70} text={'70 %'}/>
              </div>
              <h1>Artificial Intelligence</h1>
              <a href={'https://drive.google.com/file/d/16N8Vw0JZeAjpNEf7QyJPw6tfbQgDVoci/view?usp=sharing'}>Artificial Intelligence (My Captain)</a>
            </div>
          </div>
        </div>
      </div>
      <div className="introduction_projects" id="projects" >
        <button className="button_intro">
          <span className="button-content">Projects </span>
        </button>
        <div className="row project_container">
          <div className="col-lg-4 col-md-6 col-sm-12 pc">
            <div className="cardp">
              <img className="cardp-image" src={eatit}></img>
              <p className="cardp-title">Eat It - Your Complete Kitchen Partner</p>
              <ul className="cardp-body">
                <li>Crafted a health-focused recipe app with advanced features, prioritizing an enriched user experience.</li>
                <li>Enabled search functionality based on taste, type, country, and meal category, empowering users to discover recipes customized to their
                  preferences.</li>
                <li>Incorporated a video section featuring cooking tutorials and personalized meal plans tailored to users' calorie requirements, promoting
                  healthy eating habits. Furthermore, users can explore recipes based on available ingredients, accompanied by detailed guides and nutritional
                  information for informed choices.</li>
              </ul>
              <a href={'https://youtu.be/udJCVo6beg0'} target={'_blank'}>
                <button className="bookmarkBtn">
                <span className="IconContainer">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
    <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
</svg>
                </span>
                  <p className="text">Watch Now</p>
                </button>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 pc">
            <div className="cardp">
              <img className="cardp-image" src={analytica}></img>
              <p className="cardp-title">Analytica - Your Finance Partner</p>
              <ul className="cardp-body">
                <li>Designed an Android app for budget planning and expense tracking, facilitating seamless deduction of expenses from available funds.</li>
                <li>Leveraged OCR technology to streamline expense tracking by enabling users to effortlessly add bills to their records.</li>
                <li>Incorporated a trusted news and opinion section to keep users informed, while the investment section provides stock data and prediction
                  models for profitable trading decisions.<br/><br/><br/><br/></li>
              </ul>
              <a href={'https://youtu.be/ZGFReRq8heY'} target={'_blank'}>
                <button className="bookmarkBtn">
                <span className="IconContainer">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
    <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
</svg>
                </span>
                  <p className="text">Watch Now</p>
                </button>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 pc">
            <div className="cardp">
              <img className="cardp-image" src={vha}></img>
              <p className="cardp-title">Virtual Home Automation</p>
              <ul className="cardp-body">
                <li>Developed a state-of-the-art IoT-integrated virtual home automation app, enabling users to remotely control their appliances via
                  smartphones. This innovative solution offers convenience and enhanced control over home devices, revolutionizing the way users interact
                  with their living environment.</li>
                <li>Created an immersive 3D website with Glitch, featuring interactive visuals and intuitive controls for an enhanced user experience</li>
                <li>Seamlessly connected various IoT devices, allowing users to monitor and manage their home appliances efficiently through the virtual app
                  interface.<br/><br/><br/></li>
              </ul>
              <a href={'#'} target={'_blank'}>
                <button className="bookmarkBtn">
                <span className="IconContainer">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
    <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
</svg>
                </span>
                  <p className="text">Watch Now</p>
                </button>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 pc">
            <div className="cardp">
              <img className="cardp-image" src={pdwp}></img>
              <p className="cardp-title">Phishing Detection Web Portal</p>
              <ul className="cardp-body">
                <li>Architected, deployed, and maintained a web-based phishing detection system using data science and machine learning techniques;
                  reduced phishing-related security incidents by 50% within the first 90 days of launch.</li>
                <li>Deployed cutting-edge cybersecurity protocols to efficiently detect and alert users of malevolent websites, thereby considerably fortifying
                  online security. Employed state-of-the-art measures to identify potential threats and provide timely warnings, ensuring enhanced
                  protection in the digital realm.
                </li>
                <li>The portal serves as a vital tool, ensuring users are protected from falling prey to phishing scams. Promoting a safer online experience,
                  effectively mitigates the risks associated with fraudulent activities, enhancing overall security for all users.</li>
              </ul>
              <a href={'#'} target={'_blank'}>
                <button className="bookmarkBtn">
                <span className="IconContainer">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
    <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
</svg>
                </span>
                  <p className="text">Watch Now</p>
                </button>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 pc">
            <div className="cardp">
              <img className="cardp-image" src={md}></img>
              <p className="cardp-title">My Doctor - Your Health Partner</p>
              <ul className="cardp-body">
                <li>Developed and implemented "My Doctor," a two-terminal based health consultancy application, facilitating convenient access to healthcare services through computer and mobile devices.</li>
                <li>Led a cross-functional team in designing and building the application's user-friendly interface, ensuring seamless navigation and enhancing accessibility for individuals of all technological backgrounds.</li>
                <li>Collaborated with healthcare professionals to integrate comprehensive health consultancy services, enabling users to connect with qualified doctors, specialists, and other experts for advice, second opinions, and chronic condition management.<br/><br/><br/></li>
              </ul>
              <a href={'https://youtu.be/n8W1HCJ7-vQ'} target={'_blank'}>
                <button className="bookmarkBtn">
                <span className="IconContainer">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
    <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
</svg>
                </span>
                  <p className="text">Watch Now</p>
                </button>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 pc">
            <div className="cardp">
              <img className="cardp-image" src={em}></img>
              <p className="cardp-title">Enovate Me</p>
              <ul className="cardp-body">
                <li>Spearheaded the end-to-end development of an advanced e-learning website, leveraging cutting-edge technologies and industry best practices to create a robust and scalable platform.</li>
                <li>Designed and implemented a user-friendly interface, employing responsive web design principles to optimize accessibility across various devices and screen sizes, enhancing the overall learning experience for users.</li>
                <li>Integrated a sophisticated content management system (CMS) to efficiently organize and categorize learning materials, allowing for seamless navigation and search capabilities, resulting in an intuitive and personalized learning journey for users.<br/><br/><br/></li>
              </ul>
              <a href={'https://youtu.be/CRRAbk4WNVA'} target={'_blank'}>
                <button className="bookmarkBtn">
                <span className="IconContainer">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
    <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
</svg>
                </span>
                  <p className="text">Watch Now</p>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="introduction_projects" id="research" >
        <button className="button_intro">
          <span className="button-content">My Reasearch </span>
        </button>
        <div className="col-lg-12 col-md-12 col-sm-12 ">
          <div className="cardp pc1">
            <img className="cardr-image" src={research}></img>
            <div className="cardr-de">
              <p className="cardr-title">ANALYSIS OF STOCK PRICE-PREDICTION MODELS</p>
              <p className="cardp-body rr">
                Everything has two sides in the world just like coins where one is good
                and the other is not in our favor where stock market also has two sides, on one
                hand, being the lucrative source of income and the largest investment option with
                the highest return on investment while the second side reveals drawbacks and
                losses. In the current expanding market, there are a lot of people facing failure,

                here major reasons for market failure are lack of financial understanding and in-
                fluenced trading. Scholars have developed a number of models in past few years

                for time series analysis every model predicts at a particular level according to
                their algorithms here we will analyze available models for time series analysis
                and provide a thorough analysis for each model allowing investors to select the
                best model for their next trade analysis.
              </p>
              <a href={'https://link.springer.com/chapter/10.1007/978-981-99-0981-0_48'} target={'_blank'}>
                <button className="continue-application">
                  <div>
                    <div className="pencil"></div>
                    <div className="folder">
                      <div className="top">
                        <svg viewBox="0 0 24 27">
                          <path
                              d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                        </svg>
                      </div>
                      <div className="paper"></div>
                    </div>
                  </div>
                  My Research Paper
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
