import React, {Component} from 'react';

export default class Waterfall extends Component{
	render() {
		return (
			<div className="waterfall">
				<div className="container">
					<h1 className="section-title">Work</h1>

					<div className="box-contain">
					{
						[1,2,3,4,5,6,7,8,9,10,11,12].map((item, index) =>
							<div className="pin" key={index}>
								<div className="box">
									<img src={ './src/assets/work-' + item + '.jpg' } />
								</div>
							</div>
						)
					}
					</div>
				</div>
			</div>
		);
	}

	waterFall() {
		console.log(11);
		let waterBox = document.querySelector(".box-contain");
		let pinArray = waterBox.querySelectorAll(".pin");

		let pinHeightArray = [];
		let length = pinArray.length;
		
		setTimeout(function() {
			for (let i = 0; i < length; i++ ) {
				let pinHeight = pinArray[i].offsetHeight;
				if (i < 3) {
					pinHeightArray[i] = pinHeight;
				} else {
					let minHeight = Math.min.apply(null, pinHeightArray);
					let minIndex = pinHeightArray.indexOf(minHeight);
					let minIndexLeft = pinArray[minIndex].offsetLeft;

					pinArray[i].style.position='absolute';
					pinArray[i].style.top = minHeight + 'px';
					pinArray[i].style.left = minIndexLeft + 'px';

					pinHeightArray[minIndex] += pinArray[i].offsetHeight; 
				}
			}

			let maxHeight = Math.max.apply(null, pinHeightArray);

			waterBox.style.height = maxHeight + 'px';
		}, 0);

	}

	componentDidMount() {
		// this.waterFall();
	}
}