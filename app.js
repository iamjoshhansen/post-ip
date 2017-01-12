var ip = require('./get-ip');

console.log('The IP: ' + ip);

var url = 'http://iamjoshhansen.com/services/ip/post-ip.php',
	//url = 'http://localhost:8888/iamjoshhansen/services/ip/post-ip.php',
	data = {
		id: 'josh-mac',
		ip: ip
	};


var post = require('http-post');

post(url, data, function (res) {
	res.setEncoding('utf8');
	res.on('data', function (chunk) {
		console.log(chunk);
	});
});