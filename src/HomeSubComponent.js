import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Accordion, Alert, Badge, Carousel, Col, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import './myStyles.css'
import wk1 from './Images/workout1.webp'
import wk2 from './Images/workout2.jfif'
import wk3 from './Images/workout3.jfif'
import wk4 from './Images/workout4.jpg'
import wk5 from './Images/workout5.jpg'
import wk6 from './Images/workout6.jpg'
import hl1 from './Images/hl1.jpg'
import hl2 from './Images/hl2.jpg'
import hl3 from './Images/hl3.jpg'
import {Clock} from "grommet"

const HomeSubComponent=()=>{
  
return(
<>

<div className='homePageMargine '>
<Row className=''>
  <Col  sm="12" md="6" className=" alert alert-primary">
    <Carousel>
    <Carousel.Item>
          <img
            className=" d-block w-100"
            src={wk1}
            style={{ height: "400px", objectFit: "cover" }}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="images w-100"
            src={wk2}
            style={{ height: "400px", objectFit: "cover" }}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={wk3}
            style={{ height: "400px", objectFit: "cover" }}
            alt="First slide"
          />
        </Carousel.Item>
    </Carousel>
  </Col>
  <Col sm="12" md="6" className="alert alert-secondary">
  <Carousel>
    <Carousel.Item>
          <img
            className="d-block w-100"
            src={wk4}
            style={{ height: "400px", objectFit: "cover" }}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={wk5}
            style={{ height: "400px", objectFit: "cover" }}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={wk6}
            style={{ height: "400px", objectFit: "cover" }}
            alt="First slide"
          />
        </Carousel.Item>
        </Carousel>
  </Col>
</Row>

<div className="row ">
<Carousel> 
    <Carousel.Item>
       <Clock className='clock' type="digital" center="center" run="forward" />   
          <img
            className=" clockPositioning d-block w-100"
            src={hl1}
            style={{ height: "400px", objectFit: "cover" }}
            alt="First slide"
          />
          
          <Carousel.Caption> 
            <h3 className='Quotes'>Once you learn to quit, it becomes a habit.</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Clock className='clock' type="digital" center="center" run="forward" /> 
          <img
            className="d-block w-100"
            src={hl2}
            style={{ height: "400px", objectFit: "cover" }}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className='Quotes'>A year from now you may wish you had started today.</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Clock className='clock' type="digital" center="center" run="forward" /> 
          <img
            className="d-block w-100"
            src={hl3}
            style={{ height: "400px", objectFit: "cover" }}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className='Quotes'>Don’t give up on your dreams, or your dreams will give up on you.</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
  
</div>
</div>


</>
);}

export default HomeSubComponent;