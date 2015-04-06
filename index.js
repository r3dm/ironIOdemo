var iron_mq = require('iron_mq');
var imq = new iron_mq.Client();

var queue = imq.queue("test_queue");

queue.post("Hello, IronMQ!", function(error, body) {
  console.log(error, body);
});
