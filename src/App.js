
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
      show: 'false'
    }
    this.whichBeast = {}

   
  }
 whichBeastIsSelected = (title) => {
      this.whichbeast = Data.find(beast =>beast.title === title 
      //   {

      //   if (beast.title === title) {
      //     console.log(beast);
      //     return beast;
      //   }
      // }
      )
      // console.log("new log",this.whichbeast);
    }

    handleClose = () => {
      this.setState({
        show: 'false'
      })
      console.log(this.state.show);
    }

    handleShow = () => {
      this.setState({
        show: 'true'
      })
      console.log(this.state.show);
    }


    render(){
      return (
        <>
          <Header />
          <Main whichBeastIsSelected={this.whichBeastIsSelected} handleShow={this.handleShow} />
          <SelectedBeast show={this.state.show} handleShow={this.handleShow} handleClose={this.handleClose} whichBeast={this.whichBeast} />
          <Footer />

        </>)
    }

  }

  export default App;
