import Search from 'react'


class Dog extends React.Component {
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
        this.setState({ images: json.message })
      }

  render(){
  if (!this.state.images) return <p>No answer</p>
    
    
  return (
    <div>
    <img scr={this.state.images} alt="dog"/>
  </div>
 
    
  )
  }
    }
  


export default search