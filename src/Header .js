import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
class Header extends React.Component {
    render() {
      return  <Breadcrumb >
       <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
       <Breadcrumb.Item href="/Search"> Search</Breadcrumb.Item>
       <Breadcrumb.Item href="/Results">Results</Breadcrumb.Item>
    </Breadcrumb>








    };
}
export default Header;