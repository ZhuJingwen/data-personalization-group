
var foodData= [
{
	"name":"beer",
	"price":"0.55",
	"unit":"can",
	"img":"beer"
},{
	"name":"rice",
	"price":"0.17",
	"unit":"pound",
	"img":"rice"
},{
	"name":"bread",
	"price":"0.22",
	"unit":"pound",
	"img":"bread"
},{
	"name":"eggs",
	"price":"0.45",
	"unit":"dozen",
	"img":"egg"
},{
	"name":"apples",
	"price":"0.4",
	"unit":"pound",
	"img":"apple"
},{
	"name":"egg plants",
	"price":"0.19",
	"unit":"pound",
	"img":"eggplant"
},{
	"name":"chicken",
	"price":"0.49",
	"unit":"pound",
	"img":"chicken"
},{
	"name":"fish",
	"price":"1.77",
	"unit":"pound",
	"img":"fish"
},{
	"name":"milk",
	"price":"1.18",
	"unit":"gallon",
	"img":"milk"
},{
	"name":"tea",
	"price":"0.99",
	"unit":"ounce",
	"img":"tea"
},{
	"name":"soft drinks",
	"price":"0.21",
	"unit":"can",
	"img":"softdrink"
},{
	"name":"mutton",
	"price":"1.35",
	"unit":"pound",
	"img":"meat"
}]

jQuery(document).ready(function($){
	//open-close submenu on mobile
	$('.cd-main-nav').on('click', function(event){
		if($(event.target).is('.cd-main-nav')) $(this).children('ul').toggleClass('is-visible');
	});
	     
	      $('#input-search').keypress(function(e) {
            // Enter pressed?
            if(e.which == 10 || e.which == 13) {
                $('html, body').animate({
                    scrollTop: $("#section-1").offset().top
                }, 1000);
            }
        });

});

window.addEventListener('onload',init());


function init(){
	drawGender();
	drawFood();
	for (var i = 0; i < foodData.length; i++) {
		var changedSlider = document.getElementById("slider-"+i);
		changedSlider.onchange=function(){
			var newValue = this.value;
			// var valueBox = document.getElementById("value-"+i);
			// valueBox.innerHTML= newValue;
			$(this).next().text(newValue);
			changeTotal();
		}
		}

}

function changeTotal(){
	var total = 0;
	for (var i = foodData.length - 1; i >= 0; i--) {
		var changeSlider = document.getElementById("slider-"+i);
		var v = parseInt(changeSlider.value);
		var p = foodData[i].price;
		total+= v*p;
	};

	var spent = parseFloat(total).toFixed(2);
	var left = parseFloat(3.2-total).toFixed(2);

	$('#spent').text("$"+spent);
	$('#left').text("$"+(left));

	if(left < 0){
		$('#left').css("color","#906363");
	}else{
		$('#left').css("color","#454545");
	}
}

function drawGender(){
	var barwidth = $("#bar").width();
	$("#female").width(barwidth*0.57*0.99);
	$("#male").width(barwidth*0.43*0.99);
	$(".barchart").height(60);
}


function drawFood(){
	for(var i=0; i<foodData.length; i++){

		var iconContainer = document.getElementById("food-chart");
		var pic = document.createElement("img");
      	pic.src = "img/"+ foodData[i].img +".svg";
      	pic.className= "icon";
      	pic.width=100;
      	var block = document.createElement("div");
      	block.className = "block col-md-4";
      	var tag = document.createElement("div");
      	tag.className = "tag";
      	var foodName = document.createElement("div");
      	foodName.innerHTML = foodData[i].name;
      	foodName.className="name";
      	var price = document.createElement("div");
      	price.className = "price";
      	price.innerHTML= "$"+foodData[i].price;
      	var unit = document.createElement("div");
      	unit.className = "unit";
      	unit.innerHTML= "per "+foodData[i].unit;
      	var sliderBar=  document.createElement("input");
      	sliderBar.setAttribute("type","range");
      	sliderBar.setAttribute("min","0");
      	sliderBar.setAttribute("max","10");
      	sliderBar.setAttribute("step","1");
      	sliderBar.setAttribute("value","0");
      	sliderBar.id="slider-"+i;
      	sliderBar.className="slider-bar";
      	var value = document.createElement("div");
      	value.id="value-"+i;
      	value.className="value";
      	value.innerHTML="0";
      	var slider = document.createElement("div");
      	slider.className="slider";
      	slider.appendChild(sliderBar);
      	slider.appendChild(value);
      tag.appendChild(foodName);
      tag.appendChild(price);
      tag.appendChild(unit);
      block.appendChild(pic);
      block.appendChild(tag);
      block.appendChild(slider);
      iconContainer.appendChild(block);
	}
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

			var cities = [{
                    svgPath: targetSVG,
                    title: "India",
                    latitude: 20,
                    longitude: 77,
                    color:"#FFF",
                    scale:1.5
                }]


var map;
var minBulletSize = 15;
var maxBulletSize = 70;
var min = Infinity;
var max = -Infinity;

var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

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
    	balloonText: "<span style='font-size:14px;'><b>[[title]]</b>: $[[value]] Billions</span>",
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

        dataProvider.images.push(cities[0]);

        map.dataProvider = dataProvider;

        map.write("mapdiv");
    });