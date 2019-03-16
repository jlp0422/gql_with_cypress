import React from 'react'
import ReactDOM from 'react-dom'

const title = 'Hello'
const App = document.getElementById('app')

ReactDOM.render(<div>{title}</div>, App)

module.hot.accept()
