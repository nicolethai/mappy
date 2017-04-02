var xhr = new XMLHttpRequest();
var request = xhr.open("GET", "http://open.mapquestapi.com/directions/v2/route?key=L3wJgE8ADVGtb2QWDJoe48Zi6cZ1Su4y&from=Clarendon Blvd,Arlington,VA&to=2400+S+Glebe+Rd,+Arlington,+VA
", false);
xhr.send();

var json = JSON.parse(request);

console.log(json);
