import React from 'react';

const info = ["I'm Albert!",
			"I'm a Freshman at NYU majoring in Math and Computer Science.",
			"I'm from Pittsburgh, Pennsylvania.",
			"I went to Fox Chapel Area High School.",
			(<span>My Github is&nbsp;<a href = "https://github.com/A1Liu">https://github.com/A1Liu</a>.</span>),
			(<span>My Instagram is&nbsp;<a href = "https://www.instagram.com/a1_liu/">@a1_liu</a>.</span>),
			// (<span>I'm <i>not</i>&nbsp;<a href = "http://albert.nyu.edu/albert_index.html">NYU Albert</a>.</span>),
			"I was top of my class in 3nd grade.",
			];

class AboutInfo extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<p className = "about-info">
				{info[this.props.elem]}
			</p>
		);
	}
}

class About extends React.Component {

	constructor(props) {
		super(props);
		this.state = {counter: 0};
		this.incr_count = this.incr_count.bind(this);
	}



	incr_count() {
		var i = Math.floor(Math.random() * info.length);
		this.setState((state) =>({ counter: ((i == state.counter) ? (i+1) % info.length: i) }));
	}

	render() {
		return (
			<div className = "container-fluid">

				<h1>
					About Me
				</h1>

				< AboutInfo elem={this.state.counter}/>

				<p>
					Check out my
					<button className="btnText">
						<a onClick={this.incr_count}>
							&nbsp;About Me&nbsp;
						</a>
					</button>

					page for more info!
				</p>

			</div>
		);
	}
}
export default About;
