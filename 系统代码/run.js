
var exec = require('child_process').exec;
 
var child = exec('node ' + 'server/app.js', function(err, stdout, stderr) {
  if (err) throw err;
  console.log(stdout);
});
 
var child2 = exec('node ' + 'build/dev-server.js', function(err, stdout, stderr) {
  if (err) throw err;
  console.log(stdout);
});
