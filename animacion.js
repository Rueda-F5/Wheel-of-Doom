var option = {
	speed : 5,
	duration : 3,
	stopImageNumber : -1,
	startCallback : function() {
		console.log('start');
	},
	slowDownCallback : function() {
		console.log('slowDown');
	},
	stopCallback : function($stopElm) {
		console.log('stop');
	}
}
$('div.roulette').roulette(option);	