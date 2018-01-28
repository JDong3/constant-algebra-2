import ReactDom from 'react-dom'
import React from 'react'
import Body from './body'
import Header from './header'

ReactDom.render(<Header/>, document.getElementById('header'))
ReactDom.render(<Body/>, document.getElementById('body'))
