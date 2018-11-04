import React from 'react'
import { render } from 'react-dom'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


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
	}

	startRecording() {

		let self = this;
		var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
		recognition.lang = 'en-US';
		recognition.interimResults = false;
		recognition.maxAlternatives = 5;
		recognition.start()

		recognition.onresult = function (event) {

			let speechText = event.results[0][0].transcript.toString()

			if (speechText.toLowerCase().includes('big joe')) {
				let video1URL = "https://firebasestorage.googleapis.com/v0/b/autochat-42b74.appspot.com/o/bigjoe.MOV?alt=media&token=29ce11e6-eb2c-4b0c-92c7-ff21a06a93ef"
				self.changeVideoURL(video1URL)
			} else if (speechText.toLowerCase().includes('superman')) {
				let video2URL = 'https://firebasestorage.googleapis.com/v0/b/autochat-42b74.appspot.com/o/superman.mov?alt=media&token=10cf8585-8fc6-4b10-b686-b85e1b1fa377'
				self.changeVideoURL(video2URL)
			}

			self.setState({ speechText })

			console.log('You said: ', speechText)

		}
	}

	changeVideoURL(videoURL) {
		this.setState({ videoURL })
	}

	render() {

		let videoTag = <video width="320" height="240" src={this.state.videoURL} autoPlay={true}></video>

		return (
            <div style={{color: '#8e8e8e'}}>
            <AppBar position="static">
                <Toolbar>
            <Typography variant="h6" color="inherit" style={{marginLeft:"50%"}} >
            ReLIVE
          </Typography>
                </Toolbar>
            </AppBar>
            <Card style={{maxWidth:'350px',marginLeft:'30%', marginTop:'5em', align:'center'}}>
                <CardContent className="camera">
                    <h1>{this.state.speechText}</h1>

                    {videoTag}

                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary" onClick={this.startRecording} style={{marginLeft:'30%'}}>
                      Record new text
                    </Button>

                </CardActions>
            </Card>
            </div>
		)
	}
}

render(<App />, document.getElementById('root'))
