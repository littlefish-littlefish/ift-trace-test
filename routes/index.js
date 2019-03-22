var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'IFT Test' });
});

/* GET New User page. */
router.get('/newtrace', function(req, res) {
  res.render('newtrace', { title: 'IFT Trace' });
});

/* POST to input lot id to trace */
router.post('/traceinput', function(req, res) {

  // Get our form values. These rely on the "name" attributes
  var lotid = req.body.lotid;
  res.redirect('trace?lotid='+lotid);
});


/* GET trace. */
router.get('/trace', function(req, res) {
  //Just for demo purpose, hard code the values here for now
  var trace1 = [{ 
    "_id"  :  "CCH0001-0001", 
    "facility_name": "Farm1",
    "facility_type": "Farm",
    "facility_address": "1 Farm Street, Gouves, Gouves, GR",
    "timestamp": "2018-03-01T10:00:00Z",
    "image": "images/farm1.png",
    "event": "Harvest tomato"
  }, {
    "_id"  :  "CCH0001-0002", 
    "facility_name": "Farm2",
    "facility_type": "Farm",
    "facility_address": "1 Farm Street, Bergamo, Lombardy, IT",
    "timestamp": "2018-03-01T11:00:00Z",
    "image": "images/farm2.png",
    "event": "Harvest tomato"
  }, {
    "_id"  :  "CCH0001-0003", 
    "facility_name": "Farm3",
    "facility_type": "Farm",
    "facility_address": "1 Farm Street, Amstelveen, Amstelveen, NL",
    "timestamp": "2018-03-01T12:00:00Z",
    "image": "images/farm3.png",
    "event": "Harvest tomato"
  }, {
    "_id"  :  "CCH0001-0004", 
    "facility_name": "Farm4",
    "facility_type": "Farm",
    "facility_address": "1 Farm Street, Fuenteheridos, Huelva, ES",
    "timestamp": "2018-03-01T13:00:00Z",
    "image": "images/farm4.png",
    "event": "Harvest tomato"
  }, {
    "_id"  :  "CCH0001-0005", 
    "facility_name": "Concentrate Plant 1",
    "facility_type": "Processing plant",
    "facility_address": "1 Main Street, Prosotsani, Prosotsani, GR",
    "timestamp": "2018-03-04T10:00:00Z",
    "image": "images/ConcentratePlant1.png",
    "event": "Produce concentrate"

  }, {
    "_id"  :  "CCH0001-0006", 
    "facility_name": "Reseller Warehouse 1",
    "facility_type": "Warehouse and or depot",
    "facility_address": "1 Main Street, Prosotsani, Prosotsani, GR",
    "timestamp": "2018-03-08T11:00:00Z",
    "image": "images/Warehouse1.png",
    "event": "Produce concentrate"
  }, {
    "_id"  :  "CCH0001-0007", 
    "facility_name": "Juice Plant 1",
    "facility_type": "Manufacturing plant",
    "facility_address": "1 Main Street, Prosotsani, Prosotsani, GR",
    "timestamp": "2018-03-11T10:00:00Z",
    "image": "images/TomatoJuicePlant1.png",
    "event": "Produce juice"
  }];

  var trace2 = [{ 
    "_id"  :  "CCH0001-0001", 
    "facility_name": "Farm3",
    "facility_type": "Farm",
    "facility_address": "1 Farm Street, Amstelveen, Amstelveen, NL",
    "timestamp": "2018-03-01T12:00:00Z",
    "image": "images/farm3.png",
    "event": "Harvest tomato"
  }, {
    "_id"  :  "CCH0001-0002", 
    "facility_name": "Farm4",
    "facility_type": "Farm",
    "facility_address": "1 Farm Street, Fuenteheridos, Huelva, ES",
    "timestamp": "2018-03-01T13:00:00Z",
    "image": "images/farm4.png",
    "event": "Harvest tomato"
  }, {
    "_id"  :  "CCH0001-0003", 
    "facility_name": "Concentrate Plant 2",
    "facility_type": "Processing plant",
    "facility_address": "1 Main Street, Zaragoza, Zaragoza, ES",
    "timestamp": "2018-03-04T12:00:00Z",
    "image": "images/ConcentratePlant2.png",
    "event": "Produce concentrate"
  }, {
    "_id"  :  "CCH0001-0004", 
    "facility_name": "Juice Plant 2",
    "facility_type": "Manufacture plant",
    "facility_address": "1 Main Street, Zaragoza, Zaragoza, ES",
    "timestamp": "2018-03-11T11:00:00Z",
    "image": "images/TomatoJuicePlant2.png",
    "event": "Produce juice"
  }];

  // get the lot id from request
  var lotid = req.query["lotid"];
  var traceresult = [];
  if (lotid === "TomatoJuice1Lx6") {
    traceresult = trace1;
  } else if (lotid === "TomatoJuice1Lx12") {
    traceresult = trace2;
  }
  //console.log('lotid:' + lotid + ', result:' + traceresult + ', length:' + traceresult.length);
  //res.json(traceresult);
  //res.render('trace', { title: lotid});
  res.render('trace', { title: 'Trace', "lotid": lotid, "traceresult": traceresult});
});

module.exports = router;
