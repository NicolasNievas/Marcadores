var platform = new H.service.Platform({
  apikey: 'yrTagfm_lWRMTvnMV1XWrE8Phiibw7Crogd3ALQbwUc' 
});
var defaultLayers = platform.createDefaultLayers();
var map = new H.Map(
document.getElementById('mapa'),
defaultLayers.vector.normal.map,
{zoom: 15,
  center: { lat: -31.4424266, lng: -64.1958503 }
});
  
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
var ui = H.ui.UI.createDefault(map, defaultLayers);

$.ajax({
  url: 'https://localhost:7280/GetMarcadores',
  method: 'GET',
  dataType: 'json',
  success: function(response) {
    response.forEach(function(markerData) {
      var marker = new H.map.Marker({ lat: markerData.latitud, lng: markerData.longitud });
    map.addObject(marker);
    });
    var firstMarkerData = response[0];
    var initialCenter = { lat: firstMarkerData.latitud, lng: firstMarkerData.longitud };
    map.setCenter(initialCenter);               
    },
    error: function(xhr, status, error) {
      console.error('Error al obtener los marcadores:', error);
    }
   });
function cambiarZoom(nuevoZoom) {
  map.setZoom(nuevoZoom);
}  