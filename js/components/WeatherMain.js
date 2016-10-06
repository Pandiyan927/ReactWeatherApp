var React = require('react');
var WeatherDisplay=require('./WeatherDisplay');

var WeatherMain = React.createClass({

  getInitialState: function()
  {
    return({weatherData:[]});
  },
  getWeatherDetails: function()
  {
  	var requiredData=[];
    //var accessToken = localStorage.getItem('gToken');
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/forecast/city?id=1264527&APPID=67f488de269d6a00067013ca5cd7318e',
      dataType: 'json',
      type: 'GET',
/*      beforeSend: function (request)
      {
        request.setRequestHeader("Authorization", "Bearer "+accessToken);
      },*/
      success: function(data)
      {
       console.log(data.list.length);
       //this.setState({weatherData:data.list});
       for(var j=0;j < data.list.length;j++){
       	//console.log(data.list[j].dt_txt)
       	requiredData.push({"date":data.list[j].dt_txt,"minTemp":data.list[j].main.temp_min,"maxTemp":data.list[j].main.temp_max, "pressure":data.list[j].main.pressure,"seaLevel":data.list[j].main.sea_level, "humidity":data.list[j].main.humidity, "windSpeed":data.list[j].wind.speed});
       }
       console.log("inside ajax of weather main");
       this.setState({weatherData:requiredData});
      }.bind(this),
      error: function(xhr, status, err) {
       console.error(err.toString());
      }.bind(this)
    });
  },

  render:function()
  {

  	var weatherDetails = this.state.weatherData.map(function(details) {
  		//console.log("inside weather main render");
  		//console.log(details.minTemp);
		return(
  			<WeatherDisplay date={details.date} minTemp={details.minTemp} maxTemp={details.maxTemp} pressure={details.pressure} seaLevel={details.seaLevel} humidity={details.humidity} windSpeed={details.windSpeed} />
		);
  	});
    return(
      <div className="WeatherMain">
        <div className="container">

       	  <h1>Weather of Chennai</h1>
          <div className="row">
            <br /><br /><br />
            <div className="col-md-2">
              <button id="authorize-button" onClick={this.getWeatherDetails} className="btn btn-primary pull-left">Click here</button>
            </div>
            <div className="col-md-10 pull-right">
              <h3 className="text-center" id="heading">Weather is displayed below</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
            	
              		{weatherDetails}
              	
            </div>
          </div>
        </div>
      </div>
    );
 }
});

module.exports = WeatherMain;
