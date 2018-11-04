import React from 'react'
import { render } from 'react-dom'

var player = document.getElementById('player');

class App extends React.Component {
	componentDidMount() {

	}

	render() {
		return (
			<h1>HI</h1>
		)
	}
}

render(<App />, document.getElementById('root'))