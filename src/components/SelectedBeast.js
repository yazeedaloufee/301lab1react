import react from 'react';
import Modal from 'react-bootstrap/Modal'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class SelectedBeast extends react.Component{
  //   constructor(props){
  //     super(props)
      
  // this.state={
  //   show1:false
  // }}

  // this.setState({
  //   show1:this.props.show
  // })

  


  
render(){

    return ( 
      <>
      
      {console.log(this.props.whichBeast)}
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          

        <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={this.props.url} />
                  <Card.Body>
                      <Card.Title></Card.Title>
                      <Card.Text>
                      {this.props.description}
                      
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