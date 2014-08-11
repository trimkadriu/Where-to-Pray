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
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    zoom: 13,
                    overviewMapControl: false,
                    panControl: false,
                    rotateControl: false,
                    scaleControl: false,
                    navigationControl: false,
                    zoomControl: false,
                    mapTypeControl: false,
                    streetViewControl: false,
                    disableDefaultUI: true,
                    center: new google.maps.LatLng(42.6503466, 21.1522471)
                }
            }
        ],
        listeners: {

        }
    },

    initialize: function(eOpts) {
        map = Ext.getCmp('myMosqueMap').getMap();
        //Get GeoLocation
        console.log(geoLocation.getLatitude() + '--' + geoLocation.getLongitude());

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(42.6503466, 21.1522471),
            map: map,
            title: 'Hello World!'
        });

        //Draw circle on the user area
        positionCircle = new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map,
            radius: 100000
        });
    }
});