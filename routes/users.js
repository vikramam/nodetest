var sql = require("mssql");
const express = require('express');
const router = express.Router();
const quotes = require('../services/quotes');
const config = require ('../config');

/* GET quotes listing. */
router.get('/', async function(req, res, next) {
  try {
    sql.connect(config.db, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from usertable', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
  } catch (err) {
    console.error(`Error while getting quotes `, err.message);
    res.status(err.statusCode || 500).json({'message': err.message});
  }
});


module.exports = router;
