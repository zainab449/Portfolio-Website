import './Projects.css';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assests/img/project-img1.png";
import projImg2 from "../assests/img/project-img2.png";
import projImg3 from "../assests/img/project-img3.png";
import colorSharp2 from "../assests/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectList = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium culpa voluptates in eius consequatur perspiciatis beatae animi ad, quae placeat maxime deserunt tenetur dolorum harum? Ipsum, velit? Explicabo nemo recusandae placeat fuga culpa quibusdam, perferendis alias repellat aspernatur delectus! Assumenda?</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projectList.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad laboriosam sunt dolore mollitia ut natus nemo atque, exercitationem distinctio saepe eveniet rem molestias, sequi modi maiores corrupti earum consequuntur asperiores harum quas provident laudantium!.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam modi veritatis asperiores, nobis, natus inventore perspiciatis nam consequuntur sunt vitae exercitationem, iure deserunt veniam mollitia ab nemo! Atque, maiores officiis minus, tempora in tempore, praesentium aliquid reprehenderit nesciunt velit maxime fugiat odit aliquam debitis!!</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
}
