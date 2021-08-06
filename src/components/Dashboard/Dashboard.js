import React from 'react';
import {
  
  Layout,
  
} from 'antd';
 
import './Dashboard.scss';
 
import { connect } from 'react-redux';
 

 


class Dashboard extends React.Component {
  
  constructor(props) {
    super(props)
  }
  
   

  render() {
    return (
      <Layout>
        <h1>Hello Dashboard</h1>
        
      </Layout>
    );
  }
}

export default connect(null, )(Dashboard);
