// from data.js
var tableData = data;

// YOUR CODE HERE!

var ufo = data;

var filter = d3.select("#filter-btn");

filter.on("click", function() {
    d3.event.preventDefault();
    var input = d3.select('#datetime');
    var DatetimeValue = input.property('value');

    var fufo = ufo.filter(event =>event.datetime == DatetimeValue);

    
    var tbody = d3.select('tbody');
    tbody.html('');

    fufo.forEach(event => {
        var row = tbody.append('tr')
        row.append('td').text(event['datetime']);
        row.append('td').text(event['city']);
        row.append('td').text(event['state']);
        row.append('td').text(event['country']);
        row.append('td').text(event['shape']);
        row.append('td').text(event['durationMinutes']);
        row.append('td').text(event['comments']);
    });
  
});
