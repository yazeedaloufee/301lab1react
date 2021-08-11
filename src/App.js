
import React from "react"
import Main from "./components/main"
import Header from './components/header'
import Footer from './components/footer'
import SelectedBeast from './components/SelectedBeast'
import Data from './components/hornsData.json'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      title : {},
      url:"",
      description:''
    }
    // this.whichBeast = {}

   
  }
 whichBeastIsSelected =  (title,url,description) => {
   this.setState({
     title :title,
     url:url,
     description:description


      //   {

      //   if (beast.title === title) {
      //     console.log(beast);
      //     return beast;
      //   }
      // }
   
      
      } )
      console.log("new log",this.state.whichbeast);
    }

    handleClose = () => {
       this.setState({
        show: false
      })
      console.log(this.state.show);
    }

    handleShow = () => {
       this.setState({
        show: true
      })
      console.log(this.state.show);
    }


    render(){
      return (
        <>
          <Header />
          <Main whichBeastIsSelected={this.whichBeastIsSelected} handleShow={this.handleShow} />
          <SelectedBeast show={this.state.show} handleShow={this.handleShow} handleClose={this.handleClose} title={this.state.title} url={this.state.url} description={this.state.description}/>
          <Footer />

        </>)
    }

  }

  export default App;
