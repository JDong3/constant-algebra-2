import React from 'react'
import {Row, Col, Grid} from 'react-flexbox-grid'
import S from './styles'

class Header extends React.Component {a
  render() {
    return(
      <Row style={{...S.blue}}>
        <Col xs={12} sm={12} md={!2} lg={12}>
          this is the header in a col
        </Col>
      </Row>
    )
  }
}


export default Header
