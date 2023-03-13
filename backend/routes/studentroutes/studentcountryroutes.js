const express = require('express')
const router = express.Router();
router.use(express.json())

const {addcountry,getcountry,countrypost} = require('../../controllers/studentcontroller/studentcountrycontroller');

router.get('/', getcountry);
router.post('/', addcountry);
router.post('/count', countrypost);

module.exports =router;
