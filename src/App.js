import React from 'react'
import { render } from 'react-dom'

var player = document.getElementById('player');

class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			recording: false,
			speechText: '',
			videoURL: "https://firebasestorage.googleapis.com/v0/b/autochat-42b74.appspot.com/o/bigjoe.MOV?alt=media&token=29ce11e6-eb2c-4b0c-92c7-ff21a06a93ef"
		}

		this.startRecording = this.startRecording.bind(this)
		this.changeVideoURL = this.changeVideoURL.bind(this)

	}

	componentDidMount() {
		this.startRecording()

		var commands = {
			'play video': function () {
				console.log('play video')
				// document.querySelector('video').play();
			},
			'pause video': function () {
				console.log('pause video')
				// document.querySelector('video').pause();
			}
		};

		annyang.addCommands(commands);
		annyang.start();

		console.log('here')
	}

	startRecording() {

		let self = this;
		var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)()
		recognition.lang = 'en-US'
		recognition.interimResults = false
		recognition.maxAlternatives = 5
		recognition.continuous = true
		recognition.start()

		recognition.onresult = function (event) {

			console.log(event.results[0][0].transcript)

			let speechText = event.results[0][0].transcript.toString()

			if (speechText.toLowerCase().includes('big joe')) {
				let video1URL = "https://firebasestorage.googleapis.com/v0/b/autochat-42b74.appspot.com/o/bigjoe.MOV?alt=media&token=29ce11e6-eb2c-4b0c-92c7-ff21a06a93ef"
				self.changeVideoURL(video1URL)
			} else if (speechText.toLowerCase().includes('superman')) {
				let video2URL = 'https://firebasestorage.googleapis.com/v0/b/autochat-42b74.appspot.com/o/superman.mov?alt=media&token=10cf8585-8fc6-4b10-b686-b85e1b1fa377'
				self.changeVideoURL(video2URL)
			}

			// self.setState({ speechText })

			// console.log('You said: ', speechText)

		}
	}

	changeVideoURL(videoURL) {
		this.setState({ videoURL })
	}

	render() {

		let videoTag = <video className='video_container' width="320" height="240" src={this.state.videoURL} autoPlay={true}></video>

		return (
			<div className="camera">

				<button id="recordButton" onClick={this.startRecording}>
					<span className='logo_image'>
						<img className="logo_image" src='https://firebasestorage.googleapis.com/v0/b/autochat-42b74.appspot.com/o/Artboard1-8.png?alt=media&token=c136980e-5698-4c93-9ecd-8e3defa44a13' type='image/png' style={{ width: '350px' }} />
					</span>
				</button>

				{videoTag}

			</div>
		)
	}
}

render(<App />, document.getElementById('root'))