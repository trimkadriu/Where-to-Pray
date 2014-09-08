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
                flex: 2,
                useCurrentLocation: true
            }
        ]
    },

    initialize: function() {
        Ext.getStore('MosqueMapStyle').on('load', this.mapInitialize, this);
    },

    mapInitialize: function(self, records) {
        var mapCmp = Ext.getCmp('myMosqueMap');
        var options = records[0].data.options;

        // GEOLOCATION - POSITION
        // ============================================
        var lat = GeoLocation.getLatitude(), lng = GeoLocation.getLongitude();
        console.log(lat + '--' + lng);
        if(lat != null && lng != null) {
            // Users geolocation position
            var position = new google.maps.LatLng(-33.867139, 151.207114);
            options.center = position;

            // CIRCLE ON AREA
            // ============================================
            var positionCircle = new google.maps.Circle ({
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0.35,
                map: mapCmp.getMap(),
                center: position,
                radius: 50
            });
        }
        else {
            Ext.Msg.alert('Gabim!', 'Lokacioni juaj nuk mund te gjindet. Ju lutem kontrollone pajisjen tuaj per sherbimin e lokacionit.', Ext.emptyFn);
        }

        // MARKERS
        // ============================================
        var marker = new google.maps.Marker({
            position: options.center,
            map: mapCmp.getMap(),
            title: 'Hello World!'
        });

        // MAP OPTIONS & STYLES
        // ============================================
        mapCmp.setMapOptions(options);
    }
});