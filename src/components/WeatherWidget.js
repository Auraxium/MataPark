import React from "react";

export default class WeatherWidget extends React.PureComponent {
	render() {
		return (
			<div className={this.props.className || ""}>
				<a
					className="weatherwidget-io"
					href="https://forecast7.com/en/34d25n118d53/91330/?unit=us"
					data-label_1="CSU - NORTHRIDGE"
					data-label_2="WEATHER"
					data-font="Helvetica"
					data-icons="Climacons Animated"
					data-days="3"
					data-theme="weather_one"
				>
					CSU - NORTHRIDGE WEATHER
				</a>

				{
					!(function (d, s, id) {
						var js,
							fjs = d.getElementsByTagName(s)[0];
						// if (!d.getElementById(id)) {
						js = d.createElement(s);
						js.id = id;
						js.src = "https:weatherwidget.io/js/widget.min.js";
						fjs.parentNode.insertBefore(js, fjs);
						// }
					})(document, "script", "weatherwidget-io-js")
				}
			</div>
		);
	}
}
