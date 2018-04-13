
function initMap() {

	var locations = {
		// GUATEMALA
		// ========================
		'guatemala': 
			{ mapZoom: 10,
				itemToFocus: 1,
				items: [{
					type: 'festivals',
					pos: {lat: 14.63739, lng: -90.67967},
					title: 'Santiago Sacatepéquez/Sumpango, Guatemala - November 1st',
					desc: 'Heard of Mexico’s famous Day of the Dead festival? You might be surprised to find out that it’s celebrated in Guatemala too. In the municipalities of Santiago Sacatepéquez and Sumpango, the locals honour the day by flying giant multi-coloured kites – some as big as 19 metres wide!',
					image: 'assets/media/guatemala/map-item-1.png'
				},
				{
					type: 'eat',
					pos: {lat: 14.55123, lng: -90.73399},
					title: 'Meson Panza Verde, Antigua',
					desc: 'This award-winning restaurant offers classic dishes from around the world. Popular among both locals and travellers, its known for its live music and beautiful historic architecture.',
					image: 'assets/media/guatemala/map-item-2.png'
				},
				{
					type: 'wifi',
					pos: {lat: 14.71671, lng: -91.13097},
					title: 'Casa Palopó, Lake Atitlán',
					desc: 'A small but charming hotel/restaurant with great Wi-Fi. Look forward to excellent food, a luxurious outdoor bath, and incredible views of the lake and surrounding mountains.',
					image: 'assets/media/guatemala/map-item-3.png'
				}]
			},
			
			
			
		// SWEDEN
		// ========================

		'sweden': 
			{ mapZoom: 4,
				itemToFocus: 1,
				items: [{
					type: 'festivals',
					pos: {lat: 57.68579, lng: 11.93441},
					title: 'Slottsskogen park, Gothenburg',
					desc: 'Sweden is known for its eclectic music scene, and Way Out West is one of its most popular events. This three-day festival features rock, pop, urban and electro music, and is held in Gothenburg’s attractive Slottsskogen park.',
					image: 'assets/media/sweden/map-item-1.png'
				},
				{
					type: 'eat',
					pos: {lat: 59.33373, lng: 18.08107},
					title: 'Gastrologik, Stockholm',
					desc: 'If you want an authentic taste of Sweden, then Gastrologik’s no-advance-menu establishment is for you. Their seasonally-inspired dishes can change daily depending on the produce, so each visit and instagrammed dish could be a one-off.',
					image: 'assets/media/sweden/map-item-2.png'
				},
				{
					type: 'wifi',
					pos: {lat: 66.13215, lng: 20.78331},
					title: 'Logger’s Lodge, Lapland',
					desc: 'If you’re visiting Lapland to see the Northern Lights, this cosy, eco-friendly lodge is a must-stay. The clear, unpolluted sky is perfect for watching the light show. And there’s even a sauna and outdoor jacuzzi to unwind in after a day’s trekking or skiing.',
					image: 'assets/media/sweden/map-item-3.png'
				}]
			},
			
			
			
			
		// Ethiopia
		// ========================

		'ethiopia': 
			{ mapZoom: 7,
				itemToFocus: 0,
				items: [{
					type: 'festivals',
					pos: {lat: 9.01024, lng: 38.76135},
					title: 'Meskel Festival, Meskel Square, Addis Ababa',
					desc: 'Meskel is one of Ethiopia’s most important religious festivals, but you don’t have to be a believer to attend it. Head to Meskel square in Ethiopia’s capital city to see colourful processions and a bonfire of epic proportions.',
					image: 'assets/media/ethiopia/map-item-1.png'
				},
				{
					type: 'wifi',
					pos: {lat: 6.71486, lng: 39.72524},
					title: 'Bale Mountain Lodge, National Park',
					desc: 'Located in one of Ethiopia’s National Parks, Bale Mountain Lodge offers traditional Ethiopian food, Rift Valley wine, stable Wi-Fi, and a cosy night’s stay that’s close to nature. The nearby wilderness is home to some of the planet’s rarest animals, including the enigmatic Ethiopian Wolf.<br /><br />After your Ethiopian safari, you could head down to Madagascar to sample further natural wonders. For a walk to remember, visit the Avenue of the Baobabs, where rare trees look like wine bottles and the sunsets are spectacular.',
					image: 'assets/media/ethiopia/map-item-2.png'
				}]
			},
			
			
			
		// HONDURAS
		// ========================

		'honduras': 
			{ mapZoom: 9,
				itemToFocus: 0,
				items: [{
					type: 'festivals',
					pos: {lat: 15.77028, lng: -86.7919},
					title: 'La Ceiba Carnival, La Ceiba, March/April',
					desc: 'La Ceiba Carnival is Honduras’s biggest event – a bustling street festival that attracts thousands of revellers. The festivities take place over a week, with some neighbourhoods hosting their own mini-carnivals. Look forward to music, floats, horse riders, colourfully costumed dancers, and lots of bead-collecting!',
					image: 'assets/media/honduras/map-item-1.png'
				},
				{
					type: 'eat',
					pos: {lat: 16.42961, lng: -86.2876},
					title: 'La Sirena, Roatán',
					desc: 'Located on a small pier above cloudless waters, La Sirena is a secluded getaway on an already secluded island. Feast on fresh seafood and sip some of the island’s best rum punch as you take in the tranquil ocean view.<br /><br />If it’s an even more secluded spot you’re after, then drift to the Ecuadorian isles of the Galapagos for solitary shores filled with giant lizards and sea tortoises.',
					image: 'assets/media/honduras/map-item-2.png'
				},
				{
					type: 'wifi',
					pos: {lat: 15.72848, lng: -86.73359},
					title: 'La Villa de Soledad, La Ceiba',
					desc: 'Nestled among the mountains of La Ceiba – and with fast Wi-Fi by all accounts – this relaxing hotel lets you experience the sights and sounds of the jungle and upload it all afterwards. Chill your heart out in the hammock area while keeping your eyes peeled for toucans flying nearby. And when you feel like adventuring, it’s a five-minute walk to the Cangrejal river.',
					image: 'assets/media/honduras/map-item-3.png'
				}]
			},
			
			
			
			
		// INDONESIA
		// ========================

		'indonesia': 
			{ mapZoom: 7,
				itemToFocus: 0,
				items: [{
					type: 'festivals',
					pos: {lat: -8.40951, lng: 115.18891},
					title: 'Bali Arts Festival – Bali, June-July',
					desc: 'This month-long festival showcases Bali’s unique arts and culture scene. Featuring dance, music theatre and crafts, the festival showcases groups from around the island who give their all to make their villages proud.<br /><br />For another taste of magnificent island pride, visit Papua New Guinea for its world-renowned Goroka festival. It’s a 4-day extravaganza of tribal arts and tradition with dramatic dancing and feather headdresses included.',
					image: 'assets/media/indonesia/map-item-1.png'
				},
				{
					type: 'eat',
					pos: {lat: -7.60706, lng: 110.19007},
					title: 'Patio Restaurant, Plataran Borobudur hotel',
					desc: 'After visiting the Borubudur temple, stop off at the Plataran hotel for a bite to eat. This unique location lets you enjoy views of the temple and nearby jungle as you savour Indonesian and international dishes.',
					image: 'assets/media/indonesia/map-item-2.png'
				},
				{
					type: 'wifi',
					pos: {lat: -8.41279, lng: 115.23889},
					title: 'Hanging Gardens of Bali, Payangan',
					desc: 'When you really want to get away from it all, why not go and stay in the jungle? Situated by the Ayung River and Dalem Segara temple, this Balinese resort features charming thatched roofs and tropical gardens. Get an epic selfie in front of the jungle backdrop in the infinity pool (but don’t drop your phone).',
					image: 'assets/media/indonesia/map-item-3.png'
				}]
			},
			
			
			
			
		// JAPAN
		// ========================

		'japan': 
			{ mapZoom: 14,
				itemToFocus: 0,
				items: [{
					type: 'eat',
					pos: {lat: 35.67797, lng: 139.73727},
					title: 'Ninja Akasaka, Tokyo',
					desc: 'Looking for a kick-ass restaurant? This ninja-themed eatery is complete with dungeons, trap doors and shuriken-shaped bread. Traditional Japanese food is on the menu, along with a magic show that’s performed right at your table.',
					image: 'assets/media/japan/map-item-1.png'
				},
				{
					type: 'wifi',
					pos: {lat: 35.67479, lng: 139.7603},
					title: 'The Peninsula, Tokyo',
					desc: 'Experience the height of Japanese hospitality in the luxurious Peninsula Hotel. At 24 storeys high, its rooftop restaurant offers up unbeatable views of the city. Visit the nearby Imperial Palace Gardens and Hibiya Park or simply view them from above, while you enjoy the indoor heated pool.<br /><br />“But, how do you top the Tokyo views?” I hear you ask. Well, when it comes to rivalling the city’s metropolitan skyline, New York is perhaps the only real contender. Except for Shanghai that is, which is looking to the future with space-age towers.',
					image: 'assets/media/japan/map-item-2.png'
				},
				{
					type: 'eat',
					pos: {lat: 35.68537, lng: 139.69097},
					title: 'New York Bar, Tokyo',
					desc: 'This sophisticated skyscraper bar gives you fantastic panoramas of the city, complete with delicious cocktails and relaxing ambience. You might recognise the place from a certain Bill Murray movie starring Scarlett Johansson, too.',
					image: 'assets/media/japan/map-item-3.png'
				}]
			},
			
			
			
			
		// SINGAPORE
		// ========================

		'singapore': 
			{ mapZoom: 12,
				itemToFocus: 1,
				items: [{
					type: 'festivals',
					pos: {lat: 1.35208, lng: 103.81983},
					title: 'Chinese New Year, Chingay Parade',
					desc: 'In Singapore, Chinese New Year celebrations centre on the Chingay Parade – the largest street performance and float parade in Asia. Look forward to decorated floats, dragon and lion dances, martial artists, street opera and more.',
					image: 'assets/media/singapore/map-item-1.png'
				},
				{
					type: 'eat',
					pos: {lat: 1.30663, lng: 103.84946},
					title: 'Little India',
					desc: 'Singapore’s Little India is a foodie’s paradise – a vibrant market district where you can taste the authentic flavours of an entire subcontinent. Tuck into fresh food from all around India and Asia, then pick up a bargain in the local market stalls.',
					image: 'assets/media/singapore/map-item-2.png'
				},
				{
					type: 'wifi',
					pos: {lat: 1.28315, lng: 103.86004},
					title: 'Marina Bay Sands',
					desc: 'The Marina Bay Sands hotel features the world’s highest and largest infinity pool, a.k.a the star of a million Facebook profile pictures. It feels strange lying on a sun-lounger in the middle of a bustling metropolis, but the views make this a picture-perfect place to relax.<br /><br />If you’ve got a head for heights, skyscraper-central Hong Kong is the natural next step. Head to Victoria Peak on the west of the island for spectacular views of the city.',
					image: 'assets/media/singapore/map-item-3.png'
				}]
			},
			
			
			
			
		// SOUTH KOREA
		// ========================

		'south-korea': 
			{ mapZoom: 7,
				itemToFocus: 1,
				items: [{
					type: 'festivals',
					pos: {lat: 36.00681, lng: 127.66078},
					title: 'Muju Firefly Festival, Muju-gun',
					desc: 'From late August to early September, you can witness a delicate nature display as crowds of fireflies light up the night sky at the Muju Firefly Festival. Set in the insects’ natural habitat in Muju, the festival also hosts numerous arts performances and the release of the wonderfully named “Flying Balloons of Hope” into the night sky.',
					image: 'assets/media/south-korea/map-item-1.png'
				},
				{
					type: 'eat',
					pos: {lat: 37.57015, lng: 126.99934},
					title: 'Kwangjang market, Seoul',
					desc: 'Buzzing with nocturnal activity, if you’re looking for a late bite then head to Gwangjang Night Market, the oldest in Seoul. But brave be the traveller who takes on the spiciest end of South Korean cuisine. Known for its bold flavours – scandalously hot and beautifully sweet sauces – these dishes knock your socks, gloves and hat off.<br /><br />For the night-owl in you, make your next stop Macau, China. Known as the ‘Las Vegas of Asia’, its throng of bright lights, casinos and shopping plazas won’t disappoint fans of the all-nighter.',
					image: 'assets/media/south-korea/map-item-2.png'
				},
				{
					type: 'wifi',
					pos: {lat: 37.58011, lng: 126.98605},
					title: 'Rakkojae, Seoul',
					desc: 'Those in search of a regal night’s sleep and a good Wi-Fi connection can find their way to Rakkojae. This hanok – a traditional Korean house – is furnished with neat patio gardens, a lotus pond and mud-sauna.',
					image: 'assets/media/south-korea/map-item-3.png'
				}]
			},
			
			
			
			
		// SRI LANKA
		// ========================

		'sri-lanka': 
			{ mapZoom: 9,
				itemToFocus: 0,
				items: [{
					type: 'festivals',
					pos: {lat: 7.29314, lng: 80.64082},
					title: 'Kandy Esala Perahera',
					desc: 'Every year, thousands flock to Kandy for the Esala Perahera festival. This 10-day event pays tribute to Buddha’s Sacred Tooth Relic, and its origins can be traced back to 300AD. It’s known for its street processions featuring musicians, dancers, acrobats, fire-eaters and costumed elephants.',
					image: 'assets/media/sri-lanka/map-item-1.png'
				},
				{
					type: 'eat',
					pos: {lat: 6.83209, lng: 79.86216},
					title: 'Seafood Cove, Mt Lavinia, Colombo',
					desc: 'This restaurant combines two of the greatest things that Sri Lanka has to offer – exquisite beaches and sumptuous seafood. Enjoy fresh fish, lobster or prawns while sat under a rustic thatched gazebo, with waves crashing just a few feet away.',
					image: 'assets/media/sri-lanka/map-item-2.png'
				},
				{
					type: 'wifi',
					pos: {lat: 7.87105, lng: 80.70784},
					title: 'Heritance Kandalama Hotel',
					desc: 'Kandalama might just be the most photogenic hotel ever. As well as having an infinity pool, it overlooks nearby elephant plains and the enigmatic Sigiriya rock. It’s located in the jungle, so don’t be surprised if you wake up to a monkey chilling on your balcony. Alternatively, venture north to the mind-bending mountains of Pakistan to get even closer to nature, and camp out beside the turquoise lake of Attabad for a picture-perfect view you’ll never forget.',
					image: 'assets/media/sri-lanka/map-item-3.png'
				}]
			},
			
			
			
			
		// AUSTRALIA
		// ========================

		'australia': 
			{ mapZoom: 4,
				itemToFocus: 0,
				items: [{
					type: 'wifi',
					pos: {lat: -31.95082, lng: 115.83667},
					title: 'Tribe hotel, Perth',
					desc: 'With its funky colours and sleek modern stylings, Tribe Perth is ideal for travellers who want something diferent. In addition to the innovative furnishings, USB charging ports and free, unlimited Wi-Fi, the rooms have wall-sized windows that give you dizzying views of the green surroundings.',
					image: 'assets/media/australia/map-item-1.png'
				},
				{
					type: 'eat',
					pos: {lat: -33.89069, lng: 151.2828},
					title: 'Speedos Café, Bondi',
					desc: 'A stone’s throw from surfer hangout Bondi Beach, the aptly named Speedos Café is a lively spot, serving up a menu of multi-coloured creations. The best part is, they offer something for everyone, from raw food vegans to the burger-and-pancakes crowd.',
					image: 'assets/media/australia/map-item-2.png'
				}]
			}

		};
		
		
		
		
	var mapStyle = [
	  {
	    "featureType": "administrative.land_parcel",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  },
	  {
	    "featureType": "administrative.neighborhood",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  },
	  {
	    "featureType": "poi",
	    "elementType": "labels.text",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  },
	  {
	    "featureType": "poi.business",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  },
	  {
	    "featureType": "road",
	    "elementType": "labels",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  },
	  {
	    "featureType": "road",
	    "elementType": "labels.icon",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  },
	  {
	    "featureType": "road.arterial",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  },
	  {
	    "featureType": "road.highway",
	    "elementType": "labels",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  },
	  {
	    "featureType": "road.local",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  },
	  {
	    "featureType": "transit",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  },
	  {
	    "featureType": "water",
	    "elementType": "labels.text",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  }
	];
	
	
	


	function closeMapItem() {
		if (isInfoWindowOpen) {
			for (y in infoWindowList) {
		    var iw = infoWindowList[y];
		    iw.close();
	    }
	    
	    $('.map__blue-popup-wrapper').fadeIn(250);
	    
	    map.panTo(getJSONMarkers()[locations[mapName].itemToFocus].pos);
	    map.setZoom(locations[mapName].mapZoom);
	    
	    isInfoWindowOpen = false;
	  }
    
	}
		
		
		
	function getJSONMarkers() {
		var markers = locations[mapName].items;
    return markers;
  }
  
  function getIcon(type) {
	  var iconURL = 'assets/img/map-legend-wifi.svg';
	  
	  switch (type) {
		  case "wifi": iconURL = 'assets/img/map-legend-wifi.svg'; break;
		  case "eat": iconURL = 'assets/img/map-legend-eat.svg'; break;
		  case "festivals": iconURL = 'assets/img/map-legend-festivals.svg'; break;
	  }
	  var icon = {
        scaledSize: new google.maps.Size(27, 27),
        origin: new google.maps.Point(0,0), // origin
				anchor: new google.maps.Point(0, 0), // anchor
        url: iconURL
      }
	  
	  return icon;
  }



	var url = window.location.pathname;
	var filename = url.substring(url.lastIndexOf('/')+1);
	var mapName  = filename.slice(0, -5);
	
	
	
	
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: locations[mapName].mapZoom,
    center: getJSONMarkers()[locations[mapName].itemToFocus].pos,
    styles: mapStyle
  });
	
	
	
	var infoWindowList = [];
	var isInfoWindowOpen = false;
	

	getJSONMarkers().forEach(function (item) {
		
		
		var content = 
		 							'<div class="iw-icon" style="background-image: url(assets/img/map-legend-'+ item.type + '.svg);"></div>'+
		 							'<div id="iw-container">' +
										
		 								'<div class="iw-image" style="background-image: url('+ item.image + ');"></div>'+
                    '<div class="iw-title">'+ item.title + '</div>' +
                    '<div class="iw-content">' +
                      '<p>'+ item.desc + '</p>' +
                    '</div>' +
                  '</div>';
		
  	
    var marker = new google.maps.Marker({
      map: map,
      position: new google.maps.LatLng(item.pos.lat, item.pos.lng),
      icon: getIcon(item.type)
    })
    
    var infoWindow = new google.maps.InfoWindow({
    	content: content,
    	marker: marker,
    	maxWidth: 300
  	});
  	
  	infoWindowList.push(infoWindow);
  	
    marker.addListener('click', function() {
	    for (y in infoWindowList) {
		    var iw = infoWindowList[y];
	    	if (iw != infoWindow) {
		    	iw.close();
		    	isInfoWindowOpen = false;
	    	}
    	}
    
    	infoWindow.open(map, marker);
    	isInfoWindowOpen = true;
    	$('.map__blue-popup-wrapper').fadeOut(250);
  	});
  	
  	google.maps.event.addListener(infoWindow, 'domready', function() {
	
	    // Reference to the DIV that wraps the bottom of infowindow
	    var iwOuter = $('.gm-style-iw');
	
	    /* Since this div is in a position prior to .gm-div style-iw.
	     * We use jQuery and create a iwBackground variable,
	     * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
	    */
	    var iwBackground = iwOuter.prev();
	    
	    // Hide Shadow
	    iwBackground.children(':nth-child(1)').css({'display' : 'none'});
	
	    // Removes background shadow DIV
	    iwBackground.children(':nth-child(2)').css({'display' : 'none'});
	
	    // Removes white background DIV
	    iwBackground.children(':nth-child(4)').css({'display' : 'none'});
	

	    // Changes the desired tail shadow color.
	    iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'none', 'z-index' : '1'});
	
	    // Reference to the div that groups the close button elements.
	    var iwCloseBtn = iwOuter.next();
	
	    // Apply the desired effect to the close button
	    iwCloseBtn.hide();
	    	
	    // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
	    if($('.iw-content').height() < 140){
	      $('.iw-bottom-gradient').css({display: 'none'});
	    }
	    
	    iwOuter.parent().click(function () {
		    closeMapItem();
	    })
	
	  });
  	
  });

  
  google.maps.event.addListener(map, 'click', function() {
    closeMapItem();
  });
  


}