import React from 'react'
import {Row, Col, Grid} from 'react-flexbox-grid'
import S from './styles'

class App extends React.Component {
  render() {
    return(
      <div style={S.header} id='headerContainer'>
        <Row id='headerContent'>
          <Col xs={12} sm={12} md={12} lg={12}  style={S.leftBuffer}>
            <span>Header|</span>
            <span>button1</span>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div style={S.lightDiv}/>
          </Col>
        </Row>
      </div>
    )
  }
}


export default App
