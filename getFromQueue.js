require('dotenv').load()
var iron_mq = require('iron_mq');
// var imq = new iron_mq.Client();
var imq = new iron_mq.Client({token: process.env.IRON_TOKEN,
                             project_id: process.env.IRON_PROJECT_ID })

var queue = imq.queue("test_queue");

queue.get({n: 1}, function(error, body) {
  console.log(error, body);
});
