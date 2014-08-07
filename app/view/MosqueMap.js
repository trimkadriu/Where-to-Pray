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
                    streetViewControl: false
                    //center: new google.maps.LatLng(42.6503466, 21.1522471)
                }
            }
        ]
    },

    initialize: function(eOpts) {
        var map = Ext.getCmp('myMosqueMap');
        console.log(geoLocation.getLatitude() + '--' + geoLocation.getLongitude());
    }
});