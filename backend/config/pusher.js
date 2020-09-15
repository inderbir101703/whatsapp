const Pusher = require('pusher');

const pusher = new Pusher({
  appId: '1073354',
  key: 'e4885250b09e35511706',
  secret: '9d4fc103474b04b4f565',
  cluster: 'ap2',
  encrypted: true
});


module.exports=pusher;