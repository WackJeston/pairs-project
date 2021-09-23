//---------------------------------------
//  Map - Contact Page
//---------------------------------------

var mymap = L.map('mapid').setView([52.6472, 1.2644], 12);
var marker = L.marker([52.6472, 1.2644]).addTo(mymap);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoid2Fja2plc3RvbiIsImEiOiJja3R2YTAybTYyN3V0MnlwbnowMWtvcmhmIn0.Hxky3AFvfzj00EvflsFFZw'
}).addTo(mymap);
