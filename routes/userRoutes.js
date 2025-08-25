const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');


router.get("/getAll",userController.listarUsuarios);
router.post("/cadastro",userController.postUser);
router.get('/teste',(req,res)=>{
    res.send('teste');
});


module.exports = router;