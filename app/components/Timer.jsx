var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
	getInitialState: function(){
		return {
			count: 0,
			timerStatus: 'stopped'
		};
	},
	componentDidUpdate: function(prevProps, prevState){
		if (this.state.timerStatus !== prevState.timerStatus) {
			switch(this.state.timerStatus){
				case 'started':
					this.handleStart();
					break;
				case 'stopped':
					this.setState({count: 0});
				case 'paused':
					clearInterval(this.timer);
					this.timer = undefined;
					break;
			}
		}
	},
	handleStart: function(){
		this.timer = setInterval(() => {
			this.setState({
				count: this.state.count + 1
			});	
		}, 1000);
	},
	componentWillUnmount: function(){
		clearInterval(this.timer);
		this.timer = undefined;
	},
	// startTimer: function(){
	// 	this.timer = setInterval(() => {
	// 		var newCount = 
	// 		this.setState({
	// 			count: newCount >= 0 ? newCount : 0
	// 		});	
	// 	});
	// },
	// handleSetTimer: function(seconds){
	// 	this.setState({
	// 		count: seconds,
	// 		timerStatus: 'started'
	// 	});
	// },
	// handleStatusChange: function(newStatus){
	// 	this.setState({timerStatus: newStatus});
	// },
	handleStatusChange: function(newTimerStatus){
		console.log(newTimerStatus);
		this.setState({timerStatus: newTimerStatus});
	},
	render: function (){
		var {count, timerStatus} = this.state;
		// var renderControlArea = () =>{
		// 	if (timerStatus !== 'stopped') {
		// 		return <Controls timerStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
		// 	} else {

		// 	}
		// };

		return(
			<div>
				<h1 className="page-title">Timer Clock</h1>
				<Clock totalSeconds={count}/>
				<Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
			</div>
		);
		// return(
		// 	<p>Timer component</p>
		// );
	}
});

module.exports = Timer;