function informMe(endpoint, value, callback) {
  var http = new XMLHttpRequest(); // Call the AJAX here, And get the Data
  http.open(
    "GET",
    `https://restcountries.eu/rest/v2/${endpoint}/${value}`,
    true
  );

  http.onreadystatechange = function() {
    if (http.readyState != XMLHttpRequest.DONE) {
      return;
    } else if (http.status == 200) {
      let data = JSON.parse(http.responseText);
      callback(data);
      console.log(http.responseText)
    } else {
      console.log("error occurred" + http.status);
    }
  };

//   callback(data); // Return the Data by calling callback with the resulting data

http.send();

}
// onreadystatechange should be before http.send()

informMe("capital", "Paris", function(data){

    console.log(data);

});
