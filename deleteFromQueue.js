require('dotenv').load()
var iron_mq = require('iron_mq');
var imq = new iron_mq.Client();

var queue = imq.queue("test_queue");

queue.post("Hello, IronMQ!", function(error, body) {
  console.log(error, body);
});

var message_id;
queue.get({n: 1}, function(error, body) {
  console.log(error, body);
  if (error == null) {
    message_id = body.id;
  }

  queue.del(message_id, function(error, body) {
    console.log(error, body);
  });
});
