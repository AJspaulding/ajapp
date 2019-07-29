import React from 'react'


class Results extends React.Component {
  constructor() {
    super();
    this.state ={
    quote:[] 
    };
      }
      async componentDidMount() {
        const response = await fetch('https://api.kanye.rest')
        const json = await response.json()
        console.log(json)
        this.setState({ quote: json.quote })
      }

      

  render() {

    if (!this.state.quote) return <p>No answer</p>
    
    
    return (
      <div>
      <h1>kayne west quotes</h1>
      <img src={ require('./images/kanye.jpg') } />
      <h2>{this.state.quote}</h2>
      
    </div>
    )

    
    }
}
export default Results