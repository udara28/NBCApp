import React from 'react'

class App extends React.Component {

	constructor(props) {
		super(props)
		let self = this
		this.state = {
			recording: false,
			videoURL: "https://firebasestorage.googleapis.com/v0/b/nbcappstorage.appspot.com/o/Weekend.MOV?alt=media&token=b4599a89-04c8-42fb-bb50-8530e93ca028",
			screenText: 'Weekend',
			abort: false
		}

		this.startRecording = this.startRecording.bind(this)
		this.changeVideoURL = this.changeVideoURL.bind(this)

	}

	clearCache() {
		console.log('clear cache')
		this.startRecording()
	}

	componentDidMount() {
		this.startRecording()
	}

	startRecording() {

		var self = this;
		var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)()


		if (this.state.abort) {
			this.setState({
				abort: false
			})
			recognition.abort()
		} else {
			this.setState({
				abort: true
			})
			recognition.lang = 'en-US'
			recognition.interimResults = false
			recognition.maxAlternatives = 5
			recognition.continuous = false
			recognition.start()
		}



		recognition.onresult = function (event) {
			let text = event.results[0][0].transcript;
			console.log('onResult is called:', text);

			if (text.toLowerCase().includes('aldo')) {
				var videoURL = "https://firebasestorage.googleapis.com/v0/b/nbcappstorage.appspot.com/o/aldo.mp4?alt=media&token=31c60d39-d2db-475c-9d90-3c29f86f0541"
				self.changeVideoURL(videoURL, 'Aldo')
			}

			if (text.toLowerCase().includes('bag')) {
				var videoURL = "https://firebasestorage.googleapis.com/v0/b/nbcappstorage.appspot.com/o/Beanbag.mp4?alt=media&token=dd17b6a7-13cb-4e0c-b6ea-c6a28013678f"
				self.changeVideoURL(videoURL, 'Bean Bag')
			}

			if (text.toLowerCase().includes('big joe')) {
				var videoURL = "https://firebasestorage.googleapis.com/v0/b/nbcappstorage.appspot.com/o/bigjoe.mp4?alt=media&token=85e1f2b8-f7c8-448c-b0c9-b86ccbcc444e"
				self.changeVideoURL(videoURL, 'BigJoe')
			}

			if (text.toLowerCase().includes('control')) {
				var videoURL = "https://firebasestorage.googleapis.com/v0/b/nbcappstorage.appspot.com/o/control.mp4?alt=media&token=4ed647fb-5b34-482d-80da-ae6978c1bbd3"
				self.changeVideoURL(videoURL, 'Control')
			}

			if (text.toLowerCase().includes('danny')) {
				var videoURL = "https://firebasestorage.googleapis.com/v0/b/nbcappstorage.appspot.com/o/danny.mp4?alt=media&token=71f434d5-0f53-47b8-b1a8-2fe47136e197"
				self.changeVideoURL(videoURL, 'Danny')
			}

			if (text.toLowerCase().includes('dark')) {
				var videoURL = "https://firebasestorage.googleapis.com/v0/b/nbcappstorage.appspot.com/o/dark.mp4?alt=media&token=d1431353-a135-4fef-b0f7-67be9b09668e"
				self.changeVideoURL(videoURL, 'Dark')
			}

			if (text.toLowerCase().includes('donut')) {
				var videoURL = "https://firebasestorage.googleapis.com/v0/b/nbcappstorage.appspot.com/o/Donuts.mp4?alt=media&token=b3708f24-5d8c-4ea6-8a2c-b3bbe98b7543"
				self.changeVideoURL(videoURL, 'Donut')
			}

			if (text.toLowerCase().includes('hope')) {
				var videoURL = "https://firebasestorage.googleapis.com/v0/b/nbcappstorage.appspot.com/o/hope.mp4?alt=media&token=2ad1bcda-c324-4729-b8c7-48b0cfcf540c"
				self.changeVideoURL(videoURL, 'Hope')
			}

			if (text.toLowerCase().includes('huddle')) {
				var videoURL = "https://firebasestorage.googleapis.com/v0/b/nbcappstorage.appspot.com/o/huddle.mp4?alt=media&token=5ef79b69-1a91-43ef-979c-7b1e053d655f"
				self.changeVideoURL(videoURL, 'Huddle')
			}

			if (text.toLowerCase().includes('internet')) {
				var videoURL = "https://firebasestorage.googleapis.com/v0/b/nbcappstorage.appspot.com/o/internet.mp4?alt=media&token=46fdb36c-d2b9-4c2c-b619-10c65d21ee53"
				self.changeVideoURL(videoURL, 'Internet')
			}

			if (text.toLowerCase().includes('red bull')) {
				var videoURL = "https://firebasestorage.googleapis.com/v0/b/nbcappstorage.appspot.com/o/red%20bull.mp4?alt=media&token=d447d3f5-d380-4a08-8a02-6f83ec9acf70"
				self.changeVideoURL(videoURL, 'Red Bull')
			}

			if (text.toLowerCase().includes('ruben')) {
				var videoURL = "https://firebasestorage.googleapis.com/v0/b/nbcappstorage.appspot.com/o/ruben.mp4?alt=media&token=cbb8bf37-7634-4166-862e-4d7634fea2eb"
				self.changeVideoURL(videoURL, 'Ruben')
			}

			if (text.toLowerCase().includes('superman')) {
				var videoURL = "https://firebasestorage.googleapis.com/v0/b/nbcappstorage.appspot.com/o/superman.mp4?alt=media&token=ddf244dc-103b-4ad0-9748-06036092c718"
				self.changeVideoURL(videoURL, 'Superman')
			}

			if (text.toLowerCase().includes('telemundo')) {
				var videoURL = "https://firebasestorage.googleapis.com/v0/b/nbcappstorage.appspot.com/o/telemundo.mp4?alt=media&token=209a3abb-83c7-491b-8579-f95fa96ce1ab"
				self.changeVideoURL(videoURL, 'Telemundo')
			}

			if (text.toLowerCase().includes('weekend')) {
				var videoURL = "https://firebasestorage.googleapis.com/v0/b/nbcappstorage.appspot.com/o/Weekend.MOV?alt=media&token=b4599a89-04c8-42fb-bb50-8530e93ca028"
				self.changeVideoURL(videoURL, 'Weekend')
			}
		}

	}

	changeVideoURL(videoURL, screenText) {
		console.log('changeVideoURL')
		this.setState(
			{ videoURL, screenText },
			this.startRecording()
		)
	}

	render() {

		let videoTag = <video
			className='video_container'
			width="320" height="240"
			src={this.state.videoURL}
			autoPlay={true}
			muted={true}
			loop={true}
		></video>

		return (
			<div className="camera">
				<h1 className="screenText">{this.state.screenText}</h1>
				<button id="recordButton" onClick={this.startRecording}>
					<span className='logo_image'>
						<img
							className="logo_image"
							src='https://firebasestorage.googleapis.com/v0/b/nbcapp-be1a3.appspot.com/o/Artboard1-8.png?alt=media&token=0731b2ec-9cf2-4db8-86fa-e89d2f5deb33'
							type='image/png'
							style={{ width: '150px' }}
						/>
					</span>
				</button>

				{videoTag}

			</div>
		)
	}
}

export default App