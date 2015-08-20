  $(document).ready(function(){
     initialize_gmaps();

     $('#activity_list').css('display', 'block');

    $('#restaurant_button').on('click', function(){
      
      if($('#restaurant_list').css('display') == 'none'){
          $('.list').hide();
          $('#restaurant_list').fadeIn();
      }
      

    });

    $('#hotel_button').on('click', function(){


      if($('#hotel_list').css('display') == 'none'){
          $('.list').hide();
          $('#hotel_list').fadeIn();
      }

    });

    $('#activity_button').on('click', function(){
      if($('#activity_list').css('display') == 'none'){
          $('.list').hide();
          $('#activity_list').fadeIn();
      }

    });

    $('#bar1').on('click', function(){
      $('#bar2').css('background-color', ''); 
      $('#bar3').css('background-color', ''); 
      $('#bar4').css('background-color', ''); 

      $('#dayNum').text('Day 1');

    });

    $('#bar2').on('click', function(){
      $('#bar2').css('background-color', 'black'); 
      $('#bar3').css('background-color', ''); 
      $('#bar4').css('background-color', '');

      $('#dayNum').text('Day 2');
 
    });

    $('#bar3').on('click', function(){
      $('#bar2').css('background-color', 'black'); 
      $('#bar3').css('background-color', 'black'); 
      $('#bar4').css('background-color', ''); 
      $('#dayNum').text('Day 3');

    });

    $('#bar4').on('click', function(){
      $('#bar2').css('background-color', 'black'); 
      $('#bar3').css('background-color', 'black'); 
      $('#bar4').css('background-color', 'black'); 

      $('#dayNum').text('Day 4');

    });
  });


function initialize_gmaps() {
    // initialize new google maps LatLng object
    var myLatlng = new google.maps.LatLng(40.705189,-74.009209);

    var styles = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": "40"
            },
            {
                "gamma": "5.83"
            },
            {
                "weight": "5.05"
            },
            {
                "color": "#e6d6ab"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46c7ec"
            },
            {
                "visibility": "on"
            }
        ]
    }
  ];
    // set the map options hash
    var mapOptions = {
        center: myLatlng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles:styles
    };
    // get the maps div's HTML obj
    var map_canvas_obj = document.getElementById("map-canvas");
    // initialize a new Google Map with the options
    var map = new google.maps.Map(map_canvas_obj, mapOptions);
    // Add the marker to the map
    var marker = new google.maps.Marker({
        position: myLatlng,
        title:"Hello World!"
    });
    // Add the marker to the map by calling setMap()
    marker.setMap(map);
} 