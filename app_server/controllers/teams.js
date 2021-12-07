const { render } = require('pug');
const request = require('request');
const apiOptions = { 
server : 'http://localhost:3000' 
}; 
if (process.env.NODE_ENV === 'production') { 
apiOptions.server = ' https://nameless-temple-65544.herokuapp.com'; 
}

const  renderRegister = function(req, res, responseBody){ 
       res.render('register-page', {
       teams: responseBody 
       });
       };

const  renderLogin = function(req, res, responseBody){ 
       res.render('login-page', {
       title: 'TeamInfo4U',
       pageHeader: {
       title: 'TeamInfo4U',
       strapline: 'Find out about your favourite teams'
       },
       teams: responseBody 
       });
       };

const  renderTeamInfo = function(req, res, responseBody){ 
       res.render('teamInfo-page', {
       title: 'TeamInfo4U',
       pageHeader: {
       title: 'TeamInfo4U',
       strapline: 'Find out about your favourite teams'
       },
       teams: responseBody 
       });
       }; 

const register = function(req, res){
       const path = '/api/teams'; 
       const requestOptions = { 
       url : apiOptions.server + path, 
       method : 'GET', 
       json : {}, 
       qs : {} 
       }; 
       request(requestOptions, (err, response, body) => { 
       renderRegister(req, res, body); 
       } 
       );
       };

const login = function(req, res){
       const path = '/api/teams'; 
       const requestOptions = { 
       url : apiOptions.server + path, 
       method : 'GET', 
       json : {}, 
       qs : {} 
       }; 
       request(requestOptions, (err, response, body) => { 
       renderLogin(req, res, body); 
       } 
       );
       };

const teamInfo = function(req, res){
       const path = '/api/teams'; 
       const requestOptions = { 
       url : apiOptions.server + path, 
       method : 'GET', 
       json : {}, 
       qs : {} 
       }; 
       request(requestOptions, (err, response, body) => { 
       renderTeamInfo(req, res, body); 
       } 
       );
       };      

module.exports = {
  login,
  register,
  teamInfo,
};
