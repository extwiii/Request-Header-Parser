module.exports = function(app){
	app.get('/',function(req,res){
		var ip = req.headers['x-forwarded-for'] || 
     			 req.connection.remoteAddress || 
    			 req.socket.remoteAddress ||
				 req.connection.socket.remoteAddress;
		var language = req.headers["accept-language"].split(',')[0];
		var user = req.headers['user-agent'].split(') ')[0].split(' (')[1];

		var info ={
			'ipaddress' : ip,
			'language' : language,
			'software' : user
		}
		res.send(info);

	})
}
