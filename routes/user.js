
/*
 * GET users listing.
 */

var username, password, firstname,lastname,dod,gender;

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
	username = req.param("username");
	password = req.param("password");
	firstname = req.param("firstname");
	lastname = req.param("lastname");
	dob = req.param("dob");
	gender = req.param("gender");
	login(req,res);
};


var loginValidate = function(req,res){
	
	console.log(username+ " "+ password);

	if(username === req.param("username") && password === req.param("password")){
		res.render("success", {
			username:username,
			firstname: firstname,
			lastname:lastname,
			dob:dob,
			gender:gender
			
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