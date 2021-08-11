import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import honrsData from './hornsData.json'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'

import HornedBeasts from './HornedBeasts';
class Main extends React.Component {
    constructor(props){
        super(props)
       
        this.state={
            filter:'0',
            newarray:[],
            arrayofelm: honrsData      }
    }

    filterControler=(event)=>{
        event.preventDefault();
        let whatever = honrsData.filter(function (n, i) {
          console.log(typeof(n.horns));
            return (n.horns === Number(event.target.value));
        })
        
        if (event.target.value === '0') { whatever= honrsData }
        this.setState({
            filter: event.target.value,
            arrayofelm: whatever
        })




    }

    render() {
        console.log(this.state.arrayofelm);
        return ( <>
        <Form.Select aria-label="Default select example" onChange={this.filterControler} name='selection'>
        <option value="0">use filter</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="100">hornes more than legs</option>
    </Form.Select>

        <Row  xs={1} sm={2} md={3} lg={4} className="g-4">{
          
            
            this.state.arrayofelm.map((item, index)=>{
                
                return(
                   
                    
                   
                    <HornedBeasts 
                    key={item.title}
                    title={item.title}
                    imgUrl={item.image_url}
                    description={item.description}
                    keyword={item.keyword}
                    horns={item.horns}
                    whichBeastIsSelected={this.props.whichBeastIsSelected}
                    handleShow={this.props.handleShow}


                    />
                    
                    
                )
            })

            // <>
            //     <HornedBeasts title='UniWhal' imageUrl='http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg' description='A unicorn and a narwhal nuzzling their horns' />

            //     <HornedBeasts title='Rhino Family' imageUrl="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" description='Mother (or father) rhino with two babies' />
            // </>
        }</Row> 
        </>)
         }
    }

export default Main;
// title='UniWhal' imageUrl ='http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg' description ='A unicorn and a narwhal nuzzling their horns'/