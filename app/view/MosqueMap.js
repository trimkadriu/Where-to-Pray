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
                useCurrentLocation: false
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
        GeoLocation.getCurrentPosition(function(geoLocation) {
            var lat = geoLocation.coords.latitude, lng = geoLocation.coords.longitude;

            // SET USERS GEOLOCATION POSITION
            // ============================================
            var position = new google.maps.LatLng(lat, lng);
            mapOptions.center = position;
            mapOptions.zoom = 18;
            mapCmp.setMapOptions(mapOptions);

            // CIRCLE ON AREA
            // ============================================
            var circleOptions = records[0].data.circleOptions;
            circleOptions.center = position;
            circleOptions.radius = geoLocation.coords.accuracy;
            circleOptions.map = map;
            var userGeoLocationCircle = new google.maps.Circle(circleOptions);
        });
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