export default function() {
	this.route('stats', function(){
	  this.route('index', {path: '/'});
	});
}
