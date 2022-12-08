import React from 'react';
import { Card, CardBody, CardTitle, Button, Media, Col, Row} from 'reactstrap';
import { MDBSwitch } from 'mdb-react-ui-kit';
//importing typewriter-effect
import Typewriter from "typewriter-effect";
// import './App.css';
  
class MainPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          mode : 0
        };
    
        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
        console.log("toggle")
        this.setState({
            mode: this.state.mode^1
        });
        console.log("mode ", this.state.mode)
    }
    
    render() {
        console.log("mode", this.state.mode)
        return (
          <div align="center" style={{ height: "100vh" }}>
            <Card
              color="dark"
              inverse
              style={{
                width: "100%",
                height: "100%",
                "border-radius": "0",
              }}
            >
              <br />
              <br />
              <br />
              <Media
                middle
                alt="Sample"
                src="/hangman2.png"
                width="300vh"
                className="mx-auto"
              />
              <CardBody>
                <CardTitle tag="h1" align="center">
                  <Typewriter
                    options={{
                      loop: true,
                      deleteSpeed: 120,
                      delay: 100,
                      pauseFor: 120,
                      autoStart: true,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("Foodman")
                        // .pauseFor(2500)
                        .deleteAll()
                        .start();
                    }}
                  />
                </CardTitle>
                {/* <CardSubtitle
                      className="mb-2 text-muted"
                      tag="h6"
                      >
                      Card subtitle
                      </CardSubtitle> */}
                {/* <CardText>
                      Some quick example text to build on the card title and make up the bulk of the card‘s content.
                      </CardText> */}
                <br />
                <br />
                <Button className="pt-3 pb-3 rounded-circle" color="light">
                  <a href={`/play?mode=${this.state.mode}`}><h4>Play</h4></a>
                </Button>
                <br />
                <br />
                <br />
                <br />
                <Row>
                  <Col align="right">Chill Mode</Col>
                  <Col className="col-sm-1">
                    <MDBSwitch
                      id="flexSwitchCheckDefault"
                      label=""
                      checked={this.state.mode}
                      onChange={this.toggle}
                    />
                  </Col>
                  <Col align="left">God Mode</Col>
                </Row>
              </CardBody>
            </Card>
          </div>
        );
      }
      
}

  
export default MainPage;