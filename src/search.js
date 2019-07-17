import React from 'react'


class Search extends React.Component {
  constructor() {
    super();
    this.state ={
    images:[]
    };
      }
      async componentDidMount() {
        const response = await fetch('https://dog.ceo/api/breeds/image/random')
        const json = await response.json()
        console.log(json)
        this.setState({ images: json.results })
      }

  render()  { return <img src={this.state.images} alt="the"/>;
   
 
    
  
}    
    }
  


export default Search