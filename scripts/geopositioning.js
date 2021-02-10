window.onload = function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(OnSucces, OnError, {
            enableHighAccuracy: true,
            maximumAge: 1000,
            timeout: 5000
        });
        navigator.geolocation.getCurrentPosition(OnSucces2, OnError, {
            enableHighAccuracy: true,
            maximumAge: 1000,
            timeout: 5000
        });
    }
    else {
        document.getElementById(map).innerHTML = "No support for geolocation service, we cannot show you the map";
    }

    function OnSucces2(position) {
        showMap(position.coords.latitude, position.coords.longitude);
    };
    function OnSucces(position) {
        showMap2(position.coords.latitude, position.coords.longitude);
    };

    function OnError(error) {
        var mapDiv = document.getElementById ("map");
        switch (error.code) {
            case error.PERMISSION_DENIED:
                mapDiv.innerHTML = "User denied the request for Geolocation."
                break;
            case error.POSITION_UNAVAILABLE:
                mapDiv.innerHTML = "Location information is unavailable."
                break;
            case error.TIMEOUT:
                mapDiv.innerHTML = "The request to get user location timed out."
                break;
            case error.UNKNOWN_ERROR:
                mapDiv.innerHTML = "An unknown error occurred."
                break;
        }
    };

    function showMap (lat, lang) {
        var directionsService = new google.maps.DirectionsService();
        var directionsRenderer = new google.maps.DirectionsRenderer();
        
        var route = {
            origin: new google.maps.LatLng(lat, lang),
            destination: "Singapore Polytechnic, Singapore",
            travelMode: google.maps.DirectionsTravelMode.DRIVING
        };
        
        var mapoptions = {
            zoom: 13,
            center: new google.maps.LatLng(1.308953, 103.779656),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        
        var map = new google.maps.Map (document.getElementById ("map"), mapoptions);
        directionsRenderer.setMap(map); directionsRenderer.setPanel(document.getElementById("driving-directions"));
        directionsService.route(route, function (result, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                directionsRenderer.setDirections(result);
            }
        });
    }
     function showMap2 (lat, lang) {
        var directionsService = new google.maps.DirectionsService();
        var directionsRenderer = new google.maps.DirectionsRenderer();
        
        var route = {
            origin: new google.maps.LatLng(lat, lang),
            destination: "Singapore Polytechnic, Singapore",
            travelMode: google.maps.DirectionsTravelMode.DRIVING
        };
        
        var mapoptions2 = {
            zoom: 13,
            center: new google.maps.LatLng(-3.805687, 102.277337), 
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        
        var map = new google.maps.Map (document.getElementById ("map2"), mapoptions2);
        directionsRenderer.setMap(map); directionsRenderer.setPanel(document.getElementById("driving-directions"));
        directionsService.route(route, function (result, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                directionsRenderer.setDirections(result);
            }
        });
    }
}