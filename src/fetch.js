
fetch('https://dog.ceo/api/breeds/image/random')
  .then(Response.json())
  .then(data =>generateImage(data.message))

  function generateImage (data) {
    const html = 
    <img src='${data}' />;
}
  
// response.json is not a function
componentDidMount(){                                       
    fetch('https://dog.ceo/api/breeds/image/random')
.then(Response.json())
.then(data =>responseData => {
  this.setState({images: responseData.data.message});
})
 .catch(error =>{
   console.log('error fetching data')
 });
  }

return   card.innerHTML= html;