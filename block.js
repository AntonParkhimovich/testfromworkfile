var arr = [['Mushrooms', 10],
['Onions', 10],
['Olives', 10],
['Zucchini', 10],
['Pepperoni', 60]]

// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart'], 'language': 'ru'})


// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart(arr));

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
 
function drawChart() {
  let array = arr
  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows(array)

  // Set chart options
  var options = {'title':'',
                 'width':400,
                 'height':300};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
