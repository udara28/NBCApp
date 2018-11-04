import React from 'react'
import { render } from 'react-dom'

var player = document.getElementById('player');

class App extends React.Component {
	componentDidMount() {

	}

	render() {
		// We query the database here
		var memories = ['Happy', 'Sad'];


		return (
			<div>
				{
					memories.map(function(name, index){
						return <div class="card">{name}</div>;
					})
				}
			</div>
		)
	}
}



render(<App />, document.getElementById('gallery'))