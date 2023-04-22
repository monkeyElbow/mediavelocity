// import Gallery from "react-photo-gallery";
import { Container, Row, Col, Image } from "react-bootstrap";
// import CompactLogo from "../../gallery/CompactLogo";
import ResponsiveEmbed from "react-responsive-embed";
import { useState } from "react";
// import { useSpring, a } from "@react-spring/core";

// import { PhotosCompactA } from "../../../gallery/PhotosCompact";
import CompactFindLogo from "./components/CompactFindLogo";
import CompactFosterLogo from "./components/CompactFosterLogo";
import CompactHighlandsLogo from "./components/CompactHighlandsLogo";
import CompactHillcrestLogo from "./components/CompactHillcrestLogo";
import Compact75Logo from "./components/Compact75Logo";
import CompactCompaCareLogo from "./components/CompactCompaCareLogo";
// import PersonSizeRef from "../../../components/PersonSizeRef";
import DisplayFrameScreen from "../../../components/DisplayFrameScreen";

export default function Compact() {
  document.title = "Mediavelocity - COMPACT FAMILY Design"

  const [logoColor, setLogoColor] = useState('#2D81C4')

  const colors = [
    {name:"Compact", color:"#2D81C4", rgb:["r20", "g131", "b213"]},
    {name:"Hillcrest", color:"#00B473", rgb:["g180", "b115"]},
    {name:"Foster Care", color:"#F26322", rgb:["r236", "g32", "b121"]},
    {name:"CompaCare", color:"#C80000", rgb:["r200"]},
    {name:"Highlands", color:"#EC2079", rgb:["r236", "g32", "b121"]},
    {name:"Safecare", color:"#684e9d", rgb:["r104", "g78", "b157"]},
    {name:"Find", color:"#FBAE17", rgb:["r251", "g174", "b23"]}
  ]

  // const colorSwap = useSpring(() => ({
  //   color:'#fff'
  // }))

  return (
    <>
      <Container fluid
      className="d-flex align-items-center p-0"
  style={{minHeight:"60vh"}}
      >
        <Row className="w-100 d-flex align-content-center">
          <Col className="d-flex flex-column align-items-center justify-content-center text-center p-5">

            <h2 className="fs-6 mb-4 fw-normal lh-sm">
              Helping Vulnerable Children And Families
            </h2>
            <h1 className="lh-small">COMP<strong>ACT</strong> Family Services</h1>

              <p className="small uc text-secondary ls-3 mt-4">
              Brand identity | Photography | Web Design | programming |
              collateral
              </p>
          </Col>
          <Col lg={4} md={12} className="d-flex align-content-center justify-content-center px-5">
            <CompactLogo color1={logoColor} />
            {/* <div className="p-m-5 p-sm-0"
            style={{ width: "300px" }}
            >
            </div> */}
          </Col>
        </Row>
      </Container>

      <Container fluid className="bg-light mt-3">
        <Row 
        className="row-cols-2 row-cols-lg-4"
        >
          {colors.map(({name, color, rgb}) => <Col
          // md={2}
          key={name} 
          className="d-flex flex-column justify-content-end align-items-center p-4 text-white pt-5"
          style={{backgroundColor:`${color}`, minHeight:"60px"}}
          onMouseOver={() => setLogoColor(color)}
          >
             <p className="lh-sm">
              {rgb[0]}
             </p>
             <p className="lh-sm">
              {rgb[1]}
             </p>
             <p className="lh-sm">
              {rgb[3]}
             </p>
            <p className="uc fs-6 fw-bold">
          {name}
            </p>
          </Col>)}
        </Row>
      </Container>

      <Container fluid className="bg-light py-5">
        <Row>
          <Col md={6} className="d-flex justify-content-center p-5">
            <h3 className="ls-3 fst-italic fw-bolder serif me-3 fs-6">the client</h3> 
            <hr className="dropdown-divider w-25 mt-2 ms-1" />
          </Col>
          <Col className="p-5">
            <h5 className="uc ls-3 mb-4">Helping hurting families and children</h5> 
            <p>
              Compact operates licensed, professional Christian family services and is a nationally accredited child welfare and family services
              agency through the New York-based Council on Accreditation.
              Annually more than 670,000 children pass through the foster care in America. A daily average of 435,000 are in the foster care system. Children are growing up without healthy homes and family.
              Compact needed to cut through the clutter and develop a clear message so it could help more children and families.
            </p>
          </Col>
        </Row>
      </Container>
     

     {/* LOGOS */}
     {/* --------------------------------- */}
<Container fluid>
  <Row className="row-cols-2 row-cols-lg-4">
    <Col
    className="p-5" 
    // style={{backgroundColor:"#2D81C4"}}
    >
      <Compact75Logo color="#2D81C4" />
    </Col>
    <Col
    className="p-5" 
    // style={{backgroundColor:""}}
    >
      <CompactHillcrestLogo color="#00B473"/>
    </Col>
    <Col
    className="p-5" style={{backgroundColor:""}}>
      <CompactHighlandsLogo color="#EC2079" />
    </Col>
    <Col
    className="p-5" style={{backgroundColor:""}}>
    <CompactFosterLogo color="#F26322" />
    </Col>
    <Col
    className="p-5" style={{backgroundColor:""}}>
      <CompactCompaCareLogo color="#C80000"/>
    </Col>
    <Col
    className="p-5" style={{backgroundColor:""}}>
    <CompactFindLogo color="#FBAE17" />
    </Col>
  </Row>
</Container>


      <Container fluid className="p-5">
        <Row>
          <Col md={6} className="d-flex justify-content-center p-5">
            <h3 className="ls-3 fst-italic fw-bolder serif me-3 fs-6">the challenge</h3> 
            <hr className="dropdown-divider w-25 mt-2 ms-1" />
          </Col>
          <Col className="p-5">
            <h5 className="uc ls-3 mb-4">Complicated. Missed oppurtunity.</h5> 
            <p>
            To align the various programs and ministries Compact brings to help hurting families we built the brand identity around the merging of two guiding words, compassion and action. We 
developed a bright color pallet to segment and cleanly identify the various services under the umbrella brand.
            </p>
          </Col>
        </Row>
      </Container>
     
      <Container fluid className="bg-light p-5">
        <Row>
          <Col md={6} className="d-flex justify-content-center p-5">
            <h3 className="ls-3 fst-italic fw-bolder serif me-3 fs-6">the solution </h3> 
            <hr className="dropdown-divider w-25 mt-2 ms-1" />
          </Col>
          <Col className="p-5">
            <h5 className="uc ls-3 mb-4">Focus on lives</h5> 
            <p>
            By focusing on the mission of Compact we were able to develop a clear visual identity. The merging of the words Compassion and Action became the heartbeat. Photography captured the unique personality of children and strikingly brought the reason why we should care...home. Ultimately, our approach to a clean, strong message brought credibility and advanced the mission of Compact to better serve families in Missouri and Arkansas.
            </p>
          </Col>
        </Row>
      </Container>


      <Container fluid className="py-5">
      <h3 className="uc ls-3 fs-3">Large format graphics</h3>
              <p>Exhibit design and collateral</p>
        <Row>
          
          <Col>
            <Image
              fluid
              style={{filter:"saturate(0)contrast(1.05)"}}
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0b6bc336680101.5725462d21597.jpg"
            />
          </Col>
          <Col
          className="position-relative"
          >

            <Image
            style={{
              transform:"perspective(800px) rotate3d(0, 1, 0, -35deg)", zIndex:"1"
            }}
            fluid
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f7e2bf36680101.5725462d22bb2.png"
            />

          </Col>
        </Row>
      </Container>

      <Container fluid className="py-5 mt-5 px-0">
          <h4 className="uc ls-3 fs-3 ms-3">Web Development</h4>
        <Row>
          <Col lg={6}
            className="d-flex flex-column align-items-center text-center justify-content-center p-5"
          >
           

              <p>User training login and course tracking</p>
              <p>Dynamic site content such as jobs, news and stats.</p>
              <p>Custom Admin Pages</p>
         
          </Col>

          <Col className="d-flex justify-content-center">
          {/* MONITOR STACK */}
<div className="position-relative" style={{width:"450px"}}>


          <DisplayFrameScreen />

            <Image
              className="border position-absolute"
              style={{zIndex:"-1", 
              width:"340px", 
              top:"70px", 
              left:"55px",
            }}
              fluid
              src="https://pro2-bar-s3-cdn-cf4.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/54a6cc25-b614-4160-aad1-5996b958e9a9_rw_1200.jpg?h=59c99abb998b47b315fe3df554a80431"
            />
</div>

          </Col>
        </Row>

        <Row>
          <Col><Image fluid src="https://pro2-bar-s3-cdn-cf3.myportfolio.com/9c0c32ffbfb6bec1105e5a0038d455f6/4086740d-6aa8-4fed-9277-54d96550f879_rw_600.jpg?h=9d5b802a9a77e262d7ef16385a0b9877" /></Col>
          <Col className="d-flex flex-column align-items-center text-center justify-content-center p-5">
          <p>Mobile friendly website built in React JS using Firebase authentication and firestore for user data.</p>
          <p>Dynamic site content such as jobs, news and stats.</p>
          </Col>
        </Row>
      </Container>

      <Container
        fluid
        className="py-5 px-0 my-5"
      >
              <h3 className="uc ls-3 fs-3 ms-3">Video Production</h3>
              <p className="ms-3">Shooting, editing, motion graphics</p>

            <ResponsiveEmbed
              id="CompactVideoExample"
              src="https://www.youtube.com/embed/K7X6xwBmEDY"
              allowFullScreen
            />

      </Container>

      <Container fluid className="my-5 px-0">
              <h3 className="uc ls-3 fs-3 ms-3">Print design</h3>
              <p className="ms-3">
                including magazines, books, training manuals, brochures and mailers.
              </p>
        <Row>

          <Col md={6} className="">
            <Image
              fluid
              // style={{height:"300px", width:"399px"}}
              // className="h-auto d-inline-block"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7553b836680101.60dc6782eb4ae.jpg"
            />
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <Image
              // style={{minHeight:"300px", width:"418px"}}
              fluid
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b65b2d36680101.60dc6b23e1770.jpg"
            />
          </Col>
        </Row>

      </Container>


      <Container fluid
        className="my-5 pt-5"        
      >
          <h3 className="uc ls-3">Photography</h3>
          <p className="">
            COMP<strong>ACT</strong> child representatives.
          </p>
        
<Row className="row-cols-2 row-cols-lg-3">
{kids.map(({url}) => 
<Col className="p-0 d-flex justify-content-center">
<Image
style={{size:"cover"}}
className="h-75"
fluid src={url} alt="COMPACT Child Rep Photo" />
</Col>
)}
</Row>


        {/* <Gallery photos={PhotosCompactA} /> */}
      </Container>
    </>
  );
};


