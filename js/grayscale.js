/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function(){ 
    $('.navbar-toggle:visible').click();
});

$('#countdown').text(" " + moment("201704151230", "YYYYMMDDhhmm").fromNow());

// Google Maps Scripts
var map = null;
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(new google.maps.LatLng(51.453642, -2.596958));
});

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(51.453642, -2.596958), // midpoint

        // Disables the default Google Maps UI components
        disableDefaultUI: false,
        scrollwheel: true,
        draggable: true,
        gestureHandling: 'cooperative', // 2 finger to zoom on mobile

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#222233"
            }, {
                "lightness": 14
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = 'img/map-marker.png';
    var glassboatLatLng = new google.maps.LatLng(51.453365, -2.592151);
    var glassboatMarker = new google.maps.Marker({
        position: glassboatLatLng,
        map: map,
        icon: image
    });
    var stgeorgesLatLng = new google.maps.LatLng(51.454003, -2.603513);
    var stgeorgesMarker = new google.maps.Marker({
        position: stgeorgesLatLng,
        map: map,
        icon: image
    });
    
    var glassboatInfo = '<div id="content" style="color:black;">'+
            '<h3 id="firstHeading" class="firstHeading">Glassboat</h3>'+
            '<div id="bodyContent">'+
            '<p><a href="https://www.google.co.uk/maps/place/GlassBoat/@51.451278,-2.5942193,16.73z/data=!4m5!3m4!1s0x0:0xe9775ee77103389b!8m2!3d51.4533634!4d-2.5921485" class="btn btn-default btn-lg">directions</a></p>'+
            '</div>'+
            '</div>';
    
    var stgeorgestInfo = '<div id="content" style="color:black;">'+
            '<h3 id="firstHeading" class="firstHeading">St Georges</h3>'+
            '<div id="bodyContent">'+
            '<p><a href="https://www.google.co.uk/maps/place/12+Great+George+St,+Bristol+BS1/@51.453747,-2.6046662,18z/data=!3m1!4b1!4m5!3m4!1s0x48718dd096d5b6e1:0x52eeeb6756452fe3!8m2!3d51.4539906!4d-2.6034413" class="btn btn-default btn-lg">directions</a></p>'+
            '</div>'+
            '</div>';
    
    var glassboatInfoWindow = new google.maps.InfoWindow({
      content: glassboatInfo
    });
    
    var stgeorgestInfoWindow = new google.maps.InfoWindow({
      content: stgeorgestInfo
    });
    
    glassboatMarker.addListener('click', function() {
        glassboatInfoWindow.open(map, glassboatMarker);
        stgeorgestInfoWindow.close();
    });

    stgeorgesMarker.addListener('click', function() {
        stgeorgestInfoWindow.open(map, stgeorgesMarker);
        glassboatInfoWindow.close();
    });
    
}
