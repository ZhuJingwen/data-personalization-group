jQuery(document).ready(function($){
	//open-close submenu on mobile
	$('.cd-main-nav').on('click', function(event){
		if($(event.target).is('.cd-main-nav')) $(this).children('ul').toggleClass('is-visible');
	});
});

window.addEventListener('onload',init());

function init(){

}

var mapData= [
      {
        "code": "CN",
        "name": "China",
        "value": 35,
        "color": "#eea638"
      },
      {
				"code": "MX",
				"name": "Mexico",
				"value": 6.1,
				"color": "#a7a737"
			}, 
			{
				"code": "IN",
				"name": "India",
				"value": 5.6,
				"color": "#eea638"
			}, 
			{
				"code": "ID",
				"name": "Indonesia",
				"value": 4.5,
				"color": "#eea638"
			}, 
			{
				"code": "VN",
				"name": "Vietnam",
				"value": 4.2,
				"color": "#eea638"
			}, 
			{
				"code": "PK",
				"name": "Pakistan",
				"value": 3.3,
				"color": "#eea638"
			}, 
			{
				"code": "BD",
				"name": "Bangladesh",
				"value": 3.2,
				"color": "#eea638"
			}, 
			{
				"code": "HN",
				"name": "Honduras",
				"value": 2.6,
				"color": "#a7a737"
			}, 
			{
				"code": "CA",
				"name": "Canada",
				"value": 2.5,
				"color": "#a7a737"
			}, 
			{
				"code": "KH",
				"name": "Cambodia",
				"value": 2.4,
				"color": "#eea638"
			}]
var latlong = {};
			latlong["CN"] = {
				"latitude": 35,
				"longitude": 105
			};
						latlong["MX"] = {
				"latitude": 23,
				"longitude": -102
			};

						latlong["IN"] = {
				"latitude": 20,
				"longitude": 77
			};
					latlong["ID"] = {
				"latitude": -5,
				"longitude": 120
			};
						latlong["VN"] = {
				"latitude": 16,
				"longitude": 106
			};
						latlong["PK"] = {
				"latitude": 30,
				"longitude": 70
			};
						latlong["BD"] = {
				"latitude": 24,
				"longitude": 90
			};
						latlong["HN"] = {
				"latitude": 15,
				"longitude": -86.5
			};
						latlong["CA"] = {
				"latitude": 54,
				"longitude": -100
			};
						latlong["KH"] = {
				"latitude": 13,
				"longitude": 105
			};


var map;
var minBulletSize = 15;
var maxBulletSize = 70;
var min = Infinity;
var max = -Infinity;

AmCharts.theme = AmCharts.themes.black;
// get min and max values
for (var i = 0; i < mapData.length; i++) {
	var value = mapData[i].value;
	if (value < min) {
		min = value;
	}
	if (value > max) {
		max = value;
	}
}
AmCharts.ready(function() {
	map = new AmCharts.AmMap();
	map.areasSettings = {
          unlistedAreasColor: "#FFFFFF",
          unlistedAreasAlpha: 0.1
        };
    map.imagesSettings = {
    	balloonText: "<span style='font-size:14px;'><b>[[title]]</b>: [[value]]</span>",
    	alpha: 0.6
    }

    var dataProvider = {
        mapVar: AmCharts.maps.worldLow,
        images: []
    }

        // create circle for each country

        // it's better to use circle square to show difference between values, not a radius
        var maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
        var minSquare = minBulletSize * minBulletSize * 2 * Math.PI;

        // create circle for each country
        for (var i = 0; i < mapData.length; i++) {
          var dataItem = mapData[i];
          var value = dataItem.value;
          // calculate size of a bubble
          var square = (value - min) / (max - min) * (maxSquare - minSquare) + minSquare;
          if (square < minSquare) {
            square = minSquare;
          }
          var size = Math.sqrt(square / (Math.PI * 2));
          var id = dataItem.code;

          dataProvider.images.push({
            type: "circle",
            width: size,
            height: size,
            color: dataItem.color,
            longitude: latlong[id].longitude,
            latitude: latlong[id].latitude,
            title: dataItem.name,
            value: value
          });
        }



        map.dataProvider = dataProvider;

        map.write("mapdiv");
    });