import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }
    increaseCounter = () => {
        this.setState({ counter: this.state.counter + 1 })


    }

    renderHandle=()=>{
        this.props.handleShow();
        this.props.whichBeastIsSelected(this.props.title);
        // console.log( this.props.whichBeastIsSelected(this.props.title));
        
    }





    render() {
        
        return (
            <>
                {/* <h2>{this.props.title}</h2>
                <img  src={this.props.imgUrl} alt='' title=''></img>
                <p>{this.props.description}</p>
                <p>favorite by {this.state.counter}</p> */}

                <Card onClick={this.renderHandle}  style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.imgUrl} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                        {this.props.description}
                        favoutie by {this.state.counter} people
                        </Card.Text>
                        <Button onClick={this.increaseCounter}variant="primary">vote a favorite</Button>
                    </Card.Body>
                </Card>
            </>
        )

    }
}

export default HornedBeasts;