const mongoose = require('mongoose');
const Team = mongoose.model('Team');


const locationsCreate = function (req, res) {
  res
.status(200)
.json({"status" : "success"});

 };
const locationsListByDistance = function (req, res) { 
  res
.status(200)
.json({"status" : "success"});

};
const locationsReadOne = function (req, res) {
  if (req.params && req.params.teamid) {  
    Team
      .findById(req.params.teamid)
      .exec((err, team) => {
        if (!team) {
          res	
            .status(404) 
            .json({	
              "message": "teamid not found"
            });	 
          return;
        } else if (err) {
          res	
            .status(404) 
            .json(err); 
          return; 	
        }
        res		
          .status(200)
          .json(team);
      });
  } else {		
    res		
      .status(404) 	
      .json({	
        "message": "No teamid in request"
      });		
  }
};

  

const locationsUpdateOne = function (req, res) { 
  res
.status(200)
.json({"status" : "success"});

};
const locationsDeleteOne = function (req, res) {
  res
.status(200)
.json({"status" : "success"});

 };

module.exports = {
  locationsListByDistance,
  locationsCreate,
  locationsReadOne,
  locationsUpdateOne,
  locationsDeleteOne
};
