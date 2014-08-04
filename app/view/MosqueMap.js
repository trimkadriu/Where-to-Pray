/*
Ext.define('KuTeFalem.view.MosqueMap', {
    extend: 'Ext.Map',
    xtype: 'mosquemap',
    config: {
        width: '100%',
        height: '100%',
        centered: true,
        items: [{
                useCurrentLocation: true,
                mapOptions: {
                    zoom: 18,
                    overviewMapControl: false,
                    panControl: false,
                    rotateControl: false,
                    scaleControl: false,
                    streetViewControl: false,
                    mapTypeId : google.maps.MapTypeId.ROADMAP
                    //center: 42.6503466, 21.1522471,
                }
            }
        ]
    }
});*/

Ext.define('KuTeFalem.view.MosqueMap', {
    extend: 'Ext.Container',
    requires: ['Ext.Map'],
    xtype: 'mosquemap',

    config: {
        layout: {
            type: 'fit'
        },
        width: '100%',
        height: '100%',
        centered: true,
        items: [
            {
                xtype: 'map',
                mapOptions: {
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    zoom: 18
                },
                useCurrentLocation: true
            }
        ]
    },

    initialize: function(){
        var me = this;
        me.callParent(arguments);
        this.initMap();
    },

    initMap: function(){

        var mapPanel = this.down('map');
        var gMap = mapPanel.getMap();

        var panoramioLayer = new google.maps.panoramio.PanoramioLayer();
        panoramioLayer.setMap(gMap);

        var marker = new google.maps.Marker({
            map: gMap,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(42.6503466, 21.1522471)
        });

    }
});