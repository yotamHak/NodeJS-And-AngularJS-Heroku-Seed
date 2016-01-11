# My NodeJS-And-AngularJS-Heroku-Seed Application

A barebones Node.js with AngularJS and MongoDB app.

This Application is meant to be deployed onto and run on [Heroku](https://www.heroku.com/).

Check it out live [Here](https://nodejs-angularjs-seed.herokuapp.com/)

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

1. Git bash at the directory.
2. Type "npm install"
3. Type "heroku local"

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Directory Layout

```
server.js					        --> server configuration file
app/                    	--> all of the source files for the application
  index.html				      --> app layout file (the main html template file of the app)
  css/           			    --> stylesheet location
    app.css					      --> default stylesheet
	bootstrap.min.css		    -->	bootstrap's css
	bootstrap-theme.min.css	--> bootstraps's theme css
  fonts/                	--> glyphicons for bootstrap
  js/                		  --> javascript files
    app.js              	--> main application module
	controllers/			      --> all controllers should be placed here
		NavbarController.js	  --> the main page controller
		View1Controller.js	  --> the controller for view1
		View2Controller.js	  --> the controller for view2
	directives/				      --> create and place directive files here
	services/				        --> create and place service files here
  lib/						        --> tools and frameworks should be placed here
  	angular/				        --> angularjs files
  		bootstrap.js		      --> bootstrap latest version (update if needed)
  		bootstrap.min.js	    -->	bootstrap latest version (update if needed)
  		jquery-1.12.0.js	    -->	jquery latest version (update if needed)
  models/					        --> create and place all model files here
  templates/				      --> all fiew files (html) should be placed here
  	main.html				        --> html template for the main page
  	view1.html				      --> html template for view1
  	view2.html				      --> html template for view2
```

## Documentation

Check out [The Wiki](https://github.com/yotamHak/NodeJS-And-AngularJS-Heroku-Seed/wiki) to get started and connect your Database.
