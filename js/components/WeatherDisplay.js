var React = require('react');

console.log("Inside weather display above react.creat class");
var WeatherDisplay = React.createClass({




	render:function(){
		return(

				<div>
				  <table className="table table-responsive table-bordered table-hover test ">
					<tbody>
					 <tr>
					  	<th className="col-md-2">Date</th>
					  	<th className="col-md-2">Min Temp in kelvin</th>
					  	<th className="col-md-2">Max Temp in kelvin</th>
					  	<th className="col-md-1">Pressure</th>
					  	<th className="col-md-1">Sea Level</th>
					  	<th className="col-md-2">Humidity</th>
					  	<th className="col-md-2">WindSpeed</th>
					  </tr>
					  <tr>
						<td className="col-md-2">{this.props.date}</td>
						<td className="col-md-2">{this.props.minTemp}</td>
						<td className="col-md-2">{this.props.maxTemp}</td>
						<td className="col-md-1">{this.props.pressure}</td>
						<td className="col-md-1">{this.props.seaLevel}</td>
						<td className="col-md-2">{this.props.humidity}</td>
						<td className="col-md-2">{this.props.windSpeed}</td>	
						</tr>
					</tbody>
				  </table>
				</div>
		);
	}
 });
module.exports = WeatherDisplay;