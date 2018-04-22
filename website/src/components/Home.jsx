import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron,Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to the Home Page</h2>
          <p>My first react-bootstrap website. Hoping it will end soon happily</p>
          <Link to="/about">
          <Button bsStyle="primary">First Button</Button>
        </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col cs={12} sm={4} className="person-wrapper">
            
          </Col>
        </Row>
        
        
      </Grid>
    )
  }
};
