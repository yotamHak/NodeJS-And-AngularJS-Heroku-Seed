# my-barebone-app

A barebones Node.js with AngularJS and MongoDB app.

This Application is meant to be uploaded and run on [Heroku](https://www.heroku.com/).

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

To link your database:
Go to server.js and find "mongoose.connect" inside link your mongodb Database to connect it to your app
