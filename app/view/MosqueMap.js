var CUSTOM_MAPTYPE_ID = 'Custom_MosqueMapStyle';
Ext.define('KuTeFalem.view.MosqueMap', {
    extend: 'Ext.Container',
    xtype: 'mosquemap',
    id: 'mosqueMap',

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
                id: 'myMosqueMap',
                xtype: 'map',
                flex: 1,
                useCurrentLocation: true,
                mapOptions: {
                    mapTypeId: CUSTOM_MAPTYPE_ID,
                    //mapTypeId: google.maps.MapTypeId.ROADMAP,
                    zoom: 18,
                    disableDefaultUI: true,
                    center: new google.maps.LatLng(42.6503466, 21.1522471)
                }
            }
        ]
    },

    initialize: function(eOpts) {
        var map = Ext.getCmp('myMosqueMap').getMap();

        // GEOLOCATION
        // ============================================
        console.log(geoLocation.getLatitude() + '--' + geoLocation.getLongitude());

        // MARKERS
        // ============================================
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(42.6503466, 21.1522471),
            map: map,
            title: 'Hello World!'
        });

        // CIRCLE ON AREA
        // ============================================
        var positionCircle = new google.maps.Circle ({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map,
            center: new google.maps.LatLng(42.6503466, 21.1522471),
            radius: 50
        });

        // MAP STYLE
        // ============================================
        Ext.getStore('MosqueMapStyle').on('load', function(self, records) {
            var customMapType = new google.maps.StyledMapType(records[0].data.style, {name: 'MosqueMap Style'});
            map.mapTypes.set(CUSTOM_MAPTYPE_ID, customMapType);
        });
    }
});