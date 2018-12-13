var obj;
fs.readFile('./dummyData/jiras.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
});