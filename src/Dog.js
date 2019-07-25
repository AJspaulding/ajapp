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
            <h1>advice</h1>
            <h1>{this.state.fact}</h1>
          </div>

        )
    }
}



export default Dog