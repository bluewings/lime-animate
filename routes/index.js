var express = require('express');
var router = express.Router();


function printIndex(req, res) {

    res.render('index', {
        title: 'Your Title',
        stylesheets: ['/stylesheets/style.css'],
        javascripts: [
            '/javascripts/limeNote.js'
        ]
    });
}

/* GET home page. */
router.get('/', function(req, res) {
  
  printIndex(req, res);
});

router.get('/view/:id', function(req, res) {
  
  printIndex(req, res);
});

/* GET templates. */
router.get('/templates/:id', function (req, res) {
    res.render('templates/' + req.params.id);
});


module.exports = router;
