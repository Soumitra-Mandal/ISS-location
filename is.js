$.getJSON("http://api.open-notify.org/iss-now.json",function(data){
  var lat = data["iss_position"]["latitude"];
  var lon = data["iss_position"]["longitude"];
  $("body").after("<h2>Current Lattitude is: "+lat+" and Longitude is: "+lon+"</h2>");
});
