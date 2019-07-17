import React from 'react'
import { Card, Button } from 'react-bootstrap'

class Results extends React.Component {
  constructor() {
    super();
    this.state ={
    quote:[] ,
    trump:[]
    };
      }
      async componentDidMount() {
        const response = await fetch('https://api.kanye.rest')
        const json = await response.json()
        console.log(json)
        this.setState({ quote: json.results })
      }

      

  render() {
    return  <p>hi</p>
    
  }
}
export default Results