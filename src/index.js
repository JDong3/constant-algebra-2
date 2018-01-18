import reactDom from 'react-dom'
import react from 'react'

class Index extends React.Component() {
  render() {
    return (
      <div>hello</div>
    )
  }
}
console.log('yellow')
reactDom.render(<Index/>, document.getElementById('root'))

export default Index
