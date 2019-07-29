import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'   //importing breadcrumb from bootstrap
class Header extends React.Component {
   //breadcrumb work as my nav bar I don't know why its  not working properly but it works
  render() {
      return <div>
          
              <Breadcrumb >
               <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/Dog"> Advice </Breadcrumb.Item>
               <Breadcrumb.Item href="/Results">Kayne</Breadcrumb.Item>
               </Breadcrumb>

             </div>






    };
}
export default Header;