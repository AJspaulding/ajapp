import React from 'react'


class Home extends React.Component {
    constructor() {
      super();
      this.state ={
      fact:[] 
      };
        }
       
        // fetch request for chuck norris facts\\ 
  
        async componentDidMount() {
          const response = await fetch('https://api.chucknorris.io/jokes/random')
          const json = await response.json()
          console.log(json)
          this.setState({ fact: json.value }) // quote was store in value
        }
  
  
  
    render() {
      if (!this.state.fact) return <p>No answer</p> // respone if fetch failed 
    
    
      return (
        <div>
        <h1>Chuck Norris joke Facts</h1>
        <img src={ require('./images/chuck.jpg') } />
        <h2>{this.state.fact}</h2>   
      </div>
      )

      
      
      
    }
  }
  export default Home