import reactDom from 'react-dom'
import react from 'react'

class Index extends React.Component() {
  render() {
    return (
      <div>hello</div>
    )
  }
}

reactDom.render(<Index/>, document.getElementById('root'))
