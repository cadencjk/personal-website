import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import ReactPlayer from 'react-player'

export const Projects = () => {
  return (
    <div className="wrapper">
        <video
          loop
          autoplay="autoplay"
          muted
          alt="All the devices"
          src="videos/peerprep.mp4"
        />
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div class="container">
          <div class="all-items">
            <div class="item">
              <div class="left">
                <div class="img">
                    <img src="images/peerprep.jpg" style={{marginRight: '140px'}} />
                </div>
              </div>
              <div class="right">
                <h2 class="project-title">PeerPrep
                </h2>
                <h3 class="project-sub-title">Your collaborative coding platform.
                </h3>
                <p class="project-desc">PeerPrep connects
                    students, allowing them to participate in collaborative mock technical interviews.
                    PeerPrep offers over 2200 coding questions to choose from, and users can actively work together
                    in real-time using the collaborative coding IDE pad.
                </p>
                  <div class="buttons">
                      <a href="http://peerprep.online" class="primary-btn">Visit PeerPrep</a>
                      <a href="https://www.youtube.com/watch?v=uMWTDqz8u5Q&ab_channel=CadenCheong" class="primary-btn outline external-link">
                      <span>Watch Trailer</span>
                      </a>
                  </div>
              </div>
            </div>

            <div class="item">
              <div class="left">
                <div class="img">
                    <img src="images/charge&go.jpg" style={{marginRight: '-300px'}} />
                </div>
              </div>
              <div class="right">
                <h2 class="project-title">Charge & Go
                </h2>
                <h3 class="project-sub-title">Your charging companion app.
                </h3>
                <p class="project-desc">A mobile application aimed to improve the experience of charging an Electric Vehicle.
                It collects live public charger location data and feedback contributed by the community. Recommends you
                the closest available charger based on your location.
                </p>
                  <div class="buttons">
                      <a href="https://github.com/cadencjk/Charge-Go" class="primary-btn">Learn More</a>
                      <a href="https://www.youtube.com/watch?v=ruxiTm14vJI" class="primary-btn outline external-link">
                      <span>Watch Trailer</span>
                      </a>
                  </div>
              </div>
            </div>

            <div class="item">
              <div class="left">
                <div class="img">
                    <img src="images/teacherspet.jpg" style={{marginRight: '-300px'}} />
                </div>
              </div>
              <div class="right">
                <h2 class="project-title">Teacher's Pet
                </h2>
                <h3 class="project-sub-title">A desktop application for teachers.
                </h3>
                <p class="project-desc">Teacher’s Pet is a desktop application for designed to manage contacts of students and classes.
                It is optimised for use via a Command Line Interface.
                If you can type fast, Teacher’s Pet can get your contact and class management tasks done faster than traditional Graphical User Interface apps.
                </p>
                  <div class="buttons">
                      <a href="https://github.com/cadencjk/tp" class="primary-btn">Learn More</a>
                      <a href="https://www.youtube.com/watch?v=Z4yEM05bJnc" class="primary-btn outline external-link">
                      <span>Watch Trailer</span>
                      </a>
                  </div>
              </div>
            </div>

            <div class="item">
              <div class="left">
                <div class="img">
                    <img src="images/pollev.jpg" style={{marginRight: '-300px'}} />
                </div>
              </div>
              <div class="right">
                <h2 class="project-title">PollEV Notifier
                </h2>
                <h3 class="project-sub-title">Get notified for your quizzes.
                </h3>
                <p class="project-desc">Poll Everywhere (PollEV) is a web-based student response system (SRS) that works on any Internet enabled device.
                It is used by renowned universities worldwide, such as Massachusetts Institute of Technology, Standford University and National University
                 of Singapore. This Chrome extension alerts the students whenever their professors release an online quiz.
                </p>
                  <div class="buttons">
                      <a href="https://github.com/cadencjk/pollev-notifier" class="primary-btn">Learn More</a>
                      <a href="https://github.com/cadencjk/pollev-notifier/archive/refs/heads/main.zip" class="primary-btn outline external-link">
                      <span>Download</span>
                      </a>
                  </div>
              </div>
            </div>

            <div class="item">
              <div class="left">
                <div class="img">
                    <img src="images/generator.jpg" style={{marginRight: '-300px'}} />
                </div>
              </div>
              <div class="right">
                <h2 class="project-title">Document Generator
                </h2>
                <h3 class="project-sub-title">Generate documents with ease.
                </h3>
                <p class="project-desc">This application designed to automate the process of generating different reports from a single base document.
                It does so by enabling you to replace placeholders and filter sections from your document, speeding up the process of customizing your report for different clients.
                </p>
                  <div class="buttons">
                      <a href="https://github.com/cadencjk/document-generator" class="primary-btn">Learn More</a>
                      <a href="https://github.com/cadencjk/document-generator/releases/download/v1.1/DocumentGenerator_v1.1.zip" class="primary-btn outline external-link">
                      <span>Download</span>
                      </a>
                  </div>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </HelmetProvider>
    </div>
  );
};
