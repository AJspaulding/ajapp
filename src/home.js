import React from 'react'

class Home extends React.Component {
    constructor() {
      super();
      this.state ={
      quote:[] 
      };
        }
       
        
  
        async componentDidMount() {
          const response = await fetch('https://api.chucknorris.io/jokes/random')
          const json = await response.json()
          console.log(json)
          this.setState({ quote: json.results })
        }
  
  
  
    render() {
      return  <p>hi</p>
      
    }
  }
  export default Home