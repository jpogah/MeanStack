function addServiceTime(){
  var ul = document.getElementById("servicetime");
  var day = document.getElementById("day").value;
  var time = document.getElementById("time").value;
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(day +" "+ time));
  ul.appendChild(li);
}

function getLocation() {
  var address = document.getElementById('address').value;
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode( { 'address': address}, function(results, status) {
  alert("here");
  if (status == google.maps.GeocoderStatus.OK) {
      var latitude = results[0].geometry.location.lat();
      var longitude = results[0].geometry.location.lng();
      var result = [latitude, longitude];
      console.log(result);
      var ul = document.getElementById("coords");
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(latitude));
      ul.appendChild(li);
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(longitude));
      ul.appendChild(li);
      }
  });
  document.getElementById("myform").submit();
}
