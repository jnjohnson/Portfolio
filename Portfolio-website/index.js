/* SET UP YOUR MAIN VARIABLES */
var express 	= require('express'),
	config 		= require('./server/configure'),
	app 		= express(),
	environment = process.argv[2];

/* CALL THE MODULE.EXPORTS CONSTRUCTOR FUNCTION OF THE CONFIGURE FILE THIS ADDS TO APP AND RETURNS APP
THIS IS DONE SO WE DO NOT HAVE TO WRITE A BUNCH OF CODE IN OUR INDEX FILE. */
app = config(app);

/* MAKE THE VIEWS DIRECTORY SO WE CAN SERVE UP THE FILES WITHIN THAT DIRECTORY */
app.set('views', __dirname + '/views');

if (environment === undefined){
	const hostname 	= 'jnjohnson.io',
		  port		= 443;

	var	https		= require('https'),
		fs 			= require('fs'),
		options		= {
			ca: 	fs.readFileSync('/etc/ssl/private/COMODO_DV_SHA-256_bundle.crt'),
			key:	fs.readFileSync('/etc/ssl/private/jnjohnson.io.key'),
			cert:	fs.readFileSync('/etc/ssl/private/jnjohnson_io.crt')
		};
	
	app.set('port', port);

	https.createServer(options, app).listen(app.get('port'), function(req, res){
		console.log('Server up: jnjohnson.io is live on port ' + app.get('port'));
	});
}
else if (environment == "dev"){
	app.set('port', 3000);

	/* LISTEN ON PORT 3000 */
	app.listen(app.get('port'),function(){
		console.log('Portfolio dev server is up on port ' + app.get('port'));
	});
}
else {
	console.log('error, ' + environment + ' is not a valid option');
}