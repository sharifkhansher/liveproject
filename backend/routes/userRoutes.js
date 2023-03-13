const express = require('express');
const router = express.Router();

router.use(express.json())


const {getuser,setUsers,updateuser,deleteuser,loginserver}=require('../controllers/usercontrollers')
router.get('/',getuser)
router.post('/',setUsers)
router.put('/:_id',updateuser)
router.delete('/:_id',deleteuser)
router.post("/login",loginserver)
// Router.get('/id',getfindById)
// routes.use(express.json())

// Router.route('/').get(getuser).post(setUsers)
// Router.route('/:id').delete(deleteuser).put(updateuser)


module.exports = router;