const kids = [
  {url:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/d90a9f36680101.60dc70bf998b5.jpg"},
  {url:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/aca02436680101.60dc71509b2ca.jpg"},
  {url:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/9ed50a36680101.60dc71509bd29.jpg"},
  {url:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/ec2b2036680101.60dc71509a3f4.jpg"},
  {url:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/29dcb436680101.60dc71088400a.jpg"},
  {url:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/01401736680101.60dc7099227c2.jpg"},
]

function CompactLogo({color1}) {
  return (
    <svg viewBox="0 0 800 476">

<g fill={color1}>

  <path d="M389.7 102.4a131.2 131.2 0 0 0-117.2 72.3h30.6a104.7 104.7 0 0 1 173.3 0h30.5a131.2 131.2 0 0 0-117.2-72.3ZM389.7 373a139.4 139.4 0 0 1-126-80h-91.1l3.5 5.8 67 3.7a162.1 162.1 0 0 0 293.3 0l67-3.7 3.5-5.7h-91a139.4 139.4 0 0 1-126.2 79.8Z" />
  <path d="M389.7 94.1a139.4 139.4 0 0 1 126.4 80.6H607l-3.6-5.8-66.5-3.7a162.1 162.1 0 0 0-294.1 0l-66.6 3.7-3.5 5.8h90.7A139.4 139.4 0 0 1 389.7 94ZM389.7 364.6a131.2 131.2 0 0 0 116.9-71.5h-30.7a104.7 104.7 0 0 1-172.3 0h-30.7a131.3 131.3 0 0 0 116.8 71.5ZM503.5 262.4h-39.1l-5.8 14.3h-26.2l39.2-87.5h25l39.1 87.5h-26.5ZM484 213.7l-11.3 27.9h22.4ZM612.4 265.4a47.9 47.9 0 0 1-35.1 13.6c-34.4 0-47.8-21.6-47.9-45.4a45 45 0 0 1 47.9-46.4c12.6 0 24 4.4 33.8 14l-15.2 15a25.7 25.7 0 0 0-18.6-7.6c-16.9 0-23.5 13.8-23.4 25.2S560 258 577.3 258a30.3 30.3 0 0 0 20.6-8.9ZM639.2 209.6h-25.5v-20.4h75.8v20.4h-25.7v67.1h-24.6Z" />
</g>
  <path d="M121.3 278c-30.8 0-45.5-21.3-45.6-44.5s14.9-45.6 45.6-45.6a45.3 45.3 0 0 1 32 13l-7.5 7a34.7 34.7 0 0 0-24.4-9.7c-23.5 0-35 17-34.8 35.2.3 17.7 11.1 34.3 34.8 34.3a35.7 35.7 0 0 0 24.8-10.1l7.7 7.5a45.7 45.7 0 0 1-32.6 13ZM306 249.2h-2.2l-31.7-44.5v72h-10.8v-87.5h13l30.8 45 30.5-45h13v87.5h-10.8V205ZM378.8 276.7H368v-87.5h39.8c40.2 0 40.2 59.2 0 59.3h-29Zm29-77.3h-29v39h29c25.7 0 25.7-39 0-39ZM247.3 233.2c-.1 22.9-14.3 45.3-44.3 45.3s-44.5-22.3-44.5-45.3c0-25.3 17-45.5 44.6-45.5 29.6.2 44.3 22.4 44.2 45.5Zm-44.2-35.5c-22.3 0-33.8 16.4-33.8 35.5 0 17.8 10.8 35 33.8 35s33.3-17.7 33.3-35c.2-17.7-10.4-35.2-33.3-35.5Z" fill="#7d7d7d"/>
  <path d="M700.4 185.9a4.1 4.1 0 0 1 2 .5 3.7 3.7 0 0 1 1.5 1.5 4.1 4.1 0 0 1 .5 2 4 4 0 0 1-.5 2 3.7 3.7 0 0 1-1.5 1.5 4 4 0 0 1-4 0 3.9 3.9 0 0 1-1.5-1.5 4 4 0 0 1 0-4 3.7 3.7 0 0 1 1.5-1.5 4.1 4.1 0 0 1 2-.5Zm0 .6a3.5 3.5 0 0 0-1.7.5 3.1 3.1 0 0 0-1.3 1.2 3.3 3.3 0 0 0 0 3.4 3.1 3.1 0 0 0 1.3 1.2 3.4 3.4 0 0 0 3.4 0 3 3 0 0 0 1.2-1.2 3.3 3.3 0 0 0 .5-1.7 3.4 3.4 0 0 0-.5-1.7 3.1 3.1 0 0 0-1.3-1.2 3.5 3.5 0 0 0-1.6-.5Zm-1.8 5.7v-4.4h1.5a3.7 3.7 0 0 1 1.1.1 1.1 1.1 0 0 1 .8 1.1 1.1 1.1 0 0 1-.3.8 1.3 1.3 0 0 1-1 .4 1.1 1.1 0 0 1 .4.3 5.1 5.1 0 0 1 .7.8l.5.9h-.8l-.4-.7a3.2 3.2 0 0 0-.8-1 .9.9 0 0 0-.5-.2h-.4v1.9Zm.7-2.5h.9a1.4 1.4 0 0 0 .8-.2.6.6 0 0 0 .2-.5.6.6 0 0 0-.1-.3.6.6 0 0 0-.3-.2 2.1 2.1 0 0 0-.7-.1h-.8Z"/>
</svg>
  )
}