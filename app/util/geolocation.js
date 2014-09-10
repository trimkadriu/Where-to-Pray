Ext.define('KuTeFalem.util.Geolocation', {
    extend: 'Ext.util.Geolocation',
    xtype: 'mosquegeolocation',

    autoUpdate: true,
    listeners: {
        locationupdate: function(geo) {
            console.log('New latitude: ' + geo.getLatitude());
        },

        locationerror: function(geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {
            if(bTimeout){
                console.log('Timeout occurred.' + message);
            } else {
                console.log('Error occurred.' + message);
            }
        }
    }
});