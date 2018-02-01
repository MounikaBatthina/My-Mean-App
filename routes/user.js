
/*
 * GET users listing.
 */

var username, password, firstName,lastName;

var list = function(req, res){
  res.send("respond with a resource");
};

var signup = function(req,res){
	res.render('signup');
}

var login = function(req,res){
	res.render('login');
}

var signupValidate = function(req, res){
	username = req.param("emailAddress");
	password = req.param("password");
	firstName = req.param("firstName");
	lastName = req.param("lastName");
	console.log(username+ " "+ password+" firstname: " +firstName);
	login(req,res);
};


var loginValidate = function(req,res){
	
	console.log(username+ " "+ password);

	if(username === req.param("username") && password === req.param("password")){
		res.render("success", {
			username:username,
			firstName: firstName,
			lastName:lastName
			
		});
	}
	else{
		res.render("error");
	}

};

exports.signup = signup;
exports.login = login;
exports.signupValidate = signupValidate;
exports.loginValidate = loginValidate;