import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Header from "../components/header"
import Footer from "../components/footer"
import Timeline from "../components/timeline"
import MissionImg from "../gallery-images/ZKMJm6IJQB2kTjsOnHmYAw_thumb_36ce.jpg"
import ProblemImg from "../gallery-images/yUn2Cz+nSdGF5OkcREeMQA_thumb_36ff.jpg"
import SolutionImg from "../gallery-images/vSHWBX8iTjOVGTiaPAHy4Q_thumb_36a4.jpg"
import PartnersImg from "../gallery-images/4l5r2VD3SRS9AkQK55owWA_thumb_36fb.jpg"
import { Container, Row, Col } from "react-grid-system"
import Mobilenav from "../components/mobilenav"
import Media from "react-media"
import { Jumbotron, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const About = () => {
  const { paul, roxie, lawrance, board } = useStaticQuery(graphql`
    query {
      paul: file(relativePath: { eq: "paul.jpeg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      roxie: file(relativePath: { eq: "roxie.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      lawrance: file(relativePath: { eq: "lawrance.jpeg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      board: file(relativePath: { eq: "board.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <Media query="(max-width: 599px)" render={() => <Mobilenav />} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <Media query="(min-width: 599px)" render={() => <Header />} />
      <Jumbotron fluid style={{ backgroundColor: "white" }}>
        <Container>
          <center>
            <p>ABOUT</p>
            <h1>PLAY Marin</h1>
            <div
              style={{
                margin: "auto",
                backgroundImage: "linear-gradient(to right, #558EDE, #6514AF)",
                height: "10px",
                margin: "auto",
                height: "10px",
                marginBottom: "40px",
                marginTop: "40px",
              }}
            ></div>
          </center>
        </Container>
      </Jumbotron>
      <Jumbotron fluid style={{ backgroundColor: "white" }}>
        <Row>
          <Col  md={12} sm={12} lg={12} style={{ marginRight: "0px" }}>
            <div
              style={{
                backgroundImage: `url(${MissionImg})`,
                "-webkit-background-size": "cover",
                "-moz-background-size": "cover",
                "-o-background-size": "cover",
                backgroundRepeat: "no-repeat",
                objectFit: "cover",
                backgroundSize: "cover",
                width: "100%",
                height: "40rem",
                backgroundPosition: "center center",
                color: "white",
              }}
            >
              <div
                style={{
                  // margin: "auto",
                  paddingTop: "10rem ",
                  paddingBottom: "30rem",
                  paddingRight: "5rem",
                  paddingLeft: "5rem",
                  backgroundImage:
                    "linear-gradient(to right, rgba(85,142,222,0.2), rgb(101, 20, 175, 0.7))",
                }}
              >
                <div style={{ marginBottom: "10rem" }}>
                  <h1 style={{ textAlign: "center" }}>Our Mission</h1>
                  <p style={{ textAlign: "left" }}>
                    Play Marin intentionally provides opportunities for children
                    of diverse ethnic and socioeconomic backgrounds in Southern
                    Marin to learn and grow together through play. We recognize
                    the need for stronger diversity and inclusion in Marin
                    County, and we believe that bringing together the unique
                    expereinces of different cultures and socioeconomic
                    backgrounds amoung us serves to enhance our larger
                    community. Being able to understand and appreciate people
                    from all walks of life is vital to the advancement of our
                    society, and we see play as the vehicle to achieve this
                    goal. In over 300 kids annually through several team sports
                    and many other uplifting and enriching activities. Our work
                    teaches valuable skills, creates friendships, develops
                    people of Marin from all backgrounds, improving their
                    propects for a successful future and benefiting the overall
                    health of our Marin community. Come play with us.
                  </p>
                </div>

                <div></div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6} lg={6}                 style={{
                            backgroundColor: "#992168",
                            color: "white",
                            padding: "5rem",
                            paddingLeft: "3rem",
                          }}>
              <div

              >
                <h1>The Problem</h1>
                <p>
                  Marin City youth lack access to recreational opportunities,
                  but kids-at-large in Southern Marin lack exposure to diverse
                  peers. Racial tension in Southern Marin is prevalent and we
                  suspect it's due to kids first coming together when they
                  attend Tamalpais High School, the one high school in Southern
                  Marin.
                </p>
              </div>
</Col>
<Col sm={12} md={6} lg={6}   style={{
                  backgroundImage: `url(${ProblemImg})`,
                  backgroundRepeat: "no-repeat",
                  objectFit: "cover",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  color: "white",
                  paddingRight: "0px",
                  paddingLeft:"0px"
                }}>

                <div
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(85,142,222,0.2), rgb(101, 20, 175, 0.7))",
                    paddingBottom: "240px",
                    height: "26rem",
                  }}
                ></div>
          </Col>
        </Row>
        <Row>
        <Col sm={12} md={6} lg={6}   style={{
                        backgroundImage: `url(${SolutionImg})`,
                      backgroundRepeat: "no-repeat",
                      objectFit: "cover",
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      color: "white",
                      paddingRight: "0px",
                      paddingLeft:"0px"
                    }}>

                    <div
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, rgba(85,142,222,0.2), rgb(101, 20, 175, 0.7))",
                        paddingBottom: "240px",
                        height: "26rem",
                      }}
                    ></div>
              </Col>
        <Col sm={12} md={6} lg={6}                 style={{
                          backgroundColor: "#992168",
                          color: "white",
                          padding: "5rem",
                          paddingLeft: "3rem",
                        }}>

<div>
<p>
  By providing opportunities for children of diverse ethnic and
  socioeconomic backgrounds in Southern Marin to learn, play and
  grow together we attack the problem in 3 key ways:
</p>
<ol>
  <li>
    Delivering seasonal sports and activities in Marin City for
    3rd-8th graders.
  </li>
  <li>
    Implementing monthly Play Days focused around team-building
    for children and families.
  </li>
  <li>
    Recruiting youth of color to participate in sports and
    activities in Southern Marin County.
  </li>
</ol>

</div>
  </Col>


        </Row>
        <Container
          style={{
            margin: `0 auto`,
            // maxWidth: 1000,
            padding: `0 1rem`,
          }}
        >
          <h1 style={{ textAlign: "center", paddingTop: "40px" }}>Our Team</h1>
          <div
            style={{
              margin: "auto",
              backgroundImage: "linear-gradient(to right, #558EDE, #6514AF)",
              height: "10px",
              marginBottom: "40px",
              marginTop: "40px",
            }}
          ></div>
          <Row
            style={{
              margin: `0 auto`,
              paddingTop: `40px`,
              paddingBottom: `40px`,
            }}
          >
            <Col md={2} sm={12} xs={12}>
              <div>
                <Image
                  fluid={paul.sharp.fluid}
                  alt="paul"
                  style={{
                    borderRadius: "100%",
                    height: "7rem",
                    width: "7rem",
                  }}
                />
                <p>Play Marin Founder & CEO Paul Austin</p>
              </div>
            </Col>
            <Col md={10} sm={12} xs={12}>
              <div>
                <p>
    Play Marin Founder & CEO Paul Austin is a longtime Marin City resident who has been a youth
advocate for the majority of his professional life. After serving for several years as Director of
Recreation for Marin City Community Center, Tamalpais High graduate Mr. Austin, who studied
Early Childhood Education at Texas Southern University and holds a Bachelor’s in Psychology
from Dominican University in San Rafael, saw a need to create opportunities for Marin City
youth to engage in organized athletics and other extracurricular activities. He founded Play
Marin to meet that need, and to intentionally give kids of diverse ethnic and socioeconomic
backgrounds from the broader Marin community the opportunity to play, learn, and grow
together. Starting in 2012 with just one basketball team of nine players, Mr. Austin’s dedicated
stewardship of Play Marin brought steady and expansive growth. The organization currently
touches approximately 300 kids annually through multiple age group teams and activities.
Working full time in other professional roles while driving and managing this swift and
substantial growth in Play Marin, in 2018 Paul accepted the position of College Completion and
Career Advisor for Bridge the Gap College Prep. Here he creates college persistence and
graduation plans for low-income students, working with them from high school through college
graduation and beyond. He guides every aspect of the high school to college to graduation
experience for first-generation college students; including identification and application,
transitioning from high school, providing motivation and support for student personal health and
academic performance, and coaching on the transition from college to career. Additionally, Paul
is the Community Liaison for Luminate Capital Partners, a Lulu Lemon Ambassador, and board
member of Extra Food. Married to Miller Creek Middle School Principal, Tenisha Tate, and the
father of two, Paul Austin’s world is dedicated to the well-being of young people. He is a
long-standing advocate for Marin youth, serving as their coach, counselor, and cheerleader,
while constantly promoting the invaluable mission of bringing kids of diverse backgrounds
together through play.
                </p>
              </div>
            </Col>
          </Row>
          <h1 style={{ textAlign: "center" }}>Board Of Directors</h1>
          <div
            style={{
              backgroundImage: "linear-gradient(to right, #558EDE, #6514AF)",
              height: "10px",
              paddingRight: "100px",
              paddingLeft: "100px",

            }}
          ></div>
          <Row
            style={{
              margin: `0 auto`,
              padding: `0 1rem`,
              paddingTop: `80px`,
            }}
          >
            <Col md={2} sm={12} xs={12}>
              <div>
                <Image
                  fluid={board.sharp.fluid}
                  alt="board chair"
                  style={{ borderRadius: "50%", height: "7rem", width: "7rem" }}
                />
                <p>Board Chair Bruce & Kirsten Edwards</p>
              </div>
            </Col>
            <Col md={10}>
              <div>
                <p>
Board Chair Bruce Edwards lives in Mill Valley with his wife Kirsten, and sons Dillon, JP, and
Reed. With over 20 years of financial services experience, Bruce is a Family CFO for
approximately 25 families. In these endeavors Bruce assists his clients with tax-efficient
charitable giving through a combination of donor-advised funds and foundations. A devoted
family man, some of Bruce’s other passions include fly fishing throughout the world, surfing, and
playing music with friends and family. His dedication to wilderness conservation and charitable
youth development led Bruce to serve on the boards of the Henry’s Fork Foundation in Idaho,
and Mt Carmel CYO basketball in Mill Valley.
                </p>
              </div>
            </Col>
          </Row>
          <Row
            style={{
              margin: `0 auto`,
              padding: `0 1rem`,
              paddingTop: `40px`,
              paddingBottom: `40px`,
            }}
          >
            <Col md={2} sm={12} xs={12}>
              <Image
                fluid={lawrance.sharp.fluid}
                alt="Roxie"
                style={{ borderRadius: "50%", height: "7rem", width: "7rem" }}
              />
              <p>Lawrence P. Bancroft, Treasurer </p>
            </Col>
            <Col md={10} sm={12} xs={12}>
              <div>
                <p>
President and CEO of Bivium Capital, Lawrence leads a seasoned and dedicated team of
investment professionals with expertise across every asset class and type of investment. Prior
to founding Bivium in 2002, Lawrence was an initial member of Goldman Sachs IMD’s external
manager selection team, where he worked on developing all areas of its manager of managers
business; and evaluated minority-owned investment companies as part of the firm’s Urban
Investment Group for capital allocation. Previously the Board Chair for Big Brothers Big Sisters
of the North Bay, Lawrence currently sits on the governance and finance committees for the Bay
Area chapter of Big Brothers Big Sisters. He earned his B.S. from Cornell University’s School of
Industrial and Labor Relations, and his M.P.A. from Cornell University’s School of Public Affairs.
Lawrence lives in Tiburon with his wife and three kids.
                </p>
              </div>
            </Col>
          </Row>

          <Row
            style={{
              margin: `0 auto`,
              paddingTop: `40px`,
              paddingTop: `40px`,
              paddingBottom: `40px`,
            }}
          >
            <Col md={2} sm={12} xs={12}>
              <div>
                <Image
                  fluid={roxie.sharp.fluid}
                  alt="Roxie"
                  style={{ borderRadius: "50%", height: "7rem", width: "7rem" }}
                />
                <p>Roxie Baker, Secretary</p>
              </div>
            </Col>
            <Col md={10}>
              <div>
                <p>
  A former music industry executive with two decades in recording artist management, Roxie has
worked with young people since she was a teenager— first as a conventional horseback riding
instructor and later as a Certified Therapeutic Riding Instructor and program director. In this
capacity she worked directly with at-risk and special needs students ages 5-17, and served as
designer, developer, and director of several therapeutic and educational programs on both
coasts. The parent of an NCAA athlete, Roxie first learned about Play Marin when her daughter
was a volunteer swim instructor for their summer camp program. Roxie has a B.A. in
Psychology from SFSU and graduate studies in Health Education JFK University. Roxie lives in
Sausalito with her husband John, Managing Director of an international environmental nonprofit,
and daughter Ella, currently a Social Justice major at Occidental College.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Row>
          <Col sm={12} md={12} lg={12}>
            <div
              style={{
                backgroundImage: `url(${PartnersImg})`,
                position: "relative",
                padding: "100px",
                color: "white",
                width: "100vw",
                height: "30rem",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(118, 177, 135, 0.7)",
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "30rem",
                  paddingRight: "2rem",
                  paddingLeft: "2rem",
                  paddingTop: "3rem",
                  paddingBottom: "1rem",
                }}
              >
                <div
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    height: "24rem",
                  }}
                >
                  <h1 style={{ textAlign: "center" }}>Our Partners</h1>
                  <p style={{ textAlign: "center" }}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aliquam tincidunt mauris eu risus.
                  </p>
                  <div
                    style={{
                      height: "15rem",
                      paddingLeft: "4rem",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <div>
                      <p>County Bears AAU Basketball</p>
                      <p>Dave Fromer Soccer</p>
                      <p>Good Tidings Foundation</p>
                      <p>Jennifer Azzi, Azzi Acedemy Camps</p>
                      <p>Marin City Community District</p>
                      <p>Next Level Flag Football</p>
                    </div>
                    <div>
                      <p>ProofLab</p>
                      <p>St Mary Star Of the Sea</p>
                      <p>Southern Marin Lacrosse</p>
                      <p>Trips4Kids</p>
                      <p>Warriors Community Foundation</p>
                    </div>
                  </div>
                  <div>
                    <h5 style={{ textAlign: "center", height: "1rem" }}>
                      Become a Partner
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Container>
          <center>
            <Media query="(min-width: 717px)" render={() => <Timeline />} />
            <a href="#" style={{ color: "black" }}>
              Learn More
            </a>
          </center>
        </Container>
      </Jumbotron>
      <Footer />
    </>
  )
}

export default About
