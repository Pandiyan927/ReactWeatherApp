var React=require("react");
var ReactDom=require("react-dom");
var {browserHistory, Route, Router, IndexRoute}=require('react-router');

var Home=require('./components/Home');

var NavComponent=require('./components/NavComponent');
var WeatherMain=require('./components/WeatherMain');


var MainComponent=React.createClass({
	render:function(){
		console.log("Inside Main Render");
		return(
			<div>
				<div className="container-fluid">
          <NavComponent />
          <br />
          <br />
          <br />
          {this.props.children}
				</div>
			</div>
		);
	}
});

ReactDom.render(<Router history={browserHistory}>
                    <Route path="/" component={MainComponent}>
                      <IndexRoute component={Home}/>
                      <Route path="/home" component={Home} />
                      <Route path="/weather" component={WeatherMain} />
                    </Route>
                </Router>,document.getElementById("app"));
