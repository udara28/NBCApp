import React from 'react'
import { render } from 'react-dom'

var player = document.getElementById('player');

class App extends React.Component {
	componentDidMount() {

	}

    constructor(props){
        super(props);
        initMain();
    }

	render() {
		return (
            <div className="parent">
                <button className="mdl-button" onClick={clickMe}>hello</button>
            </div>
		)
	}
}

render(<App />, document.getElementById('root'))


// custom functions
function initMain(){

    var recorder = document.getElementById('recorder');

    var handleSuccess = function(stream) {
        var player = document.getElementById('player');
        player.srcObject = stream;
      };

      navigator.mediaDevices.getUserMedia({ audio: true, video: true })
          .then(handleSuccess);

}

function clickMe(){
    console.log("clicking");
}
