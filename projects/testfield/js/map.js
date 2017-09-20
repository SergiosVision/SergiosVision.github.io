function myMap() {
    var myCenter = new google.maps.LatLng(41.878413, -87.630061);
    var mapProp = {center:myCenter, zoom:15, scrollwheel:false, draggable:true, mapTypeId:google.maps.MapTypeId.ROADMAP};
    var map = new google.maps.Map(document.getElementById("id"),mapProp);
    var marker = new google.maps.Marker({position:myCenter});
    marker.setMap(map);
}