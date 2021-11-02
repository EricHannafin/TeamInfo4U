const express = require('express');
const router = express.Router();
const ctrlTeams = require("../controllers/teams");

router
  .route('/teams')
  .get(ctrlTeams.locationsListByDistance)
  .post(ctrlTeams.locationsCreate);

router
  .route('/teams/:teamid')
  .get(ctrlTeams.locationsReadOne)
  .put(ctrlTeams.locationsUpdateOne)
  .delete(ctrlTeams.locationsDeleteOne);
  

module.exports = router;


  


module.exports = router;
