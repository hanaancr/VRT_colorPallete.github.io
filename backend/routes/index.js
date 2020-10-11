var express = require('express');
var router = express.Router();
const { exec } = require("child_process");

/*exec("./Bash/GenerateImages.sh", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});*/
/*
exec("./Bash/CompareResemblejs.sh", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });*/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' });
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

 /*GET New User page. */
router.get('/index', function(req, res) {
    res.render('index', { title: 'Trigger' });
    console.log('debug', ' Lanzar Trigger')
    exec("dir", (error, stdout, stderr) => {
        
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
});

/* POST para ejecutar scrpts */
router.post('/index', function(req, res) {
    
    console.log('debug', ' Procesando generación de imagenes')
    exec("./Bash/Trigger.sh", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }

        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }

        
        console.log(`stdout: ${stdout}`);
       

        var fs = require('fs');

        try {
            fs.statSync('screenshots/pallete.js/image -- compare (1).png');
            console.log('file or directory exists');
            res.location('http://localhost:3000');
            return res.end('Uploaded successfuly');

        }
        catch (err) {
        if (err.code === 'ENOENT') {
            console.log('file or directory does not exist');
            res.redirect('http://localhost:3000');
        }


        }
        
        
    });
   
});

module.exports = router;
