const express = require('express')
const router = express.Router()

const newController = require('../app/controllers/Newcontroller')
router.use('/:slug',newController.child)

router.use('/',newController.index)
newController.index
module.exports = router;