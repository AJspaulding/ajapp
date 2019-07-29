import React from 'react'


class Dog extends React.Component {
    constructor() {
        super();
        this.state = {
            fact:[]
        };
    }

    //fetch for random advice
    async componentDidMount() {
        const response = await fetch("https://api.adviceslip.com/advice")
        const json = await response.json()
        console.log(json)
        this.setState({ fact: json.slip.advice })   // data located  in slip.advice
    }

    render() {
        if (!this.state.fact) return <p>No answer</p>
         

        return (
            <div>
            <h1> Free Advice</h1>
            <img src={ require('./images/advice.jpg') } />
            <h2>{this.state.fact}</h2>
            
          </div>

        )
    }
}



export default Dog