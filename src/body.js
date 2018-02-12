import React from 'react'
import {Row, Col} from 'react-flexbox-grid'
import S from './styles'

class Body extends React.Component {
  render() {
    return(
      <div>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}  style={S.headerStyleText}>
            Body
          </Col>
        </Row>
      </div>
    )
  }
}
export default Body
