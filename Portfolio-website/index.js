/* SET UP YOUR MAIN VARIABLES */
var express 	= require('express'),
	config 		= require('./server/configure'),
	app 		= express(),
	environment = process.argv[2];

/* CALL THE MODULE.EXPORTS CONSTRUCTOR FUNCTION OF THE CONFIGURE FILE THIS ADDS TO APP AND RETURNS APP
THIS IS DONE SO WE DO NOT HAVE TO WRITE A BUNCH OF CODE IN OUR INDEX FILE. */
app = config(app);

/* SET THE PORT */
if (environment === undefined){
	process.env.PORT = 80;
}
else if (environment == "dev"){
	process.env.PORT = 3000;
}
app.set('port',process.env.PORT || 3000);

/* MAKE THE VIEWS DIRECTORY SO WE CAN SERVE UP THE FILES WITHIN THAT DIRECTORY */
app.set('views', __dirname + '/views');

/* LISTEN ON PORT 3000 */
app.listen(app.get('port'),function(){
	console.log('Portfolio server up...');
});