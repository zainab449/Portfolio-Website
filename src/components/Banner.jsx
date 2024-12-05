import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assests/img/header-img.svg"; 
import { ArrowRightCircle } from 'react-bootstrap-icons';
import './Banner.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopIndex, setLoopIndex] = useState(0);
  const [isDeletingText, setIsDeletingText] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [typingSpeed, setTypingSpeed] = useState(300 - Math.random() * 100);
  const [textIndex, setTextIndex] = useState(1);
  const textArray = ["Web Developer", "Web Designer"];
  const typingPeriod = 3000;

  useEffect(() => {
    const textTicker = setInterval(() => {
      updateText();
    }, typingSpeed);

    return () => { clearInterval(textTicker) };
  }, [displayedText]);

  const updateText = () => {
    let currentIndex = loopIndex % textArray.length;
    let fullText = textArray[currentIndex];
    let updatedText = isDeletingText ? fullText.substring(0, displayedText.length - 1) : fullText.substring(0, displayedText.length + 1);

    setDisplayedText(updatedText);

    if (isDeletingText) {
      setTypingSpeed(prevSpeed => prevSpeed / 2);
    }

    if (!isDeletingText && updatedText === fullText) {
      setIsDeletingText(true);
      setTextIndex(prevIndex => prevIndex - 1);
      setTypingSpeed(typingPeriod);
    } else if (isDeletingText && updatedText === '') {
      setIsDeletingText(false);
      setLoopIndex(loopIndex + 1);
      setTextIndex(1);
      setTypingSpeed(500);
    } else {
      setTextIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome!</span>
                  <h1>{`Hi! I'm Zainab`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "" ]'><span className="wrap">{displayedText}</span></span></h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, fuga dicta? Ut, aut libero beatae error vitae, provident quae impedit magni itaque, sapiente cupiditate quos assumenda modi sunt pariatur illo!</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={35} /></button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
