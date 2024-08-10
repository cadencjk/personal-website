import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { useEffect, useRef, useState } from "react";
import TimelineObserver from "react-timeline-animation";
import NUSLogo from '../../assets/images/NUS.png';
import ShopeeLogo from '../../assets/images/shopee.png';
import KeppelLogo from '../../assets/images/keppel.png';
import UCDLogo from '../../assets/images/ucd.svg';
import ABBLogo from '../../assets/images/abb.png';
import IncorpLogo from '../../assets/images/incorp.png';

export const Experience = () => {

  const [message, setMessage] = useState("");

  const onCallback = () => {
    console.log("awesome");
  };


  return (
    <div className="App">
      <h1 className="mt-5">Experience ↓</h1>
      <TimelineObserver
        initialColor="#dedede"
        fillColor="#bf0000"
        handleObserve={(setObserver) => (
          <Timeline
            callback={onCallback}
            className="timeline"
            setObserver={setObserver}
          />
        )}
      />
      <div className="stub2">{message}</div>
    </div>

  );
};

const Timeline = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState("");
  const [date1, setDate1] = useState("");
  const [company1, setCompany1] = useState("");
  const [description1, setDescription1] = useState("");
  const [logo1, setLogo1] = useState("");

  const [message2, setMessage2] = useState("");
  const [date2, setDate2] = useState("");
  const [company2, setCompany2] = useState("");
  const [description2, setDescription2] = useState("");
  const [logo2, setLogo2] = useState("");

  const [message3, setMessage3] = useState("");
  const [date3, setDate3] = useState("");
  const [company3, setCompany3] = useState("");
  const [description3, setDescription3] = useState("");
  const [logo3, setLogo3] = useState("");

  const [message4, setMessage4] = useState("");
  const [date4, setDate4] = useState("");
  const [company4, setCompany4] = useState("");
  const [description4, setDescription4] = useState("");
  const [logo4, setLogo4] = useState("");

  const [message5, setMessage5] = useState("");
  const [date5, setDate5] = useState("");
  const [company5, setCompany5] = useState("");
  const [description5, setDescription5] = useState("");
  const [logo5, setLogo5] = useState("");

  const [message6, setMessage6] = useState("");
  const [date6, setDate6] = useState("");
  const [company6, setCompany6] = useState("");
  const [description6, setDescription6] = useState("");
  const [logo6, setLogo6] = useState("");

  const [message7, setMessage7] = useState("");
  const [date7, setDate7] = useState("");
  const [company7, setCompany7] = useState("");
  const [description7, setDescription7] = useState("");
  const [logo7, setLogo7] = useState("");

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const timeline4 = useRef(null);
  const timeline5 = useRef(null);
  const timeline6 = useRef(null);
  const timeline7 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);
  const circle5 = useRef(null);
  const circle6 = useRef(null);
  const circle7 = useRef(null);


  const someCallback = () => {
    setMessage1("Product Management Intern");
    setDate1("Aug 2024 - Dec 2024")
    setCompany1("Shopee Singapore")
    setDescription1("Collaborate effectively with cross-functional stakeholders from Product, Engineering, Design, Data, and Operations to bring ideas to life.")
    setLogo1(ShopeeLogo)
  };

  const someCallback2 = () => {
    setMessage2("Application Developer Intern");
    setDate2("May 2024 - Aug 2024")
    setCompany2("Keppel Singapore")
    setDescription2("Developed and maintained various enterprise systems with Keppel’s Information Technology team. Developed chatbots using advanced AI models (GPT-3.5 and GPT-4.0) to facilitate the retrieval of policy documents for employees.")
    setLogo2(KeppelLogo)
  };

  const someCallback3 = () => {
    setMessage3("Semester Exchange Programme in Ireland");
    setDate3("Jan 2024 - May 2024")
    setCompany3("University College Dublin")
    setDescription3("GPA: 3.86 / 4.2 (First Class Honors)")
    setLogo3(UCDLogo)
  };

  const someCallback4 = () => {
    setMessage4("Bachelor of Computing in Computer Science (Honors)");
    setDate4("Aug 2021 - May 2025")
    setCompany4("National University of Singapore")
    setDescription4("GPA: 4.53 / 5.0 (First Class Honors)")
    setLogo4(NUSLogo)
    callback();
  };

  const someCallback5 = () => {
    setMessage5("Software Engineer Intern");
    setDate5("May 2023 - Aug 2023")
    setCompany5("ABB Singapore")
    setDescription5("Responsible for ABB's Manufacturing Operations Management (MOM) software development and system applications in accordance with business requirements. Participated in system quality testing and any necessary technical support upon system launch.")
    setLogo5(ABBLogo)
  };

  const someCallback6 = () => {
    setMessage6("Risk Analysis Intern");
    setDate6("Jun 2022 - Aug 2022")
    setCompany6("InCorp Global")
    setDescription6("Identified and evaluated potential technology compliance risks in different firms. Used data analysis tools to collect and analyse financial reports. Generated internal audit reports based on findings.")
    setLogo6(IncorpLogo)
  };

  const someCallback7 = () => {
    setMessage7("Database System Teaching Assistant");
    setDate7("Aug 2023 - Dec 2023")
    setCompany7("National University of Singapore")
    setDescription7("Led and instructed 2 classes of students in Database Systems, with a specialized focus on PostgreSQL. Collaborated with faculty members to refine strategies and adapting approaches to optimize teaching standards.")
    setLogo7(NUSLogo)
  };

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(timeline4.current);
    setObserver(timeline5.current);
    setObserver(timeline6.current);
    setObserver(timeline7.current);
    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
    setObserver(circle4.current, someCallback4);
    setObserver(circle5.current, someCallback5);
    setObserver(circle6.current, someCallback6);
    setObserver(circle7.current, someCallback7);
  }, []);

  return (
    <div className="wrapper">
      <div id="timeline4" ref={timeline4} className="timeline" />
      <div className="circleWrapper">
        <div id="circle4" ref={circle4} className="circle">
          1
        </div>
        <div className="company-logo">
          <img src={logo4} style={{ width: '80px' }}/>
        </div>
        <div className="message" >
          <div className="bold">
            {message4}
          </div>
          <div>
            {company4}
          </div>
          <div>
            {date4}
          </div>
          <div>
            {description4}
          </div>
        </div>
      </div>
      <div id="timeline1" ref={timeline1} className="timeline" />
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle">
          2
        </div>
        <div className="company-logo">
          <img src={logo1} style={{ width: '150px', marginLeft: '-30px' }}/>
        </div>
        <div className="message" >
          <div className="bold">
            {message1}
          </div>
          <div>
            {company1}
          </div>
          <div>
            {date1}
          </div>
          <div>
            {description1}
          </div>
        </div>
      </div>
      <div id="timeline2" ref={timeline2} className="timeline" />
      <div className="circleWrapper">
        <div id="circle2" ref={circle2} className="circle">
          3
        </div>
        <div className="company-logo">
          <img src={logo2} style={{ width: '130px', marginLeft: '-50px' }}/>
        </div>
        <div className="message" >
          <div className="bold">
            {message2}
          </div>
          <div>
            {company2}
          </div>
          <div>
            {date2}
          </div>
          <div>
            {description2}
          </div>
        </div>
      </div>
      <div id="timeline3" ref={timeline3} className="timeline" />
      <div className="circleWrapper">
        <div id="circle3" ref={circle3} className="circle">
          4
        </div>
        <div className="company-logo">
          <img src={logo3} style={{ width: '70px' }}/>
        </div>
        <div className="message" >
          <div className="bold">
            {message3}
          </div>
          <div>
            {company3}
          </div>
          <div>
            {date3}
          </div>
          <div>
            {description3}
          </div>
        </div>
      </div>
      <div id="timeline7" ref={timeline7} className="timeline" />
      <div className="circleWrapper">
        <div id="circle7" ref={circle7} className="circle">
          5
        </div>
        <div className="company-logo">
          <img src={logo7} style={{ width: '80px' }}/>
        </div>
        <div className="message" >
          <div className="bold">
            {message7}
          </div>
          <div>
            {company7}
          </div>
          <div>
            {date7}
          </div>
          <div>
            {description7}
          </div>
        </div>
      </div>
      <div id="timeline5" ref={timeline5} className="timeline" />
      <div className="circleWrapper">
        <div id="circle5" ref={circle5} className="circle">
          6
        </div>
        <div className="company-logo">
          <img src={logo5} style={{ width: '100px', marginLeft: '-20px' }}/>
        </div>
        <div className="message" >
          <div className="bold">
            {message5}
          </div>
          <div>
            {company5}
          </div>
          <div>
            {date5}
          </div>
          <div>
            {description5}
          </div>
        </div>
      </div>
      <div id="timeline6" ref={timeline6} className="timeline" />
      <div className="circleWrapper">
        <div id="circle6" ref={circle6} className="circle">
          7
        </div>
        <div className="company-logo">
          <img src={logo6} style={{ width: '150px', marginLeft: '-80px' }}/>
        </div>
        <div className="message" >
          <div className="bold">
            {message6}
          </div>
          <div>
            {company6}
          </div>
          <div>
            {date6}
          </div>
          <div>
            {description6}
          </div>
        </div>
      </div>
    </div>
  );
};