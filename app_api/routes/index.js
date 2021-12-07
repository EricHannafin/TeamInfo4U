const express = require('express');
const router = express.Router();
const ctrlTeams = require("../controllers/teams");
const ctrlOthers = require("../controllers/others");

/* team pages */
router.get("/", ctrlTeams.login);
router.get("/register", ctrlTeams.register);
router.get("/teamInfo", ctrlTeams.teamInfo);

/* Other pages */
router.get("/about", ctrlOthers.about);

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


