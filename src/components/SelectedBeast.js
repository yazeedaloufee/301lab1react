import react from 'react';
import Modal from 'react-bootstrap/Modal'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class SelectedBeast extends react.Component{
render(){

    return ( 
      <>
      <Button variant="primary" onClick={this.props.handleShow}>
        Launch demo modal
      </Button>

      <Modal show={Boolean(this.props.show)} onHide={this.props.handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={this.props.whichBeast.imgUrl} />
                  <Card.Body>
                      <Card.Title>{this.props.whichBeast.title}</Card.Title>
                      <Card.Text>
                      {this.props.whichBeast.description}
                      
                      </Card.Text>
                      
                  </Card.Body>
              </Card>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

}


  
  
  

export default SelectedBeast;