var express = require('express');
var router = express.Router();

/* router.get('/:num1.:num2', (req, res)=>{
    res.render('test',{cal:parseInt(req.params.num1) + parseInt(req.params.num2)})
}); */
router.get('/', (req, res)=>{
    res.render('test',{})
});
router.post('/', (req, res)=>{
    res.render('testpost',{name: req.body.name, email: req.body.email})
}); 

module.exports = router;