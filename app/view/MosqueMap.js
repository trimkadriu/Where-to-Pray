Ext.define('KuTeFalem.view.MosqueMap', {
    extend: 'Ext.Container',
    xtype: 'mosquemap',
    id: 'mosqueMapView',

    requires: [
        'Ext.Map'
    ],

    config: {
        layout: {
            type: 'fit'
        },
        width: '100%',
        height: '100%',
        centered: true,
        items: [
            {
                id: 'mosqueMap',
                xtype: 'map',
                flex: 2,
                useCurrentLocation: true
            }
        ]
    },

    initialize: function() {
        Ext.getStore('MosqueMapStyle').on('load', this.initializeMap, this);
    },

    initializeMap: function(self, records) {
        var mapCmp = Ext.getCmp('mosqueMap');
        var map = mapCmp.getMap();
        var mapOptions = records[0].data.mapOptions;

        // DEFAULT MAP OPTIONS & STYLES
        // ============================================
        mapCmp.setMapOptions(mapOptions);

        // SET MOSQUE MARKERS
        // ============================================
        this.initializeMarkers(map);

        // GET GEOLOCATION - POSITION
        // ============================================
        var lat = GeoLocation.getLatitude(), lng = GeoLocation.getLongitude();
        //lat=42.6591062;lng=21.1617279; //only for simulation
        if(lat != null && lng != null) {
            // SET USERS GEOLOCATION POSITION
            // ============================================
            var position = new google.maps.LatLng(lat, lng);
            mapOptions.center = position;
            mapOptions.zoom = 18;

            // CIRCLE ON AREA
            // ============================================
            var circleOptions = records[0].data.circleOptions;
            circleOptions.center = position;
            circleOptions.map = map;
            var userGeoLocationCircle = new google.maps.Circle(circleOptions);
        }
        // GEOLOCATION IS NOT AVAILABLE !
        // ============================================
        else {
            mapCmp.on('maprender', GeoLocation.geoLocationNotAvailable);
        }
    },

    initializeMarkers: function(map) {
        // MOSQUE MARKERS
        // ============================================
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            map: map,
            title: 'Hello World!'
        });
    }
});