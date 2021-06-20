const express = require("express");

const router = express.Router();

 
// const {eventsList} = require("../controllers/eventController");
const eventController = require("../controllers/eventController")



router.get("/", eventController.eventsList);

router.get("/fully",eventController.fullyRes);

router.get("/:eventId", eventController.eventDetail);




router.post("/", eventController.eventCreate);


router.delete("/:eventId", eventController.eventDelete);


router.put("/:eventId", eventController.eventUpdate);
// router.post("/", eventController.eventsCreate);




module.exports = router;