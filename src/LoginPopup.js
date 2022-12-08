import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import LoginForm from './LoginForm';
import NavBar from './NavBar';

class LoginPopup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false
      };
  
      this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
      console.log("popup", this.state.modal)
    }

    render (){
        return (
            <div>
                <NavBar call={this.toggle}/>
                <Modal isOpen={this.state.modal} toggle={this.toggle}  >
                    <ModalHeader toggle={this.toggle}>Login</ModalHeader>
                    <ModalBody>
                        <LoginForm color="dark"/>
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Login</Button>{' '}
                    {/* <Button color="secondary" onClick={this.toggle}>Cancel</Button> */}
                    </ModalFooter>
                </Modal>
            </div>
          );
    }
}  

export default LoginPopup;